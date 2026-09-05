export const topics = [
  {
    file: "head-neck-cancers.html",
    title: "Head, neck & thyroid cancers",
    short: "Oral cavity, tongue, thyroid and other head and neck cancers.",
  },
  {
    file: "gi-cancers.html",
    title: "Gastrointestinal & colorectal cancers",
    short: "Colon, rectum, stomach and other digestive system cancers.",
  },
  {
    file: "breast-cancer.html",
    title: "Breast cancer",
    short: "Understanding breast surgery and the wider treatment plan.",
  },
  {
    file: "gynec-cancers.html",
    title: "Gynaecologic cancers",
    short: "Ovarian, uterine and cervical cancer treatment pathways.",
  },
  {
    file: "peritoneal-cancers-hipec.html",
    title: "Peritoneal cancers & HIPEC",
    short: "Cytoreductive surgery and HIPEC in carefully selected settings.",
  },
  {
    file: "thoracic-oncology.html",
    title: "Thoracic oncology",
    short: "Lung and mediastinal tumours, and assessment for surgery.",
  },
];
const section = (title, body) => `<section><h2>${title}</h2>${body}</section>`;
const source = (href, title) =>
  `<p class="sources">Further reading: <a href="${href}">${title} — National Cancer Institute</a>.</p>`;
export const pages = [
  {
    file: "index.html",
    title: "Surgical Oncologist, Goa",
    seo: "Dr Avinash Pujari | Surgical Oncologist, Goa Medical College",
    description:
      "Dr Avinash Pujari, Assistant Professor of Surgical Oncology at Goa Medical College. Professional profile, cancer surgery information and consultation resources.",
    body: `<div class="wrap"><section class="hero"><div><p class="eyebrow">Goa Medical College · Surgical Oncology</p><h1>Dr Avinash<br>Pujari</h1><p class="lead">Surgical Oncologist, Goa<br>Assistant Professor, Goa Medical College</p><p class="intro">A professional resource for patients, families and referring doctors — bringing together clinical interests, surgical training and information to support informed conversations about cancer care.</p><div class="actions"><a class="button" href="/about.html">Professional profile <span aria-hidden="true">↗</span></a><a class="text-link" href="/patient-resources.html">Information for patients →</a></div></div><figure class="portrait"><img src="/assets/profile-800.webp" srcset="/assets/profile-400.webp 400w, /assets/profile-800.webp 800w" sizes="(max-width: 600px) 330px, 40vw" width="800" height="800" alt="Dr Avinash Pujari, Surgical Oncologist" fetchpriority="high"><figcaption><span>Dr Avinash Pujari</span><span>Goa, India</span></figcaption></figure></section><div class="credentials" role="group" aria-label="Qualifications"><div><strong>MCh Surgical Oncology</strong><span>Tata Memorial Hospital, Mumbai</span></div><div><strong>MRCS</strong><span>Membership qualification</span></div><div><strong>MS General Surgery · Gold Medalist</strong><span>Goa Medical College</span></div></div><section class="section"><div class="section-head"><div><p class="eyebrow">Clinical interests</p><h2>Surgical oncology,<br>in context.</h2></div><p>Understanding a diagnosis is the beginning of a treatment conversation. Explore an overview of cancer types, evaluation and the questions to discuss with your treating team.</p></div><div class="specialities">{{TOPICS}}</div></section></div><section class="band section"><div class="wrap"><p class="eyebrow">Information & preparation</p><div class="pathways"><article><h2>For patients</h2><p>What to bring, what to ask and how to prepare for a consultation.</p><a class="text-link" href="/patient-resources.html">Patient resources →</a></article><article><h2>For doctors</h2><p>A practical referral checklist for a focused clinical discussion.</p><a class="text-link" href="/for-doctors.html">Referral information →</a></article><article><h2>The notebook</h2><p>Plain-language notes on diagnosis, treatment decisions and consent.</p><a class="text-link" href="/notebook.html">Read the notebook →</a></article></div></div></section><section class="section wrap"><div class="section-head"><div><p class="eyebrow">Training & academic appointment</p><h2>Grounded in surgical training.</h2></div><div><p>Specialist training at Tata Memorial Hospital, Mumbai; postgraduate surgical training at Goa Medical College; and international advanced surgical training at Shanghai Pulmonary Hospital.</p><a class="text-link" href="/about.html">Qualifications and current appointment →</a></div></div></section>`,
  },
  {
    file: "about.html",
    title: "Professional profile",
    label: "Dr Avinash Pujari",
    description:
      "Surgical Oncologist, Goa. Assistant Professor in Surgical Oncology at Goa Medical College.",
    body:
      section(
        "Current appointment",
        "<p>Dr Avinash Pujari is Assistant Professor in Surgical Oncology at Goa Medical College. This website brings together his professional background, clinical interests and educational information for patients and referring doctors.</p>",
      ) +
      section(
        "Qualifications & training",
        "<ul><li><strong>MCh Surgical Oncology</strong> — Tata Memorial Hospital, Mumbai</li><li><strong>MRCS</strong></li><li><strong>MS General Surgery — Gold Medalist</strong> — Goa Medical College</li><li><strong>International advanced surgical training</strong> — Shanghai Pulmonary Hospital</li></ul>",
      ) +
      section(
        "Clinical interests",
        '<p>Clinical interests include gastrointestinal and colorectal cancers, breast cancer, gynaecologic cancers, head and neck cancers, thoracic oncology, and the assessment of selected peritoneal cancers for cytoreductive surgery and HIPEC.</p><p><a href="/specialities.html">Explore the clinical information pages</a>.</p>',
      ) +
      section(
        "Information for colleagues",
        '<p>For a referral or professional enquiry, please use the <a href="/for-doctors.html">information for referring doctors</a> and <a href="/contact.html">contact details</a>.</p>',
      ),
  },
  {
    file: "specialities.html",
    title: "Clinical interests",
    description:
      "An introduction to cancer surgery and treatment planning for patients and doctors in Goa.",
    body: '<p>These pages describe general care pathways. The appropriate treatment and its availability must be discussed individually with the treating team.</p><h2>Cancer information</h2><div class="specialities">{{TOPICS}}</div><p><a href="/second-opinion.html">Preparing for a cancer second opinion →</a></p>',
  },
  {
    file: "patient-resources.html",
    title: "For patients & families",
    label: "Patient resources",
    description:
      "Practical information to help you organise your records, prepare your questions and take part in a consultation.",
    body:
      section(
        "Before your appointment",
        "<p>Confirm the consultation location and timing before travelling. If possible, bring a family member or someone you trust to help with notes and questions.</p><ul><li>Biopsy and pathology reports; ask whether slides or blocks are needed.</li><li>Scan reports and the original images on disc or through an accessible link.</li><li>Previous operation notes, discharge summaries and treatment records.</li><li>A list of medicines, allergies and other health conditions.</li><li>A short timeline of symptoms and previous treatment.</li></ul>",
      ) +
      section(
        "Questions worth bringing",
        "<ul><li>What does the diagnosis mean, and are more tests needed?</li><li>What is the aim of the proposed treatment?</li><li>What alternatives are available, including non-surgical options?</li><li>What are the main risks and likely effects on daily life?</li><li>How will recovery and follow-up be organised?</li><li>Who should I contact if I develop a problem?</li></ul>",
      ) +
      section(
        "Common questions",
        '<details><summary>Does a consultation always lead to surgery?</summary><p>No. Treatment may involve surgery, medicines, radiotherapy or a combination. The recommendation depends on the diagnosis, extent of disease and individual circumstances.</p></details><details><summary>Can I seek a second opinion?</summary><p>You can discuss a second opinion with your treating doctor. Bring the original records so the next team can understand the diagnosis and recommendations already made. <a href="/second-opinion.html">Read about preparing for a second opinion</a>.</p></details><details><summary>Should I send my reports through WhatsApp?</summary><p>Use the contact number first to confirm the appropriate way to share records. Avoid sending sensitive medical information before confirming the recipient and sharing arrangements.</p></details>',
      ) +
      section(
        "Reliable reading",
        source(
          "https://www.cancer.gov/about-cancer/treatment/types",
          "Types of cancer treatment",
        ) +
          source(
            "https://www.cancer.gov/about-cancer/diagnosis-staging",
            "Diagnosis and staging",
          ) +
          '<p class="note">For an urgent or rapidly worsening problem, seek prompt medical assessment. An appointment message is not an emergency service.</p>',
      ),
  },
  {
    file: "for-doctors.html",
    title: "For referring doctors",
    label: "Professional communication",
    description:
      "A concise referral checklist to support assessment and discussion of surgical oncology cases.",
    body:
      section(
        "Referral information",
        "<p>Please include the clinical question and urgency of the referral, alongside:</p><ul><li>Patient identifiers and contact details, shared with appropriate consent.</li><li>Presenting history, relevant examination and performance or functional status.</li><li>Histopathology, immunohistochemistry and relevant molecular results, if available.</li><li>Staging investigations, with dates and access to the original images.</li><li>Prior operations, systemic therapy and radiotherapy, with dates and response information.</li><li>Comorbidities, current medicines and the referring clinician’s contact details.</li></ul>",
      ) +
      section(
        "Coordinate before sharing records",
        '<p>Use the <a href="/contact.html">contact page</a> to confirm the referral route and an appropriate method for transferring patient records. Please clarify if the request concerns surgical assessment, treatment sequencing or a second opinion.</p><p>Time-critical cases require direct clinical coordination through the appropriate hospital pathway.</p>',
      ) +
      section(
        "Professional background",
        '<p>Dr Avinash Pujari is Assistant Professor in Surgical Oncology at Goa Medical College, with MCh training at Tata Memorial Hospital, Mumbai.</p><p><a href="/about.html">View qualifications and training →</a></p>',
      ),
  },
  {
    file: "contact.html",
    title: "Contact & consultation",
    description:
      "Contact information for Dr Avinash Pujari, Surgical Oncologist and Assistant Professor at Goa Medical College.",
    body:
      section(
        "Consultation enquiries",
        '<p><a href="tel:+919922001548">+91&nbsp;9922001548</a></p><div class="actions"><a class="button" href="tel:+919922001548">Call&nbsp;for&nbsp;an&nbsp;enquiry</a><a href="https://wa.me/919922001548">Enquire on WhatsApp ↗</a></div><p>Please confirm the consultation location, date and time before travelling.</p>',
      ) +
      section(
        "Current academic appointment",
        "<p><strong>Assistant Professor, Surgical Oncology</strong><br>Goa Medical College<br>Goa, India</p><p>For hospital appointments, confirm the current outpatient process with the hospital. The academic appointment listed here does not specify an outpatient schedule.</p>",
      ) +
      section(
        "Sharing medical information",
        '<p>First confirm how records should be shared and who will receive them. This site does not collect or upload patient records.</p><p><a href="/patient-resources.html">See the consultation preparation checklist</a>.</p><p class="note">For an urgent medical concern, seek medical assessment directly. Calls or messages for appointments should not delay urgent care.</p>',
      ),
  },
  {
    file: "second-opinion.html",
    title: "A cancer second opinion",
    description:
      "Preparing your records and questions for another assessment of a diagnosis or treatment recommendation.",
    body:
      section(
        "What a second opinion can address",
        "<p>A second opinion may revisit the diagnosis, stage and proposed treatment. It can help you understand available options and the reasoning behind a recommendation. It does not necessarily lead to a different plan.</p>",
      ) +
      section(
        "Prepare a complete record",
        '<p>Bring pathology reports, original scan images, operation notes and details of all previous cancer treatment. Record the specific question you want answered, such as the role of surgery or the order of treatments.</p><p><a href="/patient-resources.html">Use the full preparation checklist</a>.</p>',
      ) +
      section(
        "Keep your treating team informed",
        "<p>Discuss the timing of a second opinion with your current team so that necessary care is not delayed. Ask how the conclusions will be shared and who will coordinate the next steps.</p>" +
          source(
            "https://www.cancer.gov/about-cancer/managing-care/finding-cancer-care",
            "Finding cancer care",
          ),
      ),
  },
  {
    file: "notebook.html",
    title: "The Surgeon’s Notebook",
    label: "Patient education",
    description:
      "Short educational notes to make conversations about diagnosis and cancer treatment easier to follow.",
    body:
      '<article class="notebook-entry" id="diagnosis"><p class="eyebrow">01 · Understanding reports</p><h2>Diagnosis and stage answer different questions</h2><p>A diagnosis identifies the disease. Stage describes its extent. A pathology report and imaging can therefore contribute different pieces of information to a treatment discussion.</p><p>Ask your team which findings are confirmed and what remains to be clarified.</p>' +
      source(
        "https://www.cancer.gov/about-cancer/diagnosis-staging",
        "Diagnosis and staging",
      ) +
      '</article><article class="notebook-entry" id="consent"><p class="eyebrow">02 · Shared decisions</p><h2>Consent is a conversation</h2><p>Before surgery, discuss its purpose, alternatives, risks and expected recovery. Ask how the operation may affect eating, movement, work or other activities that matter to you.</p><p>Write down questions beforehand and ask for unfamiliar terms to be explained.</p>' +
      source(
        "https://www.cancer.gov/about-cancer/treatment/types/surgery",
        "Surgery for cancer",
      ) +
      '</article><article class="notebook-entry" id="second-opinion"><p class="eyebrow">03 · Another perspective</p><h2>Making a second opinion useful</h2><p>A focused question and a complete set of records help another clinician assess an existing recommendation. Keep your treating team informed about the review.</p><p><a href="/second-opinion.html">Read the second opinion guide →</a></p></article>',
  },
];

const clinical = [
  {
    description:
      "An overview of oral, head and neck, and thyroid cancer assessment for patients considering surgical oncology care in Goa.",
    sections: [
      [
        "Different sites need different plans",
        "<p>Oral cavity, throat, salivary gland and thyroid cancers differ in their biology and treatment. An examination and tissue diagnosis help establish the nature of a lump or lesion; imaging may be needed to assess its extent.</p>",
      ],
      [
        "Oral and head & neck cancer surgery",
        "<p>The role and extent of surgery depend on the site and stage. Treatment planning may also involve radiotherapy or drug treatment. Discuss the possible effects on speech, swallowing and appearance, and whether reconstruction or rehabilitation may be needed.</p>",
      ],
      [
        "Thyroid cancer",
        "<p>The type of thyroid cancer guides the treatment plan. Ask whether surgery is advised, how much of the thyroid may need to be removed and what follow-up will involve.</p>",
      ],
      [
        "Prepare your questions",
        "<ul><li>Is the diagnosis confirmed on tissue testing?</li><li>What is the purpose of each proposed treatment?</li><li>What support might be needed for speech, swallowing or recovery?</li></ul>",
      ],
    ],
    sources: [
      ["https://www.cancer.gov/types/head-and-neck", "Head and neck cancers"],
      [
        "https://www.cancer.gov/types/thyroid/patient/thyroid-treatment-pdq",
        "Thyroid cancer treatment",
      ],
    ],
  },
  {
    description:
      "Information on gastrointestinal cancers and colorectal cancer surgery for patients in Goa, including colon and rectal cancer treatment planning.",
    sections: [
      [
        "Understanding gastrointestinal cancers",
        "<p>Gastrointestinal cancers include cancers of the oesophagus, stomach, pancreas, liver, gallbladder, colon and rectum. The tests and treatment depend on the organ involved and the specific diagnosis.</p>",
      ],
      [
        "Colon and rectal cancer",
        "<p>Colon and rectal cancers do not always follow the same pathway. Surgery may form part of treatment, while chemotherapy or radiotherapy may be recommended in particular settings. The sequence is decided after assessment of the disease.</p>",
      ],
      [
        "Discussing colorectal surgery",
        "<p>Ask about the proposed operation, whether a temporary or permanent stoma may be needed, and the likely effect on bowel function. Open and minimally invasive approaches should be discussed in relation to the individual case.</p>",
      ],
      [
        "Bring the original investigations",
        "<p>Bring endoscopy or colonoscopy reports, biopsy results, scan reports and images, along with records of previous treatment.</p>",
      ],
    ],
    sources: [
      ["https://www.cancer.gov/types/colorectal", "Colorectal cancer"],
      [
        "https://www.cancer.gov/types/colorectal/patient/rectal-treatment-pdq",
        "Rectal cancer treatment",
      ],
    ],
  },
  {
    description:
      "An introduction to breast cancer surgery, including breast conservation, mastectomy and questions to discuss during a consultation in Goa.",
    sections: [
      [
        "Assessment before treatment",
        "<p>Breast cancer planning brings together examination, imaging and pathology. The cancer’s characteristics and extent help guide the recommendation.</p>",
      ],
      [
        "Understanding the operation",
        "<p>Surgical options can include breast-conserving surgery or mastectomy. Lymph node assessment may also be needed. Discuss whether reconstruction is relevant, and how surgery fits with any recommended radiotherapy or medicines.</p>",
      ],
      [
        "Questions for your team",
        "<ul><li>Which surgical options are appropriate for my diagnosis?</li><li>Will treatment be needed before or after the operation?</li><li>How will lymph nodes be assessed?</li><li>What should I expect during recovery?</li></ul>",
      ],
      [
        "Preparing for assessment",
        "<p>Bring mammography and ultrasound reports and images, biopsy results including receptor tests when available, and details of previous treatment.</p>",
      ],
    ],
    sources: [
      [
        "https://www.cancer.gov/types/breast/treatment/surgery",
        "Breast cancer surgery",
      ],
    ],
  },
  {
    description:
      "An overview of ovarian, uterine and cervical cancer pathways for patients seeking surgical oncology information in Goa.",
    sections: [
      [
        "The diagnosis matters",
        "<p>Ovarian, uterine and cervical cancers are different diseases. The role of surgery and other treatments varies with the cancer type and its extent.</p>",
      ],
      [
        "Planning treatment",
        "<p>Assessment may include pelvic imaging, tissue testing and other investigations selected by the team. Treatment can involve surgery, chemotherapy, radiotherapy or a combination. For ovarian cancer, the timing of surgery in relation to chemotherapy is an important discussion.</p>",
      ],
      [
        "Discuss the effects of treatment",
        "<p>Ask how the proposed treatment might affect fertility, menopause, bladder or bowel function, and recovery. If fertility is important to you, raise this before treatment begins.</p>",
      ],
      [
        "Records to bring",
        "<p>Bring pathology, imaging and tumour-marker results where available, plus previous operation notes and chemotherapy or radiotherapy records.</p>",
      ],
    ],
    sources: [
      [
        "https://www.cancer.gov/types/ovarian/hp/ovarian-epithelial-treatment-pdq",
        "Ovarian, fallopian tube and peritoneal cancer treatment (professional reference)",
      ],
      [
        "https://www.cancer.gov/types/cervical/treatment/by-stage",
        "Cervical cancer treatment by stage",
      ],
    ],
  },
  {
    description:
      "Understanding cytoreductive surgery and HIPEC for selected peritoneal cancers, and questions to discuss during assessment in Goa.",
    sections: [
      [
        "What are CRS and HIPEC?",
        "<p>The peritoneum is the lining of the abdomen. Cytoreductive surgery (CRS) aims to remove visible tumour deposits. HIPEC is heated chemotherapy delivered into the abdominal cavity during an operation.</p>",
      ],
      [
        "Selection is essential",
        "<p>CRS and HIPEC are considered only in selected clinical settings. Their role depends on the origin and extent of the cancer, prior treatment and the person’s fitness for a major operation. They are not a routine recommendation for every cancer that involves the peritoneum.</p>",
      ],
      [
        "Questions before a decision",
        "<ul><li>What evidence supports this approach for my particular cancer?</li><li>What are the alternatives and expected aims of treatment?</li><li>What complications and recovery needs should be considered?</li><li>Where would treatment take place, and what support is available?</li></ul><p>Discuss current procedure availability and the appropriate treatment centre directly with the treating team.</p>",
      ],
      [
        "Preparing for review",
        "<p>Bring the full pathology report, operative records from any earlier abdominal surgery, scan images and a summary of systemic treatment.</p>",
      ],
    ],
    sources: [
      [
        "https://www.cancer.gov/types/ovarian/hp/ovarian-epithelial-treatment-pdq",
        "Ovarian, fallopian tube and peritoneal cancer treatment (professional reference)",
      ],
    ],
  },
  {
    description:
      "An introduction to surgical assessment for lung and mediastinal tumours, with information for patients in Goa.",
    sections: [
      [
        "Assessment comes first",
        "<p>Thoracic oncology concerns tumours in the chest, including lung and mediastinal tumours. Whether surgery is appropriate depends on the diagnosis, extent of disease and fitness for treatment.</p>",
      ],
      [
        "The role of surgery",
        "<p>Surgery may be one part of a broader treatment plan. Ask how the proposed operation relates to other options and whether further tests are needed before a decision.</p>",
      ],
      [
        "Approach and recovery",
        "<p>If an operation is advised, discuss the planned approach, its risks, expected hospital stay and recovery support. A minimally invasive approach is not suitable for every situation.</p>",
      ],
      [
        "Training background",
        '<p>Dr Pujari has undertaken international advanced surgical training at Shanghai Pulmonary Hospital. <a href="/about.html">Read the professional profile</a>.</p>',
      ],
    ],
    sources: [
      [
        "https://www.cancer.gov/about-cancer/treatment/types/surgery",
        "Surgery for cancer",
      ],
    ],
  },
];
topics.forEach((t, i) => {
  const c = clinical[i];
  pages.push({
    ...t,
    topic: true,
    label: "Clinical information",
    description: c.description,
    body:
      c.sections.map(([h, b]) => section(h, b)).join("") +
      section(
        "Further information",
        c.sources.map(([u, n]) => source(u, n)).join("") +
          '<p><a href="/patient-resources.html">Prepare for your consultation →</a></p><p class="note">This overview is general education. It does not establish a diagnosis, recommend a treatment for an individual, or confirm availability of a procedure.</p>',
      ),
  });
});
