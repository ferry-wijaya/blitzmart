import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './UserResolver';
import { UserService } from './UserService';
import { User } from '../../graphql/models/User';
import { UserSettingService } from './UserSettingService';
import { UserSettingsResolver } from '../../graphql/resolvers/UserSettingsResolver';
import { UserSetting } from 'src/graphql/models/UserSettings';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  providers: [
    UserResolver,
    UserService,
    UserSettingService,
    UserSettingsResolver,
  ],
})
export class UsersModule {}