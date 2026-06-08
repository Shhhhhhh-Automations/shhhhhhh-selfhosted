# Shhhhhhh Self-Hosted

> **Quiet operations. Loud automation.**

Shhhhhhh is a self-hosted automation platform featuring a fluid, neon-lit workflow canvas. It's designed for developers and automation enthusiasts who want powerful automation with an unobtrusive, efficient feel.

---

## [i] The Self-Hosting Philosophy

Shhhhhhh is built on the principle of **Local Sovereignty**. Unlike SaaS automation tools, Shhhhhhh:
- **Never leaves your network**: Your data, credentials, and workflow logic stay on your hardware.
- **Resource Efficient**: Designed to run "quietly" in the background with minimal CPU/RAM footprint.
- **Single-File Portability**: All your configuration is stored in a single SQLite database.

---

## [#] Quick Start (NPX)

The fastest way to get started is using `npx`. No installation required if you have Node.js.

```bash
npx shhhhhhh-automation
```

**[i] What happens?**
- It creates a hidden directory `~/.shhhhhhh` in your user home for the database.
- It starts the server on `http://localhost:3000`.

---

## [#] Docker Deployment (Recommended)

The most robust way to run Shhhhhhh for long-term use. It ensures the environment is consistent and simplifies updates.

**[!] Requirements:**
- Docker and Docker Compose.

**Deployment Steps:**
1. Create a directory for your deployment: `mkdir shhhhhhh-deploy && cd shhhhhhh-deploy`.
2. Create a `docker-compose.yml` file:

```yaml
services:
  shhhhhhh:
    image: ghcr.io/your-username/shhhhhhh-selfhosted:latest
    container_name: shhhhhhh
    restart: unless-stopped
    ports:
      - "3000:3000"
    volumes:
      - ./data:/data
    environment:
      - PORT=3000
      - SHHHHHHH_DATA_DIR=/data
      - NODE_ENV=production
```

3. Start the container:
```bash
docker compose up -d
```

---

## [!] Advanced Configuration

Shhhhhhh is configured entirely via environment variables.

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | The port the server listens on | `3000` |
| `SHHHHHHH_DATA_DIR` | Directory for the SQLite database | `~/.shhhhhhh` (NPX) or `/data` (Docker) |
| `DATABASE_URL` | Full path to the SQLite DB file | `$SHHHHHHH_DATA_DIR/shhhhhhh.db` |
| `NODE_ENV` | Environment mode | `production` |

---

## [i] Maintenance & Backups

**Backing Up:**
Since Shhhhhhh uses SQLite, backups are trivial. Simply copy the `shhhhhhh.db` file from your data directory while the server is running.

**Updating:**
- **For Docker:** `docker compose pull && docker compose up -d`
- **For NPX:** `npx shhhhhhh-automation@latest`

---

## [!] Security Recommendations

1. **Reverse Proxy**: Always use a reverse proxy like Nginx or Caddy with TLS (HTTPS) enabled.
2. **Authentication**: Add an authentication layer at the proxy level for internet exposure.
3. **Firewall**: Limit access to authorized IPs.

---

## [?] Troubleshooting

- **Database Locked**: Ensure only one instance is accessing the data directory.
- **Port Conflict**: Use `PORT=3001` to use a different port.
- **Permission Denied**: In Docker, check host permissions for the `./data` volume.

---

## [i] Development

If you want to contribute or build from source:

**Prerequisites:**
- Bun (v1.1+)
- Node.js (v18+)

**Commands:**
```bash
# Install dependencies
npm install

# Build everything
npm run build

# Start the unified server
npm start
```

---

## [i] Design Philosophy

- **Quiet Power**: Unobtrusive UI that performs complex tasks.
- **Organic-Tech Aesthetic**: Depth created via Aurora Mesh Gradients and photographic grain texture.
- **Fluidity**: Smooth transitions on the workflow canvas.

---

## License
MIT
