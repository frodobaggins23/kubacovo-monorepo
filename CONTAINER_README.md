# Docker Development Container

Git-based development container with SSH access and VS Code Remote-SSH integration.

## Prerequisites

You need these SSH keys in your `~/.ssh/` directory:

- `~/.ssh/id_ed25519` + `~/.ssh/id_ed25519.pub` (for GitHub access)
- `~/.ssh/kubacovo-monorepo-docker-ssh` + `~/.ssh/kubacovo-monorepo-docker-ssh.pub` (for container SSH access)

Verify GitHub access works:

```bash
ssh -T git@github.com
```

## Setup

### 1. Prepare SSH Keys

```bash
# Copy SSH keys to build context
mkdir -p certs
cp ~/.ssh/id_ed25519 certs/
cp ~/.ssh/id_ed25519.pub certs/
cp ~/.ssh/kubacovo-monorepo-docker-ssh.pub certs/
```

### 2. Build and Start Container

```bash
# Build the development container
sudo docker compose build ssh-dev

# Clean up SSH keys (optional - they're now in the container)
rm -rf certs/

# Start the container
sudo docker compose up ssh-dev
```

You should see: `Starting OpenBSD Secure Shell server: sshd.`

### 3. Connect via SSH

```bash
# Test SSH connection
ssh -i ~/.ssh/kubacovo-monorepo-docker-ssh -p 2222 node@localhost
```

## VS Code Setup

### Option 1: Direct Connection

1. Install **"Remote-SSH"** extension
2. Command Palette (`Ctrl+Shift+P`) → **"Remote-SSH: Connect to Host"**
3. Enter: `node@localhost:2222`
4. Select your `kubacovo-monorepo-docker-ssh` key
5. Open folder: `/home/node/kubacovo-monorepo`

### Option 2: SSH Host Configuration (Recommended)

Add to your `~/.ssh/config`:

```
Host docker-dev
    HostName localhost
    Port 2222
    User node
    IdentityFile ~/.ssh/kubacovo-monorepo-docker-ssh
```

Then simply connect to `docker-dev` in VS Code Remote-SSH.

## Daily Usage

### Container Management Commands

#### ✅ **SAFE Commands - Preserve All Changes**

```bash
# Start container (creates new container on first run, starts existing on subsequent runs)
sudo docker compose up -d ssh-dev

# Stop container (preserves all data - git commits, installed packages, files)
sudo docker compose stop ssh-dev

# Start existing container (all your changes intact)
sudo docker compose start ssh-dev

# View logs
sudo docker compose logs ssh-dev

# Check container status
sudo docker compose ps
```

#### ⚠️ **DANGER Commands - Delete All Changes**

```bash
# Remove containers entirely (DELETES ALL: git commits, packages, files, work)
sudo docker compose down ssh-dev

# Rebuild (RESETS to clean state, DELETES ALL local changes)
sudo docker compose build ssh-dev --no-cache
```

### **Key Differences**

| Command | What Happens     | Your Changes        | Use When                   |
| ------- | ---------------- | ------------------- | -------------------------- |
| `up -d` | Start container  | ✅ **Preserved**    | First time or after `down` |
| `stop`  | Pause container  | ✅ **Preserved**    | End of work session        |
| `start` | Resume container | ✅ **Preserved**    | Continue work session      |
| `down`  | Delete container | ❌ **LOST FOREVER** | Never (unless resetting)   |

### Development Workflow

1. Start container: `sudo docker compose up -d ssh-dev`
2. Connect VS Code Remote-SSH to: `docker-dev` (or `node@localhost:2222`)
3. Work in: `/home/node/kubacovo-monorepo`
4. Use git normally: `git pull`, `git commit`, `git push`

### Available Tools

- **Git** with your credentials pre-configured
- **Claude Code** CLI (`claude-code --version`)
- **Bash aliases**: `g` (git), `ga` (git add -A), `gc` (git commit -m), `gpl` (git pull)
- **Node.js & npm** with global packages in `~/.npm-global`

### Port Access

- SSH: `localhost:2222`
- Development servers: `localhost:3001`, `localhost:6006`, `localhost:4200`, `localhost:4300`

## Troubleshooting

**SSH connection fails:**

```bash
# Check container status
sudo docker compose ps

# Test with verbose SSH
ssh -i ~/.ssh/kubacovo-monorepo-docker-ssh -p 2222 -v node@localhost
```

**Container won't start:**

```bash
# Rebuild container (WARNING: This resets environment and deletes local changes)
# First, recreate SSH keys for build (if you removed them)
mkdir -p certs
cp ~/.ssh/id_ed25519 certs/
cp ~/.ssh/id_ed25519.pub certs/
cp ~/.ssh/kubacovo-monorepo-docker-ssh.pub certs/

sudo docker compose build ssh-dev --no-cache
rm -rf certs/  # Clean up after build
sudo docker compose up ssh-dev
```

**Note:** To update code, use `git pull` inside the container. Rebuilding the container resets the entire environment to its original state and removes any local changes you've made.
