import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlitzmartGraphqlModule } from './blitzmart-graphql/blitzmart-graphql.module';
import { BlitzmartRestapiModule } from './blitzmart-restapi/blitzmart-restapi.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierModule } from './suppliers/supplier.module';
import { UsersModule } from './users/users.module';
import { User } from './graphql/models/User';
import { UserSetting } from './graphql/models/UserSettings';
import { Supplier } from './blitzmart-graphql/entities/supplier.entity';
import { SupplierOptions } from './blitzmart-graphql/entities/supplier-options.entity';
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
        SupplierOptions,
        User,
        UserSetting
      ],
      synchronize: true,
      dropSchema: true
    }),
    SupplierModule,
    UsersModule
    //BlitzmartGraphqlModule, 
    //BlitzmartRestapiModule
    
  ],
  controllers: [ ],
  providers: [],
})
export class AppModule {}
