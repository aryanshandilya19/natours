# Natours Application
Built with technologies:
node.js, express, MongoDB, mongoose

## Configuration

This project reads configuration from environment variables. During local development you can
create a `config.env` (or `.env`) file at the project root; those values are ignored by git
because the repository’s `.gitignore` already excludes `*.env` and `config.env` files.

Minimal variables required:

```dotenv
# remote MongoDB Atlas (password placeholder must be replaced by DATABASE_PASSWORD)
DATABASE=mongodb+srv://<USER>:<PASSWORD>@cluster0.uoeg9hu.mongodb.net/natours?retryWrites=true&w=majority
DATABASE_PASSWORD=<yourAtlasPassword>

# optional local database (used automatically in development)
DATABASE_LOCAL=mongodb://localhost:27017/natours
```

Additional environment variables control JWT secrets, email settings, Stripe keys and
so on; see `config.env` for examples.

### Behaviour summary

1. When `NODE_ENV` is `development` the server first attempts to connect to
   `DATABASE_LOCAL`. If that connection is refused and a remote URI is defined it
   automatically retries using `DATABASE`.
2. In any other `NODE_ENV` the code ignores `DATABASE_LOCAL` and uses `DATABASE`.
3. If a required variable is missing the process logs an error and exits early.

> ⚠️ Make sure you have a MongoDB server running locally if you intend to use
> `DATABASE_LOCAL`. Otherwise the fallback to the remote database will occur or
> the application will terminate.

## Running locally

```bash
npm install           # install dependencies
npm run build:js      # compile client-side JavaScript (parcel)
npm run dev           # start with nodemon
```

The `postinstall` script runs `npm run build:js` automatically, so a plain
`npm start` is enough after a fresh clone.

## Deploying to Render

1. Push this repository to GitHub (or connect your existing repo) and create a
   new *Web Service* on Render using the **Node** environment.
2. Set the following environment variables in the Render dashboard:
   * `NODE_ENV=production` (Render may already set this for you)
   * `DATABASE` (Atlas connection string with `<PASSWORD>` placeholder)
   * `DATABASE_PASSWORD` (your Atlas user password)
   * any other keys your app needs (JWT_SECRET, STRIPE_PUBLIC_KEY, etc.)
3. If you use MongoDB Atlas, remember to add Render’s outgoing IP(s) to the
   Network Access whitelist or allow `0.0.0.0/0` for convenience.
4. Render will `npm install` your dependencies and run the `postinstall` script
   which builds the client assets. The **Start Command** in Render should be
   `npm start` (the default for Node services).

Render automatically provides a random `PORT` environment variable; the
application uses that value when available.

> **Note:** some older ESLint configs (e.g. `eslint-config-airbnb`) have strict
> peer‑dependency requirements. If your build environment still complains
> about an `ERESOLVE` conflict you can either:
>
> ```bash
> npm install --legacy-peer-deps   # ignore peer dependency errors during install
> # or adjust your devDependencies to compatible versions (see package.json)
> ```
>
> The package.json in this repo already pins ESLint to `^8.x` to avoid such
> issues on Render’s Node 20 image.

A sample `.render.yaml` (optional) can be added:

```yaml
services:
  - type: web
    name: natours
    env: node
    buildCommand: "npm install"
    startCommand: "npm start"
    plan: free
```

See the Render docs for more details.

## Utilities

Several CLI scripts under `dev-data/` help you populate or clear the database.
They share the same configuration logic as `server.js`, so you can run them with
`node dev-data/createAdmin.js`, etc. No changes are required when the project is
hosted; simply make sure the appropriate environment variables are set in the
hosted environment.

## Notes

- The `public/js/bundle.js` file is built by Parcel; you can update the
  source in `public/js/index.js` and rebuild by running `npm run build:js`.
- Static assets are served from the `public/` directory, and view templates use
  Pug for server-side rendering.

