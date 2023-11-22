import DeletedUser from '../model/DeletedUser.js';
import User from '../model/User.js';

export default class UserSettingsService {
  constructor() {
    this._user = User;
    this._deletedUser = DeletedUser;
  }

  async deleteUser(user_id) {
    try {
      const user = await this._user.findById(user_id);
      await this._user.deleteOne({ _id: user_id });
      this._deletedUser.create({
        old_id: user._id,
        name: user.name,
        auth_type: user.auth_type,
        role: user.role,
        avatar: user.avatar,
        email: user.email,
        configuration_steps: user.configuration_steps,
        user_details: user.user_details,
        old_createdAt: user.createdAt,
        old_updatedAt: user.updatedAt
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
}
