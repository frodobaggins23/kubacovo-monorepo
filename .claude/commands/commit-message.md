# Create commit message

## General rules

- Propose commit message for staged git files.
- If there are no staged files, add all touched files to staging (`git add -A`)
- If there are staged files, work just with them, leave the other touched files out.
- Use `.claude/scripts/get-scope.sh` to automatically detect the scope from staged files.
- Propose commit message in accordance with conventional commits principles (see https://www.conventionalcommits.org/en/v1.0.0/#summary)

```
<type>(<scope>): <description>
```

- The commit message must be max 150 characters long.
- The <description> part starts always with capital letter.
- The <scope> is the monorepo project where changes occurred, detected automatically from staged files.
- Never use commit message body.
- Never use commit message footer.
- Never use Claude code attributions or collaboration mentions

## Scope Detection Rules

- **apps/portfolio-presentation/** → scope "portfolio-presentation"
- **libs/ui-components/** → scope "ui-components"
- **.claude/** files → scope "claude"
- **CLAUDE.md** or other root config files → scope "claude"
- **Root monorepo files** (nx.json, package.json, etc.) → scope "main"
- **Multiple scopes**: If changes span multiple projects, combine with comma: "ui-components,portfolio-presentation"

## Examples of good commit messages

- "feat(ui-components): Add new button to dialog window"
- "test(portfolio-presentation): Scroll service unit tests"
- "refactor(ui-components): Simplify helper utils"
- "docs(claude): Update commit message documentation"
- "chore(main): Update workspace dependencies"

## Examples of bad commit messages

- "Add Calculator service" (not following conventional commits methodology)
- "test: unit tests for Calculator service" (description not starting with capital letter)
- "feat: Add Calculator Service - added new buttons - refactored utils - introduced dark mode
  " (message must not include a body)
- "refactor: Added some services, refactored dark mode and introduced some very cool dependency injection mechanisms, including integration with Astra" (too long commit message)
- "feat: Add Calculator Service

🤖 Co-Authored-By: Claude Code noreply@anthropic.com
" (the message must not contain any Claude attributions or mentions)
