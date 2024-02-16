# BLITZMART BE

Blitzmart BE adalah Aplikasi Backend Blitzmart

## PREPARATION

### CONFIGURE APIs QUERY LANGUAGE

#### GRAPHQL

`>> npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql --save-dev`

##### GENERATE NESTJS RESOURCE

`>> nest generate resources blitzmart-graphql`

Choose `GraphQL (Code First)`

or

`>> nest generate resources blitzmart-restapi`

Choose `REST-API`

### CONFIGURE DATABASE

#### USING MYSQL2

`>> npm install --save @nestjs/typeorm typeorm mysql2`

#### USING MONGOOSE

`>> npm i @nestjs/mongoose mongoose`

>> npm i --save class-validator class-transformer