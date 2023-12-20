export default class Truva {
  static hand = () => {
    const datas = [
      {
        disease_name: 'Hand Arthritis',
        disease_medicine_department: 'Rheumatologist',
        why: 'The description of persistent hand pain without mention of a specific injury or localized area might suggest a chronic condition like arthritis. Arthritis can cause diffused pain in the hands, and while there are many types of arthritis, the general term can be applied here without specific diagnostic tests or additional detailed history.',
        general_summary_and_advice:
          "Arthritis is a common condition that causes pain and inflammation in a joint. In the hands, it can lead to discomfort, stiffness, and sometimes swelling. Early diagnosis and treatment are important to manage symptoms and maintain hand function. It is advised to consult a rheumatologist who can provide a definitive diagnosis and discuss appropriate treatment options, which may include medications, lifestyle changes, or physical therapy. It's also important to note that this is a provisional diagnosis and further medical evaluation is necessary.",
        source: [
          'https://my.clevelandclinic.org/health/diseases/7082-arthritis-of-the-wrist-and-hand',
          'https://my.clevelandclinic.org/health/diseases/21595-arthritis-in-wrist',
          'https://my.clevelandclinic.org/health/diseases/12061-arthritis'
        ]
      },
      {
        disease_name: 'Tendinitis',
        disease_medicine_department: 'Orthopedist',
        why: 'The intermittent pain in the hands, which seems to worsen with activity, could indicate inflammation of the tendons, known as tendinitis. This condition is common in individuals who perform repetitive tasks with their hands, leading to overuse of the tendons.',
        general_summary_and_advice:
          'Tendinitis is typically managed with rest, ice, and over-the-counter anti-inflammatory medications. If the pain persists, it is important to consult an orthopedist, who may recommend physical therapy, splints, or in some cases, corticosteroid injections or surgery to alleviate symptoms and prevent further damage. Avoiding activities that exacerbate the pain and maintaining good ergonomic practices can help prevent future episodes.',
        source: [
          'https://my.clevelandclinic.org/health/diseases/10919-tendonitis',
          'https://my.clevelandclinic.org/health/diseases/21553-achilles-tendinitis',
          'https://my.clevelandclinic.org/health/diseases/17449-rotator-cuff-tendonitis'
        ]
      },
      {
        disease_name: 'Bicipital Tendinitis',
        disease_medicine_department: 'Orthopedist',
        why: 'The symptoms described by the user, including intermittent pain in the biceps area that can sometimes feel like it affects the whole arm, suggest an issue with the biceps tendon. Bicipital tendinitis is an inflammation of the tendon that connects the biceps muscle to the bones in the shoulder and elbow, which can cause the type of pain described.',
        general_summary_and_advice:
          'Bicipital tendinitis can result from overuse, injury, or wear and tear. It is advisable to rest the affected arm, apply ice to reduce inflammation, and avoid activities that exacerbate the pain. An orthopedic doctor can provide a full evaluation, confirm the diagnosis, and may recommend physical therapy, medication, or other interventions to manage symptoms and promote healing. If symptoms persist or worsen, seek medical attention.',
        source: [
          'https://my.clevelandclinic.org/health/diseases/13203-shoulder-tendinitis',
          'https://my.clevelandclinic.org/health/diseases/10919-tendonitis',
          'https://my.clevelandclinic.org/health/diseases/21553-achilles-tendinitis'
        ]
      }
    ];
    return datas[Math.floor(Math.random() * datas.length)];
  };

  static arm = () => {
    const datas = [
      {
        disease_name: 'Epicondylitis',
        disease_medicine_department: 'Orthopedics',
        why: "The symptoms of intermittent pain in the forearms that seems to occasionally radiate throughout the arms can be indicative of epicondylitis, commonly known as tennis elbow or golfer's elbow depending on the location. It is a condition characterized by pain and tenderness, often caused by overuse or repetitive motion of the forearm muscles and tendons.",
        general_summary_and_advice:
          'It is advisable to rest the affected arm, apply ice, and avoid activities that exacerbate the pain. Over-the-counter pain relievers may help manage discomfort. If the condition does not improve with self-care, it is important to see a doctor, preferably an orthopedic specialist, who can provide a comprehensive evaluation and discuss additional treatment options, which may include physical therapy or other interventions.',
        source: [
          'https://my.clevelandclinic.org/health/diseases/21711-golfers-elbow-medial-epicondylitis',
          'https://my.clevelandclinic.org/locations/akron-general/medical-professionals/research/clinical-trials/tennis-elbow',
          'https://my.clevelandclinic.org/health/body/21738-tendon'
        ]
      },
      {
        disease_name: 'Tendinitis',
        disease_medicine_department: 'Orthopedics',
        why: 'The description of pain localized to the triceps and occasional spreading throughout the arm could be consistent with tendinitis. This condition involves inflammation of a tendon and is common in the arm due to repetitive motions or overuse, which can cause pain that may radiate.',
        general_summary_and_advice:
          "Tendinitis can often be managed with rest, ice, and over-the-counter pain relievers. It’s important to avoid activities that exacerbate the pain. Physical therapy may also be beneficial. If symptoms persist or worsen, it's advisable to seek evaluation and treatment from an orthopedic specialist.",
        source: [
          'https://my.clevelandclinic.org/health/diseases/10919-tendonitis',
          'https://my.clevelandclinic.org/health/diseases/21553-achilles-tendinitis',
          'https://my.clevelandclinic.org/health/diseases/17449-rotator-cuff-tendonitis'
        ]
      }
    ];
    return datas[Math.floor(Math.random() * datas.length)];
  };

  static leg = () => {
    const datas = [
      {
        disease_name: 'Adductor Tendinopathy',
        disease_medicine_department: 'Orthopedist',
        why: 'The specific mention of pain in the adductor region, which refers to the muscles on the inner thigh, along with intermittent pain in the legs, suggests an issue related to the musculoskeletal system, possibly involving the tendons of the adductor muscles.',
        general_summary_and_advice:
          "You should seek consultation with an orthopedist, who specializes in the musculoskeletal system. They can assess your knee and leg pain, perform a physical examination, and may recommend imaging studies like an MRI or ultrasound to confirm the diagnosis. Treatment may include physical therapy, rest, and pain management strategies. It's important to address such symptoms to prevent further injury or complications.",
        source: [
          'https://www.mayoclinic.org/medical-professionals/physical-medicine-rehabilitation/news/treatment-of-achilles-tendinopathy/mac-20555693',
          'https://www.mayoclinic.org/medical-professionals/physical-medicine-rehabilitation/news/use-of-percutaneous-pressured-hydrotenotomy-to-treat-patients-with-chronic-tendinopathy-symptoms/mac-20548758'
        ]
      },
      {
        disease_name: 'Polyarthralgia',
        disease_medicine_department: 'Rheumatology',
        why: 'The complaint of pain in multiple joint areas, especially the ankles, without specifying a clear pattern, could suggest a condition affecting several joints simultaneously. Polyarthralgia is a term that refers to pain in multiple joints and can have various causes, such as inflammatory, infectious, or even systemic conditions. Your age and the absence of a specific injury or previous disease history also point towards a systemic rather than localized issue.',
        general_summary_and_advice:
          'It is important for you to consult with a rheumatologist, who specializes in joint diseases, to undergo a thorough evaluation. The doctor will likely ask for your detailed medical history, perform a physical exam, and may request blood tests or imaging studies to determine the cause of your joint pain and provide appropriate treatment. In the meantime, try to rest the affected areas and avoid overexerting the joints that are causing pain.',
        source: ['https://www.healthline.com/health/polyarthralgia#treatment']
      },
      {
        disease_name: 'Peripheral Neuropathy',
        disease_medicine_department: 'Neurologist',
        why: 'The symptoms of pain in the calves that sometimes affect the entire legs may be suggestive of peripheral neuropathy, a condition resulting from damage to the nerves outside of the brain and spinal cord. This condition can cause pain, weakness, and numbness, particularly in the limbs.',
        general_summary_and_advice:
          'It is important to see a neurologist for a thorough evaluation. The doctor may perform nerve conduction studies or electromyography to assess nerve function. Blood tests might also be done to identify potential underlying causes, such as diabetes or vitamin deficiencies. Treatment will depend on the specific cause, if identified, and may include medication, lifestyle changes, or other therapies to manage symptoms and prevent further nerve damage.',
        source: [
          'https://www.mayoclinic.org/diseases-conditions/peripheral-neuropathy/symptoms-causes/syc-20352061',
          'https://www.mayoclinic.org/diseases-conditions/peripheral-neuropathy/diagnosis-treatment/drc-20352067'
        ]
      },

      {
        disease_name: 'Sciatica',
        disease_medicine_department: 'Orthopedist',
        why: 'The description of pain in the gluteal region that sometimes radiates down the legs suggests the possibility of sciatica, which is commonly caused by irritation or compression of the sciatic nerve. The pain distribution described fits with the typical pattern of sciatic nerve involvement.',
        general_summary_and_advice:
          'Sciatica is a condition where the sciatic nerve, which runs from your lower back down to your legs, becomes irritated or compressed. This can cause pain that radiates from your gluteal area down your legs. It is advisable to see an orthopedist, who can help diagnose and treat the condition. They may recommend rest, physical therapy, medication for pain relief, or other interventions depending on the severity of the symptoms. It is also important to avoid heavy lifting and prolonged sitting, which can exacerbate symptoms.',
        source: [
          'https://www.mayoclinic.org/diseases-conditions/sciatica/diagnosis-treatment/drc-20377441',
          'https://www.mayoclinic.org/diseases-conditions/sciatica/symptoms-causes/syc-20377435',
          'https://www.mayoclinic.org/diseases-conditions/sciatica/doctors-departments/ddc-20377442'
        ]
      },
      {
        disease_name: 'Arthralgia',
        disease_medicine_department: 'Orthopedist',
        why: 'The user has described a symptom of pain in the legs that seems to affect all the limbs intermittently. Arthralgia, which simply means joint pain, can be due to various underlying causes and is consistent with the symptom described.',
        general_summary_and_advice:
          'Leg pain can be due to a variety of reasons including overuse, muscle strain, or more serious conditions such as arthritis or circulation issues. Given the intermittent nature of the pain and its presence in the knees, it is advisable to see an orthopedist who specializes in the musculoskeletal system. The orthopedist can perform a physical examination, possibly order imaging tests, and provide a more precise diagnosis. In the meantime, resting the legs, applying ice or heat, and over-the-counter pain relievers may help alleviate discomfort. Regular exercise, a balanced diet, and maintaining a healthy weight can also help manage and prevent joint pain.',
        source: [
          'https://www.healthline.com/health/rheumatoid-arthritis/arthralgia#distinctions',
          'https://www.healthline.com/health/crohns-disease/advancing-crohns/crohns-disease-and-joint-pain#diagnosing-joint-pain'
        ]
      }
    ];
    return datas[Math.floor(Math.random() * datas.length)];
  };

  static chest = () => {
    const datas = [
      {
        disease_name: 'Angina Pectoris',
        disease_medicine_department: 'Cardiologist',
        why: "Your symptoms of intermittent chest pain could be indicative of angina pectoris, which is chest pain or discomfort that occurs when the heart muscle doesn't get enough oxygen-rich blood. It often happens with exertion or stress and goes away with rest or medication. Given that chest pain can have various causes, some of which are serious, it's important to have this symptom evaluated by a healthcare professional.",
        general_summary_and_advice:
          'It is essential to seek immediate medical attention for chest pain because it can be a sign of a serious heart condition. Make an appointment with a cardiologist, who specializes in heart health, to determine the exact cause of your pain and to receive appropriate treatment. Avoid strenuous activities until you have been evaluated, and follow up with any recommended tests or treatments. Your health and safety are the top priorities.',
        source: [
          'https://www.mayoclinic.org/diseases-conditions/angina/symptoms-causes/syc-20369373',
          'https://www.mayoclinic.org/diseases-conditions/angina/diagnosis-treatment/drc-20369378',
          'https://www.mayoclinic.org/diseases-conditions/angina/doctors-departments/ddc-20369379'
        ]
      },
      {
        disease_name: 'Angina Pectoris',
        disease_medicine_department: 'Cardiology',
        why: 'The symptom of intermittent chest pain can be indicative of angina, which is chest pain caused by reduced blood flow to the heart muscle. It is a common symptom of coronary artery disease and can be a sign of an impending heart attack. The fact that the pain is located in the chest and is described as affecting the entire chest area makes angina a plausible diagnosis.',
        general_summary_and_advice:
          'Chest pain should always be taken seriously, especially when it involves the whole chest area, as it can be a sign of heart-related issues. It is important to seek medical attention immediately to rule out life-threatening conditions such as a heart attack. A cardiologist will be able to perform the necessary diagnostic tests to determine the cause of the pain and provide the appropriate treatment. In the meantime, avoid any strenuous activities and seek emergency medical care if the pain is severe, persistent, or accompanied by other symptoms such as shortness of breath, sweating, nausea, or dizziness.',
        source: [
          'https://www.mayoclinic.org/diseases-conditions/angina/symptoms-causes/syc-20369373',
          'https://www.mayoclinic.org/diseases-conditions/angina/diagnosis-treatment/drc-20369378',
          'https://www.mayoclinic.org/diseases-conditions/angina/doctors-departments/ddc-20369379'
        ]
      },
      {
        disease_name: 'Angina Pectoris',
        disease_medicine_department: 'Cardiology',
        why: 'The description of chest pain that intensifies with physical activity could indicate a cardiac origin, such as angina, which is chest pain caused by reduced blood flow to the heart muscles.',
        general_summary_and_advice:
          'Chest pain, especially when associated with activity, warrants a prompt evaluation by a healthcare professional to rule out serious heart conditions. It is advised to see a cardiologist for a thorough examination, which may include an electrocardiogram (ECG), stress test, and other diagnostic measures to determine the cause of the chest pain and to receive appropriate treatment. Avoid strenuous activity until you have been evaluated. If the pain becomes severe, is accompanied by other symptoms like shortness of breath, sweating, nausea, or radiates to the arm or jaw, seek immediate medical attention as these could be signs of a heart attack.',
        source: [
          'https://www.mayoclinic.org/diseases-conditions/angina/symptoms-causes/syc-20369373',
          'https://www.mayoclinic.org/diseases-conditions/angina/diagnosis-treatment/drc-20369378',
          'https://www.mayoclinic.org/diseases-conditions/angina/doctors-departments/ddc-20369379'
        ]
      }
    ];
    return datas[Math.floor(Math.random() * datas.length)];
  };

  static shoulders = () => {
    const datas = [
      {
        disease_name: 'Trapezius Myalgia',
        disease_medicine_department: 'Orthopedist',
        why: 'The description of pain in the trapezius area suggests muscular discomfort. Myalgia refers to muscle pain, which in this case is located in the trapezius, a large muscle that extends from the back of the neck and shoulders to the mid-back. Given the lack of specific injury or ongoing disease noted and the fact that the pain seems to be localized and intermittent, it suggests a muscular issue rather than a systemic or neurological one.',
        general_summary_and_advice:
          'Trapezius myalgia can result from poor posture, overuse, stress or tension, or even holding the head and shoulders in an awkward position for extended periods. It would be advisable to assess daily habits that may contribute to the pain, such as sitting at a computer for long hours without ergonomic support, carrying heavy loads, or lack of exercise. Incorporating stretching and strengthening exercises for the neck and shoulders, ensuring proper posture, taking regular breaks to move if sitting for long periods, and possibly using heat therapy to alleviate discomfort might help. If the pain persists, worsens, or is accompanied by other symptoms, a consultation with an orthopedist is recommended for a more thorough evaluation and treatment plan.',
        source: [
          'https://www.physio-pedia.com/Trapezius_Myalgia#:~:text=Trapezius%20myalgia%20(TM)%20is%20the,a%20few%20days%20or%20longer.'
        ]
      },
      {
        disease_name: 'Shoulder Impingement',
        disease_medicine_department: 'Orthopedist',
        why: 'The description of intermittent pain in the shoulder area, particularly in the deltoids, is suggestive of shoulder impingement syndrome. This condition occurs when the tendons of the rotator cuff become irritated and inflamed as they pass through the subacromial space, leading to pain with movement of the shoulder.',
        general_summary_and_advice:
          'Shoulder impingement can result from repetitive overhead activity, injury, or degenerative changes. It is important to consult with an orthopedist who can perform a physical examination and possibly imaging studies to confirm the diagnosis. Treatment may include rest, ice, physical therapy, and anti-inflammatory medications. Avoiding activities that exacerbate the pain until you have been evaluated by a healthcare professional is prudent.',
        source: [
          'https://my.clevelandclinic.org/health/diseases/7079-shoulder-impingement-syndrome',
          'https://my.clevelandclinic.org/health/treatments/21785-shoulder-arthroscopy',
          'https://my.clevelandclinic.org/health/treatments/21801-arthroscopy'
        ]
      },
      {
        disease_name: 'Shoulder Tendinitis',
        disease_medicine_department: 'Orthopedist',
        why: 'The description of intermittent shoulder pain without mention of a specific incident or injury, and without indicating a systemic condition, suggests a musculoskeletal issue. Shoulder tendinitis, which is inflammation of the tendons in the shoulder region, often presents with generalized shoulder pain that can vary in intensity and can be aggravated by movement or certain activities.',
        general_summary_and_advice:
          'The patient should consider seeing an orthopedist, who specializes in the musculoskeletal system, for an accurate diagnosis and treatment plan. The orthopedist may recommend rest, ice, anti-inflammatory medications, physical therapy, or other interventions based on the severity of the tendinitis. It is also important for the patient to avoid activities that exacerbate the pain until they have been evaluated by a healthcare professional.',
        source: [
          'https://my.clevelandclinic.org/health/diseases/13203-shoulder-tendinitis',
          'https://my.clevelandclinic.org/health/diseases/17535-swimmers-shoulder',
          'https://my.clevelandclinic.org/health/treatments/21785-shoulder-arthroscopy'
        ]
      }
    ];

    return datas[Math.floor(Math.random() * datas.length)];
  };

  static belly = () => {
    const datas = [
      {
        disease_name: 'Abdominal Pain',
        disease_medicine_department: 'General Practitioner or Gastroenterologist',
        why: 'Abdominal pain can be due to a wide range of causes, from benign and transient conditions to serious and urgent medical problems. Given the nonspecific nature of the symptoms described and the lack of detailed information on the characteristics of the pain, its duration, associated symptoms, or triggers, a specific diagnosis cannot be made without further evaluation.',
        general_summary_and_advice:
          "It's important to consult a healthcare professional who can perform a physical examination, and possibly order laboratory tests, imaging studies, or other diagnostic procedures to determine the cause of the abdominal pain. Depending on the findings, the doctor may refer you to a gastroenterologist or another specialist if necessary. In the meantime, monitor your symptoms, note any patterns or associated factors, and avoid any known triggers of discomfort.",
        source: [
          'https://my.clevelandclinic.org/podcasts/butts-and-guts/everything-you-need-to-know-about-abdominal-pain',
          'https://my.clevelandclinic.org/health/symptoms/4167-abdominal-pain',
          'https://my.clevelandclinic.org/health/treatments/16853-celiac-plexus-block'
        ]
      },
      {
        disease_name: 'Abdominal Strain',
        disease_medicine_department: 'General Practitioner',
        why: 'The location of the pain near the oblique muscles and the description of intermittent, general abdominal pain suggest a possible muscular strain, which is common in the abdominal region.',
        general_summary_and_advice:
          'Abdominal strains are typically caused by excessive or sudden use of the abdominal muscles. Rest, avoiding strenuous activities, applying ice to the affected area, and over-the-counter pain relief may help. If the pain persists or worsens, or if you experience other symptoms like fever, vomiting, or changes in bowel habits, seek medical attention for further evaluation and treatment. A general practitioner can assess the condition and provide appropriate care, which might include referral to a specialist if required.',
        source: [
          'https://my.clevelandclinic.org/health/diseases/21807-abdominal-muscle-strain',
          'https://my.clevelandclinic.org/health/symptoms/17669-muscle-pain',
          'https://my.clevelandclinic.org/health/body/21755-abdominal-muscles'
        ]
      }
    ];
    return datas[Math.floor(Math.random() * datas.length)];
  };

  static head = () => {
    const datas = [
      {
        disease_name: 'Tension Headache',
        disease_medicine_department: 'General Practitioner or Neurologist',
        why: 'The description of head pain that seems to affect the whole head and the mention of neck pain is consistent with tension-type headaches, which are commonly associated with muscle tension in the neck and scalp.',
        general_summary_and_advice:
          "Tension headaches are often related to stress or musculoskeletal problems. It's advisable to monitor the frequency and severity of the headaches, maintain good posture, ensure adequate hydration, manage stress, and consider over-the-counter pain relief if necessary. However, it is important to consult with a doctor for an accurate diagnosis and appropriate treatment recommendations.",
        source: [
          'https://my.clevelandclinic.org/health/diseases/8257-tension-headaches',
          'https://my.clevelandclinic.org/podcasts/health-essentials/tension-headaches-migraines-and-cluster-headaches-with-emad-estemalik-md',
          'https://my.clevelandclinic.org/health/diseases/9639-headaches'
        ]
      },
      {
        disease_name: 'Tension-Type Headache',
        disease_medicine_department: 'General Practitioner or Neurologist',
        why: 'The description of a headache that feels like a general pain covering the whole head is characteristic of tension-type headaches, which are often described as a feeling of a tight band around the head. These headaches can be episodic and may not have a specific trigger.',
        general_summary_and_advice:
          'Tension-type headaches are common and often associated with stress or muscle tension. They can be managed through over-the-counter pain relievers, stress management techniques, and lifestyle changes that include regular exercise and adequate rest. If the headaches persist or worsen, it is advised to consult a doctor for a proper diagnosis and treatment plan. A general practitioner can provide an initial evaluation and, if necessary, refer to a neurologist or other specialists for further investigation.',
        source: [
          'https://my.clevelandclinic.org/health/drugs/9652-headache-medicine',
          'https://my.clevelandclinic.org/health/diseases/8257-tension-headaches',
          'https://my.clevelandclinic.org/health/diseases/9641-sinus-headaches'
        ]
      }
    ];
    return datas[Math.floor(Math.random() * datas.length)];
  };

  static back = () => {
    const datas = [
      {
        disease_name: 'Lumbar strain',
        disease_medicine_department: 'Orthopedist',
        why: 'The description of non-specific lower back pain without any mention of ongoing diseases or previous medical history is indicative of a musculoskeletal issue, often caused by muscle strains, which are common in the lumbar (lower back) region.',
        general_summary_and_advice:
          'Lumbar strains are typically caused by overexertion or improper lifting techniques and can result in pain and discomfort in the lower back. It is recommended to consult an orthopedist, who specializes in the musculoskeletal system, for a proper evaluation. They may recommend rest, physical therapy, and pain management strategies. It is also advisable to maintain a healthy weight, practice good posture, and engage in regular exercise to strengthen the back muscles and prevent future injuries.',

        source: [
          'https://my.clevelandclinic.org/health/diseases/10265-back-strains-and-sprains',
          'https://my.clevelandclinic.org/podcasts/health-essentials/how-to-find-relief-from-your-back-pain-with-dr-phillip-mendis',
          'https://my.clevelandclinic.org/health/diseases/4879-acute-mechanical-back-pain'
        ]
      },

      {
        disease_name: 'Myofascial Pain Syndrome',
        disease_medicine_department: 'Orthopedist',
        why: 'The description of intermittent and diffuse upper back pain suggests a musculoskeletal origin, likely related to muscle strain or chronic postural stress, which is consistent with myofascial pain syndrome.',
        general_summary_and_advice:
          "Myofascial pain syndrome is characterized by persistent, deep muscle pain that can involve fascial tissues. It's commonly associated with muscle overuse or repetitive stress. Conservative management including physical therapy, postural training, and pain relief measures such as heat therapy or over-the-counter analgesics may be advised. It is recommended that you consult with an orthopedist or a physical medicine and rehabilitation specialist for a comprehensive evaluation and appropriate management plan. Regular exercise, proper ergonomics at work, and stress management can also help alleviate symptoms.",
        source: [
          'https://my.clevelandclinic.org/health/diseases/7936-lower-back-pain',
          'https://my.clevelandclinic.org/health/diseases/12054-myofascial-pain-syndrome',
          'https://health.clevelandclinic.org/lifestyle-changes-to-ease-back-pain'
        ]
      }
    ];
    return datas[Math.floor(Math.random() * datas.length)];
  };
}
