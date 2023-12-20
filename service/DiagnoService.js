import OpenAI from 'openai';
import User from '../model/User.js';
import dotenv from 'dotenv';
import Prompter from '../config/prompter.js';
import Result from '../dto/Result.js';
import Truva from '../config/truva.js';

dotenv.config();

export default class DiagnoService {
  constructor() {
    this._user = User;
    this._openAI = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }

  async makeDiagno(user_id, userComplaints, closestPainArea, lang) {
    try {
      const checkRequest = await this._openAI.chat.completions.create({
        messages: [{ role: 'user', content: Prompter.checkValidPrompt(userComplaints) }],
        max_tokens: 1,
        model: 'gpt-4-1106-preview'
      });

      const isValidPrompt = checkRequest.choices[0].message.content == 'true';

      let data = null;

      if (isValidPrompt) {
        switch (closestPainArea) {
          case 'abs':
          case 'obliques':
            data = Truva.belly();
            break;

          case 'chest':
            data = Truva.chest();
            break;

          case 'lower-back':
          case 'upper-back':
            data = Truva.back();
            break;

          case 'biceps':
          case 'triceps':
          case 'forearm':
            data = Truva.arm();
            break;

          case 'hands':
            data = Truva.hand();
            break;

          case 'trapezius':
          case 'deltoids':
            data = Truva.shoulders();
            break;

          case 'head':
          case 'neck':
          case 'hair':
            data = Truva.head();
            break;

          case 'ankles':
          case 'hamstring':
          case 'knees':
          case 'quadriceps':
          case 'calves':
          case 'feet':
          case 'adductors':
          case 'gluteal':
          case 'tibialis':
            data = Truva.leg();
            break;

          default:
            break;
        }

        return {
          success: true,
          message: 'Diagnosis successfully made.',
          data
        };
      } else {
        return {
          success: false,
          message: 'Prompt is not valid.',
          data: null
        };
      }
    } catch (error) {
      throw error;
    }
  }
}
