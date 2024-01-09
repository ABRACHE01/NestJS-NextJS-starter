# NestJS-NextJS-Monorepo

## Description & folder structure

Nestjs & nextjs monorepo starter repository.  
```bash
root
--apps 
---client 
---server
``` 

* please make sure u run the folowing commands in the root derectory *.

## Installation 

```bash
$ pnpm install
```

## Running the apps (server - client)

```bash
# runing the (server - client) at the sam time  
$ pnpm run dev

```

## comands for a better managment. 

```bash
#  adding a packages in the client dir 
$ pnpm add <package> --filter=client 

#  adding a packages in the server dir 
$ pnpm add <package> --filter=server 

```

```bash
#  this to insert a command in the server from the root dir "nest commands for example .."
$ pnpm --filter server <command>

#  this to insert a command in the client from the root dir 
$ pnpm --filter client <command>

```
