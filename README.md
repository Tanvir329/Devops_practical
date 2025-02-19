# 🚀 Automated Backup and Rotation Script

## 📌 Overview
This project automates the backup of a GitHub-hosted project, integrates with **Google Drive**, and implements a **rotational backup strategy** to manage older backups. It also triggers backups automatically whenever new code is pushed to GitHub.

---

## ⚡ Features
✅ **Automatic Backups** – Compresses project files into a timestamped ZIP.  
✅ **GitHub Webhook Integration** – Runs the backup whenever code is pushed.  
✅ **Google Drive Upload** – Uses `rclone` to push backups to a designated Google Drive folder.  
✅ **Rotational Backup Strategy** – Deletes older backups based on daily, weekly, and monthly retention settings.  
✅ **Logging & Notifications** – Generates logs and sends a **cURL request** on backup success.  

---

🔄 Rotational Backup Strategy
The script preserves backups as follows:

-Last x daily backups (default: 7 days)
-Last x weekly backups (default: 4 Sundays)
-Last x monthly backups (default: 3 months)
-Older backups are deleted automatically
Modify config.sh to customize retention settings.

🔔 Webhook Integration
This project includes a GitHub webhook listener that triggers the backup whenever new code is pushed to the repository. The webhook automatically pulls the latest code and runs the backup script.

📡 Webhook Notification

**curl -X POST -H "Content-Type: application/json" \
-d '{"project": "YourProjectName", "date": "BackupDate", "test": "BackupSuccessful"}' \
$CURL_URL**

👨‍💻 Contributors

Tanvir Attar
Open to Pull Requestes.

