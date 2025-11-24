import { USERNAME, USER_PASSWORD } from '@_config/env.config';
import { LoginUserModel } from '@_src/models/user.model';

export const testUser1: LoginUserModel = {
  username: USERNAME,
  userPassword: USER_PASSWORD,
};

export const incorrectCredentialsUser: LoginUserModel = {
  username: 'alo',
  userPassword: 'tran',
};

export const emptyPasswordUser: LoginUserModel = {
  username: 'alo',
  userPassword: '',
};

export const emptyUsernameUser: LoginUserModel = {
  username: '',
  userPassword: 'tran',
};

export const emptyUser: LoginUserModel = {
  username: '',
  userPassword: '',
};
