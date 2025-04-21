# 11ty Prototype for bloomworks.digital

## Developer Setup

You'll need Docker installed to perform these instructions. All commands are expected to be run in a *NIX like environment (i.e. Linux, Windows Subsystem for Linux, macOS, etc.).

### First Time Setup

You only need to do this the first time, or as specificed.

1. Clone this repo
1. `cd` into the base directory
1. Build the Docker image: `sh build-image.sh` (run when `docker/Dockfile` changes)
1. Install dependencies: `sh install-deps.sh` (run when `package.json` changes)

### Run Server

This will run a server at [http://localhost:8080](http://localhost:8080) and live reload files as they change. Restart this (CTRL+C, then run again) if there are signficiant configuration changes.

```sh
sh run-server.sh
```

Press CTRL+C to shut down the server.

### Run Shell

This runs the container's Bash terminal so that you can run `node`, `npm`, or other commands in the build environment:

```sh
sh run-bash.sh
```

Type `exit` to leave the container terminal.

### Build Site

This builds the static website files, and dumps in `11ty/_site`.

```sh
sh build-site.sh
```

## Build the Site for Production

You'll need Docker installed to perform these instructions.

1. Build the Docker image and the site: `sh build-all.sh`
1. The built site will be in `11ty/_site`