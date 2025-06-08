# Microfrontend with Module Federation

This project demonstrates a microfrontend architecture using [Module Federation](https://module-federation.io/index.html). It consists of two providers (`kirby`, `pikmin`) and one consumer (`host`).

## Getting Started

Follow the steps below to run each application locally:

### 1. Start the `kirby` provider (on `localhost:3001`)

```bash
cd kirby
pnpm i
pnpm dev
```

### 2. Start the `pikmin` provider (on `localhost:3002`)

```bash
cd pikmin
pnpm i
pnpm dev
```

### 3. Start the `host` consumer (typically on `localhost:3000`)

```bash
cd host
pnpm i
pnpm dev
```

## Notes

Make sure all ports (3000, 3001, 3002) are available.

Each project must be running concurrently for the microfrontend setup to function correctly.
