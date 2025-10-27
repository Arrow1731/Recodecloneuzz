// "use client";

// import React, { Component } from "react";
// import Contact_link from "../components/Contact_link";
// // import Company_logo from "../assets/images/Company_photo.jpg";
// import Company_logo from "../assets/images/Sign_logo.png";
// import { ArrowRight } from 'lucide-react';

// import {
//   CalendarCheck,
//   Users,
//   Briefcase,
//   BadgeCheck,
//   ShieldCheck,
//   Lightbulb,
//   Headset,
// } from "lucide-react";

// export default class about extends Component {
//   render() {
//     const stats = [
//       { value: "5+", label: "Yillik tajriba", icon: CalendarCheck },
//       { value: "5000+", label: "Mamnun mijozlar", icon: Users },
//       { value: "15+", label: "Professional mutaxassislar", icon: Briefcase },
//       { value: "100%", label: "Sifat kafolati", icon: BadgeCheck },
//     ];

//     const values = [
//       {
//         title: "Sifat",
//         desc: "Har bir mahsulotimiz eng yuqori sifat standartlariga javob beradi.",
//         icon: BadgeCheck,
//       },
//       {
//         title: "Ishonchlilik",
//         desc: "Biz mijozlarimizning ishonchini qadrlaymiz va unga mos xizmat ko‘rsatamiz.",
//         icon: ShieldCheck,
//       },
//       {
//         title: "Innovatsiya",
//         desc: "Doimo yangi dizayn va texnologiyalarni joriy qilamiz.",
//         icon: Lightbulb,
//       },
//       {
//         title: "Mijozlarga xizmat",
//         desc: "Mijozlarimizning ehtiyojlarini birinchi o‘ringa qo‘yamiz.",
//         icon: Headset,
//       },
//     ];

//     return (
//       <div>
//         <div className="container mx-auto px-4 py-12 font-lato">
//           {/* Статистика */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 mt-[100px]">
//             {stats.map((item, idx) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={idx}
//                   className="bg-stone-50 rounded-xl shadow-md flex flex-col justify-center items-center py-8 hover:shadow-xl transition"
//                 >
//                   {/* Icon */}
//                   <Icon size={48} className="mb-4 text-[#D1A84B]" />

//                   {/* Value */}
//                   <div className="text-3xl font-bold text-neutral-950">
//                     {item.value}
//                   </div>

//                   {/* Label */}
//                   <p className="text-neutral-600 text-base mt-2 text-center">
//                     {item.label}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>

//           {/* История компании */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 mb-[100px]">
//             <img
//               src={Company_logo}
//               alt="Biz haqimizda"
//               className="rounded-xl shadow-lg max-w-[420px] w-full object-cover"
//             />
//             <div className="ml-[-170px]">
//               <h2 className="text-[54px] font-semibold text-neutral-950 mb-4">
//                 Kompaniya Tarixi
//               </h2>
//               <p className="text-neutral-600 leading-relaxed text-[20px]">
//                 <b className="text-[51px] text-[#D1A84B]">REDORS</b> <br /> Bizning kompaniyamiz 2019-yildan buyon eshik ishlab chiqarish va <br />
//                 o‘rnatish sohasida faoliyat yuritib kelmoqda. <br /> Shu vaqt ichida
//                 minglab mijozlarimizga sifatli va ishonchli mahsulotlar <br /> taqdim
//                 etdik. <br /> Asosiy maqsadimiz – mijozlarimizning xavfsizligi va uylari
//                 hamda ofislarining <br /> go‘zalligini ta’minlash.
//               </p>

//               <button className="ml-[-340px] mt-[12px]">
//                 <a className="text-[#D1A84B] text-[34px]" href="https://drive.google.com/file/d/1XJI_SQpOEg_boIUQRyUbwNZj9WA2d7NZ/view?usp=sharing" target="_blank"> <ArrowRight /><b>Logo tarixi.</b></a>
//               </button>
//             </div>
//           </div>

//           {/* Миссия */}
//           <div className="mb-16 text-center">
//             <h2 className="text-[27px] font-semibold text-neutral-950 mb-4">
//               Bizning Missiyamiz
//             </h2>
//             <p className="text-neutral-600 leading-relaxed text-[19px]">
//               Mijozlarimizga eng yuqori sifatli eshiklarni taklif qilish,
//               xavfsizlikni ta’minlash va dizayndagi innovatsiyalar orqali uy va <br />
//               ofislarni yanada chiroyli qilish.
//             </p>
//           </div>

//           {/* Ценности */} <br /><br />
//           <div>
//             <h2 className="text-[27px] font-semibold text-neutral-950 mb-8">
//               Bizning qadriyatlarimiz
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[50px] text-[27px]">
//               {values.map((item, idx) => {
//                 const Icon = item.icon;
//                 return (
//                   <div
//                     key={idx}
//                     className="bg-stone-50 rounded-xl shadow-md p-6 flex flex-col justify-start hover:shadow-lg transition border-[2px] border-[#DEB67B]"
//                   >
//                     {/* Icon */}
//                     <Icon size={40} className="mb-4 text-[#D1A84B]" />

//                     {/* Title */}
//                     <h3 className="text-lg font-semibold text-neutral-950 mb-2">
//                       {item.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="text-neutral-600 text-sm leading-relaxed">
//                       {item.desc}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//         <Contact_link />
//       </div>
//     );
//   }
// }




















"use client";

import React, { Component } from "react";
import Contact_link from "../components/Contact_link";
import Company_logo from "../assets/images/Sign_logo.png";
import { ArrowRight } from "lucide-react";
import {
  CalendarCheck,
  Users,
  Briefcase,
  BadgeCheck,
  ShieldCheck,
  Lightbulb,
  Headset,
} from "lucide-react";

export default class About extends Component {
  render() {
    const stats = [
      { value: "5+", label: "Yillik tajriba", icon: CalendarCheck },
      { value: "5000+", label: "Mamnun mijozlar", icon: Users },
      { value: "15+", label: "Professional mutaxassislar", icon: Briefcase },
      { value: "100%", label: "Sifat kafolati", icon: BadgeCheck },
    ];

    const values = [
      {
        title: "Sifat",
        desc: "Har bir mahsulotimiz eng yuqori sifat standartlariga javob beradi.",
        icon: BadgeCheck,
      },
      {
        title: "Ishonchlilik",
        desc: "Biz mijozlarimizning ishonchini qadrlaymiz va unga mos xizmat ko‘rsatamiz.",
        icon: ShieldCheck,
      },
      {
        title: "Innovatsiya",
        desc: "Doimo yangi dizayn va texnologiyalarni joriy qilamiz.",
        icon: Lightbulb,
      },
      {
        title: "Mijozlarga xizmat",
        desc: "Mijozlarimizning ehtiyojlarini birinchi o‘ringa qo‘yamiz.",
        icon: Headset,
      },
    ];

    return (
      <div className="font-lato mt-[80px] sm:mt-[100px] overflow-hidden">
        <div className="container mx-auto px-4 py-12">
          {/* ======= STATS ======= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-stone-50 rounded-xl shadow-md flex flex-col justify-center items-center py-8 hover:shadow-xl transition"
                >
                  <Icon size={48} className="mb-4 text-[#D1A84B]" />
                  <div className="text-3xl font-bold text-neutral-950">{item.value}</div>
                  <p className="text-neutral-600 text-base mt-2 text-center px-2">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ======= COMPANY HISTORY ======= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-center">
            {/* Left image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={Company_logo}
                alt="Biz haqimizda"
                className="rounded-xl shadow-lg w-[80%] sm:w-[70%] md:w-[420px] lg:w-[420px] object-contain"
              />
            </div>

            {/* Right text */}
            <div className="lg:pl-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-neutral-950 mb-4 text-center lg:text-left">
                Kompaniya Tarixi
              </h2>
              <p className="text-neutral-600 leading-relaxed text-base sm:text-lg md:text-xl lg:text-[20px] text-center lg:text-left">
                <b className="text-[#D1A84B] text-4xl sm:text-5xl md:text-[51px]">REDORS</b>
                <br /> Bizning kompaniyamiz 2019-yildan buyon eshik ishlab chiqarish va
                o‘rnatish sohasida faoliyat yuritib kelmoqda. <br /> Shu vaqt ichida
                minglab mijozlarimizga sifatli va ishonchli mahsulotlar taqdim etdik.
                <br />
                Asosiy maqsadimiz – mijozlarimizning xavfsizligi va uylari hamda
                ofislarining go‘zalligini ta’minlash.
              </p>

              <div className="flex justify-center lg:justify-start mt-6">
                <a
                  className="flex items-center gap-2 text-[#D1A84B] text-xl sm:text-2xl md:text-3xl font-bold transition"
                  href="https://drive.google.com/file/d/1XJI_SQpOEg_boIUQRyUbwNZj9WA2d7NZ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowRight size={28} /> Logo tarixi
                </a>
              </div>
            </div>
          </div>

          {/* ======= MISSION ======= */}
          <div className="mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-[27px] font-semibold text-neutral-950 mb-4">
              Bizning Missiyamiz
            </h2>
            <p className="text-neutral-600 leading-relaxed text-base sm:text-lg md:text-[19px] max-w-3xl mx-auto">
              Mijozlarimizga eng yuqori sifatli eshiklarni taklif qilish, xavfsizlikni
              ta’minlash va dizayndagi innovatsiyalar orqali uy va ofislarni yanada
              chiroyli qilish.
            </p>
          </div>

          {/* ======= VALUES ======= */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-[27px] font-semibold text-neutral-950 mb-8 text-center lg:text-left">
              Bizning qadriyatlarimiz
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 text-base sm:text-lg md:text-xl">
              {values.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-stone-50 rounded-xl shadow-md p-6 flex flex-col justify-start hover:shadow-lg transition border-[2px] border-[#DEB67B]"
                  >
                    <Icon size={40} className="mb-4 text-[#D1A84B]" />
                    <h3 className="text-lg font-semibold text-neutral-950 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <Contact_link />
      </div>
    );
  }
}