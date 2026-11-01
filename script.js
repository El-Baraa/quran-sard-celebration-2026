/*
  ==========================================================================
   مستودع البيانات والتفاعل (الأشخاص الأساسيون فقط بدون أي زيادات)
  ==========================================================================
 */

const PEOPLE_DATA = [
  // --- 1. الأصدقاء والزملاء ---
  {
    id: "friend-mohamed-mostafa",
    category: "friends",
    name: "محمد مصطفى عبدالصمد عبدالغني",
    image: "mohamed-mostafa.jpg",
    text: "جزاك الله خيراً يا رفيق الدرب، وأسأل الله أن يرزقك القبول ويثبت القرآن في قلبك."
  },
  {
    id: "friend-ahmed-omaira",
    category: "friends",
    name: "أحمد محمد علي عميره",
    image: "ahmed-omaira.jpg",
    text: "دمتَ نِعم الأخ والصديق، أدام الله عزك ونفع بك وأعلى منزلتك بالقرآن."
  },
  {
    id: "friend-adham-sabry",
    category: "friends",
    name: "أدهم صبري عبدالمنعم علي",
    image: "adham-sabry.jpg",
    text: "شديد الهمة والحرص، مبارك لك يا أدهم وبارك الله في جهودك وأسعدك في الدارين."
  },
  {
    id: "friend-albaraa-eid",
    category: "friends",
    name: "البراء عيد أحمد محمود",
    image: "writer.jpg",
    text: "الحمد لله الذي شرفني بوجودي بين هذه الثلة الطيبة المباركة من أهل القرآن."
  },
  {
    id: "friend-abdullah-mahmoud",
    category: "friends",
    name: "عبدالله محمود أحمد السيد",
    image: "abdullah-mahmoud.jpg",
    text: "صاحب القلب الخالص والابتسامة الطيبة، فتح الله عليك فتوح العارفين."
  },
  {
    id: "friend-omar-ashraf",
    category: "friends",
    name: "عمر أشرف إبراهيم أحمد",
    image: "omar-ashraf.jpg",
    text: "أسأل الله أن يرفع قدرك وأن يجعلك مباركاً أينما كنت حاملاً لكتابه."
  },
  {
    id: "friend-mohamed-ahmed",
    category: "friends",
    name: "محمد أحمد صلاح عبدالفضيل",
    image: "mohamed-ahmed.jpg",
    text: "وفقك الله ونفع بك، وجعل هذا الحفظ نوراً لك وضياءً في طريقك دائماً."
  },

  // --- 2. مؤسس المركز ---
  {
    id: "founder-asim",
    category: "founder",
    name: "الدكتور/ عاصم أحمد عبد الكريم",
    image: "asim-abd-elkareem.jpg",
    text: "يقف قلمي عاجزاً وأنا أكتب كلمات الشكر والتقدير لرجلٍ أقام بفضل الله وتوفيقه هذا الصرح القرآني المبارك؛ الدكتور الفاضل عاصم أحمد عبد الكريم.\n\nإن ما نشهده اليوم من نجاحٍ وفرحة بإتمام السرد القرآني لم يكن ليتحقق إلا برؤيةٍ مباركة، وهمةٍ عالية، وحرصٍ دؤوب من سيادته على خدمة كتاب الله تعالى ورعاية أهله وخاصته. لقد بذل الدكتور عاصم الغالي والنفيث، ووفر لنا في مركز الإمام الإسلامي كل سبل التيسير والتشجيع والبيئة القرآنية الصافية، ليكون هذا المركز منارة هدى ونوراً يستشهد به كل طالب لآيات الله.\n\nنسأل الله العظيم، رب العرش العظيم، أن يجعل كل حرف تلوناها، وكل آية حفظناها، وكل إنجاز تحقق في هذا المركز في ميزان حسناته صدقة جارية لا ينقطع أجرها إلى يوم القيامة، وأن يبارك في عمره وعمله وصحته، ويجزه عنا وعن أهل القرآن خير ما جازى به عباده الصالحين."
  },

  // --- 3. القطاع الإشرافي العام ---
  {
    id: "supervisor-mahmoud",
    category: "supervisors",
    name: "ش/ محمود شعبان",
    image: "supervisor1.jpg",
    text: "القطاع الإشرافي العام. جزاه الله خيراً على متابعته الدؤوبة ورعايته الإدارية والتربوية الكريمة."
  },
  {
    id: "supervisor-badr",
    category: "supervisors",
    name: "ش/ محمد بدر",
    image: "supervisor2.jpg",
    text: "القطاع الإشرافي العام. شكراً لجهوده المخلصة ودعمه المستمر لنا في مركز الإمام الإسلامي."
  },

  // --- 4. مدير الفرع ---
  {
    id: "sheikh-adel",
    category: "manager",
    name: "الشيخ/ عادل عبدالرحمن",
    image: "sheikh.jpg",
    text: "كلمات الشكر تقف عاجزة أمام ما قدمته لنا يا شيخنا الفاضل ومدير فرعنا الكريم.. فشكراً لجميل صبرك، وحسن توجيهك، ودقتك في التصحيح والتعليم، وحرصك الدائم على أن نتقن كتاب الله كلمةً كلمة وآيةً آية."
  },

  // --- 5. المعلمة الفاضلة ---
  {
    id: "teacher-asmaa",
    category: "teacher",
    name: "الأستاذه المعلمة/ أسماء سلامه",
    image: "",
    text: "نوافي جزيل الشكر والامتنان لمعلمتنا الفاضلة الأستاذه أسماء، على ما قدمته لنا من دعم ومتابعة وجهد مخلص كان له بالغ الأثر في استمرارنا وتوفيقنا. نسأل الله العظيم أن يكتب أجرها ويجعل كل حرف تعلمناه في ميزان حسناتها."
  }
];

function renderCards() {
  const grids = {
    "friends": document.getElementById("friends-grid"),
    "founder": document.getElementById("founder-grid"),
    "supervisors": document.getElementById("supervisors-grid"),
    "manager": document.getElementById("manager-grid"),
    "teacher": document.getElementById("teacher-grid")
  };

  Object.values(grids).forEach(grid => {
    if (grid) grid.innerHTML = "";
  });

  PEOPLE_DATA.forEach((person) => {
    const gridContainer = grids[person.category];
    if (!gridContainer) return;

    const card = document.createElement("div");
    card.className = "person-card";
    
    const hasImage = person.image && person.image.trim() !== "";
    
    const words = person.text.trim().split(/\s+/);
    const shortText = words.length > 6 ? words.slice(0, 6).join(" ") + "..." : person.text;

    const previewContentHtml = hasImage ? `
      <div class="card-preview-content">
        <img src="${person.image}" alt="${person.name}" class="card-thumb" onerror="this.src='https://via.placeholder.com/150?text=صورة';">
        <div class="card-snippet">${shortText}</div>
      </div>
    ` : `
      <div class="card-preview-content no-image">
        <div class="card-snippet" style="max-width: 100%;">${shortText}</div>
      </div>
    `;

    const isBaraa = person.name.includes("البراء");
    const imgMaxWidth = isBaraa ? "175px" : "140px";

    const fullImageHtml = hasImage ? `
      <div class="modal-img-box" style="width: auto; max-width: ${imgMaxWidth}; height: auto; margin: 4px auto 6px auto; border-radius: 10px; overflow: hidden; border: 2px solid var(--accent-gold); box-shadow: 0 3px 8px rgba(0,0,0,0.08); background: #fff; display: flex; align-items: center; justify-content: center;">
        <img src="${person.image}" alt="${person.name}" style="width: 100%; height: auto; object-fit: contain; display: block;" onerror="this.src='https://via.placeholder.com/150?text=صورة';">
      </div>
    ` : '';

    card.innerHTML = `
      <h4 class="person-name" style="font-size: 1.6rem;">${person.name}</h4>
      ${previewContentHtml}
      <div class="card-full-text">
        ${fullImageHtml}
        <p>${person.text}</p>
      </div>
      <button class="read-more-btn" onclick="toggleCard(this)">قراءة المزيد ✨</button>
    `;

    gridContainer.appendChild(card);
  });
}

function toggleCard(button) {
  const card = button.closest(".person-card");
  card.classList.toggle("expanded");
  if (card.classList.contains("expanded")) {
    button.textContent = "إخفاء التفاصيل 🔽";
  } else {
    button.textContent = "قراءة المزيد ✨";
  }
}

function setupWriterToggle() {
  const writerCard = document.getElementById("writer-toggle-card");
  if (!writerCard) return;

  writerCard.addEventListener("click", () => {
    writerCard.classList.toggle("expanded");
  });
}

function handleSmartCounter(storageKey, elementId) {
  const sessionKey = `visited_session_${storageKey}`;
  
  let visits = parseInt(localStorage.getItem(storageKey));
  if (isNaN(visits)) {
    visits = 25;
    localStorage.setItem(storageKey, visits);
  }

  if (!sessionStorage.getItem(sessionKey)) {
    visits += 1;
    localStorage.setItem(storageKey, visits);
    sessionStorage.setItem(sessionKey, "true");
  }

  const counterElement = document.getElementById(elementId);
  if (counterElement) {
    counterElement.style.direction = "ltr";
    counterElement.style.unicodeBidi = "isolate";
    counterElement.textContent = visits.toLocaleString("en-US");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  setupWriterToggle();

  if (document.getElementById("home-counter")) {
    handleSmartCounter("quran_home_visits_2026", "home-counter");
  }

  if (document.getElementById("contact-counter")) {
    handleSmartCounter("quran_contact_visits_2026", "contact-counter");
  }
});
