#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const HOOKS_SOURCE_DIR = path.join(__dirname, 'git-hooks');
const HOOKS_PATH = 'scripts/git-hooks';

// Available hook files
const HOOK_FILES = ['pre-commit', 'pre-push'];

function installGitHooks() {
  try {
    // Check if .git directory exists
    if (!fs.existsSync(path.join(process.cwd(), '.git'))) {
      console.log(
        '⚠️  No .git directory found. Skipping git hooks installation.'
      );
      return;
    }

    // Ensure hooks directory exists
    if (!fs.existsSync(HOOKS_SOURCE_DIR)) {
      console.log('⚠️  Git hooks directory not found. Skipping installation.');
      return;
    }

    // Make hook files executable (Unix-like systems)
    if (process.platform !== 'win32') {
      HOOK_FILES.forEach(hookName => {
        const hookPath = path.join(HOOKS_SOURCE_DIR, hookName);
        if (fs.existsSync(hookPath)) {
          try {
            fs.chmodSync(hookPath, 0o755);
          } catch (error) {
            console.warn(
              `⚠️  Failed to make ${hookName} executable: ${error.message}`
            );
          }
        }
      });
    }

    // Configure git to use our hooks directory
    try {
      execSync(`git config core.hooksPath ${HOOKS_PATH}`, { stdio: 'pipe' });
      console.log(`✅ Configured git to use hooks from ${HOOKS_PATH}`);

      // Count available hooks
      const availableHooks = HOOK_FILES.filter(hookName =>
        fs.existsSync(path.join(HOOKS_SOURCE_DIR, hookName))
      );

      if (availableHooks.length > 0) {
        console.log(
          `🎉 ${availableHooks.length} git hook(s) ready: ${availableHooks.join(', ')}`
        );
        console.log('💡 Hooks will run automatically on git operations');
      }
    } catch (error) {
      console.error('❌ Failed to configure git hooks path:', error.message);
    }
  } catch (error) {
    console.error('❌ Failed to install git hooks:', error.message);
    // Don't exit with error code to avoid breaking npm install
  }
}

// Run installation
installGitHooks();
