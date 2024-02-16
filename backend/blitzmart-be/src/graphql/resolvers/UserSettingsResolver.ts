import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
import { UserSetting } from '../models/UserSettings';
import { UserSettingService } from 'src/modules/users/UserSettingService';

@Resolver()
export class UserSettingsResolver {
  constructor(private userSettingsService: UserSettingService) {}

  @Mutation((returns) => UserSetting)
  async createUserSettings(
    @Args('createUserSettingsData')
    createUserSettingsData: CreateUserSettingsInput,
  ) {
    const userSetting = await this.userSettingsService.createUserSettings(
      createUserSettingsData,
    );
    return userSetting;
  }
}