# Setup Creatio Studio di Docker (macOS / Windows / Linux)

---

## Prerequisites

### macOS

- **Rancher Desktop** terinstall dan berjalan (container runtime: dockerd/moby)
- **Docker Compose** tersedia (`docker compose version`)

### Windows

- **Rancher Desktop** atau **Docker Desktop** terinstall dan berjalan
- **WSL2** aktif (diperlukan untuk menjalankan shell script)
- **Git for Windows** terinstall (menyertakan Git Bash)
- Semua command di bawah dijalankan via **WSL**, **Git Bash**, atau **PowerShell**

### Linux

- **Docker Engine** + **Docker Compose plugin** terinstall — tidak perlu Rancher Desktop

  ```bash
  # Ubuntu / Debian
  sudo apt update && sudo apt install -y docker.io docker-compose-plugin
  sudo usermod -aG docker $USER   # agar tidak perlu sudo setiap saat
  newgrp docker                   # aktifkan tanpa logout
  ```

  ```bash
  # Fedora / RHEL
  sudo dnf install -y docker docker-compose-plugin
  sudo systemctl enable --now docker
  sudo usermod -aG docker $USER
  ```

### Semua OS

- File binary Creatio Studio (hasil ekstrak dari installer)
- File backup database `.backup` (dari environment sebelumnya, opsional)

---

## Struktur Project

```
creatio-tf/
├── Dockerfile
├── docker-compose.yaml
├── .env                          ← secrets (jangan di-commit!)
├── .env.example                  ← template untuk developer baru
├── .gitignore
├── creatio-app/                  ← binary Creatio
│   ├── Terrasoft.WebHost.dll
│   ├── ConnectionStrings.config  ← WAJIB dikonfigurasi
│   ├── Terrasoft.WebHost.dll.config
│   └── ...
├── db-backup/
│   ├── restore.sh                ← auto-restore saat container pertama kali jalan
│   └── creatio.backup            ← file backup DB (di-ignore git)d
├── packages/                     ← custom packages BERCA
│   └── .gitkeep
└── scripts/
    └── add-package.sh            ← helper menambah package baru ke git workflow
```

---

## Step 1 — Clone & Persiapan Awal

**macOS / Linux / WSL / Git Bash:**

```bash
git clone <repo-url> creatio-tf
cd creatio-tf
```

**Windows (PowerShell):**

```powershell
git clone <repo-url> creatio-tf
cd creatio-tf
```

---

## Step 2 — Extract Binary Creatio

Download installer Creatio Studio, ekstrak, lalu salin seluruh isinya ke folder `creatio-app/`:

```
creatio-app/
├── Terrasoft.WebHost.dll
├── Terrasoft.WebHost.exe
├── ConnectionStrings.config
├── appsettings.json
├── Terrasoft.Configuration/
│   └── Pkg/
└── ... (semua file lainnya)
```

> Folder `creatio-app/` tidak di-commit ke git karena ukurannya sangat besar.

---

## Step 3 — Buat File `.env`

Salin dari template lalu isi dengan nilai yang sesuai:

**macOS / Linux / WSL / Git Bash:**

```bash
cp .env.example .env
```

**Windows (PowerShell):**

```powershell
Copy-Item .env.example .env
```

Isi `.env`:

```env
# PostgreSQL
POSTGRES_DB=creatio_studio
POSTGRES_USER=creatio_user
POSTGRES_PASSWORD=IsiPasswordKuat!
POSTGRES_PORT=5433

# Redis
REDIS_PORT=6379
REDIS_PASSWORD=IsiPasswordRedisKuat!

# pgAdmin
PGADMIN_EMAIL=admin@local.dev
PGADMIN_PASSWORD=admin123
PGADMIN_PORT=5050

# Creatio App
CREATIO_PORT=8080
CREATIO_HTTPS_PORT=8443
```

---

## Step 4 — Konfigurasi ConnectionStrings.config

Edit file `creatio-app/ConnectionStrings.config`. Pastikan dua koneksi utama mengarah ke container Docker (bukan server lama):

```xml
<?xml version="1.0" encoding="utf-8"?>
<connectionStrings>
  <add name="db"
       connectionString="Server=creatio-postgres;Port=5432;Database=creatio_studio;User ID=creatio_user;password=IsiPasswordKuat!;Timeout=500; CommandTimeout=400;MaxPoolSize=1024;" />
  <add name="dbPostgreSql"
       connectionString="Pooling=true; Database=creatio_studio; Host=creatio-postgres; Port=5432; Username=creatio_user; Password=IsiPasswordKuat!; Timeout=5; CommandTimeout=400" />
  <add name="redis"
       connectionString="host=creatio-redis;db=0;port=6379;password=IsiPasswordRedisKuat!" />
  <!-- sisanya biarkan default -->
  ...
</connectionStrings>
```

**Penting:** Nilai `Server`/`Host` harus `creatio-postgres` dan `creatio-redis` (nama container di Docker network), **bukan** `localhost`.

---

## Step 5 — Fix Cookie SameSite (Wajib untuk HTTP)

Edit `creatio-app/Terrasoft.WebHost.dll.config`, cari baris `CookiesSameSiteMode` dan ubah nilainya:

```xml
<!-- Cari baris ini (sekitar line 337): -->
<add key="CookiesSameSiteMode" value="Lax" />
<!-- Default-nya "None" — ubah ke "Lax" agar browser Chrome menerima cookie di HTTP -->
```

> **Kenapa perlu diubah?** Creatio default menggunakan `SameSite=None` pada cookie. Chrome v80+ menolak cookie `SameSite=None` yang tidak disertai flag `Secure`. Karena kita pakai HTTP di lokal, cookie-nya akan ditolak Chrome dan user tidak bisa login. Nilai `Lax` membuat cookie diterima di HTTP.
>
> Jika deploy ke production dengan HTTPS, kembalikan ke `None`.

---

## Step 6 — Siapkan Backup Database (Opsional)

Jika memiliki file backup database dari environment sebelumnya:

**macOS / Linux / WSL / Git Bash:**

```bash
cp /path/to/backup.backup db-backup/creatio.backup
```

**Windows (PowerShell):**

```powershell
Copy-Item C:\path\to\backup.backup db-backup\creatio.backup
```

Script `db-backup/restore.sh` akan otomatis dijalankan saat container PostgreSQL pertama kali dibuat. Jika file backup tidak ada, database dimulai kosong.

---

## Step 7 — Jalankan Semua Service

```bash
docker compose up -d
```

Tunggu semua container healthy (bisa dipantau dengan):

```bash
docker compose ps
```

Output yang diharapkan:

```
NAME               STATUS
creatio-app        Up
creatio-postgres   Up (healthy)
creatio-redis      Up (healthy)
creatio-pgadmin    Up
```

---

## Langkah 8 — Verifikasi & Akses

| Service         | URL                    | Kredensial default         |
| --------------- | ---------------------- | -------------------------- |
| Creatio         | http://localhost:8080  | Supervisor / Supervisor    |
| Creatio (HTTPS) | https://localhost:8443 | Supervisor / Supervisor    |
| pgAdmin         | http://localhost:5050  | admin@local.dev / admin123 |

Buka browser → `http://localhost:8080` → login dengan `Supervisor` / `Supervisor`.

---

## Troubleshooting

### Container restart terus / tidak healthy

Cek log:

```bash
docker logs creatio-app --tail 50
docker logs creatio-postgres --tail 20
```

### Login gagal: "Invalid username or password"

Pastikan `ConnectionStrings.config` sudah benar, terutama:

- `name="db"` → `Server=creatio-postgres`
- `name="dbPostgreSql"` → `Host=creatio-postgres`

Kedua koneksi **harus** mengarah ke `creatio-postgres`, bukan `localhost`.

### Browser stuck di halaman login (tidak redirect setelah login)

Pastikan `CookiesSameSiteMode` di `Terrasoft.WebHost.dll.config` sudah diubah ke `Lax` (lihat Langkah 5), lalu restart container:

```bash
docker restart creatio-app
```

### Reset password Supervisor lewat database

Jika password Supervisor tidak diketahui, reset via SQL:

```bash
docker exec -it creatio-postgres psql -U creatio_user -d creatio_studio
```

```sql
-- Hash untuk password "Supervisor"
UPDATE "SysAdminUnit"
SET "UserPassword" = '$2a$11$VIlbBqIJEoLH3YBqfHi5e.BrdUyAHBWDBOkFHRpLgIrz1lPTTZ4tm'
WHERE "Name" = 'Supervisor';

-- Bersihkan lock jika ada
UPDATE "SysAdminUnit"
SET "ForceChangePassword" = false,
    "LoginAttemptCount" = 0,
    "UnblockTime" = NULL
WHERE "Name" = 'Supervisor';
```

### Mematikan semua service

```bash
docker compose down          # matikan, data tetap ada
docker compose down -v       # matikan + hapus semua data (fresh start)
```

---

## Workflow Custom Package Development

Untuk menambahkan custom package ke dalam git workflow:

**macOS / Linux:**

```bash
# Setelah membuat package baru di Creatio UI:
./scripts/add-package.sh NamaPackage
```

**Windows — jalankan via WSL atau Git Bash:**

```bash
bash scripts/add-package.sh NamaPackage
```

> Script `.sh` tidak bisa dijalankan langsung di CMD atau PowerShell. Gunakan WSL atau Git Bash.

Script ini akan:

1. Menyalin package dari `creatio-app/Terrasoft.Configuration/Pkg/NamaPackage/` ke `packages/NamaPackage/`
2. Menambahkan volume mount ke `docker-compose.yaml` secara otomatis

Selanjutnya commit dan push folder `packages/NamaPackage/` ke git

---

## Perbedaan per OS — Ringkasan

|                              | macOS           | Windows                                           | Linux                  |
| ---------------------------- | --------------- | ------------------------------------------------- | ---------------------- |
| Docker runtime               | Rancher Desktop | Rancher Desktop / Docker Desktop                  | Docker Engine (native) |
| Perlu Rancher Desktop?       | Ya              | Ya (atau Docker Desktop)                          | Tidak                  |
| Jalankan `.sh` script        | Langsung        | Via WSL atau Git Bash                             | Langsung               |
| Copy file                    | `cp`            | `Copy-Item` (PowerShell) atau `cp` (WSL/Git Bash) | `cp`                   |
| Semua Docker Compose command | Sama            | Sama                                              | Sama                   |

---

## Catatan Production

| Setting                  | Development   | Production                  |
| ------------------------ | ------------- | --------------------------- |
| `CookiesSameSiteMode`    | `Lax`         | `None`                      |
| `.env`                   | Di-ignore git | Dikelola via secret manager |
| `ASPNETCORE_ENVIRONMENT` | `Development` | `Production`                |
| Port                     | HTTP 8080     | HTTPS dengan reverse proxy  |
