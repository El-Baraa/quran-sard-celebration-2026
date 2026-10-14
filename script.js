/*
  ==========================================================================
   مستودع البيانات والتفاعل الخاص بالموقع (السرد القرآني - البراء عيد)
  ==========================================================================
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
    text: "يقف قلمي عاجزاً وأنا أكتب كلمات الشكر والتقدير لرجلٍ أقام بفضل الله وتوفيقه هذا الصرح القرآني المبارك؛ الدكتور الفاضل عاصم أحمد عبد الكريم. إن ما نشهده اليوم من نجاحٍ وفرحة بإتمام السرد القرآني لم يكن ليتحقق إلا برؤيةٍ مباركة، وهمةٍ عالية، وحرصٍ دؤوب من سيادته على خدمة كتاب الله تعالى ورعاية أهله وخاصته. \
           لقد بذل الدكتور عاصم الغالي والنفيس، ووفر لنا في مركز الإمام الإسلامي كل سبل التيسير والتشجيع والبيئة القرآنية الصافية، ليكون هذا المركز منارة هدى ونوراً يسترشد به كل طالب لآيات الله. نسأل الله العظيم، رب العرش العظيم، أن يجعل كل حرف تلوناه، وكل آية حفظناها، وكل إنجاز تحقق في هذا المركز في ميزان حسناته صدقةً جاريةً لا ينقطع أجرها إلى يوم القيامة، وأن يبارك في عمره وعمله وصحته، ويجزه عنا وعن أهل القرآن خير ما جازى به عباده الصالحين."
  },

  // --- 3. القطاع الإشرافي العام ---
  {
    id: "supervisor-mahmoud",
    category: "supervisors",
    name: "ش/ محمود شعبان",
    image: "supervisor1.jpg",
    text: "جزاه الله خيراً على متابعته الدؤوبة ورعايته الإدارية والتربوية الكريمة."
  },
  {
    id: "supervisor-badr",
    category: "supervisors",
    name: "ش/ محمد بدر",
    image: "supervisor2.jpg",
    text: "شكراً لجهوده المخلصة ودعمه المستمر لنا في مركز الإمام الإسلامي."
  },

  // --- 4. المشايخ ---
  {
    id: "sheikh-adel",
    category: "sheikhs",
    name: "الشيخ/ عادل عبدالرحمن",
    image: "sheikh.jpg",
    text: "كلمات الشكر تقف عاجزة أمام ما قدمته لنا يا شيخنا الفاضل.. فشكراً لجميل صبرك، وحسن توجيهك، ودقتك في التصحيح والتعليم، وحرصك الدائم على أن نتقن كتاب الله كلمةً كلمة وآيةً آية. نسأل الله العظيم أن يجازيك عنا خير الجزاء، وأن يجعل كل آية حفظناها وتلونَاها في ميزان حسناتك ورفعةً لدرجاتك يوم القيامة."
  },

  // --- 5. المعلمة الفاضلة (الأستاذه أسماء سلامه ) ---
  {
    id: "teacher-asmaa",
    category: "teachers",
    name: "الأستاذة/ أسماء سلامه",
    image: "", 
    text: "نوافي جزيل الشكر والامتنان لمعلمتنا الفاضلة الأستاذة أسماء، على ما قدمته لنا من دعم ومتابعة وجهد مخلص كان له بالغ الأثر في استمرارنا وتوفيقنا. نسأل الله العظيم أن يكتب أجرها، ويجعل كل كلمة وحرف تعلمناه في ميزان حسناتها ورفعةً لدرجاتها."
  }
];

// ==========================================
//  عداد الزوار المحلي يبدأ من 1 ويزيد تصاعدياً
// ==========================================
function handleLocalCounter(counterKey, elementId) {
  const counterElement = document.getElementById(elementId);
  if (!counterElement) return;

  // جلب عدد الزيارات السابق من الذاكرة المحلية
  let visits = localStorage.getItem(counterKey);

  if (!visits) {
    visits = 1; // يبدأ من 1 في أول زيارة
  } else {
    visits = parseInt(visits) + 1; // زيادة زائر جديد مع كل فتح للموقع
  }

  localStorage.setItem(counterKey, visits);
  
  // عرض الرقم بالأرقام العربية
  counterElement.textContent = visits.toLocaleString("ar-EG");
}

// تشغيل العداد فور تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  // إذا كانت الدوال الأخرى موجودة
  if (typeof renderCards === "function") renderCards();
  if (typeof setupModalEvents === "function") setupModalEvents();

  if (document.getElementById("home-counter")) {
    handleLocalCounter("home_visits_count", "home-counter");
  }
  if (document.getElementById("contact-counter")) {
    handleLocalCounter("contact_visits_count", "contact-counter");
  }
});
// توليد الكروت ديناميكياً
function renderCards() {
  const friendsGrid = document.getElementById("friends-grid");
  const founderGrid = document.getElementById("founder-grid");
  const supervisorsGrid = document.getElementById("supervisors-grid");
  const sheikhsGrid = document.getElementById("sheikhs-grid");
  const teachersGrid = document.getElementById("teachers-grid");

  if (!friendsGrid) return; // إذا كنا في صفحة أخرى

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

// النافذة المنبثقة (Modal) مع التحكم بإخفاء صورة المعلمة
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
    if (modalImgBox) modalImgBox.style.display = "none"; // إخفاء دائرة الصورة تماماً
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

// دالة عداد الزوار التصاعدي
function animateCounter(element, targetValue) {
  let startValue = 0;
  const duration = 1200;
  const stepTime = Math.abs(Math.floor(duration / (targetValue || 1)));

  if (targetValue === 0) {
    element.textContent = "0";
    return;
  }

  const timer = setInterval(() => {
    startValue += 1;
    element.textContent = startValue.toLocaleString("ar-EG");
    if (startValue >= targetValue) {
      element.textContent = targetValue.toLocaleString("ar-EG");
      clearInterval(timer);
    }
  }, Math.max(stepTime, 20));
}

async function handleVisitorCounter(counterKey, elementId) {
  const counterElement = document.getElementById(elementId);
  if (!counterElement) return;

  const storageKey = `visited_${counterKey}`;
  const hasVisited = localStorage.getItem(storageKey);
  const action = hasVisited ? "hit" : "up";
  const url = `https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${counterKey}/${action}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();
    const data = await response.json();
    if (typeof data.count === "number") {
      if (!hasVisited) localStorage.setItem(storageKey, "true");
      animateCounter(counterElement, data.count);
    } else {
      counterElement.textContent = "—";
    }
  } catch (error) {
    counterElement.textContent = "—";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  setupModalEvents();

  if (document.getElementById("home-counter")) {
    handleVisitorCounter(HOME_COUNTER_KEY, "home-counter");
  }
  if (document.getElementById("contact-counter")) {
    handleVisitorCounter(CONTACT_COUNTER_KEY, "contact-counter");
  }
});
// الكود الخاص بالتحقق من تطابق البريد الإلكتروني قبل الإرسال
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const email = document.getElementById("email").value.trim();
      const confirmEmail = document.getElementById("confirm-email").value.trim();
      const emailError = document.getElementById("email-error-msg");

      const phoneInput = document.getElementById("phone");
      const phoneError = document.getElementById("phone-error-msg");

      // 1. التحقق من تطابق البريد الإلكتروني
      if (email !== confirmEmail) {
        e.preventDefault();
        if (emailError) emailError.style.display = "block";
        document.getElementById("confirm-email").focus();
        return;
      } else {
        if (emailError) emailError.style.display = "none";
      }

      // 2. التحقق من رقم الهاتف (11 رقماً ويبدأ بـ 01)
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