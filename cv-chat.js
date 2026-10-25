```javascript
// Answers
const cvAnswers = [
  {
    keywords: ["what is this", "what is this site", "what is this page", "what is this chatbot"],
    answer: "This is a small chatbot for exploring Petter Falk's CV and website. Ask me about his research, publications, teaching, projects or work experience. I answer from a set of prepared responses, so I may not know the answer to every question."
  },
  {
    keywords: ["are you an ai", "are you a robot"],
    answer: "*Blip* *Blop* *Blip* I AM A ROBOT"
  },
  {
    keywords: ["research", "research interests", "study", "studies", "interests", "what does he research", "what does petter research", "research area", "focus", "fields", "welfare state", "algorithmic", "datafication", "digital vulnerability", "ai welfare state", "wasp-hs", "wasp"],
    answer: "Petter's research sits at the intersection of democracy, algorithmic systems and data in the public sector — with a particular focus on the datafication of the welfare state: what happens to care, trust and democracy when welfare institutions become data-driven. He currently studies digital vulnerability within the datafied welfare state through the Swedish Research Council project 'Digital Vulnerability', and is part of the <a href='https://wasp-hs.org/' target='_blank' rel='noopener'>WASP-HS</a> cluster 'The AI Welfare State'. His doctoral thesis (2024), <a href='https://kau.diva-portal.org/smash/get/diva2:1892232/FULLTEXT02.pdf' target='_blank' rel='noopener'>'Assemble Care // Align Data'</a>, was an ethnographic study of how datafication reshapes everyday work in Swedish public care. He was also the first PhD candidate to <a href='https://wasp-hs.org/event3/phd-defence-assemble-care-align-data-an-ethnographic-study-of-datafication-in-swedish-public-care/' target='_blank' rel='noopener'>defend within the WASP-HS doctoral programme</a>."
  },
  {
    keywords: ["thesis", "theses", "phd thesis", "doctoral thesis", "dissertation", "assemble care", "align data", "defence", "defense", "what did he write", "ethnographic"],
    answer: "Petter's PhD thesis, <a href='https://kau.diva-portal.org/smash/get/diva2:1892232/FULLTEXT02.pdf' target='_blank' rel='noopener'>'Assemble Care // Align Data'</a> (2024), is an ethnographic study of how datafication reshapes everyday work in Swedish public care. Drawing on fieldwork in care organisations, it explores what happens to care, trust and professional judgement when welfare work becomes data-driven. He defended it at <a href='https://www.kau.se/' target='_blank' rel='noopener'>Karlstad University</a> as the first PhD candidate to <a href='https://wasp-hs.org/event3/phd-defence-assemble-care-align-data-an-ethnographic-study-of-datafication-in-swedish-public-care/' target='_blank' rel='noopener'>defend within the WASP-HS doctoral programme</a>."
  },
  {
    keywords: ["education", "degree", "degrees", "phd", "doctorate", "doctoral", "master", "bachelor", "academic background", "qualifications", "trained", "hindi", "history of religions"],
    answer: "Petter completed doctoral studies in Political Science at <a href='https://www.kau.se/' target='_blank' rel='noopener'>Karlstad University</a> (2019–2024), earning his PhD with the thesis <a href='https://kau.diva-portal.org/smash/get/diva2:1892232/FULLTEXT02.pdf' target='_blank' rel='noopener'>'Assemble Care // Align Data'</a>. Before that he took a Master's degree in Political Science (2018) and a Bachelor's programme in Political Science (2007–2011), all at Karlstad University. Along the way he also studied Hindi at Banaras Hindu University and <a href='https://www.uu.se/' target='_blank' rel='noopener'>Uppsala University</a> (2007) and History of Religions, courses A–D (2004–2006)."
  },
  {
    keywords: ["teaching", "teach", "teaches", "courses", "lecturer", "lecture", "lectures", "classes", "curriculum", "supervision", "supervise", "thesis supervision", "guest lecturer", "pedagogy", "didactics", "policy analysis", "disinformation course"],
    answer: "Petter teaches at <a href='https://www.kau.se/' target='_blank' rel='noopener'>Karlstad University</a>, mainly in democratic theory, organisation theory and welfare models. His courses include Leadership and Organisational Development in Health and Social Care, The Swedish Welfare State Model, Policy Analysis, Urban and Regional Planning as a Democratic Process, and Leadership and Disinformation — with teaching hours spanning 2020 to 2026. He also supervises student theses, contributed to developing a master's programme, and has guest lectured at <a href='https://www.oslomet.no/' target='_blank' rel='noopener'>Oslo Metropolitan University</a>, <a href='https://www.liu.se/' target='_blank' rel='noopener'>Linköping University</a>, <a href='https://www.gu.se/' target='_blank' rel='noopener'>the University of Gothenburg</a> and <a href='https://www.polimi.it/' target='_blank' rel='noopener'>Politecnico di Milano</a>. Full details are on the <a href='teaching.html'>Teaching page</a>."
  },
  {
    keywords: ["work", "job", "jobs", "employment", "position", "positions", "experience", "career", "current job", "where does he work", "senior lecturer", "postdoc", "post-doc", "post doc", "södertörn", "karlstad university", "rise", "attityd", "case officer", "city of karlstad", "background", "employed"],
    answer: "Petter currently holds two roles: Senior Lecturer in Political Science at <a href='https://www.kau.se/' target='_blank' rel='noopener'>Karlstad University</a> (January 2026–present), where he leads research and development projects on democracy, algorithmic systems and data in the public sector, and postdoc in Media and Communication Studies at <a href='https://www.sh.se/' target='_blank' rel='noopener'>Södertörn University</a> in Stockholm (2025–2027). Before that he was Lecturer at Karlstad University (2021–2026), Project Manager at <a href='https://www.ri.se/' target='_blank' rel='noopener'>RISE Research Institutes of Sweden</a> (2016–2020), Data Analyst and Project Manager at Attityd i Karlstad (2012–2016), and Case Officer at the City of Karlstad City Management Office (2009–2012). Full details are on the <a href='cv.html'>CV page</a>."
  },
  {
    keywords: ["publication", "publications", "articles", "books", "book chapters", "publish", "published", "wrote", "writing", "journal", "digital vulnerabilities", "data matter", "dialogues in data power", "bibliography"],
    answer: "Petter's recent publications include the journal article <a href='https://doi.org/10.1177/01634437261446790' target='_blank' rel='noopener'>'Digital vulnerabilities'</a> in Media, Culture & Society (2026), a <a href='https://doi.org/10.23987/sts.178400' target='_blank' rel='noopener'>book review</a> in Science & Technology Studies (2026), his doctoral thesis <a href='https://kau.diva-portal.org/smash/get/diva2:1892232/FULLTEXT02.pdf' target='_blank' rel='noopener'>'Assemble Care // Align Data'</a> (2024), the book chapter <a href='https://doi.org/10.51952/9781529238327.ch003' target='_blank' rel='noopener'>'In/visibilities in Data Studies'</a> in Dialogues in Data Power (2024), and <a href='https://ideas.repec.org/h/elg/eechap/21087_14.html' target='_blank' rel='noopener'>'Data Matter'</a> in The Materials of Service Design (2023). See the <a href='research.html'>Research page</a> for the full list."
  },
  {
    keywords: ["project", "projects", "grants", "grant", "funding", "vinnova", "aisha", "aisecrett", "omtänkt", "the machine and/in the authority", "open4citizens", "horizon 2020", "led projects", "project manager"],
    answer: "Petter has led a wide range of research and development projects. Current work includes <a href='https://app.dimensions.ai/details/grant/grant.15149935' target='_blank' rel='noopener'>'The Machine and/in the Authority'</a> (VINNOVA, 2025–2026) and national process management for the Digital Europe projects AISHA and AiSecrett (2023–2025). Earlier at RISE he managed VINNOVA-funded projects on democracy data, algorithmic systems in social work, a national data lab (xKRP), VR-based gender equality training (UTSATT) and the Horizon 2020 project Open4Citizens on open data and citizen participation. He also co-wrote the approved <a href='https://app.dimensions.ai/details/grant/grant.15149916' target='_blank' rel='noopener'>OMTÄNKT</a> programme (VINNOVA, 2025–2028). Full details are on the <a href='projects.html'>Projects page</a>."
  },
  {
    keywords: ["media", "press", "interview", "news", "podcast", "radio", "tv", "svt", "dn", "dagens nyheter", "appeared", "opinion", "debate", "journalist"],
    answer: "Petter appears regularly in Swedish media on AI, data and welfare. Recent examples include <a href='https://thequantuminsider.com/2026/10/15/sweden-european-skills-academies-quantum-ai/' target='_blank' rel='noopener'>The Quantum Insider</a> and <a href='https://offentligaaffarer.se/sverige-gar-med-i-europas-ai-akademi/' target='_blank' rel='noopener'>Offentliga Affärer</a> (October 2026), an opinion piece in <a href='https://www.dn.se/debatt/nar-data-gors-till-gud-blir-lakare-inget-annat-an-tjanare/' target='_blank' rel='noopener'>Dagens Nyheter</a> on datafication and welfare (2024), <a href='https://www.sverigesradio.se/artikel/fusk-med-ai-allt-vanligare-forsta-misstankta-fallet-upptackt-pa-karlstads-universitet' target='_blank' rel='noopener'>Sveriges Radio</a> on AI and teaching (2023), the podcast <a href='https://open.spotify.com/episode/3VvAQafcoPknlc6zUxBUQu?si=mtLdlhqpR_6xmdTqhPiNwQ' target='_blank' rel='noopener'>Demokratidatapodden</a> (2022), and <a href='https://www.svt.se/nyheter/forskarens-varning-robothaverier-kan-skada-fortroendet' target='_blank' rel='noopener'>SVT Nyheter</a> on algorithmic decision-making (2019). See the <a href='research.html'>Research page</a> for the full list."
  },
  {
    keywords: ["personality", "personal", "character", "temperament", "humor", "humour", "who is he", "who is petter", "who are you", "what is he like", "funny"],
    answer: "I can only answer for Petter's merits. If you wanna know about his personality, you will just have to meet him (maybe buy him a beer...)"
  },
  {
    keywords: ["what is john moose", "who is john moose", "tell me about john moose"],
    answer: "John Moose is a Swedish band and creative collective making music, videos and digital experiences. <a href='https://open.spotify.com/artist/6Y8ldghnlu8Z05MYiWlE90' target='_blank' rel='noopener'>Listen on Spotify →</a>"
  },
  {
    keywords: ["petter do in john moose", "petter play in john moose", "petter's role in john moose", "petters role in john moose"],
    answer: "Petter plays bass and synthesisers in John Moose. He also does a lot of the visual work. You can see some of the band's video work on the <a href='stuff.html'>Stuff page →</a>"
  },
  {
    keywords: ["john moose forest app", "john moose app", "music in the forest", "go to the forest app"],
    answer: "John Moose released music through an app that let people listen only when they were in a forest. <a href='https://time.com/3901394/john-moose-band-gps-forest-woods/' target='_blank' rel='noopener'>Read about the forest app →</a>"
  },
  {
    keywords: ["john moose vr", "john moose virtual reality", "john moose o ep"],
    answer: "For the EP <em>O</em>, John Moose made a VR experience that brought the forest to listeners. <a href='https://www.ilovesweden.net/articles/articles/en/o-john-moose_993.html' target='_blank' rel='noopener'>Read about O →</a>"
  },
  {
    keywords: [
      "does petter play in a band",
      "is petter in a band",
      "what band does petter play in",
      "petter's band",
      "petters band"
    ],
    answer: "Yes. Petter has played in many bands, but John Moose is his only current music project. He plays bass and synthesisers and does a lot of the visual work. <a href='https://open.spotify.com/artist/6Y8ldghnlu8Z05MYiWlE90' target='_blank' rel='noopener'>Listen to John Moose on Spotify →</a>"
  },
  {
    keywords: ["hobbies", "hobby", "free time", "spare time", "fun"],
    answer: "Sh*t, all I know is this: a house overflowing with instruments, more than any one life could play, and he keeps building things the world never asked for."
  },
  {
    keywords: ["family", "children", "child", "kids", "wife", "married", "marriage", "partner", "girlfriend", "son", "daughter"],
    answer: "I don't know. He almost never talks about private stuff..."
  },
  {
    keywords: ["contact", "email", "reach", "mail", "phone", "get in touch", "address"],
    answer: "Click <a href='https://letmegooglethat.com/?q=Petter+Falk+Contact' target='_blank' rel='noopener'>this link</a>."
  },
  {
    keywords: ["person"],
    answer: "Slow down, cowboy! I can only answer for Petter's merits. If you wanna know about his personality, you will just have to meet him."
  },
  {
    keywords: ["strengths", "strength", "weakness", "weaknesses", "good at", "best at", "skills", "talents", "talented"],
    answer: "Petter's strengths: creativity and technical know-how. His weaknesses: the office desk is rarely clean, and student names don't always stick."
  },
  {
    keywords: ["sex", "dick", "penis", "ass", "looks"],
    answer: "Hey hey hey! This is a CV, not OnlyFans..."
  },
  {
    keywords: ["who built", "who made", "who created", "who designed", "who coded", "who wrote this", "who built this page", "who made this page", "who created this page"],
    answer: "I don't know. Aliens?"
  }
   {
    keywords: ["favourite movie", "favorite movie", "favourite film", "favorite film"],
    answer: "Indiana Jones (the old movies - not the new ones."
  },
  {
    keywords: ["favourite music", "favorite music", "favourite song", "favorite song"],
    answer: "These guys: <a href='https://www.youtube.com/watch?v=oFiDcazicdk' target='_blank' rel='noopener'>Clockworks →</a>"
  },
];

// DOM references
const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");

// Match whole words or phrases, rather than fragments inside other words.
function matchesKeyword(question, keyword) {
  const escapeRegex = text => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `(^|[^\\p{L}\\p{N}])${escapeRegex(keyword)}(?=$|[^\\p{L}\\p{N}])`,
    "iu"
  );

  return pattern.test(question);
}

// Render HTML only for answers written in cvAnswers.
function addMessage(speaker, text, isHtml = false) {
  const paragraph = document.createElement("p");
  const label = document.createElement("strong");

  label.textContent = `${speaker}: `;
  paragraph.append(label);

  if (isHtml) {
    const span = document.createElement("span");
    span.innerHTML = text;
    paragraph.append(span);
  } else {
    paragraph.append(document.createTextNode(text));
  }

  messages.appendChild(paragraph);
}

// Submit handler
if (form && input && messages) {
  form.addEventListener("submit", event => {
    event.preventDefault();

    const originalQuestion = input.value.trim();
    if (!originalQuestion) return;

    const question = originalQuestion.toLowerCase();
    addMessage("You", originalQuestion);

    const match = cvAnswers.find(entry =>
      entry.keywords.some(keyword => matchesKeyword(question, keyword))
    );

    addMessage(
      "CV assistant",
      match
        ? match.answer
        : "I don't have an answer to that. Send Petter an email and ask him.",
      true
    );

    input.value = "";
  });
}
```

The answers are still **rule-based**: if a question matches more than one entry, the first matching entry in `cvAnswers` wins.
