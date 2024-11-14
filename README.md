# Devoost - Prueba - API

API desarrollada con Docker - Sail

## Environment Variables

Antes de ejecutar el proyecto mantener las siguientes variables de entorno:

`DB_CONNECTION=mysql`
`DB_HOST=mysql`
`DB_PORT=3306`
`DB_DATABASE=laravel`
`DB_USERNAME=sail`
`DB_PASSWORD=password`

Luego de ejecutar sail cambia las variables por las siguientes y continua con la instalación de forma normal

`DB_CONNECTION=mysql`
`DB_HOST=mysql`
`DB_PORT=3306`
`DB_DATABASE=devoost`
`DB_USERNAME=root`
`DB_PASSWORD=password`
`FORWARD_DB_PORT=3307`

## Installation

Instala el proyeco

```bash
    composer install

    ./vendor/bin/sail up | sail up

    ./vendor/bin/sail artisan migrate --seed | sail artisan migrate --seed
```

# Devoost - Prueba - Front-End

Proyecto de prueba para vacamte.

El desarrollo del front-end se realizo con React usando PNPM.

## Installation

Instala el proyeco "client" usando PNPM

```bash
    pnpm install
    cd client

    pnpm dev
```

## Build

```bash
    pnpm build
```

## Documentation
