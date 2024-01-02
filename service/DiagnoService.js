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
      const { user_details } = await this._user.findById(user_id);

      const checkRequest = await this._openAI.chat.completions.create({
        messages: [{ role: 'user', content: Prompter.checkValidPrompt(userComplaints) }],
        max_tokens: 1,
        model: 'gpt-4-1106-preview'
      });

      const isValidPrompt = checkRequest.choices[0].message.content == 'true';

      if (isValidPrompt) {
        const prompt = Prompter.diagnoPrompt({
          ...user_details,
          userComplaints,
          lang,
          closestPainArea
        });
        const res = await this._openAI.chat.completions.create({
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 600,
          temperature: 0.8,
          model: 'gpt-4-1106-preview'
        });
        const splitted_data = res.choices[0].message.content
          .split('\n')
          .map((item) => item.split(': '));

        const emptyObject = {
          disease_name: '',
          disease_name_detailed_description: '',
          disease_symptoms: '',
          disease_treatment: '',
          disease_good_for: '',
          disease_medicine_department: '',
          why: '',
          general_summary_and_advice: ''
        };

        console.log(splitted_data);

        const data = splitted_data.reduce((acc, item) => {
          const [key, value] = item;
          if (key === 'Disease Name' || key === 'Hastalık Adı') {
            acc.disease_name = value;
          } else if (
            key === 'Disease Name Detailed Description' ||
            key === 'Hastalık Adı Detaylı Açıklaması'
          ) {
            acc.disease_name_detailed_description = value;
          } else if (
            key === 'Symptoms of Disease Name' ||
            key === 'Symptoms of the Disease Name' ||
            key === 'Hastalık Adının Semptomları'
          ) {
            acc.disease_symptoms = value;
          } else if (
            key === 'Treatment of Disease Name' ||
            key === 'Treatment of the Disease Name' ||
            key === 'Hastalık Adının Tedavisi'
          ) {
            acc.disease_treatment = value;
          } else if (
            key === 'Things that will be good for Disease Name' ||
            key === 'Things that will be good for the Disease Name' ||
            key === 'Hastalık Adına İyi Gelecek Şeyler'
          ) {
            acc.disease_good_for = value;
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

  /* async makeDiagno(user_id, userComplaints, closestPainArea, lang) {
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
  } */
}
