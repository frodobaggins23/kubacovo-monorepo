#!/bin/bash

# Create logs directory if it doesn't exist
mkdir -p "$CLAUDE_PROJECT_DIR/.claude/logs"

# Read the input from stdin
input=$(cat)

# Format timestamp
timestamp=$(date '+%Y-%m-%d %H:%M:%S')

# Create properly formatted JSON with timestamp and input
printf '%s' "$input" | jq --arg timestamp "$timestamp" '{timestamp: $timestamp, input: .}' > "$CLAUDE_PROJECT_DIR/.claude/logs/print_input.json"