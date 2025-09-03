import React, { Component } from "react";
import Heaer_img from "../assets/images/header_right_img.png";
import Ustalar from "../assets/images/Usta.png";
import Main_sec from "../components/Main_sec";
import Footer from "../components/Footer";
import Contact_link from "../components/Contact_link";
import { BadgeCheck, ShieldCheck, Cpu } from "lucide-react";
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { FaTiktok } from "react-icons/fa";

export default class Home extends Component {
  render() {
    return (
      <div className="font-lato mt-[50px]">
        {/* HEADER */}
        <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl leading-tight">
              Har bir eshikda sifat va xavfsizlik
            </h2>
            <p className="font-eregular text-base md:text-lg text-neutral-700">
              "Redore" kompaniyasi zamonaviy texnologiyalardan foydalangan holda
              yuqori sifatli temir eshiklarni ishlab chiqaradi va barcha
              mahsulotlari uchun kafolat beradi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="Catalog">
                <button className="bg-[#D1A84B] text-white rounded-lg px-6 py-3">
                  Eshiklarni ko'rish
                </button>
              </a>
              <a href="/Contact">
                <button className="border border-[#D1A84B] text-[#D1A84B] rounded-lg px-6 py-3">
                  Bog'lanish
                </button>
              </a>
            </div>
            <div style={{ display: "flex", gap: "20px", fontSize: "42px" }}>
              <a
                href="https://www.instagram.com/redors__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram color="#DEB67B" />
              </a>
              <a
                href="https://t.me/farruxtemireshiklari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane color="#DEB67B" />
              </a>
              <a
                href="https://youtube.com/@farruxtemireshik?si=C_BvXML8l3kc98f0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube color="#DEB67B" />
              </a>
              <a href="mailto: farruxtemireshik.gmail.com" target="_blank">
                <MdEmail className="text-[#DEB67B]" />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img src={Heaer_img} alt="Header" className="max-w-full h-auto" />
          </div>
        </div>

        {/* MAIN */}
        <main>
          {/* WHY CHOOSE */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Nima uchun aynan bizni tanlaysiz?
              </h3>
              <p className="text-base md:text-lg text-neutral-600 mt-3">
                Biz ishonchli va chiroyli eshiklarni yaratish uchun an'anaviy
                hunarmandchilikni <br />
                zamonaviy texnologiyalar bilan birlashtiramiz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* CARD 1 */}
              <div className="bg-stone-50 rounded-xl shadow p-6 flex flex-col items-center gap-4">
                <BadgeCheck size={50} className="text-green-500 mb-4" />
                <h4 className="text-lg font-semibold">Yuqori sifatli</h4>
                <p className="text-center text-sm text-neutral-600">
                  Har bir eshik tajribali mutaxassislar tomonidan yuqori sifatli
                  materiallar va zamonaviy texnologiyalar bilan amalga
                  oshiriladi
                </p>
              </div>

              {/* CARD 2 */}
              <div className="bg-stone-50 rounded-xl shadow p-6 flex flex-col items-center gap-4">
                <ShieldCheck size={50} className="text-blue-500 mb-4" />
                <h4 className="text-lg font-semibold">Ishonchlilik kafolati</h4>
                <p className="text-center text-sm text-neutral-600">
                  Biz barcha mahsulotlarimizga rasmiy kafolat beramiz va har bir
                  eshikning chidamliligini ta'minlaymiz
                </p>
              </div>

              {/* CARD 3 */}
              <div className="bg-stone-50 rounded-xl shadow p-6 flex flex-col items-center gap-4">
                <Cpu size={50} className="text-purple-500 mb-4" />
                <h4 className="text-lg font-semibold">
                  Zamonaviy texnologiyalar
                </h4>
                <p className="text-center text-sm text-neutral-600">
                  Biz ilg‘or va innovatsion uskunalardan foydalanamiz mukammal
                  eshiklarni yaratish uchun
                </p>
              </div>
            </div>
          </section>

          {/* PRODUCTS */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Bizning mahsulotlarimiz
              </h3>
              <p className="text-base md:text-lg text-neutral-600 mt-3">
                Uy va biznes uchun temir eshiklarning keng assortimenti
              </p>
            </div>
            <Main_sec />
            <center className="mt-[30px]">
              <a href="Catalog">
                <button className="bg-[#D1A84B] text-white rounded-lg px-6 py-3 w-[270px]">
                  Barcha mahsulotlarni ko'rish
                </button>
              </a>
            </center>
          </section>
        </main>

        {/* GUARANTEES */}
        <div className="bg-[#D1A84B] py-16 px-4 sm:px-8 lg:px-20">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-950">
                Bizning kafolatlarimiz va majburiyatlarimiz
              </h3>
              <ul className="space-y-3 text-neutral-950 text-base">
                <li>✅ Barcha mahsulotlar uchun rasmiy kafolat</li>
                <li>✅ Yuqori sifatli materiallar va komponentlar</li>
                <li>✅ Professional o‘rnatish</li>
                <li>✅ Kafolatdan keyingi xizmat</li>
                <li>✅ Har bir mijozga individual yondashuv</li>
              </ul>
            </div>
            <div>
              <img
                src={Ustalar}
                alt="Ustalar"
                className="w-full max-w-lg mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* <Footer /> */}
        <Contact_link />
      </div>
    );
  }
}
