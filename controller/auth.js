import Result from '../dto/Result.js';
import AuthService from '../service/AuthService.js';

class AuthController {
  constructor() {
    this._authService = new AuthService();
    this.guestLogin = this.guestLogin.bind(this);
    this.googleLogin = this.googleLogin.bind(this);
    this.getUserByToken = this.getUserByToken.bind(this);
  }

  async guestLogin(req, res) {
    try {
      const user = await this._authService.guestLogin();
      res.json(user);
    } catch (error) {
      res.status(500).json(Result.fail(error.message, null));
    }
  }

  async googleLogin(req, res) {
    try {
      const { idToken } = req.body;
      const user = await this._authService.googleLogin(idToken);

      res.json(user);
    } catch (error) {
      res.status(500).json(Result.fail(false, error.message, null));
    }
  }

  async test(req, res) {
    try {
      res.json('test');
    } catch (error) {
      res.status(500).json(Result.fail(error.message, null));
    }
  }

  async getUserByToken(req, res) {
    try {
      const { token } = req.body;
      const user = await this._authService.getUserByToken(token);
      res.json(user);
    } catch (error) {
      res.status(500).json(Result.fail(error.message, null));
    }
  }
}

export default AuthController;
