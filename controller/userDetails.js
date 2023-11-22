import Result from '../dto/Result.js';
import UserDetailsService from '../service/UserDetailsService.js';

export default class UserDetailsController {
  constructor() {
    this._userDetailsService = new UserDetailsService();
    this.updateDetail = this.updateDetail.bind(this);
  }

  async updateDetail(req, res) {
    try {
      const { detail } = req.query;
      const { value } = req.body;
      const { id } = req.user;

      const user = await this._userDetailsService.updateDetail(id, {
        [detail]: value
      });
      res.json(Result.success('Update age success', user));
    } catch (error) {
      res.status(500).json(Result.fail(error.message, null));
    }
  }
}
