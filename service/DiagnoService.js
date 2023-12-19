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
      const { user_details } = await this._user.findById(user_id);

      // wait for accept after remove comment

      // const checkRequest = await this._openAI.chat.completions.create({
      //   messages: [{ role: 'user', content: Prompter.checkValidPrompt(userComplaints) }],
      //   max_tokens: 1,
      //   model: 'gpt-4-1106-preview'
      // });

      const isValidPrompt = false

      // wait for accept after remove comment
      // checkRequest.choices[0].message.content == 'true';

      if (isValidPrompt) {
        const prompt = Prompter.diagnoPrompt({
          ...user_details,
          userComplaints,
          lang,
          closestPainArea
        });
        const res = await this._openAI.chat.completions.create({
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 300,
          temperature: 0.8,
          model: 'gpt-4-1106-preview'
        });
        const splitted_data = res.choices[0].message.content
          .split('\n')
          .map((item) => item.split(': '));

        const emptyObject = {
          disease_name: '',
          disease_medicine_department: '',
          why: '',
          general_summary_and_advice: ''
        };

        const data = splitted_data.reduce((acc, item) => {
          const [key, value] = item;
          if (key === 'Disease Name' || key === 'Hastalık Adı') {
            acc.disease_name = value;
          } else if (
            key === 'Recommended Doctor Specialty' ||
            key === 'Gidilmesi Gereken Doktor Bölümü'
          ) {
            acc.disease_medicine_department = value;
          } else if (
            key === 'Why I made this prediction' ||
            key === 'Neden böyle bir tahminde bulundum'
          ) {
            acc.why = value;
          } else if (key === 'General Summary and Advice' || key === 'Genel Özet ve Tavsiye') {
            acc.general_summary_and_advice = value;
          }

          return acc;
        }, emptyObject);

        return {
          success: true,
          message: 'Diagnosis successfully made.',
          data
        };
      } else {

        setTimeout(() => {
          
          return {
            success: false,
            message: 'Prompt is not valid.',
            data: null
          };
        }, 15000);
      }
    } catch (error) {
      throw error;
    }
  }
}
