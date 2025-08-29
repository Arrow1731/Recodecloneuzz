"use client"

import React, { Component } from "react"
import Contact_link from '../components/Contact_link';
import Company_logo from '../assets/images/Company_photo.jpg';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="container mx-auto px-4 py-12 font-lato">

          {/* Статистика */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 mt-[100px]">
            {[
              { value: "15+", label: "Yillik tajriba" },
              { value: "5000+", label: "Mamnun mijozlar" },
              { value: "50+", label: "Professional mutaxassislar" },
              { value: "100%", label: "Sifat kafolati" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-stone-50 rounded-xl shadow-md flex flex-col justify-center items-center py-8"
              >
                <div className="text-3xl font-bold text-neutral-950">{item.value}</div>
                <p className="text-neutral-600 text-base mt-2 text-center">{item.label}</p>
              </div>
            ))}
          </div>

          {/* История компании */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
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
                Bizning kompaniyamiz 2005-yildan buyon eshik ishlab chiqarish va o‘rnatish sohasida faoliyat yuritib kelmoqda.
                Shu vaqt ichida minglab mijozlarimizga sifatli va ishonchli mahsulotlar taqdim etdik.
                Asosiy maqsadimiz – mijozlarimizning xavfsizligi va uylari hamda ofislarining go‘zalligini ta’minlash.
              </p>
            </div>
          </div>

          {/* Миссия */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-neutral-950 mb-4">Bizning missiyamiz</h2>
            <p className="text-neutral-600 leading-relaxed">
              Mijozlarimizga eng yuqori sifatli eshiklarni taklif qilish, xavfsizlikni ta’minlash va
              dizayndagi innovatsiyalar orqali uy va ofislarni yanada chiroyli qilish.
            </p>
          </div>

          {/* Ценности */}
          <div>
            <h2 className="text-2xl font-semibold text-neutral-950 mb-8">Bizning qadriyatlarimiz</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Sifat",
                  desc: "Har bir mahsulotimiz eng yuqori sifat standartlariga javob beradi.",
                },
                {
                  title: "Ishonchlilik",
                  desc: "Biz mijozlarimizning ishonchini qadrlaymiz va unga mos xizmat ko‘rsatamiz.",
                },
                {
                  title: "Innovatsiya",
                  desc: "Doimo yangi dizayn va texnologiyalarni joriy qilamiz.",
                },
                {
                  title: "Mijozlarga xizmat",
                  desc: "Mijozlarimizning ehtiyojlarini birinchi o‘ringa qo‘yamiz.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-stone-50 rounded-xl shadow-md p-6 flex flex-col justify-start"
                >
                  <h3 className="text-lg font-semibold text-neutral-950 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Contact_link />
      </div>
    )
  }
}