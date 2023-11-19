import Result from '../dto/Result.js';
import Jwt from '../middleware/security.js';
import User from '../model/User.js';
import { v4 as uuidv4 } from 'uuid';

class AuthService {
  constructor() {
    this._user = User;
  }

  async guestLogin() {
    try {
      const user = await this._user.create({
        name: `Guest-${uuidv4()}`,
        auth_type: 'guest'
      });

      const token = Jwt.sign({ id: user._id, type: user.type, role: user.role });

      const { __v, ...userWithoutVersion } = user._doc;

      return Result.success('Guest login success', { user: userWithoutVersion, token });
    } catch (error) {
      return Result.fail(error.message, null);
    }
  }

  async googleLogin(idToken) {
    try {
      if (!idToken) {
        return Result.fail('Missing idToken', null);
      }

      const { email, name, picture } = Jwt.decode(idToken);

      const user = await this._user.findOne({ email });

      if (!user) {
        try {
          const newUser = await this._user.create({
            name,
            email,
            avatar: picture,
            auth_type: 'google'
          });

          const token = Jwt.sign({ id: newUser._id, type: newUser.type, role: newUser.role });

          const { __v, ...userWithoutVersion } = newUser._doc;

          return Result.success('Google register success', { user: userWithoutVersion, token });
        } catch (error) {
          console.log(error);
        }
      }

      const token = Jwt.sign({ id: user._id, type: user.type, role: user.role });

      const { __v, ...userWithoutVersion } = user._doc;

      return Result.success('Google login success', { user: userWithoutVersion, token });
    } catch (error) {
      return Result.fail(error.message, null);
    }
  }

  async getUserByToken(token) {
    try {
      if (!token) {
        return Result.fail('Missing token', null);
      }

      const { id } = Jwt.decode(token);
      const user = await this._user.findOne({ _id: id });

      if (!user) {
        return Result.fail('User not found', null);
      }

      const { __v, ...userWithoutVersion } = user._doc;

      return Result.success('Get user by token success', userWithoutVersion);
    } catch (error) {
      return Result.fail(error.message, null);
    }
  }
}

export default AuthService;
