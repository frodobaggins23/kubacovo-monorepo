# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is an Nx monorepo designed to host multiple React applications, shared libraries, and a design system.

### Core Development Commands

```bash
# Start development server for any app
npx nx serve <app-name>
# or
npx nx dev <app-name>

# Build for production
npx nx build <app-name>

# Run tests with Vitest
npx nx test <app-name>

# Type checking
npx nx typecheck <app-name>

# Linting with ESLint
npx nx lint <app-name>

# Preview production build
npx nx preview <app-name>

# Storybook for UI components
npx nx storybook @kubacovo-monorepo/ui-components
npx nx build-storybook @kubacovo-monorepo/ui-components
npx nx static-storybook @kubacovo-monorepo/ui-components
```

### Project Structure Commands

```bash
# Show available targets for any project
npx nx show project <project-name>

# Generate new React application
npx nx g @nx/react:app <app-name>

# Generate new React library
npx nx g @nx/react:lib <lib-name>

# Generate new React component
npx nx g @nx/react:component <ComponentName> --project=<project-name>

# List all available generators
npx nx list

# Visualize project dependencies
npx nx graph
```

## Architecture Overview

### Monorepo Structure

- **Nx monorepo** with TypeScript configuration
- **Multiple React applications** in `apps/` directory
- **Shared libraries** for business logic and utilities
- **Design system library** with shared UI components
- **Workspace-level dependencies** managed in root `package.json`

### Technology Stack

- **React 19** with TypeScript
- **React Router DOM** for routing
- **Vite** for build tooling and dev server
- **Vitest** for testing with jsdom environment
- **TailwindCSS** for styling
- **ESLint** with TypeScript rules for linting

### Key Configuration Files

- `nx.json`: Nx workspace configuration with plugins for React, Vite, ESLint, and TypeScript
- `vite.config.ts`: Vite configuration with React plugin and test setup (per app)
- `tsconfig.base.json`: Base TypeScript configuration for the monorepo
- `vitest.workspace.ts`: Vitest workspace configuration

### Planned Architecture

- **Apps**: Multiple React applications consuming shared libraries
- **Libs**: Business logic, utilities, and data management libraries
- **Design System**: Shared UI component library for consistent styling across apps
- **Routing**: React Router setup in individual applications
- **Styling**: TailwindCSS configured consistently across all projects

### Development Notes

- Applications run on different ports (4200, 4201, etc.) in development mode
- Preview builds use ports 4300+
- Tests use Vitest with jsdom environment and coverage reporting
- All generators are configured to use TailwindCSS by default
- TypeScript is configured with strict mode and modern ES2022 target
- Libraries should be designed for reusability across multiple applications

## Docker Development Environment

This repository includes a containerized development environment for consistent development across different machines.

### Quick Start with Docker

```bash
# Set up and start the development container
mkdir -p certs
cp ~/.ssh/id_ed25519 certs/
cp ~/.ssh/id_ed25519.pub certs/
cp ~/.ssh/kubacovo-monorepo-docker-ssh.pub certs/

sudo docker compose build ssh-dev
rm -rf certs/  # Clean up after build
sudo docker compose up -d ssh-dev

# Connect via VS Code Remote-SSH to: docker-dev (or node@localhost:2222)
# Working directory: /home/node/kubacovo-monorepo
```

### Container Features

- **Git-based**: Repository automatically cloned with your credentials
- **SSH access**: Connect via VS Code Remote-SSH extension
- **Pre-installed tools**: Node.js, Claude Code CLI, development dependencies
- **Port forwarding**: Development servers accessible on host machine
- **Persistent environment**: Git changes persist between container starts

**📖 Full Documentation**: See [CONTAINER_README.md](./CONTAINER_README.md) for complete setup instructions, troubleshooting, and usage details.

## Communication Style

### Core Principles

- **Simplicity First**: Always start with the simplest solution that solves the core problem. Avoid over-engineering or complex architectures unless specifically needed.
- **Architectural Thinking**: Think about long-term implications, maintainability, and scalability. Consider how solutions fit into the broader system.
- **Real-World Validation**: Test solutions in practical scenarios, not just theoretical examples. Prefer working implementations over perfect documentation.

### Effective Communication Patterns

#### ✅ Preferred Approaches

- **Start minimal, iterate**: Propose simple solutions first, build complexity based on feedback
- **Explain reasoning**: Always provide the "why" behind technical decisions and trade-offs
- **Collaborative problem-solving**: Treat as co-architecture sessions, not teaching moments
- **Direct communication**: Be clear about limitations, alternatives, and implications
- **Use "ultrathink"**: Apply deep technical analysis when explicitly requested
- **Root cause analysis**: When encountering build/config errors, prioritize identifying underlying configuration issues rather than implementing workarounds
- **User-guided correction**: When user feedback indicates wrong direction, quickly pivot to their preferred approach rather than defending initial solutions
- **Configuration over code**: Prefer fixing tool configurations (tsconfig, rollup, nx) rather than adding workaround code

#### ❌ Less Effective Approaches

- **Feature-heavy initial proposals**: Avoid complex solutions with multiple abstractions upfront
- **Prescriptive solutions**: Don't assume one approach without explaining alternatives
- **Theoretical explanations**: Prefer hands-on validation over conceptual discussions
- **Over-complexity**: Resist adding layers when simple solutions work
- **Working around symptoms**: Don't patch issues with code when the real problem is configuration (TypeScript settings, build tools)
- **Complex script chaining**: Avoid overly complex npm scripts when simpler, tool-native approaches exist

### Technical Collaboration Style

- **Architecture-focused**: Consider system design, developer experience, and maintainability
- **Quality-oriented**: Prefer doing things right over doing them fast
- **Practical problem-solver**: Solutions must work in real development environments
- **Direct feedback**: Provide specific, actionable feedback when approaches need adjustment

### Learning Integration

- **"Learn by Doing"**: Use for specific, practical implementation tasks (2-10 lines of code)
- **Request human input**: For meaningful design decisions and business logic with multiple approaches
- **Technical insights**: Share relevant patterns and system effects after implementations

### Session Continuity

- This communication style has been established through practical collaboration
- Maintain architectural thinking and simplicity-first approach across sessions
- Test solutions realistically and validate in actual usage scenarios
