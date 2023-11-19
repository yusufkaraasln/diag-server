import jwt from 'jsonwebtoken';
import Result from '../dto/Result.js';
import Error from '../dto/Error.js';

class Jwt {
  static sign(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
      algorithm: 'HS256'
    });
  }

  static verify(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(401).json(Error.unauthorized('Unauthorized', 401));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json(Error.conflict('Token is invalid or expired', 401));
      }

      req.user = decoded;
      next();
    });
  }

  static decode(token) {
    return jwt.decode(token);
  }
}

export default Jwt;
