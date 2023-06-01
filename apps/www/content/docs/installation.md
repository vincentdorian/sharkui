---
position: 2
title: Installation
group: Getting Started
description: How to install and initialize sharkui in your Vue project
---

One of the most loved features of shadcn/ui is the CLI. SharkUI also brings this feature to make installing this library a breeze.
You can initialize the configuration via the CLI, however if you would like to just configure it manually, you can skip this page and directly go to the [Configuration](/docs/configuration).

## Installation via CLI

You can install sharkui via the CLI by running the following command:

```bash
npm install @sharkui/cli
```

Once the CLI is installed, you can initialize SharkUI within your project, by running the following command.

```bash
npx @sharkui/cli init
```

Running this command will be prompted to choose the framework you want to configure SharkUI for. To skip this step your framework of choice as an argument (for example `npx @sharkui/cli init nuxt` ). You can currently choose from the following three options:

- nuxt
- inertiajs-vue
- custom

This will provide you with a preset for your SharkUI configuration. By choosing `custom` you can install SharkUI via an install wizard that will prompt you for your desired config. Furthermore, it will install all the required dependiencies for your selected option.

## Dependencies

This library relies on the following three dependiences, that need to be installed to work.

- [Tailwindcss]('https://tailwindcss.com')
- [Ark UI]('https://ark-ui.com')
- [Lucide]('https://lucide.dev')
- [Tailwindcss-animate]('https://github.com/jamiebuilds/tailwindcss-animate')

### Manual Installation

In case you don't want to run the installation from the CLI, you can install the dependencies with the following command.

```bash
npm install -D tailwindcss tailwindcss-animate autoprefixer postcss lucide-vue-next @arkui/vue
```