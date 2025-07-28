# Prototype of 11ty + Decap CMS for bloomworks.digital

⚠️ This is a prototype designed for internal decision-making and is not meant for public consumption!


## Developer Setup

TODO: Docker-based dev environment.

You’ll need Node.js v24+ to run this project. All commands are expected to be run in a *NIX like environment (i.e. Linux, Windows Subsystem for Linux, macOS, etc.).


### First Time Setup

You only need to do this the first time, or as specificed.

1. Clone this repo
1. `cd` into the base directory
1. Install dependencies: `npm install`


### Run Server

This will run a server at [http://localhost:8080](http://localhost:8080) and live reload files as they change. Restart this (CTRL+C, then run again) if there are signficiant configuration changes.

```sh
npm start
```

Press CTRL+C to shut down the server.


### Build Site

This builds the static website files, and dumps in `_site`.

```sh
npm run build
```


## Architecture

This project uses [11ty (Eleventy)](https://11ty.dev/) to build the Bloom Works website. All files that are part of the website live in `src`, with different types broken out into subfolders:

- `content` holds files that correspond to actual pages on the built site (e.g. the home page, blog posts, case studies, etc.).
- `_data` holds content that is referenced on various pages but does not represent actual pages itself (e.g. client lists, practice areas).
- `_includes` holds templates used to render the various pages in `content`.
- `static` holds files that will be copied to the root of the built site as-is.

Visual editing for content authors is handled via [Decap CMS](https://decapcms.org/). You can log into the admin interface at `/admin/`.
- When working on your local dev environment at https://localhost:8080/admin/, it will edit files in your local working directory that you can then commit to git.
- When working on the live site at https://bw-d-test-11ty-decap.netlify.app/admin/, it will edit files in GitHub and make new branches/PRs for draft content.
