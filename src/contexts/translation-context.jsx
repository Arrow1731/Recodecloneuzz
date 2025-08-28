import { createContext, useContext, useState, useEffect } from "react";

const TranslationContext = createContext(undefined);

// Translation data
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.catalog": "Catalog",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.phone": "+998 90 123 45 67",

    // Homepage
    "hero.title": "Quality and safety in every door",
    "hero.subtitle":
      "Redore company produces high-quality iron doors using modern technologies and provides a guarantee for all our products.",
    "hero.cta.catalog": "View catalog",
    "hero.cta.consultation": "Get consultation",
    "hero.guarantee": "Quality guarantee",
    "hero.guarantee.subtitle": "For all products",

    // Why choose us
    "why.title": "Why choose Redore?",
    "why.subtitle":
      "We combine traditional craftsmanship with modern technologies to create reliable and beautiful doors",
    "why.quality.title": "High quality",
    "why.quality.desc":
      "Quality materials combined with the use of quality materials and modern manufacturing technologies",
    "why.reliability.title": "Reliability guarantee",
    "why.reliability.desc": "Professional approach to each client and guaranteed reliability for years of use",
    "why.technology.title": "Modern technologies",
    "why.technology.desc": "Advanced methods of production for creating reliable doors",

    // Products
    "products.title": "Our products",
    "products.subtitle": "Wide range of iron doors for home and business",
    "products.home.title": "Entrance doors for home",
    "products.home.desc": "Reliable protection and elegant design for your home",
    "products.commercial.title": "Commercial doors",
    "products.commercial.desc": "Durable doors for offices and commercial premises",
    "products.fire.title": "Fire-resistant doors",
    "products.fire.desc": "Certified doors with fire-resistant properties",
    "products.more": "Learn more",
    "products.view.catalog": "View full catalog",

    // Guarantees
    "guarantees.title": "Our guarantees and obligations",
    "guarantees.official": "Official guarantee for all products",
    "guarantees.materials": "Quality materials and components",
    "guarantees.installation": "Professional installation",
    "guarantees.service": "Post-warranty service",
    "guarantees.approach": "Individual approach to each client",

    // Testimonials
    "testimonials.title": "Customer reviews",
    "testimonials.client1.name": "Aziz Karimov",
    "testimonials.client1.text":
      "Excellent door quality! Fast and accurate installation. The door has been serving for 2 years - no complaints. Recommend!",
    "testimonials.client2.name": "Dilnoza Rahimova",
    "testimonials.client2.text":
      "Professional approach and quality work. The door is installed quickly and accurately.",
    "testimonials.client3.name": "Nodir Yusupova",
    "testimonials.client3.text": "Very satisfied with the purchase. The door is beautiful, reliable and durable.",

    // Contact
    "contact.title": "Contact us",
    "contact.subtitle": "Ready to answer your questions and help choose the ideal door",
    "contact.phone": "+998 90 123 45 67",
    "contact.email": "info@redore.uz",
    "contact.address": "Urgench, Promyshlennaya str., 15",
    "contact.hours": "Working hours",
    "contact.hours.weekdays": "Mon-Fri: 8:00 - 18:00",
    "contact.hours.saturday": "Sat: 9:00 - 16:00",
    "contact.hours.sunday": "Sun: day off",

    // Footer
    "footer.description":
      "Leading manufacturer of iron doors in Khorezm region. Quality, reliability and safety since 2009.",
    "footer.navigation": "Navigation",
    "footer.contacts": "Contacts",
    "footer.hours": "Working hours",
    "footer.copyright": "© 2024 Redore. All rights reserved. Iron door production in Khorezm region.",

    // Catalog
    "catalog.title": "Catalog",
    "catalog.subtitle": "Our doors and accessories",
    "catalog.back": "Back to home",

    // About
    "about.title": "About Redore company",
    "about.subtitle":
      "For over 15 years we have been creating reliable iron doors that protect homes and businesses of our clients in Khorezm region.",
    "about.years": "years on market",
    "about.clients": "satisfied clients",
    "about.models": "door models",
    "about.guarantee": "quality guarantee",
    "about.experience": "Experience and reliability",
    "about.quality": "For all products",
    "about.wide": "Wide range",
    "about.full": "For all products",
    "about.history.title": "Our history",
    "about.history.text":
      "Redore company was founded in 2009, and since then we have been one of the leading manufacturers of iron doors that provide reliability and comfort to our clients.",
    "about.values.title": "Our values",
    "about.values.quality": "Quality",
    "about.values.quality.desc":
      "We use only the best materials, but we do not stop there, investing in modern equipment and improving production methods.",
    "about.values.care": "Care for clients",
    "about.values.care.desc": "Individual approach to each client and guaranteed reliability for years of use.",
    "about.values.professionalism": "Professionalism",
    "about.values.professionalism.desc":
      "Our team consists of experienced specialists who make Redore a leader in iron door production in the region.",
    "about.values.innovation": "Innovation",
    "about.values.innovation.desc":
      "Constant improvement of technologies and production methods for creating reliable doors for our clients.",
    "about.team.title": "Our team",
    "about.team.subtitle": "Experienced professionals who make Redore a leader in iron door production",
    "about.production.title": "Modern production",
    "about.production.equipment": "Modern equipment for metalworking",
    "about.production.lines": "Automated production lines",
    "about.production.quality": "Quality control system at every stage",
    "about.production.ecology": "Environmentally friendly production technologies",
    "about.production.assembly": "Professional assembly and testing of each door",

    // Admin
    "admin.title": "Admin Panel",
    "admin.login": "Login",
    "admin.password": "Password",
    "admin.signin": "Sign In",
    "admin.products": "Products",
    "admin.add.product": "Add Product",
    "admin.product.name": "Product Name",
    "admin.product.description": "Description",
    "admin.product.price": "Price",
    "admin.product.image": "Image URL",
    "admin.save": "Save",
    "admin.cancel": "Cancel",
    "admin.edit": "Edit",
    "admin.delete": "Delete",
  },
  uz: {
    // Navigation
    "nav.home": "Bosh sahifa",
    "nav.catalog": "Katalog",
    "nav.about": "Kompaniya haqida",
    "nav.contact": "Kontaktlar",
    "nav.phone": "+998 90 123 45 67",

    // Homepage
    "hero.title": "Har bir eshikda sifat va xavfsizlik",
    "hero.subtitle":
      "Redore kompaniyasi zamonaviy texnologiyalar yordamida yuqori sifatli temir eshiklar ishlab chiqaradi va barcha mahsulotlarimizga kafolat beradi.",
    "hero.cta.catalog": "Katalogni ko'rish",
    "hero.cta.consultation": "Maslahat olish",
    "hero.guarantee": "Sifat kafolati",
    "hero.guarantee.subtitle": "Barcha mahsulotlar uchun",

    // Why choose us
    "why.title": "Nega Redore'ni tanlaysiz?",
    "why.subtitle":
      "Biz an'anaviy hunarmandchilikni zamonaviy texnologiyalar bilan birlashtirib, ishonchli va chiroyli eshiklar yaratamiz",
    "why.quality.title": "Yuqori sifat",
    "why.quality.desc": "Sifatli materiallar va zamonaviy ishlab chiqarish texnologiyalaridan foydalanish",
    "why.reliability.title": "Ishonchlilik kafolati",
    "why.reliability.desc":
      "Har bir mijozga professional yondashuv va ko'p yillik foydalanish uchun kafolatlangan ishonchlilik",
    "why.technology.title": "Zamonaviy texnologiyalar",
    "why.technology.desc": "Ishonchli eshiklar yaratish uchun ilg'or ishlab chiqarish usullari",

    // Products
    "products.title": "Bizning mahsulotlarimiz",
    "products.subtitle": "Uy va biznes uchun temir eshiklarning keng assortimenti",
    "products.home.title": "Uy uchun kirish eshiklari",
    "products.home.desc": "Uyingiz uchun ishonchli himoya va nafis dizayn",
    "products.commercial.title": "Tijorat eshiklari",
    "products.commercial.desc": "Ofislar va tijorat binolari uchun bardoshli eshiklar",
    "products.fire.title": "Yong'inga chidamli eshiklar",
    "products.fire.desc": "Yong'inga chidamli xususiyatlarga ega sertifikatlangan eshiklar",
    "products.more": "Batafsil",
    "products.view.catalog": "To'liq katalogni ko'rish",

    // Guarantees
    "guarantees.title": "Bizning kafolatlarimiz va majburiyatlarimiz",
    "guarantees.official": "Barcha mahsulotlar uchun rasmiy kafolat",
    "guarantees.materials": "Sifatli materiallar va komponentlar",
    "guarantees.installation": "Professional o'rnatish",
    "guarantees.service": "Kafolatdan keyingi xizmat",
    "guarantees.approach": "Har bir mijozga individual yondashuv",

    // Testimonials
    "testimonials.title": "Mijozlar fikrlari",
    "testimonials.client1.name": "Aziz Karimov",
    "testimonials.client1.text":
      "Ajoyib eshik sifati! Tez va aniq o'rnatish. Eshik 2 yil xizmat qilmoqda - hech qanday shikoyat yo'q. Tavsiya qilaman!",
    "testimonials.client2.name": "Dilnoza Rahimova",
    "testimonials.client2.text": "Professional yondashuv va sifatli ish. Eshik tez va aniq o'rnatildi.",
    "testimonials.client3.name": "Nodir Yusupova",
    "testimonials.client3.text": "Xariddan juda mamnunman. Eshik chiroyli, ishonchli va bardoshli.",

    // Contact
    "contact.title": "Biz bilan bog'laning",
    "contact.subtitle": "Savollaringizga javob berishga va ideal eshikni tanlashda yordam berishga tayyormiz",
    "contact.phone": "+998 90 123 45 67",
    "contact.email": "info@redore.uz",
    "contact.address": "Urganch, Sanoat ko'chasi, 15",
    "contact.hours": "Ish vaqti",
    "contact.hours.weekdays": "Du-Ju: 8:00 - 18:00",
    "contact.hours.saturday": "Sh: 9:00 - 16:00",
    "contact.hours.sunday": "Ya: dam olish kuni",

    // Footer
    "footer.description":
      "Xorazm viloyatidagi temir eshiklar ishlab chiqaruvchi yetakchi kompaniya. 2009 yildan beri sifat, ishonchlilik va xavfsizlik.",
    "footer.navigation": "Navigatsiya",
    "footer.contacts": "Kontaktlar",
    "footer.hours": "Ish vaqti",
    "footer.copyright":
      "© 2024 Redore. Barcha huquqlar himoyalangan. Xorazm viloyatida temir eshiklar ishlab chiqarish.",

    // Catalog
    "catalog.title": "Katalog",
    "catalog.subtitle": "Bizning eshiklar va aksessuarlar",
    "catalog.back": "Bosh sahifaga qaytish",

    // About
    "about.title": "Redore kompaniyasi haqida",
    "about.subtitle":
      "15 yildan ortiq vaqt davomida biz Xorazm viloyatidagi mijozlarimizning uy va bizneslarini himoya qiladigan ishonchli temir eshiklar yaratib kelmoqdamiz.",
    "about.years": "yil bozorda",
    "about.clients": "mamnun mijozlar",
    "about.models": "eshik modellari",
    "about.guarantee": "sifat kafolati",
    "about.experience": "Tajriba va ishonchlilik",
    "about.quality": "Barcha mahsulotlar uchun",
    "about.wide": "Keng assortiment",
    "about.full": "Barcha mahsulotlar uchun",
    "about.history.title": "Bizning tariximiz",
    "about.history.text":
      "Redore kompaniyasi 2009 yilda tashkil etilgan va o'sha paytdan beri biz mijozlarimizga ishonchlilik va qulaylik ta'minlaydigan temir eshiklar ishlab chiqaruvchi yetakchi kompaniyalardan biri bo'lib kelmoqdamiz.",
    "about.values.title": "Bizning qadriyatlarimiz",
    "about.values.quality": "Sifat",
    "about.values.quality.desc":
      "Biz faqat eng yaxshi materiallardan foydalanamiz, lekin bunga to'xtab qolmay, zamonaviy uskunalarga sarmoya kiritamiz va ishlab chiqarish usullarini takomillashtiramiz.",
    "about.values.care": "Mijozlarga g'amxo'rlik",
    "about.values.care.desc":
      "Har bir mijozga individual yondashuv va ko'p yillik foydalanish uchun kafolatlangan ishonchlilik.",
    "about.values.professionalism": "Professionallik",
    "about.values.professionalism.desc":
      "Bizning jamoamiz Redore'ni viloyatda temir eshiklar ishlab chiqarishda yetakchi qiladigan tajribali mutaxassislardan iborat.",
    "about.values.innovation": "Innovatsiya",
    "about.values.innovation.desc":
      "Mijozlarimiz uchun ishonchli eshiklar yaratish uchun texnologiyalar va ishlab chiqarish usullarini doimiy takomillashtirish.",
    "about.team.title": "Bizning jamoamiz",
    "about.team.subtitle": "Redore'ni temir eshiklar ishlab chiqarishda yetakchi qiladigan tajribali mutaxassislar",
    "about.production.title": "Zamonaviy ishlab chiqarish",
    "about.production.equipment": "Metallni qayta ishlash uchun zamonaviy uskunalar",
    "about.production.lines": "Avtomatlashtirilgan ishlab chiqarish liniyalari",
    "about.production.quality": "Har bir bosqichda sifat nazorati tizimi",
    "about.production.ecology": "Ekologik toza ishlab chiqarish texnologiyalari",
    "about.production.assembly": "Har bir eshikning professional yig'ilishi va sinovdan o'tkazilishi",

    // Admin
    "admin.title": "Admin Panel",
    "admin.login": "Login",
    "admin.password": "Parol",
    "admin.signin": "Kirish",
    "admin.products": "Mahsulotlar",
    "admin.add.product": "Mahsulot qo'shish",
    "admin.product.name": "Mahsulot nomi",
    "admin.product.description": "Tavsif",
    "admin.product.price": "Narx",
    "admin.product.image": "Rasm URL",
    "admin.save": "Saqlash",
    "admin.cancel": "Bekor qilish",
    "admin.edit": "Tahrirlash",
    "admin.delete": "O'chirish",
  },
  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.catalog": "Каталог",
    "nav.about": "О компании",
    "nav.contact": "Контакты",
    "nav.phone": "+998 90 123 45 67",

    // Homepage
    "hero.title": "Качество и безопасность в каждой двери",
    "hero.subtitle":
      "Компания Redore производит железные двери высочайшего качества с использованием современных технологий и предоставляет гарантию на все свои изделия.",
    "hero.cta.catalog": "Смотреть каталог",
    "hero.cta.consultation": "Получить консультацию",
    "hero.guarantee": "Гарантия качества",
    "hero.guarantee.subtitle": "На все изделия",

    // Why choose us
    "why.title": "Почему выбирают Redore?",
    "why.subtitle":
      "Мы сочетаем традиционное мастерство с современными технологиями для создания надежных и красивых дверей",
    "why.quality.title": "Высокое качество",
    "why.quality.desc":
      "Качественные материалы в сочетании с использованием качественных материалов и современных технологий производства",
    "why.reliability.title": "Гарантия надежности",
    "why.reliability.desc":
      "Профессиональный подход к каждому клиенту и гарантированная надежность на годы использования",
    "why.technology.title": "Современные технологии",
    "why.technology.desc": "Передовые методы производства для создания надежных дверей",

    // Products
    "products.title": "Наша продукция",
    "products.subtitle": "Широкий ассортимент железных дверей для дома и бизнеса",
    "products.home.title": "Входные двери для дома",
    "products.home.desc": "Надежная защита и элегантный дизайн для вашего дома",
    "products.commercial.title": "Коммерческие двери",
    "products.commercial.desc": "Прочные двери для офисов и коммерческих помещений",
    "products.fire.title": "Противопожарные двери",
    "products.fire.desc": "Сертифицированные двери с огнестойкими свойствами",
    "products.more": "Подробнее",
    "products.view.catalog": "Посмотреть весь каталог",

    // Guarantees
    "guarantees.title": "Наши гарантии и обязательства",
    "guarantees.official": "Официальная гарантия на все изделия",
    "guarantees.materials": "Качественные материалы и комплектующие",
    "guarantees.installation": "Профессиональная установка",
    "guarantees.service": "Послегарантийное обслуживание",
    "guarantees.approach": "Индивидуальный подход к каждому клиенту",

    // Testimonials
    "testimonials.title": "Отзывы наших клиентов",
    "testimonials.client1.name": "Азиз Каримов",
    "testimonials.client1.text":
      "Отличное качество дверей! Быстрая и точная установка. Дверь служит уже 2 года - никаких нареканий. Рекомендую!",
    "testimonials.client2.name": "Дильноза Рахимова",
    "testimonials.client2.text": "Профессиональный подход и качественная работа. Дверь установлена быстро и аккуратно.",
    "testimonials.client3.name": "Нодир Юсупова",
    "testimonials.client3.text": "Очень довольна покупкой. Дверь красивая, надежная и долговечная.",

    // Contact
    "contact.title": "Свяжитесь с нами",
    "contact.subtitle": "Готовы ответить на ваши вопросы и помочь выбрать идеальную дверь",
    "contact.phone": "+998 90 123 45 67",
    "contact.email": "info@redore.uz",
    "contact.address": "г. Ургенч, ул. Промышленная, 15",
    "contact.hours": "Режим работы",
    "contact.hours.weekdays": "Пн-Пт: 8:00 - 18:00",
    "contact.hours.saturday": "Сб: 9:00 - 16:00",
    "contact.hours.sunday": "Вс: выходной",

    // Footer
    "footer.description":
      "Ведущий производитель железных дверей в Хорезмском регионе. Качество, надежность и безопасность с 2009 года.",
    "footer.navigation": "Навигация",
    "footer.contacts": "Контакты",
    "footer.hours": "Режим работы",
    "footer.copyright": "© 2024 Redore. Все права защищены. Производство железных дверей в Хорезмском регионе.",

    // Catalog
    "catalog.title": "Каталог",
    "catalog.subtitle": "Наши двери и аксессуары",
    "catalog.back": "На главную",

    // About
    "about.title": "О компании Redore",
    "about.subtitle":
      "Более 15 лет мы создаем надежные железные двери, которые защищают дома и бизнес наших клиентов в Хорезмском регионе.",
    "about.years": "лет на рынке",
    "about.clients": "довольных клиентов",
    "about.models": "моделей дверей",
    "about.guarantee": "гарантия качества",
    "about.experience": "Опыт и надежность",
    "about.quality": "На все изделия",
    "about.wide": "Широкий ассортимент",
    "about.full": "На все изделия",
    "about.history.title": "Наша история",
    "about.history.text":
      "Компания Redore была основана в 2009 году, и с тех пор мы являемся одним из ведущих производителей железных дверей, которые обеспечивают надежность и комфорт нашим клиентам.",
    "about.values.title": "Наши ценности",
    "about.values.quality": "Качество",
    "about.values.quality.desc":
      "Мы используем только лучшие материалы, но не останавливаемся на этом, инвестируя в современное оборудование и совершенствуя методы производства.",
    "about.values.care": "Забота о клиентах",
    "about.values.care.desc":
      "Индивидуальный подход к каждому клиенту и гарантированная надежность на годы использования.",
    "about.values.professionalism": "Профессионализм",
    "about.values.professionalism.desc":
      "Наша команда состоит из опытных специалистов, которые делают Redore лидером в производстве железных дверей в регионе.",
    "about.values.innovation": "Инновации",
    "about.values.innovation.desc":
      "Постоянное совершенствование технологий и методов производства для создания надежных дверей для наших клиентов.",
    "about.team.title": "Наша команда",
    "about.team.subtitle": "Опытные профессионалы, которые делают Redore лидером в производстве железных дверей",
    "about.production.title": "Современное производство",
    "about.production.equipment": "Современное оборудование для металлообработки",
    "about.production.lines": "Автоматизированные производственные линии",
    "about.production.quality": "Система контроля качества на каждом этапе",
    "about.production.ecology": "Экологически чистые технологии производства",
    "about.production.assembly": "Профессиональная сборка и тестирование каждой двери",

    // Admin
    "admin.title": "Панель администратора",
    "admin.login": "Логин",
    "admin.password": "Пароль",
    "admin.signin": "Войти",
    "admin.products": "Товары",
    "admin.add.product": "Добавить товар",
    "admin.product.name": "Название товара",
    "admin.product.description": "Описание",
    "admin.product.price": "Цена",
    "admin.product.image": "URL изображения",
    "admin.save": "Сохранить",
    "admin.cancel": "Отмена",
    "admin.edit": "Редактировать",
    "admin.delete": "Удалить",
  },
};

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState("ru");

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("redore-language");
    if (savedLanguage && ["en", "uz", "ru"].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("redore-language", language);
    // Update HTML lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    return translations[language][key] || key;
  };

  return <TranslationContext.Provider value={{ language, setLanguage, t }}>{children}</TranslationContext.Provider>;
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}