<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
<img src="./public/icon.ico" alt="Logo" height=50">

<h3 align="center">3Line Frontend Assessment Task</h3>

  <p align="center">
 The web application is a User Dashboard majorly for the assessment of my application for the role of a Frontend Engineer at 3line.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Template</a>
      <ul>
        <li><a href="#technologies">Technologies Used</a></li>
        <li><a href="#project-structure">Project Structure</a></li>
        <li><a href="#conventions-followed">Conventions Followed</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

`...`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Technologies Used

- Framework: React (18) + TypeScript
- Build Tool: Vite (5)
- UI: Shadcn and Tailwindcss
- Styling: CSS
- Formatting: ESLint and Prettier
- Testing: Jest
- Git hooks: Husky

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Project Structure

    .
    ├── __mocks__                       # Mock files for testing
    ├── __tests__
    |   ├── components                  # Contains tests for components.
    |   ├── layouts                     # Contains tests for layouts.
    ├── .husky
    |   ├── commit-msg                  # Contains to check the commit message if it follows the global standard of commit message
    |   ├── post-commit                 # Contains instruction to run when a commit is triggered after actually committing
    |   ├── pre-commit                  # Contains instruction to run when a commit is triggered before actually committing
    |   ├── pre-push                    # Contains instruction to run when a commit is triggered before pushing the committed changes
    ├── coverage                        # Test coverage reports (auto-generated)
    ├── public                          # Project assets - like svgs, images, and static files
    │   ├── assets                      # Other assets like lotties, images
    │   ├── icon.ico                    # App favicon
    ├── src                             # All project source files
    │   ├── components                  # Reusable components
    │   │   ├── ui                      # UI components (Button, etc.)
    │   ├── icons                       # Icon components
    │   ├── lib                         # Utility constants, function, validations etc.
    │   │   ├── utils.ts                # Utility functions and other important functions.
    │   │   ├── constant.ts             # App constants
    │   │   ├── menu-list.ts            # Menu configuration
    │   │   ├── types                   # Types and Interfaces for variables, constants, payload etc.
    │   │   ├── schema                  # Validation Schema for forms
    │   ├── pages                       # Application pages
    │   │   ├── coming-soon             # Coming soon page
    │   │   ├── not-found               # 404 page
    │   │   ├── settings                # Settings page
    │   ├── App.tsx                     # Main app component
    │   ├── main.tsx                    # Application entry point
    │   ├── protected-layout.tsx        # Protected route layout wrapper
    │   ├── index.css                   # Global CSS with Tailwind imports
    │   ├── vite-env.d.ts               # Vite environment types
    ├── .env                            # Environment variables
    ├── .eslintrc.json                  # ESLint configuration
    ├── .gitignore                      # Git ignore rules
    ├── .lintstagedrc.js                # Lint-staged configuration
    ├── .prettierrc.ts                  # Prettier configuration
    ├── babel.config.js                 # Babel configuration
    ├── branch-name-lint.json           # Branch name linting rules
    ├── commitlint.config.js            # Commit message linting configuration
    ├── components.json                 # ShadCN configuration
    ├── index.html                      # HTML entry point
    ├── jest.config.ts                  # Jest testing configuration
    ├── jest.setup.js                   # Jest setup file
    ├── package.json                    # Project dependencies and scripts
    ├── postcss.config.mjs              # PostCSS configuration
    ├── README.md                       # Project documentation
    ├── tailwind.config.ts              # Tailwind CSS configuration
    ├── tsconfig.json                   # TypeScript configuration for app
    ├── tsconfig.node.json              # TypeScript configuration for Node (Vite config)
    ├── vercel.json                     # Vercel deployment configuration
    └── vite.config.ts                  # Vite build configuration

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Conventions Followed

- All Folders are lowercases
- There should be only one level of folder in each component folder (i.e. `/components/{component}/{subcomponent}` should be the deepest tree level in the component folder).
- Functions use camelCases while components use kebab-case for naming comvention, file names should be lowercase (words should be separated by hyphens).
- `...`
<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/iwa-temmy/3line-medusa-app.git
   ```
2. cd into the project
   ```sh
   cd 3line-medusa-app
   ```
3. Install packages
   ```sh
   npm install
   ```
4. Start up project
   ```sh
   npm run dev
   ```
5. To run tests
   ```sh
   npm run test
   ```
6. To build for production
   ```sh
   npm run build
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Working on the Medusa React App

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
6. To create a new component, add it to the `src/components` directory
7. Use the `@/` alias to import from the src directory (e.g., `import { cn } from '@/lib/utils'`)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
