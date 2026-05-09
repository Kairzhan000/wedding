

     const i18n = {
    ru: {
      nav_countdown: 'До свадьбы', nav_details: 'Детали', nav_dresscode: 'Дресс-код',
      hero_pre: 'Мы приглашаем вас разделить с нами этот особенный день',
      hero_date: '25 июля 2026', scroll: 'Листай',
      cd_label: 'Время до торжества', cd_title: 'Осталось совсем немного',
      cd_days: 'Дней', cd_hours: 'Часов', cd_min: 'Минут', cd_sec: 'Секунд',
      det_label: 'Детали события', det_title: 'Где и когда',
      det_ceremony: 'Банкет', det_ceremony_p: 'Место проведения церемонии<br> Петропавловск, Greenwood (CLICK)',
      det_banquet: 'Банкет', det_banquet_p: 'Название ресторана<br> Петропавловск, Greenwood (CLICK)',
      dc_label: 'Дресс-код', dc_title: 'Цветовая палитра вечера',
      dc_desc: 'Просим придерживаться тонов, которые создадут гармоничную атмосферу',
      c1: 'Молоко', c2: ',Бежевый', c3: 'Шампань', c4: 'Золото', c5: 'Бронза',
      rsvp_label: 'Подтверждение', rsvp_title: 'Будете ли вы с нами?',
      rsvp_name: 'Ваше имя', rsvp_name_ph: 'Введите имя',
      rsvp_guests: 'Количество гостей', rsvp_answer: 'Ваш ответ',
      rsvp_choose: 'Выберите...', rsvp_yes: 'Буду с радостью',
      rsvp_no: 'К сожалению, не смогу', rsvp_btn: 'Подтвердить присутствие',
      rsvp_ok: 'Спасибо! Мы вас ждём с нетерпением ✦',
      privacy_text: "Будем признательны, если вы оставите фотографии с нашего торжества только для личного архива. Мы очень ценим приватность и просим не публиковать их в социальных сетях."
    },
    kz: {
      nav_countdown: 'Тойға дейін', nav_details: 'Мәліметтер', nav_dresscode: 'Дресс-код',
      hero_pre: 'Сізді бізбен бірге осы ерекше күнді бөлісуге шақырамыз',
      hero_date: '25 шілде 2026', scroll: 'Айналдыр',
      cd_label: 'Тойға дейінгі уақыт', cd_title: 'Мереке жақындап қалды',
      cd_days: 'Күн', cd_hours: 'Сағат', cd_min: 'Минут', cd_sec: 'Секунд',
      det_label: 'Іс-шара мәліметтері', det_title: 'Қайда және қашан',
      det_ceremony: 'Салтанатты рәсім', det_ceremony_p: 'Салтанат өтетін орын<br> Петропавловск, Greenwood (CLICK)',
      det_banquet: 'Банкет', det_banquet_p: 'Мейрамхана атауы<br> Петропавловск, Greenwood (CLICK)',
      dc_label: 'Дресс-код', dc_title: 'Кештің түс палитрасы',
      dc_desc: 'Үйлесімді атмосфера жасайтын реңктерді ұстануыңызды сұраймыз',
      c1: 'Ак', c2: 'Зығыр', c3: 'Қара', c4: 'Алтын', c5: 'Қола',
      rsvp_label: 'Растау', rsvp_title: 'Келе аласыз ба?',
      rsvp_desc: '2026 жылғы 15 шілдеге дейін қатысуыңызды растаңыз',
      rsvp_name: 'Атыңыз', rsvp_name_ph: 'Атыңызды енгізіңіз',
      rsvp_guests: 'Қонақтар саны', rsvp_answer: 'Жауабыңыз',
      rsvp_choose: 'Таңдаңыз...', rsvp_yes: 'Қуанышпен келемін',
      rsvp_no: 'Өкінішке орай, келе алмаймын', rsvp_btn: 'Қатысуды растау',
      rsvp_ok: 'Рахмет! Сізді асыға күтеміз ✦',
      privacy_text: "Тойдан түсірілген суреттерді тек жеке мұрағатта сақтауыңызды өтінеміз. Біз жеке өміріміздің жария болмағанын қалаймыз, сондықтан суреттерді әлеуметтік желілерге жарияламауыңызды сұраймыз."
    }
  };

  let currentLang = 'ru';

  function applyLang(lang) {
    const t = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (t[key]) el.placeholder = t[key];
    });
    document.getElementById('ru-label').classList.toggle('active', lang === 'ru');
    document.getElementById('kz-label').classList.toggle('active', lang === 'kz');
  }

  function toggleLang() {
    currentLang = currentLang === 'ru' ? 'kz' : 'ru';
    applyLang(currentLang);
  }

  function updateCountdown() {
    const weddingDate = new Date('July 25, 2026 15:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    
    if (distance < 0) {
        document.getElementById('days').innerText = "0";
        document.getElementById('hours').innerText = "0";
        document.getElementById('minutes').innerText = "0";
        document.getElementById('seconds').innerText = "0";
        return;
    }


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}


setInterval(updateCountdown, 1000);

updateCountdown();


  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 100);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

 

const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicControl');
const musicIcon = document.getElementById('musicIcon');

if (musicBtn && music) {
    musicBtn.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            musicBtn.classList.add('playing');
            musicIcon.innerText = '⏸'; 
        } else {
            music.pause();
            musicBtn.classList.remove('playing');
            musicIcon.innerText = '♪'; 
        }
    });
}
const cards = document.querySelectorAll('.card-photo');
let topIndex = cards.length - 1;

function updateDeck() {
    cards.forEach((card, i) => {
        card.style.zIndex = i;
    });
}

updateDeck();

cards.forEach((card) => {
    card.addEventListener('click', () => {
        const visibleCards = [...cards].filter(c => !c.classList.contains('gone'));
        if (visibleCards.length === 0) return;

        const top = visibleCards[visibleCards.length - 1];
        top.classList.add('gone');

        setTimeout(() => {
            top.classList.remove('gone');
            top.style.zIndex = 0;
            const deck = document.querySelector('.deck');
            deck.prepend(top);
            updateDeck();
        }, 500);
    });
});