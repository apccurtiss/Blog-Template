# Blog Template
A simple blog template built with Eleventy. Makes it easy to turn markdown files into blog posts.

## Getting Started
To build the site, [download NPM](https://nodejs.org/en) then run:
```
$ npm install
$ npm run serve
```
This will compile all the files in `src/` into the output directory `dist/`, as well as start a live-reloading web server on port 8081 for testing.

## Hosting with Netlify
To host the site with Netlify, set it up to build from the Git repo and set the following settings under `Site configuration > Build & deploy`:

```
Build command: npm run build
Publish directory: dist
```