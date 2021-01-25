# Project Name

Congo-Prime

We are cloning an Amazon-Prime Product Page for a PS5 controller. This specific repo is for the related product Carousel.

## Related Projects

  - https://github.com/Team-10-Thors-Hammer/berret-service
  - https://github.com/Team-10-Thors-Hammer/minh-service
  - https://github.com/Team-10-Thors-Hammer/jay-service
  - https://github.com/Team-10-Thors-Hammer/adrian-services

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [Dependancies](#Dependencies)

## Usage

- After starting the server and webpack (see below) you will find the app at http://localhost/4357

- The database will be seeded (see below) with 100 random "products" that you can cycle through. The right and left buttons will go through the products in order.

- Pages are pulled directly from the DB on each button push. The data is not stored on the client side or server side. This saves space on both, but does increase the number of api calls to the server.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0

## Development

To start Development use the following commands.

Start Server:
```sh
npm run dev:server
```
Start Webpack:
```sh
npm run dev:bundler
```
After the server is up and running you can seed MongoDB:
```sh
npm run db:seed
```
## Dependencies

Run the following command to install dependancies
```sh
npm install
npm install --incloud=dev
```
These should have everything you need to get started and deveplop with the application.