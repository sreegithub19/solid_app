Versions used:

- Angular CLI: 14.1.2
- Node: 16.10.0
- Package Manager: npm 7.24.0


Commands to run:

- npm init
- yarn install --force
- npm run dev
- npm i @solidjs/router --force
- Removing "fsevents": https://stackoverflow.com/questions/57082249/how-to-fix-error-fsevents2-0-7-the-platform-linux-is-incompatible-with-thi

Note:

1. Refresh the URLs once navigated to puzzles/sudoku/chess.

# SolidStart

This directory is a brief example of a [SolidStart](https://github.com/ryansolid/solid-start) site that can be deployed to Vercel with zero configuration.

## Deploy Your Own

Deploy your own SolidStart project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/solidstart&template=solidstart)

_Live Example: https://solid-start-template.vercel.app_

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

This uses the [Vercel Adapter](https://github.com/solidjs/solid-start/tree/main/packages/start-vercel) for SolidStart.

```bash
npm run build
```

Demo:

https://user-images.githubusercontent.com/55496113/222207821-6a9d94c2-6f16-4043-83a0-8502ea9956e5.mp4
