import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlitzmartGraphqlModule } from './blitzmart-graphql/blitzmart-graphql.module';
import { BlitzmartRestapiModule } from './blitzmart-restapi/blitzmart-restapi.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SupplierResolver } from './blitzmart-graphql/resolvers/supplier.resolver';
import { SupplierOptionsResolver } from './blitzmart-graphql/resolvers/supplier-options.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from './blitzmart-graphql/entities/supplier.entity';
import { SupplierOptions } from './blitzmart-graphql/entities/supplier-options.entity';
import { SupplierModule } from './blitzmart-graphql/supplier.module';
import { SupplierOptionsModule } from './blitzmart-graphql/supplier-options.module';
@Module({
  imports: [        
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/blitzmart-graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin123',
      database: 'blitzmart',
      entities: [
        Supplier, 
        SupplierOptions],
      synchronize: true,

    }),
    SupplierModule,
    // BlitzmartGraphqlModule, 
    //BlitzmartRestapiModule
    
  ],
  controllers: [ ],
  providers: [],
})
export class AppModule {}
