import Result from '../dto/Result.js';
import UserSettingsService from '../service/UserSettingsService.js';

export default class UserSettingsController {
  constructor() {
    this._userSettingsService = new UserSettingsService();
    this.deleteUser = this.deleteUser.bind(this);
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.user;
      const user = await this._userSettingsService.deleteUser(id);
      res.json(Result.success('Delete user success', user));
    } catch (error) {
      res.status(500).json(Result.fail(error.message, null));
    }
  }
}
