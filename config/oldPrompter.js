// import OpenAI from 'openai';
// import dotenv from 'dotenv';

// dotenv.config();

// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// const openai = new OpenAI({
//   apiKey: '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'
// });

// const userComplaints = 'Top oynarken, top orta parmağıma dik geldi ve şuanda şişik var';
// const height = 175;
// const closestPainArea = 'Kafa';
// const previousIllnesses = ['Kırık', 'Çıkık'];
// const currentIllnesses = [];
// const weight = 70;
// const age = 30;
// const gender = 'Erkek';

// const prompt = `
// Boy: ${height} cm
// Önceki Hastalıklar: ${previousIllnesses.join(', ')}
// Mevcut Hastalıklar: ${currentIllnesses.join(', ')}
// Kilo: ${weight} kg
// Yaş: ${age}
// Cinsiyet: ${gender}
// En yakın ağrı bölgesi: ${closestPainArea}
// Kullanıcının şikayetleri: ${userComplaints}

// Bu bilgilere göre kullanıcının tanısı nedir?
//  (Tek bir tanı ismi ver,
//      birden fazla tanı ismi verme,
//      kısa bir tanı ismi ver,
//       uzun bir tanı ismi verme,
//       maksimum 3 kelime ile tanı ismi ver,
//       Doktorların kullandığı tanı isimlerini kullan (bu çok çok önemli)),

//       tek bir tanı ismi vermeni istiyorum ve açıklama yapmanı asla ama asla istemiyorum parantezler içersinde ekstra bilgi verme,
//        tanı tıp dilinde olmalı, tanı ismi verirken tıp dilinde ver.)

//        Sonrasında kullanıcıya neden böyle bir tahminde bulunduğunu söyle.
//        Çıktı şu şekilde olmalı:
//        Hastalık Adı: ...
//        Gidilmesi Gereken Doktor Bölümü: ...
//        Neden böyle bir tahminde bulundum: ...
//        Genel Özet ve Tavsiye: ...
//        `;

// const checkMedicalPrompt = `
//        Kullanıcı şikayetleri: ${userComplaints}
//        "Kullanıcı Şikayetleri" kısmı,
//        doktora gittiğinde doktora söylediği şikayetler gibi olmalı,

//         tanı koymaya yardımcı bir propmt ise true yazdır,
//          alakasız bişi ise asla ama asla cevap verme sadece false yaz,fakat burada çok dikkatli olmalısın,
//              false yazarken konu ile ilgili olup olmadığını iyi düşün, eğer konu ile ilgili ise true yazdır,
//              yoksa false yaz. senden cevap için bir prompt istemiyorum, sadece true veya false yazdır. enum gibi düşün.
//              [true, false] gibi bir şey olmalı. sadece true veya false yazdır. enum gibi düşün.`;

// async function main() {
//   const checkMedicalPromptCompletion = await openai.chat.completions.create({
//     messages: [{ role: 'user', content: checkMedicalPrompt }],
//     max_tokens: 1,
//     model: 'gpt-4-1106-preview'
//   });

//   const isValidPrompt = Boolean(checkMedicalPromptCompletion.choices[0].message.content == 'true');
//   const chatCompletion =
//     isValidPrompt &&
//     (await openai.chat.completions.create({
//       messages: [{ role: 'user', content: prompt }],
//       max_tokens: 300,
//       temperature: 0.8,
//       model: 'gpt-4-1106-preview'
//     }));

//   console.log({
//     success: isValidPrompt,
//     message: isValidPrompt
//       ? 'Prompt başarılı bir şekilde çalıştı.'
//       : 'Prompt başarısız bir şekilde çalıştı.',

//     data: {
//       disease_name: isValidPrompt ? chatCompletion.choices[0].message.content : null
//     }
//   });
// }

// main();

// // const response = {
// //   is_valid_prompt: true, // (Boolean) Girdi kısmına hastalık ile alakalı bir prompt girilmiş mi? Bunun nedeni hastalık ile alakalı bir prompt girilmediyse, hastalık ile alakalı bir prompt girilmesi istenir.
// //   general_summary_and_advice: '...',
// //   diseases_and_descriptions: [
// //     {
// //       disease_name: '...', // Hastalığın sadece adı
// //       why: '...', // Neden böyle
// //       disease_medicine_department: '...'
// //     },
// //     {
// //       disease_name: '...',
// //       why: '...',
// //       disease_medicine_department: '...'
// //     },
// //     {
// //       disease_name: '...',
// //       why: '...',
// //       disease_medicine_department: '...'
// //     }
// //   ]
// // };

const result =
  'Hastalık Adı: Parmağın İncinmesi\nGidilmesi Gereken Doktor Bölümü: Ortopedi\nNeden böyle bir tahminde bulundum: Topun dik gelmesiyle meydana gelen ani darbe sonucu parmakta oluşan şişlik, bir incinmeye işaret ediyor.\nGenel Özet ve Tavsiye: Parmağın şişliği ve meydana gelen travma nedeniyle bir ortopedi uzmanına başvurmanız önerilir. Buz uygulaması, şişliği ve ağrıyı azaltabilir. Doktorunuz gerekli görürse röntgen veya diğer görüntüleme yöntemleriyle daha detaylı bir değerlendirme yapabilir.';

const splitted_data = result.split('\n').map((item) => item.split(': '));

const emptyObject = {
  disease_name: '',
  disease_medicine_department: '',
  why: '',
  general_summary_and_advice: ''
};

const data = splitted_data.reduce((acc, item) => {
  const [key, value] = item;
  if (key === 'Hastalık Adı') {
    acc.disease_name = value;
  } else if (key === 'Gidilmesi Gereken Doktor Bölümü') {
    acc.disease_medicine_department = value;
  } else if (key === 'Neden böyle bir tahminde bulundum') {
    acc.why = value;
  } else if (key === 'Genel Özet ve Tavsiye') {
    acc.general_summary_and_advice = value;
  }

  return acc;
}, emptyObject);

console.log(data);
