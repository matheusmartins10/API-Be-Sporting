import { Request, Response } from 'express';
import User from '../models/UserSchema';

export default class SessionController {
  async store(req: Request, res: Response) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.status(201).json(user);
  }
}
