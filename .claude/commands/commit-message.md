# Create commit message

## General rules
- Propose commit message for staged git files.
- If there are no staged files, add all touched files to staging (`git add -A`)
- If there are staged files, work just with them, leave the other touched files out.
- Propose commit message in accordance with conventional commits principles (see https://www.conventionalcommits.org/en/v1.0.0/#summary)

```
<type>: <description>
```

- The commit message must be max 150 characters long. 
- The <description> part starts always with capital letter.
- Never use commit message body.
- Never use commit message footer.
- Never use Claude code attributions or collaboration mentions

## Examples of good commit messages

- "feat: Add new button to dialog window"
- "test: Scroll service unit tests"
- "refactor: Simplify helper utils"

## Examples of bad commit messages

- "Add Calculator service" (not following conventional commits methodology)
- "test: unit tests for Calculator service" (description not starting with capital letter)
- "feat: Add Calculator Service
    - added new buttons
    - refactored utils
    - introduced dark mode
" (message must not include a body)
- "refactor: Added some services, refactored dark mode and introduced some very cool dependency injection mechanisms, including integration with Astra" (too long commit message)
- "feat: Add Calculator Service

🤖 Co-Authored-By: Claude Code noreply@anthropic.com
" (the message must not contain any Claude attributions or mentions)