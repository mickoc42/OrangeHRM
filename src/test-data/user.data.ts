import { USERNAME, USER_PASSWORD } from "@_config/env.config";
import { LoginUserModel } from "@_src/models/user.model";

export const testUser1: LoginUserModel = {
  username: USERNAME,
  userPassword: USER_PASSWORD,
};
