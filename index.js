import express from 'express';
import dotenv from 'dotenv';
import Mongo from './config/db.js';
import cors from 'cors';
import AuthRoutes from './routes/auth.js';
import UserConfRoutes from './routes/userConfiguration.js';
import UserDetailsRoutes from './routes/userDetails.js';
import UserSettingsRoute from './routes/userSettings.js';
import DiagnoRoute from './routes/diagno.js';
import OpenAI from 'openai';

dotenv.config();

cors();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/health-check', (req, res) => {
  res.json({
    status: 'success',
    message: 'Server is running!',
    data: null
  });
});

app.use('/api', AuthRoutes);
app.use('/api', UserConfRoutes);
app.use('/api', UserDetailsRoutes);
app.use('/api', UserSettingsRoute);
app.use('/api', DiagnoRoute);

app.use('/extension', async (req, res) => {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const prompt = await openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Sana soru soracağım, cevap verirken lütfen soruyu tekrar etme.
        Sade ve anlaşılır cümleler ile cevap ver ve uzatma.
        Soru şıklı yani çoktan seçmeli olursa sadece şıkkı yaz. ve çok çok kısa bir şekilde açıkla.
        Eğer kodlama yapman gerekiyorsa, kodlama yapabilirsin.
        Soru: ${req.body.prompt}`
        }
      ],
      max_tokens: 1000,
      temperature: 0.8,
      model: 'gpt-4-1106-preview'
    });
    const data = prompt.choices[0].message.content;

    res.status(200).json({
      status: 'success',
      message: 'Request successful',
      data
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
      data: null
    });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
  Mongo.connect();
});
