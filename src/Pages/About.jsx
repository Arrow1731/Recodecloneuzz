"use client";

import React, { Component } from "react";
import Contact_link from "../components/Contact_link";
import Company_logo from "../assets/images/Company_photo.jpg";
import {
  CalendarCheck,
  Users,
  Briefcase,
  BadgeCheck,
  ShieldCheck,
  Lightbulb,
  Headset,
} from "lucide-react";

export default class about extends Component {
  render() {
    const stats = [
      { value: "5+", label: "Yillik tajriba", icon: CalendarCheck },
      { value: "5000+", label: "Mamnun mijozlar", icon: Users },
      { value: "45+", label: "Professional mutaxassislar", icon: Briefcase },
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
      <div>
        <div className="container mx-auto px-4 py-12 font-lato">
          {/* Статистика */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 mt-[100px]">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-stone-50 rounded-xl shadow-md flex flex-col justify-center items-center py-8 hover:shadow-xl transition"
                >
                  {/* Icon */}
                  <Icon size={48} className="mb-4 text-[#D1A84B]" />

                  {/* Value */}
                  <div className="text-3xl font-bold text-neutral-950">
                    {item.value}
                  </div>

                  {/* Label */}
                  <p className="text-neutral-600 text-base mt-2 text-center">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* История компании */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center mb-[70px]">
            <img
              src={Company_logo}
              alt="Biz haqimizda"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold text-neutral-950 mb-4">
                Kompaniya tarixi
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Bizning kompaniyamiz 2019-yildan buyon eshik ishlab chiqarish va <br />
                o‘rnatish sohasida faoliyat yuritib kelmoqda. <br /> Shu vaqt ichida
                minglab mijozlarimizga sifatli va ishonchli mahsulotlar taqdim
                etdik. <br /> Asosiy maqsadimiz – mijozlarimizning xavfsizligi va uylari
                hamda ofislarining go‘zalligini ta’minlash.
              </p>
            </div>
          </div>

          {/* Миссия */}
          <div className="mb-16 text-center">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">
              Bizning missiyamiz
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Mijozlarimizga eng yuqori sifatli eshiklarni taklif qilish,
              xavfsizlikni ta’minlash va dizayndagi innovatsiyalar orqali uy va <br />
              ofislarni yanada chiroyli qilish.
            </p>
          </div>

          {/* Ценности */}
          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 mb-8">
              Bizning qadriyatlarimiz
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-stone-50 rounded-xl shadow-md p-6 flex flex-col justify-start hover:shadow-lg transition"
                  >
                    {/* Icon */}
                    <Icon size={40} className="mb-4 text-[#D1A84B]" />

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-neutral-950 mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Contact_link />
      </div>
    );
  }
}