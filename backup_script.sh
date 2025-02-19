#!/bin/bash

# Configuration Variables
PROJECT_DIR="/home/ubuntu/project/"  # Change to your project directory
BACKUP_DIR="/home/ubuntu/backups"      # Local backup storage
GDRIVE_FOLDER="gdrive:/backup"    # rclone remote name + Google Drive folder
RETENTION_DAYS=7
RETENTION_WEEKS=4
RETENTION_MONTHS=3
CURL_URL="https://webhook.site/edbba31a-ecc0-4dad-9442-20508b01ff7b"
ENABLE_CURL=true  # Set to false to disable curl requests

# Timestamp for backup
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_NAME="backup_$TIMESTAMP.zip"

# Ensure backup directory exists
mkdir -p "$BACKUP_DIR"

# Step 1: Create a compressed backup
zip -r "$BACKUP_DIR/$BACKUP_NAME" "$PROJECT_DIR"

# Step 2: Upload backup to Google Drive
rclone copy "$BACKUP_DIR/$BACKUP_NAME" "$GDRIVE_FOLDER"

# Step 3: Rotational Backup Management
# Delete backups older than RETENTION_DAYS
find "$BACKUP_DIR" -name "backup_*.zip" -type f -mtime +$RETENTION_DAYS -delete

# Retain only last RETENTION_WEEKS weekly backups (Sundays)
find "$BACKUP_DIR" -name "backup_*.zip" -type f -mtime +$(($RETENTION_WEEKS * 7)) -exec rm {} \;

# Retain only last RETENTION_MONTHS monthly backups
find "$BACKUP_DIR" -name "backup_*.zip" -type f -mtime +$(($RETENTION_MONTHS * 30)) -exec rm {} \;

# Step 4: Send cURL Request on Success
if [ "$ENABLE_CURL" = true ]; then
    curl -X POST -H "Content-Type: application/json" -d '{"project": "MyProject", "date": "'"$TIMESTAMP"'", "test": "BackupSuccessful"}' "$CURL_URL"
fi

# Step 5: Logging
echo "[$TIMESTAMP] Backup created: $BACKUP_NAME, uploaded to Google Drive, old backups deleted." >> "$BACKUP_DIR/backup.log"
