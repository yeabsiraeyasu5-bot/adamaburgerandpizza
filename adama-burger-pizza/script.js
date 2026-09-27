/* =========================================================
   ADAMA BURGER AND PIZZA — Data + behavior
   ========================================================= */
const menuItems = [

  /* =========================
     FOOD
     ========================= */

  {
    icon:"🍔",
    popular:true,
    category:"food",
    image:"burger.jpg",
    name:{
      en:"Classic Cheeseburger",
      am:"ክላሲክ ቺዝበርገር",
      om:"Cheeseburger Kilaasikii"
    },
    desc:{
      en:"Beef patty, cheddar, lettuce, tomato",
      am:"የበሬ ስጋ፣ ቺዝ፣ ሰላጣ፣ ቲማቲም",
      om:"Foon sangaa, cheese, salata, tomato"
    },
    price:"180 ETB"
  },

  {
    icon:"🍕",
    popular:true,
    category:"food",
    image:"pizza.jpg",
    name:{
      en:"Pepperoni Pizza",
      am:"ፔፐሮኒ ፒዛ",
      om:"Pizza Pepperoni"
    },
    desc:{
      en:"Mozzarella, pepperoni, house sauce",
      am:"ሞዛሬላ፣ ፔፐሮኒ፣ ልዩ ሶስ",
      om:"Mozzarella, pepperoni, saawusii mana"
    },
    price:"320 ETB"
  },

  {
    icon:"🍟",
    popular:false,
    category:"food",
    image:"fries.jpg",
    name:{
      en:"Crispy Fries",
      am:"ክሪስፒ ጥብስ",
      om:"Chips Cirracha"
    },
    desc:{
      en:"Golden fries, house seasoning",
      am:"ወርቃማ ጥብስ፣ ልዩ ቅመም",
      om:"Chips warqee, urgooftuu manaa"
    },
    price:"90 ETB"
  },

  {
    icon:"🍗",
    popular:true,
    category:"food",
    image:"chicken-burger.jpg",
    name:{
      en:"Crispy Chicken Burger",
      am:"ክሪስፒ ቺክን በርገር",
      om:"Burger Lukuu Cirracha"
    },
    desc:{
      en:"Fried chicken fillet, spicy mayo",
      am:"የተጠበሰ ዶሮ፣ ስፓይሲ ማዮ",
      om:"Foon lukuu qeeqame, mayo hadhaawaa"
    },
    price:"210 ETB"
  },


  /* =========================
     DRINKS
     ========================= */

  {
    icon:"🥤",
    popular:false,
    category:"drink",
    image:"coca-cola.jpg",
    name:{
      en:"Coca-Cola",
      am:"ኮካ ኮላ",
      om:"Coca-Cola"
    },
    desc:{
      en:"Chilled Coca-Cola",
      am:"ቀዝቃዛ ኮካ ኮላ",
      om:"Coca-Cola qabbanaa'aa"
    },
    price:"60 ETB"
  },

  {
    icon:"🥤",
    popular:false,
    category:"drink",
    image:"sprite.jpg",
    name:{
      en:"Sprite",
      am:"ስፕራይት",
      om:"Sprite"
    },
    desc:{
      en:"Cold and refreshing Sprite",
      am:"ቀዝቃዛና አዲስ ስሜት የሚሰጥ ስፕራይት",
      om:"Sprite qabbanaa'aa fi nama haaromsu"
    },
    price:"60 ETB"
  },

  {
    icon:"🥭",
    popular:false,
    category:"drink",
    image:"mango-juice.jpg",
    name:{
      en:"Fresh Mango Juice",
      am:"ትኩስ የማንጎ ጁስ",
      om:"Cuunfaa Maangoo Haaraa"
    },
    desc:{
      en:"Fresh mango juice",
      am:"ትኩስ የማንጎ ጭማቂ",
      om:"Cuunfaa maangoo haaraa"
    },
    price:"70 ETB"
  }

];

const reviews = [
  {name:"Selam T.", stars:5, text:{en:"Best burger in Adama, hands down. Delivery was fast too!",am:"በአዳማ ምርጥ በርገር ነው። ማድረሱም ፈጣን ነበር!",om:"Burger Adaamaa keessatti hunda irra caalu. Geessisuunis dafaa ture!"}},
  {name:"Nathan K.", stars:5, text:{en:"Pizza was fresh and cheesy, exactly what I wanted.",am:"ፒዛው ትኩስ እና ቺዝ የበዛበት ነበር።",om:"Pizza haaraa fi cheese qabu, waan ani barbaadu sirriitti ture."}},
  {name:"Fatuma A.", stars:4, text:{en:"Great taste, a bit of a wait during peak hours.",am:"ጣዕሙ ጥሩ ነው፣ በፍጥነት ሰዓት ትንሽ መጠበቅ አለ።",om:"Dhandhamni gaarii, saatii dhiphaa keessa xiqqoo eegumsa qaba."}},
];

const i18n = {
  en:{
    promo_text:"🎉 Free delivery on your first order — use code ADAMA50",
    brand:"ADAMA <span>BURGER &amp; PIZZA</span>",
    m_home:"Home", m_about:"About US ", m_menu:"Menu / Order", m_delivery:"Delivery", m_rewards:"Rewards", m_soon:"Coming soon", m_reviews:"Reviews", m_contact:"Contact Us", m_login:"Login", m_signup:"Create Account",
    signup_title:"Create your account", signup_btn:"Sign Up", login_title:"Log in", login_btn:"Log In",
    hero_h1:"Best <em>Burgers</em> &amp; Pizza in Adama", hero_p:"Fresh, fast, and delivered hot to your door. Burgers, pizza, fast food and drinks made the way you like them.",
    hero_cta:"Order Now", hero_cta2:"View Menu", hero_note:"Hero photo placeholder — replace images/assets/hero-bg.jpg with your own banner.",
    pop_eye:"FAN FAVORITES", pop_h2:"Popular Items",
    offer_eye:"SPECIAL OFFER", offer_h2:"This week's deal", offer_text:"Buy any large pizza and get a free drink. Valid on delivery orders over 300 ETB.", offer_btn:"Claim Offer",
    menu_eye:"OUR MENU", menu_h2:"Pick your favorites",
    rev_eye:"CUSTOMER REVIEWS", rev_h2:"What people are saying", rev_form_title:"Leave a review", rev_form_name:"Your name", rev_form_rating:"Rating", rev_form_comment:"Your review", rev_form_submit:"Submit Review",
    visit_eye:"VISIT US", visit_h2:"Location, hours & contact",
    v_addr_t:"Address", v_addr:"Bole Road, near City Square, Adama, Ethiopia", v_map:"Map preview — Adama city area",
    v_hours_t:"Opening Hours", v_hours:"Every day · 9:00 AM – 11:00 PM", v_delivery:"Delivery zone: within 6 km of city center",
    v_contact_t:"Contact", v_phone:"+251 91 234 5678", v_email:"hello@adamaburgerpizza.com",
    order_float:"Order Now",
    add:"Add", deliver:"Deliver",
    contact_eye:"CONTACT US",
    contact_h2:"Get in touch",
    v_phone_label:"Phone",
    v_email_label:"Email",
     
    social_title:"Follow us",
    v_map_title:"Find us on the map",
    v_map_btn:"Open Map",
    hours_eye:"OPENING HOURS",
    hours_everyday:"Every day",
    delivery_title:"Delivery",
  },
  am:{
    promo_text:"🎉 በመጀመሪያ ትዕዛዝዎ ነጻ ማድረስ — ኮድ ADAMA50 ይጠቀሙ",
    brand:"አዳማ <span>በርገር እና ፒዛ</span>",
    m_home:"መነሻ", m_about:"ስለ እኛ", m_menu:"ምናሌ / ማዘዣ", m_delivery:"ማድረስ", m_rewards:"ሽልማቶች", m_soon:"በቅርቡ ይመጣል", m_reviews:"አስተያየቶች", m_contact:"አግኙን", m_login:"ግባ", m_signup:"መለያ ይክፈቱ",
    signup_title:"መለያ ይፍጠሩ", signup_btn:"ይመዝገቡ", login_title:"ግቡ", login_btn:"ግባ",
    hero_h1:"በአዳማ ምርጥ <em>በርገር</em> እና ፒዛ", hero_p:"ትኩስ፣ ፈጣን እና ወደ በርዎ የሚደርስ። በርገር፣ ፒዛ፣ ፈጣን ምግብ እና መጠጦች እንደፈለጉት።",
    hero_cta:"አሁን ይዘዙ", hero_cta2:"ምናሌ ይመልከቱ", hero_note:"የባነር ምስል መቀመጫ — images/assets/hero-bg.jpg ን በእራስዎ ምስል ይቀይሩ።",
    pop_eye:"ተወዳጅ ምግቦች", pop_h2:"ተወዳጅ ንጥሎች",
    offer_eye:"ልዩ ቅናሽ", offer_h2:"የዚህ ሳምንት ቅናሽ", offer_text:"ማንኛውንም ትልቅ ፒዛ ይግዙ እና ነጻ መጠጥ ያግኙ። ከ300 ብር በላይ ለሆኑ ትዕዛዞች ብቻ።", offer_btn:"ቅናሹን ይውሰዱ",
    menu_eye:"ምናሌያችን", menu_h2:"የሚወዱትን ይምረጡ",
    rev_eye:"የደንበኞች አስተያየት", rev_h2:"ሰዎች የሚሉት", rev_form_title:"አስተያየት ይስጡ", rev_form_name:"ስምዎ", rev_form_rating:"ደረጃ", rev_form_comment:"አስተያየትዎ", rev_form_submit:"አስተያየት ላክ",
    visit_eye:"ይጎብኙን", visit_h2:"አድራሻ፣ ሰዓት እና ግንኙነት",
    v_addr_t:"አድራሻ", v_addr:"ቦሌ መንገድ፣ ከከተማ አደባባይ አጠገብ፣ አዳማ", v_map:"የካርታ እይታ — የአዳማ ከተማ አካባቢ",
    v_hours_t:"የስራ ሰዓት", v_hours:"ዕለታዊ · 9:00 ጠዋት – 11:00 ማታ", v_delivery:"የማድረስ ክልል፦ ከከተማ ማዕከል 6 ኪ.ሜ ውስጥ",
    v_contact_t:"ግንኙነት", v_phone:"+251 91 234 5678", v_email:"hello@adamaburgerpizza.com",
    order_float:"ይዘዙ",
    add:"ጨምር", deliver:"አድርስ",
    contact_eye:"ያግኙን",
    contact_h2:"ከእኛ ጋር ይገናኙ",
    v_phone_label:"ስልክ",
    v_email_label:"ኢሜይል",
    social_title:"ይከተሉን",
    v_map_title:"በካርታ ላይ ያግኙን",
    v_map_btn:"ካርታ ክፈት",
    hours_eye:"የስራ ሰዓት",
    hours_everyday:"በየቀኑ",
    delivery_title:"ማድረስ",
  },
  om:{
    promo_text:"🎉 Ajaja jalqabaa keessaniif geejjiba bilisaa — koodii ADAMA50 fayyadamaa",
    brand:"ADAMA <span>BURGER FI PIZZA</span>",
    m_home:"Fuula Duraa", m_about:"Waa'ee Keenya", m_menu:"Menu / Ajaja", m_delivery:"Geejjiba", m_rewards:"Badhaasa", m_soon:"Dhiyootti ni dhufa", m_reviews:"Yaada", m_contact:"Nu Quunnamaa", m_login:"Seenii", m_signup:"Akkaawuntii Uumi",
    signup_title:"Akkaawuntii keessan uumaa", signup_btn:"Galmaa'i", login_title:"Seenii", login_btn:"Seeni",
    hero_h1:"<em>Burger</em> fi Pizza Filatamaa Adaamaa keessatti", hero_p:"Haaraa, ariifachiisaa, balbala keessanitti geessisaa. Burger, pizza, nyaata ariifachiisaa fi dhugaatii akkuma barbaaddan.",
    hero_cta:"Amma Ajaji", hero_cta2:"Menu Ilaali", hero_note:"Bakka fakkii banner — images/assets/hero-bg.jpg fakkii keessaniin bakka buusaa.",
    pop_eye:"KAN BAAY'EE JAALATAMAN", pop_h2:"Nyaata Filatamaa",
    offer_eye:"KENNAA ADDAA", offer_h2:"Kennaa torban kanaa", offer_text:"Pizza guddaa tokko bitadhaa dhugaatii bilisaa argadhaa. Ajaja geejjibaa Birrii 300 ol ta'eef qofa.", offer_btn:"Kennaa Fudhadhu",
    menu_eye:"MENU KEENYA", menu_h2:"Kan barbaaddan filadhaa",
    rev_eye:"YAADA MAAMILOOTAA", rev_h2:"Namoonni maal jedhu", rev_form_title:"Yaada kennaa", rev_form_name:"Maqaa keessan", rev_form_rating:"Sadarkaa", rev_form_comment:"Yaada keessan", rev_form_submit:"Yaada Ergaa",
    visit_eye:"NU DAAWWADHAA", visit_h2:"Teessoo, sa'aatii fi quunnamtii",
    v_addr_t:"Teessoo", v_addr:"Karra Bolee, cinaa Iddoo Waltajjii, Adaamaa", v_map:"Fakkii Kaartaa — Naannoo Magaalaa Adaamaa",
    v_hours_t:"Sa'aatii Hojii", v_hours:"Guyyaa hunda · WD 9:00 – Galgala 11:00", v_delivery:"Naannoo geejjibaa: km 6 giddu-galeessa magaalaa keessatti",
    v_contact_t:"Quunnamtii", v_phone:"+251 91 234 5678", v_email:"hello@adamaburgerpizza.com",
    order_float:"Ajaji",
    add:"Dabali", deliver:"Geessi",
    contact_eye:"NU QUUNNAMAA",
    contact_h2:"Nu Waliin Quunnamaa",
    v_phone_label:"Bilbila",
    v_email_label:"Imeelii",
    social_title:"Nu Hordofaa",
    v_map_title:"Kaartaa Irratti Nu Argadhaa",
    v_map_btn:"Kaartaa Bani",
    hours_eye:"SAA'ATII HOJII",
    hours_everyday:"Guyyaa Hunda",
    delivery_title:"Geejjiba",
  }
};
let currentLang = "en";



function renderPopular(){
  const grid = document.getElementById("popularGrid");

  grid.innerHTML = menuItems
    .filter(i => i.popular)
    .map(it => `
      <div class="card popular-card">

        <div class="popular-photo">
          <img src="${it.image}" alt="${it.name[currentLang]}">
        </div>

        <div class="popular-info">
          <h3>${it.name[currentLang]}</h3>

          <p>${it.desc[currentLang]}</p>

          <div class="popular-bottom">
            <div class="price">${it.price}</div>

            <div class="popular-actions">
              <button class="add-btn">
                ${i18n[currentLang].add}
              </button>

              <button class="deliver-btn">
                ${i18n[currentLang].deliver}
              </button>
            </div>
          </div>
        </div>

      </div>
    `)
    .join("");
}
function renderMenu(){

  const foodGrid = document.getElementById("foodMenuGrid");
  const drinkGrid = document.getElementById("drinkMenuGrid");

  const createCard = (it) => `
    <div class="menu-card">

      <div class="menu-photo">
        <img src="${it.image || 'burger.jpg'}" alt="${it.name[currentLang]}">
      </div>

      <div class="menu-info">

        <h3>${it.name[currentLang]}</h3>

        <p>${it.desc[currentLang]}</p>

        <div class="menu-bottom">

          <span class="menu-price">
            ${it.price}
          </span>

          <div class="menu-actions">

            <button class="add-btn">
              ${i18n[currentLang].add}
            </button>

            <button class="deliver-btn">
              ${i18n[currentLang].deliver}
            </button>

          </div>

        </div>

      </div>

    </div>
  `;

  const foodItems = menuItems.filter(it => it.category === "food");
  const drinkItems = menuItems.filter(it => it.category === "drink");

  foodGrid.innerHTML = foodItems.map(createCard).join("");
  drinkGrid.innerHTML = drinkItems.map(createCard).join("");
}
function applyLang(lang){
  currentLang = lang;
  document.querySelectorAll("[data-lang]").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if(i18n[lang][key] !== undefined) el.innerHTML = i18n[lang][key];
  });
  renderPopular();
  renderMenu();
  renderReviews();
}

document.querySelectorAll("[data-lang]").forEach(btn=>{
  btn.addEventListener("click", ()=>applyLang(btn.dataset.lang));
});

const menuPanel = document.getElementById("menuPanel");
const overlay = document.getElementById("overlay");
function openMenu(){ menuPanel.classList.add("open"); overlay.classList.add("show"); }
function closeMenu(){ menuPanel.classList.remove("open"); overlay.classList.remove("show"); }
document.getElementById("burgerBtn").addEventListener("click", openMenu);
document.getElementById("menuClose").addEventListener("click", closeMenu);
overlay.addEventListener("click", ()=>{ closeMenu(); closeModal(); });
document.querySelectorAll(".menu-panel a").forEach(a => {
  a.addEventListener("click", () => {
    closeMenu();
  });
});
const loginModal = document.getElementById("loginModal");
const signupFields = document.getElementById("signupFields");
const modalTitle = document.getElementById("modalTitle");
const modalSubmit = document.getElementById("modalSubmit");
function openModal(tab){ loginModal.classList.add("show"); setTab(tab); }
function closeModal(){ loginModal.classList.remove("show"); }
function setTab(tab){
  document.getElementById("tabLogin").classList.toggle("active", tab==="login");
  document.getElementById("tabSignup").classList.toggle("active", tab==="signup");
  signupFields.style.display = tab==="signup" ? "block" : "none";
  const t = i18n[currentLang];
  modalTitle.textContent = tab==="signup" ? t.signup_title : t.login_title;
  modalSubmit.textContent = tab==="signup" ? t.signup_btn : t.login_btn;
}
document.getElementById("tabLogin").addEventListener("click", ()=>setTab("login"));
document.getElementById("tabSignup").addEventListener("click", ()=>setTab("signup"));
document.getElementById("loginLink").addEventListener("click", e=>{ e.preventDefault(); closeMenu(); openModal("login"); });
document.getElementById("signupLink").addEventListener("click", e=>{ e.preventDefault(); closeMenu(); openModal("signup"); });
document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("submitReview").addEventListener("click", ()=>{
  const name = document.getElementById("revName").value.trim() || "Anonymous";
  const stars = parseInt(document.getElementById("revRating").value, 10);
  const text = document.getElementById("revComment").value.trim();
  if(!text) return;
  reviews.unshift({name, stars, text:{en:text, am:text, om:text}});
  document.getElementById("revName").value = "";
  document.getElementById("revComment").value = "";
  renderReviews();
});

renderPopular();
renderMenu();
renderReviews();
