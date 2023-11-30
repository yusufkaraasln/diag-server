import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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' // defaults to process.env["OPENAI_API_KEY"]
});

const userComplaints = 'Basketbol oynarken top parmağımın dikine çarptı şuanda şişik.';
const height = 175;
const closestPainArea = 'Sağ el';
const previousIllnesses = ['Alerji', 'Astım'];
const currentIllnesses = [];
const weight = 70;
const age = 30;
const gender = 'Erkek';

const prompt = `
Boy: ${height} cm
Önceki Hastalıklar: ${previousIllnesses.join(', ')}
Mevcut Hastalıklar: ${currentIllnesses.join(', ')}
Kilo: ${weight} kg
Yaş: ${age}
Cinsiyet: ${gender}
En yakın ağrı bölgesi: ${closestPainArea}
Kullanıcının şikayetleri: ${userComplaints}

Bu bilgilere göre kullanıcının tanısı nedir?
 (Tek bir tanı ismi ver,
     birden fazla tanı ismi verme,
      tek bir tanı ismi vermeni istiyorum ve açıklama yapmanı asla ama asla istemiyorum parantezler içersinde ekstra bilgi verme,
       tanı tıp dilinde olmalı, tanı ismi verirken tıp dilinde ver.)`;

async function main() {
  const checkMedicalPrompt = `
    Kulalnıcı şikayetleri: ${userComplaints}

    "Kullanıcı Şikayetleri" kısmı sadece tıp,
    günlük hastalık şikayetleri,
     tanı koymaya yardımcı bir propmt ise true yazdır,
      alakasız bişi ise asla ama asla cevap verme sadece false yaz,fakat burada çok dikkatli olmalısın,
          false yazarken konu ile ilgili olup olmadığını iyi düşün, eğer konu ile ilgili ise true yazdır,
          yoksa false yaz. senden cevap için bir prompt istemiyorum, sadece true veya false yazdır. enum gibi düşün.
          [true, false] gibi bir şey olmalı. sadece true veya false yazdır. enum gibi düşün.`;

  const checkMedicalPromptCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: checkMedicalPrompt }],
    max_tokens: 1,
    model: ''
  });

  const checkMedicalPromptCompletionChoices = checkMedicalPromptCompletion.choices[0].message;

  const chatCompletion =
    checkMedicalPromptCompletionChoices.content === 'true' &&
    (await openai.chat.completions
      .create({
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 50,
        temperature: 0.8,
        model: 'gpt-3.5-turbo-1106'
      }))


    console.log(chatCompletion.choices);
}

main();

// const response = {
//   is_valid_prompt: true, // (Boolean) Girdi kısmına hastalık ile alakalı bir prompt girilmiş mi? Bunun nedeni hastalık ile alakalı bir prompt girilmediyse, hastalık ile alakalı bir prompt girilmesi istenir.
//   general_summary_and_advice: '...',
//   diseases_and_descriptions: [
//     {
//       disease_name: '...', // Hastalığın sadece adı
//       why: '...', // Neden böyle
//       disease_medicine_department: '...'
//     },
//     {
//       disease_name: '...',
//       why: '...',
//       disease_medicine_department: '...'
//     },
//     {
//       disease_name: '...',
//       why: '...',
//       disease_medicine_department: '...'
//     }
//   ]
// };
