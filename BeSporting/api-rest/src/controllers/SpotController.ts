/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */

import { Request, Response } from 'express';
import User from '../models/UserSchema';
import Spot from '../models/Spot';

export default class SpotController {
  async index(req: Request, res: Response) {
    const { sport } = req.query;

    const sports = await Spot.find({ sports: sport });

    return res.status(200).json(sports);
  }

  async store(req: Request, res: Response) {
    const { filename } = req.file;
    const { company, sports, price } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      sports: sports.split(',').map((sport) => sport.trim()),
      price,
    });

    return res.json(spot);
  }
}
