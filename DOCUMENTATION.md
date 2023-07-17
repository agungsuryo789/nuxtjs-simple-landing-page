# Project Documentation

## About

This application is a simple Nuxt 3 project example. Used for browse Cats data.

## Features

- Browse Cats data
- Search Cats data
- Create Cats Data

## Stack 

- Nuxt 3
- `$fetch` for data fetching
- Tailwind for CSS

## Folder Structure

```bash
├── assets/
├── components/
├── layouts/
├── pages/
│   ├── index.vue
├── public/
├── server/
```

- assets/: This directory contains your static assets like images, CSS, and other files that need to be processed by webpack.

- components/: It holds your Nuxt components that are used throughout your application.

- layouts/: A directory for defining layout components that wrap your pages.

- pages/: This directory contains your Nuxt components that represent the different pages of your application.

- index.vue: The main landing page of your application.

- public/: A directory for static files that will be served as-is by the server. These files are directly accessible by URL, without being processed by webpack.

- server/: This folder is not a standard part of the Nuxt.js folder structure. It might contain server-side code or server-specific configuration files if you have customized your server setup.

# Nuxt.js Configuration

The `nuxt.config.ts` file is the main configuration file for your Nuxt.js project. It allows you to customize various aspects of your Nuxt.js application, such as modules, plugins, build settings, and more. Located at root

## Basic Configuration

### `runtimeConfig`

Config for setting up your data fetching config such as `BASE_URL`

### `ssr`
- Type: `boolean`
- Default: `'true'`

You can set ssr to `false` to explicitly set your application into CSR
