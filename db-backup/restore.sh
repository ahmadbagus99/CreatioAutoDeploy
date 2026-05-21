#!/bin/bash
set -e

BACKUP_FILE="/backups/creatio.backup"

if [ ! -f "$BACKUP_FILE" ]; then
    echo "[restore] No backup file found at $BACKUP_FILE, skipping restore."
    exit 0
fi

echo "[restore] Starting pg_restore from $BACKUP_FILE into database '$POSTGRES_DB'..."
pg_restore \
    --verbose \
    --no-owner \
    --no-privileges \
    --role="$POSTGRES_USER" \
    -U "$POSTGRES_USER" \
    -d "$POSTGRES_DB" \
    "$BACKUP_FILE" || true

echo "[restore] pg_restore completed."
