import React, { useState } from 'react';
import Contact_link from '../components/Contact_link';
import { Phone, Mail } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

const TELEGRAM_BOT_TOKEN = "7956904423:AAFgMhLwFHj504IUpi9ai-ql5aSl1jLfwM4";
const TELEGRAM_CHAT_IDS = ["6536432455", "1031988447"]; // send to both

const App = () => {
  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // UI state
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" }); // 'success' | 'error' | ''

  const resetForm = () => {
    setName("");
    setPhone("");
    setMessage("");
  };

  // Basic validation
  const validate = () => {
    if (!name.trim()) return "Ism majburiy.";
    if (!phone.trim()) return "Telefon raqami majburiy.";
    // Very light phone check
    const cleaned = phone.replace(/[^\d+]/g, "");
    if (!/^(\+?\d{7,15})$/.test(cleaned)) return "Telefon raqami noto‘g‘ri formatda.";
    return "";
  };

  const sendToTelegram = async (text) => {
    // POST JSON to Telegram API
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const payloads = TELEGRAM_CHAT_IDS.map((chat_id) =>
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      })
    );
    // Wait for all deliveries (both chats)
    const results = await Promise.allSettled(payloads);
    const anyRejected = results.some(r => r.status === "rejected");
    if (anyRejected) throw new Error("Telegramga yuborishda xatolik yuz berdi.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    const err = validate();
    if (err) {
      setStatus({ type: "error", text: err });
      return;
    }

    setSubmitting(true);
    try {
      const when = new Date().toLocaleString(); // local time
      const text =
        `🆕 <b>Yangi ariza</b>\n\n` +
        `👤 <b>Arizachi Ismi:</b> ${name}\n` +
        `📞 <b>Telefon raqami:</b> ${phone}\n` +
        (message?.trim() ? `📝 <b>Xabar:</b> ${message.trim()}\n` : "") +
        `⏰ <b>Yuborilgan Vaqti:</b> ${when}`;

      await sendToTelegram(text);
      setStatus({ type: "success", text: "✅ Arizangiz yuborildi! Tez orada siz bilan bog‘lanamiz." });
      resetForm();
    } catch (error) {
      setStatus({ type: "error", text: "Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Container for the main contact sections */}
      <div className="container mx-auto mt-24 mb-24 px-4 sm:px-6 lg:px-8">
        {/* Contact Methods Section */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2">Bog'lanish usullari</h2>
          <p className="text-lg font-normal text-neutral-600">Siz uchun qulay bo'lgan bog'lanish usulini tanlang</p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Phone */}
          <div className="bg-stone-50 rounded-xl shadow-lg border-2 border-[#DEB67B] p-8 flex flex-col items-center text-center">
            <div className="mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-[#DEB67B]">
                {/* Phone icon */}
                <Phone size={28} className="text-[#DEB67B]" />
              </div>
            </div>
            <h4 className="text-base font-semibold text-neutral-950 mb-1">Telefon</h4>
            <div className="bg-orange-400/10 text-[#DEB67B] rounded-md py-1 px-3 text-xs mb-4">
              Asosiy
            </div>
            <p className="text-base font-normal text-neutral-950 mb-1"><a href="tel:+998997708191">+998 (99) - 770 - 81 - 91</a></p>
            <p className="text-base font-normal text-neutral-950 mb-4"><a href="tel:+998997708191">+998 (99) - 770 - 81 - 91</a></p>
            <p className="text-sm font-normal text-neutral-600">Ish vaqtida qo'ng'iroq qiling</p>
          </div>

          {/* Card 2: Email */}
          <div className="bg-stone-50 rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-[#DEB67B]">
                {/* Email icon */}
                <Mail size={28} className="text-[#DEB67B]" />
              </div>
            </div>
            <h4 className="text-base font-semibold text-neutral-950 mb-1">Email</h4>
            <div className="h-6 mb-4"></div>
              <p className="text-lg font-normal text-neutral-950 mb-1">
                  <a href="mailto:farruxtemireshik@gmail.com" target="_blank" rel="noreferrer">info@redore.uz</a>
              </p>
              <p className="text-lg font-normal text-neutral-950 mb-4">
                  <a href="mailto:farruxtemireshik@gmail.com" target="_blank" rel="noreferrer">sales@redore.uz</a>
              </p>
            <p className="text-sm font-normal text-neutral-600">2 soat ichida javob beramiz</p>
          </div>

          {/* Card 3: Telegram */}
          <div className="bg-stone-50 rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-[#DEB67B]">
                {/* Telegram icon */}
                <FaTelegramPlane size={28}  className="text-[#DEB67B]"/>
              </div>
            </div>
            <h4 className="text-base font-semibold text-neutral-950 mb-1">Telegram</h4>
            <div className="h-6 mb-4"></div>
            <p className="text-lg font-normal text-neutral-950 mb-1">
              <a href="https://t.me/@Re_dors" target="_blank" rel="noreferrer">@Re_dors</a>
            </p>
            <p className="text-base font-normal text-neutral-950 mb-4">
              <a href="https://t.me/+998997708191" target="_blank" rel="noreferrer">+998 (99) - 770 - 81 - 91</a>
            </p>
            <p className="text-sm font-normal text-neutral-600">Messangerda tezkor aloqa</p>
          </div>
        </div>

        {/* Our Office and Location Details Section */}
        <div className="mt-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-8">Bizning ofisimiz</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Office Details Column */}
            <div className="flex flex-col gap-8">
              {/* Address Card */}
              <div className="bg-stone-50 rounded-xl shadow-lg p-8 border_contact_l">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 border-2 border-[#DEB67B] rounded-lg">
                    {/* Address icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#DEB67B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-base font-semibold text-neutral-950 ">Manzil</h4>
                </div>
                <a href="https://maps.app.goo.gl/qUKzVL9hbr7fQ7Xj8" target="_blank" rel="noreferrer">
                  <p className="text-base font-normal text-neutral-950 mb-1">O'zbekiston Respublikasi</p>
                  <p className="text-base font-normal text-neutral-950 mb-1">Xorazm viloyati</p>
                  <p className="text-lg font-normal text-neutral-950 mb-4">Bog'ot tumani, Ashxobod mahallasi, Sarbon ko'chasi, 16</p>
                </a>
              </div>

              {/* Working Hours Card */}
              <div className="bg-stone-50 rounded-xl shadow-lg p-8 border_contact_l">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 border-2 border-[#DEB67B] rounded-lg">
                    {/* Clock icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#DEB67B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-base font-semibold text-neutral-950">Ish vaqtlari</h4>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-base font-normal text-neutral-600">Dushanba - Juma</span>
                  <span className="text-sm font-normal text-neutral-950">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-base font-normal text-neutral-600">Shanba</span>
                  <span className="text-sm font-normal text-neutral-950">9:00 - 15:00</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-normal text-neutral-600">Yakshanba</span>
                  <span className="text-base font-normal text-neutral-950">Dam olish kuni</span>
                </div>
                <div className="bg-lime-950/10 rounded-lg p-3 text-lime-950 text-sm font-normal font-['Inter']">
                  Favqulodda buyurtmalar va maslahatlar uchun - telefon orqali 24 soat aloqada
                </div>
              </div>

            </div>
            {/* Request Form Column */}
            <div>
              <div className="bg-stone-50 rounded-xl shadow-lg p-8 h-[530px] border_contact_l">
                <h4 className="text-base font-semibold text-neutral-950">Ariza qoldiring</h4>
                <p className="text-sm font-normal text-neutral-600 mb-4">Tez orada siz bilan bog'lanamiz</p>

                {/* Telegram-enabled form */}
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-normal text-neutral-950 mb-1">Ism *</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-10 px-3 py-2 rounded-md border border-stone-100 bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                      placeholder="Ismingiz"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-normal text-neutral-950 mb-1">Telefon *</label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-10 px-3 py-2 rounded-md border border-stone-100 bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                      placeholder="+998 90 123 45 67"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-normal text-neutral-950 mb-1">Xabar</label>
                    <textarea
                      id="message"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2 rounded-md border border-stone-100 bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                      placeholder="Eshikka bo'lgan talablaringiz haqida yozing..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full py-2 rounded-md text-white font-semibold shadow-sm transition-colors ${submitting ? "bg-[#DEB67B]/70 cursor-not-allowed" : "bg-[#DEB67B] hover:bg-[#DEB67B]"
                      }`}
                  >
                    {submitting ? "Yuborilmoqda..." : "Arizani yuborish"}
                  </button>

                  {/* Status messages */}
                  {status.type === "success" && (
                    <p className="text-green-600 text-sm font-medium">{status.text}</p>
                  )}
                  {status.type === "error" && (
                    <p className="text-red-600 text-sm font-medium">{status.text}</p>
                  )}
                </form>
              </div>

              {/* <div className="bg-orange-400/5 rounded-lg border border-orange-400/10 p-6 mt-8">
                <h5 className="text-lg font-semibold text-neutral-950">Ariza yuborilgandan so'ng nima bo'ladi?</h5>
                <ul className="list-none space-y-2">
                  <li className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="w-2 h-2 mt-2 bg-[#DEB67B] rounded-full flex-shrink-0"></span>
                    <span>Biz siz bilan 30 daqiqa ichida bog'lanamiz</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="w-2 h-2 mt-2 bg-[#DEB67B] rounded-full flex-shrink-0"></span>
                    <span>Bepul maslahat beramiz</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="w-2 h-2 mt-2 bg-[#DEB67B] rounded-full flex-shrink-0"></span>
                    <span>Optimal yechim taklif qilamiz</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="w-2 h-2 mt-2 bg-[#DEB67B] rounded-full flex-shrink-0"></span>
                    <span>Bepul o'lchovni tashkil qilamiz</span>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer component */}
      <Contact_link />
    </div>
  );
};

export default App;
