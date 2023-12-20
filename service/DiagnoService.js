import OpenAI from 'openai';
import User from '../model/User.js';
import dotenv from 'dotenv';
import Prompter from '../config/prompter.js';
import Result from '../dto/Result.js';

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

      if (isValidPrompt) {
        // const emptyObject = {
        //   disease_name: '',
        //   disease_medicine_department: '',
        //   why: '',
        //   general_summary_and_advice: ''
        // };

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
