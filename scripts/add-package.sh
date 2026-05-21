#!/bin/bash
set -e

PACKAGE_NAME="$1"
PKG_SOURCE="./creatio-app/Terrasoft.Configuration/Pkg/${PACKAGE_NAME}"
PKG_DEST="./packages/${PACKAGE_NAME}"
COMPOSE_FILE="./docker-compose.yaml"

if [ -z "$PACKAGE_NAME" ]; then
  echo "Usage: ./scripts/add-package.sh <PackageName>"
  exit 1
fi

if [ ! -d "$PKG_SOURCE" ]; then
  echo "ERROR: Package '${PACKAGE_NAME}' tidak ditemukan di ${PKG_SOURCE}"
  echo "Pastikan package sudah dibuat di Creatio UI terlebih dahulu."
  exit 1
fi

if [ -d "$PKG_DEST" ]; then
  echo "ERROR: Package '${PACKAGE_NAME}' sudah ada di packages/"
  exit 1
fi

echo "[1/3] Menyalin package dari creatio-app ke packages/..."
cp -r "$PKG_SOURCE" "$PKG_DEST"
echo "      Selesai: packages/${PACKAGE_NAME}"

echo "[2/3] Menambahkan volume mount ke docker-compose.yaml..."
MOUNT_LINE="      - ./packages/${PACKAGE_NAME}:/app/Terrasoft.Configuration/Pkg/${PACKAGE_NAME}"

# Sisipkan baris mount setelah baris "- creatio-logs:/app/Logs"
sed -i '' "/- creatio-logs:\/app\/Logs/a\\
${MOUNT_LINE}
" "$COMPOSE_FILE"

echo "      Selesai: volume mount ditambahkan"

echo "[3/3] Selesai!"
echo ""
echo "Langkah selanjutnya:"
echo "  docker compose up -d --build   # restart container dengan package baru"
echo "  git add packages/${PACKAGE_NAME}"
echo "  git commit -m 'feat: add package ${PACKAGE_NAME}'"
