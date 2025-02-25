# DKCutter Turbo

[![Build Status](https://img.shields.io/github/actions/workflow/status/dkshs/dkcutter-turbo/ci.yml?branch=main)](https://github.com/dkshs/dkcutter-turbo/actions/workflows/ci.yml?query=branch%3Amain)
[![license mit](https://img.shields.io/badge/licence-MIT-5613B8)](LICENSE)

Powered by [DKCutter](https://github.com/dkshs/dkcutter), DKCutter Turbo is a framework for quickly starting projects with Turborepo.

- If you have problems with DKCutter Turbo, please open [issues](https://github.com/dkshs/dkcutter-turbo/issues/new).

## Usage

To scaffold an application using [DKCutter](https://github.com/dkshs/dkcutter), run any of the following four commands and answer the command prompt questions:

### npm

```bash
npx dkcutter gh:dkshs/dkcutter-turbo
```

### yarn

```bash
yarn dlx dkcutter gh:dkshs/dkcutter-turbo
```

### pnpm

```bash
pnpm dlx dkcutter gh:dkshs/dkcutter-turbo
```

### bun

```bash
bunx dkcutter@latest gh:dkshs/dkcutter-turbo
```

You'll be prompted for some values. Provide them, then a Monorepo using Turborepo will be created for you.

**Warning**: After this point, change 'Nicolas Contiero', etc to your own information.

Answer the prompts with your own desired [options][options-url]. For example:

```bash
✔ What is the project name? … My Awesome Project
✔ What is the project slug? … my-awesome-project
✔ What is the project description? … Behold My Awesome Project!
✔ What is the author name? … Nicolas Contiero (https://github.com/dkshs)
✔ What Automated Dependency Updater do you want to use? › Mend Renovate
Using pnpm@10.5.0

✔ Project created!
```

Enter the project and take a look around:

```bash
cd my-awesome-project/
ls
```

Now take a look at your repo. Don't forget to carefully look at the generated README.

## Advanced usage

If you want to start faster, you can use the following options:

| Flag                              | Description                                                                                      |
| --------------------------------- | ------------------------------------------------------------------------------------------------ |
| `--projectName <string>`          | The Project name.                                                                                |
| `--projectSlug <string>`          | The Project Slug.                                                                                |
| `--description <string>`          | The Project description.                                                                         |
| `--authorName <string>`           | The author name.                                                                                 |
| `--automatedDepsUpdater <string>` | Choose Automated Dependency Updater. [See for more info][options-url].                           |

[See for more information about options][options-url].

[options-url]: ./docs/project-generation-options.md

### Example

The following would be the structure of an application with [Renovate](https://github.com/renovatebot/renovate):

```bash
pnpm dlx dkcutter@latest gh:dkshs/dkcutter-turbo --automatedDepsUpdater renovate
```

## License

This project is licensed under the **MIT** License - see the [LICENSE](./LICENSE) file for details
