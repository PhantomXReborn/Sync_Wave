<div align="center">
  
  <h1 align="center">⚡ Sync Wave</h1>
  
  <p align="center">
    <b>A modern, production-ready web application boilerplate with an exceptional developer experience</b>
  </p>
  
  <p align="center">
    <a href="#-features">Features</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-how-it-works">How It Works</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-project-structure">Structure</a> •
    <a href="#-available-scripts">Scripts</a> •
    <a href="#-deployment">Deployment</a>
  </p>
  
  <p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui" />
  </p>
  
  <p align="center">
    <img src="https://img.shields.io/github/license/yourusername/sync-wave?style=flat-square" alt="License" />
    <img src="https://img.shields.io/github/stars/yourusername/sync-wave?style=flat-square" alt="Stars" />
    <img src="https://img.shields.io/github/issues/yourusername/sync-wave?style=flat-square" alt="Issues" />
    <img src="https://img.shields.io/github/last-commit/yourusername/sync-wave?style=flat-square" alt="Last Commit" />
    <img src="https://img.shields.io/github/actions/workflow/status/yourusername/sync-wave/ci.yml?style=flat-square" alt="Build Status" />
    <img src="https://img.shields.io/codecov/c/github/yourusername/sync-wave?style=flat-square" alt="Code Coverage" />
  </p>
</div>

---

## 📋 Table of Contents

- [✨ Features at a Glance](#-features-at-a-glance)
- [🚀 Quick Start](#-quick-start)
- [🔧 How It Works](#-how-it-works)
  - [Architecture Overview](#architecture-overview)
  - [Build Process](#build-process)
  - [Runtime Behavior](#runtime-behavior)
  - [Data Flow](#data-flow)
  - [Styling System](#styling-system)
  - [Component System](#component-system)
- [🛠️ Tech Stack Deep Dive](#️-tech-stack-deep-dive)
- [📂 Project Structure Explained](#-project-structure-explained)
- [📜 Available Scripts](#-available-scripts)
- [🧪 Testing Strategy](#-testing-strategy)
- [🚢 Deployment Guide](#-deployment-guide)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)

---

## ✨ Features at a Glance

<table>
  <tr>
    <td width="50%">
      <table>
        <tr>
          <td align="center">⚡</td>
          <td><b>Blazing Fast</b> - Vite + SWC for lightning-fast HMR and builds</td>
        </tr>
        <tr>
          <td align="center">🎨</td>
          <td><b>Beautiful UI</b> - shadcn/ui components with Radix primitives</td>
        </tr>
        <tr>
          <td align="center">📦</td>
          <td><b>Type-Safe</b> - Full TypeScript support with strict mode</td>
        </tr>
        <tr>
          <td align="center">🔄</td>
          <td><b>State Management</b> - TanStack Query for server state</td>
        </tr>
      </table>
    </td>
    <td width="50%">
      <table>
        <tr>
          <td align="center">🧪</td>
          <td><b>Testing Ready</b> - Vitest + React Testing Library pre-configured</td>
        </tr>
        <tr>
          <td align="center">🎭</td>
          <td><b>Dark Mode</b> - Built-in theme switching with next-themes</td>
        </tr>
        <tr>
          <td align="center">📱</td>
          <td><b>Responsive</b> - Mobile-first design with Tailwind CSS</td>
        </tr>
        <tr>
          <td align="center">🔌</td>
          <td><b>Backend Ready</b> - Supabase SDK included</td>
        </tr>
      </table>
    </td>
  </tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

<details>
<summary><b>📋 Click to expand</b></summary>
<br>

Make sure you have the following installed:

- **Node.js** (version 18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **bun** - [Install bun](https://bun.sh/)
- **Git** - [Download](https://git-scm.com/)
- **A code editor** (VSCode recommended with extensions: ESLint, Prettier, Tailwind CSS IntelliSense)

Verify your installation:
```bash
node --version  # Should be v18.0.0 or higher
npm --version   # Should be v8.0.0 or higher
git --version   # Should be v2.0.0 or higher
