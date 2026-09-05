const translations = {
  en: {
    brandAr: "الغزال", tagline: "Traditional Mauritanian Biscuits",
    navHome: "Home", navBiscuits: "Our Biscuits", navStory: "Our Story", navQuality: "Quality", navWholesale: "Wholesale", navContact: "Contact",
    heroSubtitle: "TRADITIONAL MAURITANIAN BISCUITS", heroSlogan: "A taste of tradition,<br>made for today.", heroDescription: "Made with carefully selected ingredients and baked to perfection. Authentic taste. Timeless tradition.", discover: "Discover our biscuits",
    qualityIngredients: "Quality ingredients", qualityIngredientsText: "Carefully selected for the best taste", baked: "Baked to perfection", bakedText: "Traditional baking for a golden quality", madeCare: "Made with care", madeCareText: "Passion and know-how in every biscuit", madeMauritania: "Made in Mauritania", madeMauritaniaText: "Proudly produced in Nouakchott",
    ourBiscuits: "Our biscuits", traditionalBiscuits: "Traditional Mauritanian Biscuits", biscuitsText: "LA GAZELLE biscuits are inspired by Mauritanian tradition. Crunchy, delicious and made to accompany your tea moments and family gatherings.", traditionalRecipe: "Traditional<br>Recipe", noColors: "No Artificial<br>Colors", noPreservatives: "No Preservatives<br>Added", teaCoffee: "Perfect with<br>Tea & Coffee", viewBiscuits: "View our biscuits",
    ourStory: "Our story", bornTradition: "Born from Tradition,<br>Built for the Future", storyText: "is a Mauritanian company specialized in the production of traditional biscuits.", storyText2: "We combine traditional recipes with modern production standards to offer biscuits of exceptional quality and authentic taste.", learnMore: "Learn more about us",
    qualitySafety: "Quality & Safety", qualityText: "We are committed to the highest standards of quality, hygiene and food safety at every step of our production.", hygienic: "Hygienic Production", qualityControl2: "Quality Control", safeTrusted: "Safe & Trusted", customerSatisfaction: "Customer Satisfaction",
    emailUs: "Email us", chatWithUs: "Chat with us", followUs: "Follow LA GAZELLE", allRights: "All rights reserved."
  },
  ar: {
    brandAr: "الغزال", tagline: "بسكويت موريتاني تقليدي",
    navHome: "الرئيسية", navBiscuits: "بسكويتنا", navStory: "قصتنا", navQuality: "الجودة", navWholesale: "الجملة", navContact: "اتصل بنا",
    heroSubtitle: "بسكويت موريتاني تقليدي", heroSlogan: "طعم من التقاليد،<br>مصنوع لليوم.", heroDescription: "مصنوع من مكونات مختارة بعناية ومخبوز بإتقان. مذاق أصيل وتقاليد خالدة.", discover: "اكتشف بسكويتنا",
    qualityIngredients: "مكونات عالية الجودة", qualityIngredientsText: "مختارة بعناية لأفضل مذاق", baked: "مخبوز بإتقان", bakedText: "خبز تقليدي لجودة ذهبية", madeCare: "مصنوع بعناية", madeCareText: "شغف وخبرة في كل قطعة", madeMauritania: "صنع في موريتانيا", madeMauritaniaText: "إنتاج محلي بفخر في نواكشوط",
    ourBiscuits: "بسكويتنا", traditionalBiscuits: "بسكويت موريتاني تقليدي", biscuitsText: "بسكويت الغزال مستوحى من التقاليد الموريتانية. مقرمش ولذيذ ومصنوع لمرافقة لحظات الشاي واللقاءات العائلية.", traditionalRecipe: "وصفة<br>تقليدية", noColors: "بدون ألوان<br>اصطناعية", noPreservatives: "بدون مواد<br>حافظة", teaCoffee: "مثالي مع<br>الشاي والقهوة", viewBiscuits: "شاهد بسكويتنا",
    ourStory: "قصتنا", bornTradition: "وُلد من التقاليد،<br>وصُنع للمستقبل", storyText: "هي شركة موريتانية متخصصة في إنتاج البسكويت التقليدي.", storyText2: "نجمع بين الوصفات التقليدية ومعايير الإنتاج الحديثة لنقدم بسكويتاً بجودة استثنائية ومذاق أصيل.", learnMore: "اعرف المزيد عنا",
    qualitySafety: "الجودة والسلامة", qualityText: "نلتزم بأعلى معايير الجودة والنظافة وسلامة الغذاء في كل مرحلة من مراحل الإنتاج.", hygienic: "إنتاج صحي", qualityControl2: "مراقبة الجودة", safeTrusted: "آمن وموثوق", customerSatisfaction: "رضا العملاء",
    emailUs: "راسلنا", chatWithUs: "تحدث معنا", followUs: "تابع الغزال", allRights: "جميع الحقوق محفوظة."
  }
};

let currentLang = "en";
const languageSwitch = document.querySelector("#languageSwitch");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#primaryNav");

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[lang][element.dataset.i18n];
    if (value) element.innerHTML = value;
  });

  languageSwitch.innerHTML = lang === "en"
    ? '<span class="lang-active">EN</span><span>العربية</span>'
    : '<span>EN</span><span class="lang-active">العربية</span>';
  localStorage.setItem("lagazelle-language", lang);
}

function closeMenu() {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

languageSwitch.addEventListener("click", () => setLanguage(currentLang === "en" ? "ar" : "en"));
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("resize", () => { if (window.innerWidth > 780) closeMenu(); });

document.querySelector("#year").textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("lagazelle-language") === "ar" ? "ar" : "en");
