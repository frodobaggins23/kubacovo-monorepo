#!/bin/bash

# Tool usage logging script
# Logs all tool inputs to .claude/logs/tool_usage.log

# Create logs directory if it doesn't exist
mkdir -p "$CLAUDE_PROJECT_DIR/.claude/logs"

# Read the input from stdin
input=$(cat)

# Extract tool name and input details
tool_name=$(echo "$input" | jq -r '.tool_name // "Unknown"')
tool_input=$(echo "$input" | jq -c '.tool_input // {}')

# Format timestamp
timestamp=$(date '+%Y-%m-%d %H:%M:%S')

# Log the tool usage with all input details
echo "[$timestamp] $tool_name: $tool_input" >> "$CLAUDE_PROJECT_DIR/.claude/logs/tool_usage.log"