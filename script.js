/**
 * ==========================================================================
 *  مستودع البيانات والتفاعل الخاص بالموقع (السرد القرآني - البراء عيد)
 * ==========================================================================
 */

// 1️⃣ مصفوفة بيانات جميع الأشخاص بالترتيب المطلوب
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
    image: "albaraa.jpg",
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

  // --- 4. المشايخ ---
  {
    id: "sheikh-adel",
    category: "sheikhs",
    name: "الشيخ/ عادل عبدالرحمن",
    image: "sheikh.jpg",
    text: "كلمات الشكر تقف عاجزة أمام ما قدمته لنا يا شيخنا الفاضل.. فشكراً لجميل صبرك، وحسن توجيهك، ودقتك في التصحيح والتعليم، وحرصك الدائم على أن نتقن كتاب الله كلمةً كلمة وآيةً آية."
  },

  // --- 5. المعلمة الفاضلة (الأستاذه أسماء سلامه بدون صورة) ---
  {
    id: "teacher-asmaa",
    category: "teachers",
    name: "الأستاذه المعلمة/ أسماء سلامه",
    image: "",
    text: "نوافي جزيل الشكر والامتنان لمعلمتنا الفاضلة الأستاذه أسماء، على ما قدمته لنا من دعم ومتابعة وجهد مخلص كان له بالغ الأثر في استمرارنا وتوفيقنا. نسأل الله العظيم أن يكتب أجرها ويجعل كل حرف تعلمناه في ميزان حسناتها."
  }
];

// ==========================================
//  عداد الزوار المضمون (يبدأ من 1 لكل صفحة)
// ==========================================
function handleSmartCounter(counterKey, elementId) {
  const counterElement = document.getElementById(elementId);
  if (!counterElement) return;

  const sessionKey = `visited_session_${counterKey}`;
  let visits = parseInt(localStorage.getItem(counterKey)) || 1; // يبدأ من 1 بدون أي أرقام وهمية

  if (!sessionStorage.getItem(sessionKey)) {
    visits += 1;
    localStorage.setItem(counterKey, visits);
    sessionStorage.setItem(sessionKey, "true");
  }

  counterElement.textContent = visits.toLocaleString("ar-EG");
}

// تشغيل الأحداث والعداد للصفحتين عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  if (typeof renderCards === "function") renderCards();
  if (typeof setupModalEvents === "function") setupModalEvents();

  // عداد الصفحة الرئيسية
  if (document.getElementById("home-counter")) {
    handleSmartCounter("quran_home_visits_2026", "home-counter");
  }

  // عداد صفحة التواصل
  if (document.getElementById("contact-counter")) {
    handleSmartCounter("quran_contact_visits_2026", "contact-counter");
}
// توليد الكروت ديناميكياً
function renderCards() {
  const friendsGrid = document.getElementById("friends-grid");
  const founderGrid = document.getElementById("founder-grid");
  const supervisorsGrid = document.getElementById("supervisors-grid");
  const sheikhsGrid = document.getElementById("sheikhs-grid");
  const teachersGrid = document.getElementById("teachers-grid");

  if (!friendsGrid) return;

  if (friendsGrid) friendsGrid.innerHTML = "";
  if (founderGrid) founderGrid.innerHTML = "";
  if (supervisorsGrid) supervisorsGrid.innerHTML = "";
  if (sheikhsGrid) sheikhsGrid.innerHTML = "";
  if (teachersGrid) teachersGrid.innerHTML = "";

  PEOPLE_DATA.forEach((person) => {
    const card = document.createElement("div");
    card.className = "person-card";
    card.innerHTML = `
      <h4 class="person-name">${person.name}</h4>
      <button class="read-more-btn" onclick="openModal('${person.id}')">قراءة المزيد ✨</button>
    `;

    if (person.category === "friends" && friendsGrid) {
      friendsGrid.appendChild(card);
    } else if (person.category === "founder" && founderGrid) {
      founderGrid.appendChild(card);
    } else if (person.category === "supervisors" && supervisorsGrid) {
      supervisorsGrid.appendChild(card);
    } else if (person.category === "sheikhs" && sheikhsGrid) {
      sheikhsGrid.appendChild(card);
    } else if (person.category === "teachers" && teachersGrid) {
      teachersGrid.appendChild(card);
    }
  });
}

// النافذة المنبثقة (Modal)
function openModal(personId) {
  const person = PEOPLE_DATA.find((p) => p.id === personId);
  if (!person) return;

  const modal = document.getElementById("person-modal");
  const modalImg = document.getElementById("modal-img");
  const modalImgBox = document.querySelector(".modal-img-box");
  const modalName = document.getElementById("modal-name");
  const modalText = document.getElementById("modal-text");

  if (person.image && person.image.trim() !== "") {
    modalImg.src = person.image;
    modalImg.alt = person.name;
    if (modalImgBox) modalImgBox.style.display = "block";
  } else {
    modalImg.src = "";
    modalImg.alt = "";
    if (modalImgBox) modalImgBox.style.display = "none";
  }

  modalName.textContent = person.name;
  modalText.textContent = person.text;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("person-modal");
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
}

function setupModalEvents() {
  const modal = document.getElementById("person-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!modal) return;
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) closeModal();
  });
}

// دالة عداد الزوار الخارجي الموحد
async function handleGlobalCounter(counterKey, elementId) {
  const counterElement = document.getElementById(elementId);
  if (!counterElement) return;

  const storageKey = `counted_${counterKey}`;
  const hasCounted = sessionStorage.getItem(storageKey);
  const action = hasCounted ? "hit" : "up";
  const url = `https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${counterKey}/${action}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();
    const data = await response.json();
    
    if (typeof data.count === "number") {
      if (!hasCounted) sessionStorage.setItem(storageKey, "true");
      counterElement.textContent = data.count.toLocaleString("ar-EG");
    } else {
      counterElement.textContent = "1";
    }
  } catch (error) {
    // في حال حدث أي ضغط أو حظر من السيرفر، يظهر رقماً افتراضياً لضمان عدم ظهور علامة خطأ
    counterElement.textContent = "1";
  }
}

// تشغيل الأحداث عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  setupModalEvents();

  if (document.getElementById("home-counter")) {
    handleGlobalCounter(HOME_COUNTER_KEY, "home-counter");
  }
  if (document.getElementById("contact-counter")) {
    handleGlobalCounter(CONTACT_COUNTER_KEY, "contact-counter");
  }

  // التحقق من صحة رقم الهاتف في نموذج التواصل (11 رقماً وأرقام فقط)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const phoneInput = document.getElementById("phone");
      const phoneError = document.getElementById("phone-error-msg");
      if (phoneInput) {
        const phoneVal = phoneInput.value.trim();
        const phoneRegex = /^01[0-9]{9}$/;
        if (!phoneRegex.test(phoneVal)) {
          e.preventDefault();
          if (phoneError) phoneError.style.display = "block";
          phoneInput.focus();
        } else {
          if (phoneError) phoneError.style.display = "none";
        }
      }
    });
  }
});
