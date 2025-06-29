Issue: 

Reproduction steps:

1. run provider 1:

    ```bash
    $ cd kirby
    $ pnpm i
    $ pnpm build
    $ pnpm preview
    ```

1. run provider 2:

    ```bash
    $ cd pikmin
    $ pnpm i
    $ pnpm build
    $ pnpm preview
    ```

1. run consumer:

    ```bash
    $ cd host
    $ pnpm i
    $ pnpm build
    $ pnpm preview
    ```

1. open `localhost:3000`
