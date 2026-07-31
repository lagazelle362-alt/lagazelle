const translations = {
  en: {
    brandAr:"الغزال", tagline:"Traditional Mauritanian Biscuits", navHome:"Home", navBiscuits:"Our Biscuits", navStory:"Our Story", navQuality:"Quality", navWholesale:"Wholesale", navContact:"Contact",
    heroSubtitle:"TRADITIONAL MAURITANIAN BISCUITS", heroSlogan:"A taste of tradition,<br>made for today.", heroDescription:"Authentic Mauritanian biscuits crafted with care for everyday moments and family gatherings.", discover:"Discover Our Biscuits <span>→</span>",
    qualityIngredients:"Quality Ingredients", qualityIngredientsText:"Selected for authentic taste", baked:"Baked with Care", bakedText:"Traditional taste in every bite", madeCare:"Made with Care", madeCareText:"Passion in every biscuit", madeMauritania:"Made in Mauritania", madeMauritaniaText:"Proudly produced in Nouakchott",
    ourBiscuits:"OUR BISCUITS", traditionalBiscuits:"Traditional Mauritanian Biscuits", biscuitsText:"LA GAZELLE biscuits bring the warmth of Mauritanian tradition to every table. Crunchy, delicious and made to accompany tea, coffee and family moments.", traditionalRecipe:"Traditional<br>Recipe", carefullyMade:"Carefully<br>Made", qualityControl:"Quality<br>Control", teaCoffee:"Perfect with<br>Tea & Coffee", contactUs:"Contact Us <span>→</span>",
    ourStory:"OUR STORY", bornTradition:"Born from Tradition,<br>Built for the Future", storyText:"is a Mauritanian company dedicated to producing traditional biscuits with authentic taste and care.", storyText2:"We combine the warmth of tradition with a commitment to consistent quality, creating biscuits made for families, businesses and communities.", learnMore:"Learn More About Us <span>→</span>",
    qualitySafety:"QUALITY & SAFETY", qualityText:"We are committed to quality, hygiene and care at every step of production.", hygienic:"Hygienic Production", qualityControl2:"Quality Control", safeTrusted:"Safe & Trusted", customerSatisfaction:"Customer Satisfaction",
    wholesaleTitle:"WHOLESALE & DISTRIBUTION", wholesaleHeadline:"Bring the taste of LA GAZELLE to your customers.", wholesaleText:"We welcome retailers, distributors and business partners looking for authentic Mauritanian biscuits.", becomePartner:"Become a Partner <span>→</span>",
    contactTitle:"CONTACT US", contactHeadline:"Let’s share the taste of tradition.", contactText:"For wholesale inquiries, distribution and more information, contact LA GAZELLE.", footerTagline:"Traditional Mauritanian Biscuits", allRights:"All rights reserved."
  },
  ar: {
    brandAr:"الغزال", tagline:"بسكويت موريتاني تقليدي", navHome:"الرئيسية", navBiscuits:"بسكويتنا", navStory:"قصتنا", navQuality:"الجودة", navWholesale:"الجملة والتوزيع", navContact:"اتصل بنا",
    heroSubtitle:"بسكويت موريتاني تقليدي", heroSlogan:"طعم الأصالة،<br>مصنوع لليوم.", heroDescription:"بسكويت موريتاني أصيل يُصنع بعناية للحظات اليومية واللقاءات العائلية.", discover:"اكتشف بسكويتنا <span>←</span>",
    qualityIngredients:"مكونات عالية الجودة", qualityIngredientsText:"مختارة لمذاق أصيل", baked:"مخبوز بعناية", bakedText:"طعم تقليدي في كل لقمة", madeCare:"مصنوع بعناية", madeCareText:"شغف في كل قطعة", madeMauritania:"صنع في موريتانيا", madeMauritaniaText:"إنتاج محلي بفخر في نواكشوط",
    ourBiscuits:"بسكويتنا", traditionalBiscuits:"بسكويت موريتاني تقليدي", biscuitsText:"يجمع بسكويت الغزال دفء التقاليد الموريتانية في كل مائدة. مقرمش ولذيذ ومثالي مع الشاي والقهوة واللحظات العائلية.", traditionalRecipe:"وصفة<br>تقليدية", carefullyMade:"مصنوع<br>بعناية", qualityControl:"مراقبة<br>الجودة", teaCoffee:"مثالي مع<br>الشاي والقهوة", contactUs:"اتصل بنا <span>←</span>",
    ourStory:"قصتنا", bornTradition:"وُلد من التقاليد،<br>ويُبنى للمستقبل", storyText:"شركة موريتانية متخصصة في إنتاج البسكويت التقليدي بمذاق أصيل وعناية كبيرة.", storyText2:"نمزج دفء التقاليد مع الالتزام بالجودة المستمرة لنصنع بسكويتاً للعائلات والشركات والمجتمعات.", learnMore:"اعرف المزيد عنا <span>←</span>",
    qualitySafety:"الجودة والسلامة", qualityText:"نلتزم بالجودة والنظافة والعناية في كل مرحلة من مراحل الإنتاج.", hygienic:"إنتاج صحي", qualityControl2:"مراقبة الجودة", safeTrusted:"آمن وموثوق", customerSatisfaction:"رضا العملاء",
    wholesaleTitle:"الجملة والتوزيع", wholesaleHeadline:"قدّم طعم الغزال لعملائك.", wholesaleText:"نرحب بتجار التجزئة والموزعين والشركاء التجاريين الباحثين عن بسكويت موريتاني أصيل.", becomePartner:"كن شريكاً <span>←</span>",
    contactTitle:"اتصل بنا", contactHeadline:"لنشارككم طعم الأصالة.", contactText:"للاستفسارات التجارية والتوزيع والمزيد من المعلومات، تواصلوا مع الغزال.", footerTagline:"بسكويت موريتاني تقليدي", allRights:"جميع الحقوق محفوظة."
  }
};

let currentLang = "en";
const switcher = document.getElementById("languageSwitch");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function setLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang === "ar" ? "ar" : "en";
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  switcher.innerHTML = lang === "en" ? '<span class="lang-active">EN</span><span>العربية</span>' : '<span>EN</span><span class="lang-active">العربية</span>';
}

switcher.addEventListener("click", () => setLanguage(currentLang === "en" ? "ar" : "en"));
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
