#!/bin/bash

# Script to detect monorepo scope from git staged files
# Returns the scope(s) for conventional commit messages

# Get list of staged files
staged_files=$(git diff --cached --name-only)

if [ -z "$staged_files" ]; then
    echo "No staged files found" >&2
    exit 1
fi

# Array to collect unique scopes
declare -A scopes

# Process each staged file
while IFS= read -r file; do
    if [[ "$file" =~ ^apps/([^/]+)/ ]]; then
        # Extract app name from apps/{app-name}/...
        app_name="${BASH_REMATCH[1]}"
        scopes["$app_name"]=1
    elif [[ "$file" =~ ^libs/([^/]+)/ ]]; then
        # Extract lib name from libs/{lib-name}/...
        lib_name="${BASH_REMATCH[1]}"
        scopes["$lib_name"]=1
    elif [[ "$file" =~ ^\.claude/ ]] || [[ "$file" == "CLAUDE.md" ]]; then
        # Claude-related files
        scopes["claude"]=1
    elif [[ "$file" =~ ^(nx\.json|package\.json|tsconfig\..*\.json|\.gitignore|README\.md|\.dockerignore|docker-compose\.yml|Dockerfile.*|vitest\.workspace\.ts)$ ]]; then
        # Root monorepo configuration files
        scopes["main"]=1
    else
        # Other root files default to main
        scopes["main"]=1
    fi
done <<< "$staged_files"

# Convert associative array keys to sorted array
scope_list=()
for scope in "${!scopes[@]}"; do
    scope_list+=("$scope")
done

# Sort the scopes for consistent output
IFS=$'\n' sorted_scopes=($(sort <<<"${scope_list[*]}"))
unset IFS

# Join scopes with comma
result=""
for i in "${!sorted_scopes[@]}"; do
    if [ $i -eq 0 ]; then
        result="${sorted_scopes[$i]}"
    else
        result="$result,${sorted_scopes[$i]}"
    fi
done

echo "$result"