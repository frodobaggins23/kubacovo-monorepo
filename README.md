# Kubacovo Monorepo

A modern, scalable monorepo built with [Nx](https://nx.dev) for hosting multiple React applications and shared libraries. This workspace is designed to provide a robust foundation for building and maintaining multiple frontend projects with shared components and utilities.

## 🚀 Features

- **Modern React 19** with TypeScript support
- **Nx Workspace** for efficient monorepo management
- **Vite** for fast development and building
- **TailwindCSS** for consistent styling across projects
- **Storybook** for component development and documentation
- **Docker** support for containerized development
- **ESLint + Prettier** for code quality and formatting
- **Vitest** for comprehensive testing

## 📁 Project Structure

```
kubacovo-monorepo/
├── apps/
│   └── portfolio-presentation/     # Portfolio presentation application
├── libs/
│   └── ui-components/             # Shared UI component library
├── scripts/                        # Build and utility scripts
├── .github/                        # CI/CD workflows
└── docker-compose.yml             # Development container setup
```

## 🛠️ Prerequisites

- **Node.js** 22
- **npm** or **yarn**
- **Docker** (optional, for containerized development)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
# Start the portfolio presentation app
npx nx serve portfolio-presentation

# Or use the dev command
npx nx dev portfolio-presentation
```

### 3. Build for Production

```bash
npx nx build portfolio-presentation
```

## 📱 Available Applications

### Portfolio Presentation (`apps/portfolio-presentation`)

A React application showcasing portfolio content with modern UI components.

- **Dev Server**: http://localhost:4200
- **Preview Build**: http://localhost:4300

## 🧩 Shared Libraries

### UI Components (`libs/ui-components`)

A comprehensive design system library with reusable React components.

- **Storybook**: http://localhost:6006
- **Build**: `npx nx build ui-components`

## 🐳 Docker Development

For containerized development with VS Code Remote-SSH:

```bash
# Start development container
npm run container:start

# Stop container
npm run container:stop
```

The container exposes:

- **SSH**: Port 2222
- **Portfolio App**: Port 3001
- **Storybook**: Port 6006
- **Nx Dev Server**: Port 4200
- **Preview Builds**: Port 4300

## 🧪 Development Commands

### Core Commands

```bash
# Development
npx nx serve <app-name>          # Start dev server
npx nx dev <app-name>            # Alternative dev command
npx nx preview <app-name>        # Preview production build

# Building
npx nx build <app-name>          # Production build
npx nx build ui-components       # Build UI library

# Testing
npx nx test <app-name>           # Run tests with Vitest
npx nx test ui-components        # Test UI components

# Code Quality
npx nx lint <app-name>           # ESLint checking
npx nx typecheck <app-name>      # TypeScript checking

# Storybook
npx nx storybook ui-components   # Start Storybook
npx nx build-storybook ui-components  # Build Storybook
```

### Utility Commands

```bash
# Code Formatting
npm run format                    # Format all files
npm run format:check             # Check formatting
npm run format:staged            # Format staged files

# Project Management
npx nx graph                     # Visualize dependencies
npx nx show project <name>       # Show project details
npx nx list                      # List all generators
```

## 🏗️ Adding New Projects

### Generate New Application

```bash
npx nx g @nx/react:app <app-name>
```

### Generate New Library

```bash
npx nx g @nx/react:lib <lib-name>
```

### Generate New Component

```bash
npx nx g @nx/react:component <ComponentName> --project=<project-name>
```

## 🔧 Technology Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Testing**: Vitest + jsdom
- **Linting**: ESLint + Prettier
- **Monorepo**: Nx Workspace
- **Package Manager**: npm
- **Containerization**: Docker

## 📚 Additional Resources

- **Nx Documentation**: [https://nx.dev](https://nx.dev)
- **React Documentation**: [https://react.dev](https://react.dev)
- **TailwindCSS**: [https://tailwindcss.com](https://tailwindcss.com)
- **Vite**: [https://vitejs.dev](https://vitejs.dev)

## 🤝 Contributing

1. Install dependencies: `npm install`
2. Set up git hooks: `npm run postinstall`
3. Follow the established code style and linting rules
4. Use the provided generators for new components and projects

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using [Nx](https://nx.dev) and modern web technologies.
