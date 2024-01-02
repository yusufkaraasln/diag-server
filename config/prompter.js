export default class Prompter {
  static checkValidPrompt(userComplaints) {
    const checkPrompt = `User complaints: ${userComplaints}
    The part "User Complaints" should resemble the complaints a person would tell a doctor when visiting.
    "User Complaints" should not be empty,
    If it aids in diagnosing, print true; if it's irrelevant, never, under any circumstances, respond, only print false. However, you must be extremely careful here. When writing false, consider carefully whether it is related to the subject. If it is related, print true; otherwise, print false. I don't need a prompt from you for a response; just print true or false. Think of it like an enum – something like [true, false]. Only print true or false. Consider it like an enum.`;

    return checkPrompt;
  }

  static diagnoPrompt({
    tall,
    age,
    before_diseases,
    ongoing_diseases,
    weight,
    sex,
    closestPainArea,
    userComplaints,
    lang
  }) {
    const prompt =
      lang == 'tr'
        ? `Boy: ${tall} cm
        Önceki Hastalıklar: ${before_diseases.join(', ')}
        Mevcut Hastalıklar: ${ongoing_diseases.join(', ')}
        Kilo: ${weight} kg
        Yaş: ${age}
        Cinsiyet: ${sex}
        En yakın ağrı bölgesi: ${closestPainArea}
        Kullanıcının şikayetleri: ${userComplaints}
        
        Bu bilgilere göre kullanıcının tanısı nedir?
        (Tek bir tanı ismi ver,
            birden fazla tanı ismi verme,
            kısa bir tanı ismi ver,
            uzun bir tanı ismi verme,
            maksimum 3 kelime ile tanı ismi ver,
            Doktorların kullandığı tanı isimlerini kullan (bu çok çok önemli)),
        
        tek bir tanı ismi vermeni istiyorum ve açıklama yapmanı asla ama asla istemiyorum parantezler içinde ekstra bilgi verme,
        tanı tıp dilinde olmalı, tanı ismi verirken tıp dilinde ver.)
        
        Sonrasında kullanıcıya neden böyle bir tahminde bulunduğunu söyle.
        Çıktı şu şekilde olmalı:
        Hastalık Adı: ...
        Hastalık Adı Detaylı Açıklaması (Günlük hayattaki insanların anlayacağı şekilde): ...
        Hastalık Adının Semptomları: (Virgül ile ayrılmış şekilde)
        Hastalık Adının Tedavisi: (Virgül ile ayrılmış şekilde)
        Hastalık Adına İyi Gelecek Şeyler: (Virgül ile ayrılmış şekilde)
        Gidilmesi Gereken Doktor Bölümü: ...
        Neden böyle bir tahminde bulundum: ...
        Genel Özet ve Tavsiye: ...
        `
        : `Height: ${tall} cm
    Previous Diseases: ${before_diseases.join(', ')}
    Ongoing Diseases: ${ongoing_diseases.join(', ')}
    Weight: ${weight} kg
    Age: ${age}
    Gender: ${sex}
    Closest Pain Area: ${closestPainArea}
    User Complaints: ${userComplaints}
    
    Based on this information, what is the user's diagnosis?
    (Provide a single diagnosis,
        do not give multiple diagnosis names,
        provide a short diagnosis name,
        do not give a long diagnosis name,
        use a maximum of 3 words for the diagnosis name,
        use medical language when giving a diagnosis (this is very important)),
    
    I want you to provide a single diagnosis name and never, under any circumstances, provide an explanation in parentheses. The diagnosis should be in medical terms. When giving a diagnosis, do not provide extra information in parentheses.
    
    Afterward, tell the user why you made such a prediction.
    The output should be as follows:
    Disease Name: ...
    Disease Name Detailed Description (in a way that ordinary people can understand): ...
    Symptoms of Disease Name: (separated by commas)
    Treatment of Disease Name: (separated by commas)
    Things that will be good for Disease Name: (separated by commas)
    Recommended Doctor Specialty: ...
    Why I made this prediction: ...
    General Summary and Advice: ...
    `;

    return prompt;
  }
}
