import User from '../model/User.js';

export default class UserDetailsService {
  constructor() {
    this._user = User;
  }

  async updateDetail(user_id, detail) {
    try {
      const user = await this._user.findById(user_id);

      user.user_details[Object.keys(detail)[0]] = Object.values(detail)[0];

      await user.save();

      return user;
    } catch (error) {
      throw error;
    }
  }
}
