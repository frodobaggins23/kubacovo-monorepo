# Git-based SSH development container for kubacovo-monorepo
FROM node:22

# Install SSH server and development tools
RUN apt-get update && apt-get install -y \
    openssh-server \
    sudo \
    git \
    curl \
    wget \
    nano \
    vim \
    jq \
    && rm -rf /var/lib/apt/lists/*

# Configure SSH server
RUN mkdir -p /var/run/sshd

# Allow node user to use sudo without password for development
RUN echo "node ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

# Configure SSH daemon
RUN sed -i 's/#PubkeyAuthentication yes/PubkeyAuthentication yes/' /etc/ssh/sshd_config && \
    sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config

# Switch to node user for setup
USER node
WORKDIR /home/node

# Set up SSH directory
RUN mkdir -p /home/node/.ssh && chmod 700 /home/node/.ssh

# Copy SSH keys from certs folder (organized build context)
COPY --chown=node:node certs/id_ed25519 /home/node/.ssh/id_ed25519
COPY --chown=node:node certs/id_ed25519.pub /home/node/.ssh/id_ed25519.pub
COPY --chown=node:node certs/kubacovo-monorepo-docker-ssh.pub /home/node/.ssh/authorized_keys

# Set proper SSH key permissions
RUN chmod 600 /home/node/.ssh/id_ed25519 && \
    chmod 644 /home/node/.ssh/id_ed25519.pub && \
    chmod 600 /home/node/.ssh/authorized_keys

# Configure git
RUN git config --global user.email "frodo23@protonmail.com" && \
    git config --global user.name "kubac"

# Set up SSH known hosts for GitHub
RUN ssh-keyscan github.com >> /home/node/.ssh/known_hosts

# Clone the repository
RUN git clone git@github.com:frodobaggins23/kubacovo-monorepo.git /home/node/kubacovo-monorepo

# Set up npm global directory
RUN mkdir -p /home/node/.npm-global && \
    npm config set prefix '/home/node/.npm-global'

# Add npm global bin to PATH and install Claude Code
RUN echo 'export PATH=/home/node/.npm-global/bin:$PATH' >> /home/node/.bashrc && \
    export PATH=/home/node/.npm-global/bin:$PATH && \
    npm install -g @anthropic-ai/claude-code

# Add bash aliases
RUN echo "alias g='git'" >> /home/node/.bashrc && \
    echo "alias ga='git add -A'" >> /home/node/.bashrc && \
    echo "alias gc='git commit -m'" >> /home/node/.bashrc && \
    echo "alias gca='git commit --amend'" >> /home/node/.bashrc && \
    echo "alias gl='git log'" >> /home/node/.bashrc && \
    echo "alias gpl='git pull'" >> /home/node/.bashrc && \
    echo "alias upgrd='sudo apt update && sudo apt upgrade'" >> /home/node/.bashrc

# Install dependencies in the cloned repository
WORKDIR /home/node/kubacovo-monorepo
RUN npm install

# Expose ports for different services
EXPOSE 22 3001 6006 4200 4300

# Default command (overridden by docker-compose)
CMD ["tail", "-f", "/dev/null"]