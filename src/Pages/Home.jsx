import React, { Component } from "react";
import Heaer_img from "../assets/images/Sign_logo.png";
import Main_sec from "../components/Main_sec";
import Footer from "../components/Footer";
import Contact_link from "../components/Contact_link";
import {
  BadgeCheck,
  ShieldCheck,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Home extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
    };

    return (
      <div className="font-lato mt-[80px] md:mt-[90px] overflow-hidden">
        {/* HEADER */}
        <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left text */}
          <div className="flex flex-col gap-6 text-center lg:text-left max-w-[600px]">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight">
              Har bir eshikda <br className="hidden sm:block" /> sifat va xavfsizlik
            </h2>
            <p className="font-eregular text-base sm:text-lg text-neutral-700">
              "Redore" kompaniyasi zamonaviy texnologiyalardan foydalangan holda
              yuqori sifatli temir eshiklarni ishlab chiqaradi va barcha
              mahsulotlari uchun kafolat beradi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="Catalog">
                <button className="bg-[#D1A84B] text-white rounded-lg px-6 py-3 hover:bg-[#c49a43] transition">
                  Eshiklarni ko'rish
                </button>
              </a>
              <a href="/Contact">
                <button className="border border-[#D1A84B] text-[#D1A84B] rounded-lg px-6 py-3 hover:bg-[#d1a84b]/10 transition">
                  Bog'lanish
                </button>
              </a>
            </div>
            {/* Social icons */}
            <div className="flex justify-center lg:justify-start gap-6 text-3xl sm:text-4xl mt-3">
              <a href="https://www.instagram.com/redors__" target="_blank" rel="noopener noreferrer">
                <FaInstagram color="#DEB67B" className="hover:opacity-80 transition" />
              </a>
              <a href="https://t.me/farruxtemireshiklari" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane color="#DEB67B" className="hover:opacity-80 transition" />
              </a>
              <a href="https://youtube.com/@farruxtemireshik?si=C_BvXML8l3kc98f0" target="_blank" rel="noopener noreferrer">
                <FaYoutube color="#DEB67B" className="hover:opacity-80 transition" />
              </a>
              <a href="mailto:farruxtemireshik@gmail.com" target="_blank">
                <MdEmail className="text-[#DEB67B] hover:opacity-80 transition" />
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center w-full lg:w-auto">
            <img
              src={Heaer_img}
              alt="Header"
              className="w-[90%] sm:w-[80%] md:w-[600px] max-w-full object-contain"
            />
          </div>
        </div>

        {/* WHY CHOOSE */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Nima uchun aynan bizni tanlaysiz?
            </h3>
            <p className="text-base sm:text-lg text-neutral-600 mt-3 leading-relaxed">
              Biz ishonchli va chiroyli eshiklarni yaratish uchun an'anaviy
              hunarmandchilikni <br className="hidden sm:block" />
              zamonaviy texnologiyalar bilan birlashtiramiz
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-xl shadow p-6 flex flex-col items-center gap-4">
              <BadgeCheck size={50} className="text-green-500 mb-4" />
              <h4 className="text-lg font-semibold">Yuqori sifatli</h4>
              <p className="text-center text-sm text-neutral-600">
                Har bir eshik tajribali mutaxassislar tomonidan yuqori sifatli
                materiallar bilan tayyorlanadi.
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl shadow p-6 flex flex-col items-center gap-4">
              <ShieldCheck size={50} className="text-blue-500 mb-4" />
              <h4 className="text-lg font-semibold">Ishonchlilik kafolati</h4>
              <p className="text-center text-sm text-neutral-600">
                Biz barcha mahsulotlarimizga rasmiy kafolat beramiz va
                chidamliligini ta'minlaymiz.
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl shadow p-6 flex flex-col items-center gap-4">
              <Cpu size={50} className="text-purple-500 mb-4" />
              <h4 className="text-lg font-semibold">Zamonaviy texnologiyalar</h4>
              <p className="text-center text-sm text-neutral-600">
                Biz ilg‘or va innovatsion uskunalardan foydalanamiz.
              </p>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Bizning mahsulotlarimiz
            </h3>
            <p className="text-base sm:text-lg text-neutral-600 mt-3">
              Uy va biznes uchun temir eshiklarning keng assortimenti
            </p>
          </div>
          <Main_sec />
          <center className="mt-8">
            <a href="Catalog">
              <button className="bg-[#D1A84B] text-white rounded-lg px-6 py-3 w-[220px] sm:w-[270px] hover:bg-[#c49a43] transition">
                Barcha mahsulotlarni ko'rish
              </button>
            </a>
          </center>
        </section>

        {/* GUARANTEES */}
        <div className="bg-[#D1A84B] py-16 px-4 sm:px-8 lg:px-20">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column */}
            <div className="flex flex-col gap-6 text-neutral-950">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Bizning kafolatlarimiz va majburiyatlarimiz
              </h3>

              <ul className="space-y-4 text-base sm:text-lg">
                {[
                  "Rasmiy kafolat barcha mahsulotlar uchun",
                  "Eng yuqori sifatli materiallar va komponentlar",
                  "Professional o‘rnatish va sozlash",
                  "Kafolatdan keyingi xizmat",
                  "Har bir mijozga individual yondashuv",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2
                      className="text-[#D1A84B] bg-white p-1 rounded-full shadow-md flex-shrink-0"
                      size={30}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right carousel */}
            <div className="w-full max-w-[750px] mx-auto rounded-lg overflow-hidden">
              <Slider {...settings}>
                {[
                  "https://www.mds-doors.kz/files/resized/slides/osennii-mds-desktop.2300x1500.center.center.png.webp",
                  "https://www.mds-doors.kz/files/resized/slides/rozygrysh1.2300x1500.center.center.jpeg.webp",
                  "https://www.mds-doors.kz/files/resized/slides/img_7199_7200.2300x1500.center.center.png.webp",
                ].map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      alt={`slide-${i}`}
                      className="w-full h-[200px] sm:h-[300px] md:h-[350px] object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <Contact_link />
      </div>
    );
  }
}