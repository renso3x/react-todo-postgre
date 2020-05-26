# Todo Express + Postgres + React TS

A simple implementation of express using postgres database with react in the frontend. I choose to use express because it is lightweight and easy to setup an api for the postgres client I use sequelize to connect to the postgres. In the frontend I use react with typescript template, typescript because it is clean when declaring component.

## File Structure
- client - react app
- server - express api


## Installation

Server
```bash
cd server
```
Install packages
```bash
yarn
```
Migrate Model
```bash
sequelize db:migrate
```
Seeders
```bash
sequelize db:seed:all
```
Start API
```bash
yarn dev
```
Run test
```bash
yarn test
```
- coverage will be in the output/coverage/jest/*

Install client dependency
```bash
cd client && yarn
```
Run client app
```bash
yarn start
```