import Result from '../dto/Result.js';
import User from '../model/User.js';

export default class UserConfigurationService {
  constructor() {
    this._user = User;
    this.updateConfigurationSteps = this.updateConfigurationSteps.bind(this);
  }

  async updateConfigurationSteps(user_id, user_details) {
    try {
      const user = await this._user.findById(user_id);

      if (!user.configuration_steps.completed) {
        user.configuration_steps.status.current++;
        const newCurrentStep = user.configuration_steps.status.current;
        user.configuration_steps.completed =
          newCurrentStep == user.configuration_steps.status.total;
        if (!user_details) {
          return Result.fail('User details is required', null);
        }
        user.user_details = user_details;
        await user.save();
        return user;
      } else {
        return Result.fail('Configuration steps already completed', null);
      }
    } catch (error) {
      throw error;
    }
  }
}
