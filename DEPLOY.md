# Deploying ReadFlip on the Hetzner VPS

The server (`johnfaben-cloud1`) is already set up with Ubuntu 24.04, Nginx,
Certbot, and a `deploy` user. Wildcard DNS `*.johnfaben.com` points to the
server.

This is a static site (HTML/JS/CSS) — no Python, no database.

---

## 1. Create the directory and get the code

```bash
sudo mkdir -p /var/www/flashreader
sudo chown deploy:deploy /var/www/flashreader
cd /var/www/flashreader
git clone https://github.com/johnfaben/flashreader.git .
```

## 2. Upload images

Images are not in the git repo. Rsync them from the local machine
(Git Bash / WSL):

```bash
rsync -avz /c/Users/jdfab/Dropbox/Flask/flashreader/images/ \
  deploy@johnfaben-cloud1:/var/www/flashreader/images/
```

## 3. Nginx

```bash
sudo nano /etc/nginx/sites-available/flashreader
```

```nginx
server {
    listen 80;
    server_name flashreader.johnfaben.com;
    root /var/www/flashreader;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~* \.(js|css|png|jpg|ico)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/flashreader /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 4. SSL

```bash
sudo certbot --nginx -d flashreader.johnfaben.com
```

Choose to redirect HTTP to HTTPS when prompted.

---

## Deploying updates

**Code changes** (on the server):

```bash
cd /var/www/flashreader
git pull
```

**Image changes** (from local machine):

```bash
rsync -avz /c/Users/jdfab/Dropbox/Flask/flashreader/images/ \
  deploy@johnfaben-cloud1:/var/www/flashreader/images/
```

No restart needed — Nginx serves static files directly.
