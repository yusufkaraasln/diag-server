import Result from '../dto/Result.js';
import UserConfigurationService from '../service/UserConfigurationService.js';

export default class UserConfigurationController {
  constructor() {
    this._userConfigurationService = new UserConfigurationService();
    this.updateConfigurationSteps = this.updateConfigurationSteps.bind(this);
  }

  async updateConfigurationSteps(req, res) {
    try {
      const { id } = req.user;
      const {user_details} = req.body;
      const user = await this._userConfigurationService.updateConfigurationSteps(id, user_details);
      res.json(Result.success('Update configuration steps success', user));
    } catch (error) {
      res.status(500).json(Result.fail(error.message, null));
    }
  }
}
