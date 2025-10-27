// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { db } from "../firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { motion, AnimatePresence } from "framer-motion";
// import Contact_link from "../components/Contact_link";

// // Telegram config
// const BOT_TOKEN = "7956904423:AAFgMhLwFHj504IUpi9ai-ql5aSl1jLfwM4";
// const ADMIN_IDS = ["6536432455", "7856784678"];

// export default function ProductDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [mainImage, setMainImage] = useState("");
//   const [error, setError] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [paymentMethod, setPaymentMethod] = useState("Online");
//   const [showForm, setShowForm] = useState(false);
//   const [customerName, setCustomerName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [zoomImage, setZoomImage] = useState(null); // 🔍 Fullscreen zoom state

//   useEffect(() => {
//     async function fetchProduct() {
//       try {
//         const ref = doc(db, "products", id);
//         const snap = await getDoc(ref);
//         if (snap.exists()) {
//           const data = snap.data();
//           setProduct(data);
//           if (data.imageUrls && data.imageUrls.length > 0) {
//             setMainImage(data.imageUrls[0]);
//           }
//         } else {
//           setError("Mahsulot topilmadi!");
//         }
//       } catch (err) {
//         console.error(err);
//         setError("Xatolik yuz berdi!");
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchProduct();
//   }, [id]);

//   async function sendOrderToTelegram() {
//     if (!product) return;

//     const message = `
// 🛒 <b>Yangi Buyurtma!</b>
// 👤 Ism: ${customerName}
// 📞 Telefon: ${phoneNumber}
// 📦 Mahsulot: ${product.title}
// 💰 Narx: ${Number(product.price).toLocaleString()} so'm
// 📦 Soni: ${quantity} dona
// 🚚 Yetkazib berish: Kompaniya avtomobillari orqali
// 💳 To'lov turi: ${paymentMethod}
// `;

//     try {
//       await Promise.all(
//         ADMIN_IDS.map((adminId) =>
//           fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               chat_id: adminId,
//               text: message,
//               parse_mode: "HTML",
//             }),
//           })
//         )
//       );
//       alert("✅ Buyurtmangiz yuborildi!");
//       setShowForm(false);
//       setCustomerName("");
//       setPhoneNumber("");
//     } catch (err) {
//       console.error(err);
//       alert("❌ Xatolik yuz berdi! Iltimos, qaytadan urinib ko‘ring.");
//     }
//   }

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen text-xl text-gray-600">
//         Yuklanmoqda...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col justify-center items-center h-screen text-center">
//         <p className="text-red-500 font-semibold mb-4">{error}</p>
//         <button
//           onClick={() => navigate(-1)}
//           className="px-6 py-2 bg-[#D1A84B] hover:bg-[#b8903c] text-white rounded-xl"
//         >
//           Orqaga qaytish
//         </button>
//       </div>
//     );
//   }

//   if (!product) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="max-w-6xl mx-auto p-6 mt-[70px]"
//     >
//       {/* <button
//         onClick={() => navigate(-1)}
//         className="text-[#D1A84B] font-semibold mb-4 hover:underline"
//       >
//         ← Orqaga
//       </button> */}

//       <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* 🔹 Left Side (Images) */}
//         <div className="flex flex-col items-center">
//           <div
//             className="w-full h-[550px] border rounded-xl overflow-hidden shadow-sm mb-4 cursor-zoom-in"
//             onClick={() => setZoomImage(mainImage)} // 🔍 Open fullscreen
//           >
//             <img
//               src={mainImage}
//               alt={product.title}
//               className="w-full h-full object-contain"
//             />
//           </div>
//           {product.imageUrls?.length > 1 && (
//             <div className="flex gap-3 flex-wrap justify-center">
//               {product.imageUrls.map((url, index) => (
//                 <img
//                   key={index}
//                   src={url}
//                   alt={`Rasm ${index + 1}`}
//                   onClick={() => setMainImage(url)}
//                   className={`w-[93px] h-[93px] object-cover rounded-[10px] cursor-pointer border-2 transition ${
//                     mainImage === url
//                       ? "border-[#D1A84B]"
//                       : "border-transparent hover:border-gray-300"
//                   }`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {/* 🔹 Right Side (Info) */}
//         <div className="space-y-4">
//           <h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>
//           <p className="text-gray-600 text-lg leading-relaxed">
//             <b>
//               Mahsulot haqida qisqacha ma'lumot: <br />
//             </b>
//             {product.info ||
//               "Bu mahsulot haqida batafsil ma'lumot mavjud emas."}
//           </p>

//           <p className="text-[#D1A84B] text-[24px]">
//             Mahsulot narxi:{" "}
//             <b className="text-[34px]">
//               {Number(product.price).toLocaleString()} so'm
//             </b>
//           </p>

//           <p className="text-gray-700">
//             <b>Kategoriya</b>:{" "}
//             <span className="font-medium text-gray-700">
//               {product.category || "Boshqalar"}
//             </span>
//           </p>

//           <p className="text-gray-700 flex items-center gap-2">
//             <b>Yetkazib berish:</b>{" "}
//             <span className="font-medium text-gray-800">
//               Kompaniya avtomobillari orqali
//             </span>
//           </p>

//           <div className="flex flex-col gap-2">
//             <label className="font-medium text-gray-700">
//               <b>To‘lov turini tanlang:</b>
//             </label>
//             <select
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               className="w-[250px] px-3 py-2 border-[2px] rounded-[7px] focus:ring-2 focus:ring-[#D1A84B]"
//             >
//               <option value="Onlayn">Onlayn</option>
//               <option value="Oflayn">Oflayn</option>
//             </select>
//           </div>

//           {/* Quantity Selector */}
//           <div className="flex items-center gap-4 mt-6">
//             <button
//               onClick={() => setQuantity(Math.max(1, quantity - 1))}
//               className="w-[105px] h-[40px] bg-gray-200 hover:bg-gray-300 rounded-[8px] text-2xl flex items-center justify-center"
//             >
//               –
//             </button>
//             <span className="text-[24px] font-bold">{quantity}</span>
//             <button
//               onClick={() => setQuantity(quantity + 1)}
//               className="w-[105px] h-[40px] bg-gray-200 hover:bg-gray-300 rounded-[8px] text-2xl flex items-center justify-center"
//             >
//               +
//             </button>
//           </div>

//           <button
//             onClick={() => setShowForm(true)}
//             className="w-full md:w-auto mt-4 px-8 py-3 bg-[#D1A84B] hover:bg-[#b8903c] text-white text-[24px] rounded-[8px] font-semibold transition"
//           >
//             Buyurtma berish
//           </button>
//         </div>
//       </div>

//       {/* 🧾 Modal for name & phone */}
//       <AnimatePresence>
//         {showForm && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-white p-6 rounded-2xl shadow-xl w-96"
//             >
//               <h3 className="text-xl font-semibold mb-4 text-gray-800">
//                 Buyurtma ma’lumotlari
//               </h3>
//               <input
//                 type="text"
//                 placeholder="Ismingizni kiriting"
//                 value={customerName}
//                 onChange={(e) => setCustomerName(e.target.value)}
//                 className="w-full mb-3 p-2 border rounded-xl focus:ring-2 focus:ring-[#D1A84B]"
//               />
//               <input
//                 type="tel"
//                 placeholder="Telefon raqamingiz"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 className="w-full mb-4 p-2 border rounded-xl focus:ring-2 focus:ring-[#D1A84B]"
//               />

//               <div className="flex justify-between">
//                 <button
//                   onClick={() => setShowForm(false)}
//                   className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300"
//                 >
//                   Bekor qilish
//                 </button>
//                 <button
//                   onClick={() => {
//                     if (!customerName || !phoneNumber)
//                       return alert(
//                         "Iltimos, ism va telefon raqamingizni kiriting!"
//                       );
//                     sendOrderToTelegram();
//                   }}
//                   className="px-4 py-2 bg-[#D1A84B] hover:bg-[#b8903c] text-white rounded-xl"
//                 >
//                   Yuborish
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* 🔍 Fullscreen Zoom Modal */}
//         {zoomImage && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 cursor-zoom-out"
//             onClick={() => setZoomImage(null)}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <img
//               src={zoomImage}
//               alt="Zoomed Product"
//               className="max-h-[90vh] max-w-[90vw] object-contain rounded-sm"
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }














import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import Contact_link from "../components/Contact_link"; // ✅ Footer import

// Telegram config
const BOT_TOKEN = "7956904423:AAFgMhLwFHj504IUpi9ai-ql5aSl1jLfwM4";
const ADMIN_IDS = ["6536432455", "7856784678"];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("Online");
  const [showForm, setShowForm] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [zoomImage, setZoomImage] = useState(null); // 🔍 Fullscreen zoom

  useEffect(() => {
    async function fetchProduct() {
      try {
        const ref = doc(db, "products", id);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          const data = snap.data();
          setProduct(data);
          if (data.imageUrls && data.imageUrls.length > 0) {
            setMainImage(data.imageUrls[0]);
          }
        } else {
          setError("Mahsulot topilmadi!");
        }
      } catch (err) {
        console.error(err);
        setError("Xatolik yuz berdi!");
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  async function sendOrderToTelegram() {
    if (!product) return;

    const message = `
        🛒 <b>Yangi Buyurtma!</b>\N
        👤 Mijoz Ism: ${customerName}
        📞 Telefon raqami: ${phoneNumber}
        📦 Mahsulot nomi: ${product.title}
        💰 Narx: ${Number(product.price).toLocaleString()} so'm
        📦 Soni: ${quantity} dona
        🚚 Yetkazib berish: Kompaniya avtomobillari orqali
        💳 To'lov turi: ${paymentMethod}
        `;

    try {
      await Promise.all(
        ADMIN_IDS.map((adminId) =>
          fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: adminId,
              text: message,
              parse_mode: "HTML",
            }),
          })
        )
      );
      alert("✅ Buyurtmangiz yuborildi!");
      setShowForm(false);
      setCustomerName("");
      setPhoneNumber("");
    } catch (err) {
      console.error(err);
      alert("❌ Xatolik yuz berdi! Iltimos, qaytadan urinib ko‘ring.");
    }
  }

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-600">
        Yuklanmoqda...
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <p className="text-red-500 font-semibold mb-4">{error}</p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-[#D1A84B] hover:bg-[#b8903c] text-white rounded-xl"
        >
          Orqaga qaytish
        </button>
      </div>
    );

  if (!product) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto p-6 mt-[70px]"
      >
        <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 🔹 Left Side (Images) */}
          <div className="flex flex-col items-center">
            <div
              className="w-full h-[550px] border rounded-xl overflow-hidden shadow-sm mb-4 cursor-zoom-in"
              onClick={() => setZoomImage(mainImage)}
            >
              <img
                src={mainImage}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
            {product.imageUrls?.length > 1 && (
              <div className="flex gap-3 flex-wrap justify-center">
                {product.imageUrls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Rasm ${index + 1}`}
                    onClick={() => setMainImage(url)}
                    className={`w-[93px] h-[93px] object-cover rounded-[10px] cursor-pointer border-2 transition ${mainImage === url
                        ? "border-[#D1A84B]"
                        : "border-transparent hover:border-gray-300"
                      }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* 🔹 Right Side (Info) */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              <b>Mahsulot haqida qisqacha ma'lumot:</b>
              <br />
              {product.info ||
                "Bu mahsulot haqida batafsil ma'lumot mavjud emas."}
            </p>

            <p className="text-[#D1A84B] text-[24px]">
              Mahsulot narxi:{" "} <br />
              <b className="text-[34px]">
                {Number(product.price).toLocaleString()} so'm
              </b>
            </p>

            <p className="text-gray-700">
              <b>Kategoriya:</b>{" "}
              <span className="font-medium text-gray-700">
                {product.category || "Boshqalar"}
              </span>
            </p>

            <p className="text-gray-700 flex items-center gap-2">
              <b>Yetkazib berish:</b>{" "}
              <span className="font-medium text-gray-800">
                Kompaniya avtomobillari orqali
              </span>
            </p>

            {/* To'lov turi */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">
                <b>To‘lov turini tanlang:</b>
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-[250px] px-3 py-2 border-[2px] rounded-[7px] focus:ring-2 focus:ring-[#D1A84B]"
              >
                <option value="Onlayn">Onlayn</option>
                <option value="Oflayn">Oflayn</option>
              </select>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-[105px] h-[40px] bg-gray-200 hover:bg-gray-300 rounded-[8px] text-2xl flex items-center justify-center"
              >
                –
              </button>
              <span className="text-[24px] font-bold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-[105px] h-[40px] bg-gray-200 hover:bg-gray-300 rounded-[8px] text-2xl flex items-center justify-center"
              >
                +
              </button>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="w-full md:w-auto mt-4 px-8 py-3 bg-[#D1A84B] hover:bg-[#b8903c] text-white text-[24px] rounded-[8px] font-semibold transition"
            >
              Buyurtma berish
            </button>
          </div>
        </div>

        {/* 🔍 Fullscreen Zoom */}
        <AnimatePresence>
          {zoomImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 cursor-zoom-out"
              onClick={() => setZoomImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <img
                src={zoomImage}
                alt="Zoomed Product"
                className="max-h-screen max-w-screen object-contain rounded-sm"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🧾 Order Modal */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white p-6 rounded-2xl shadow-xl w-96"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Buyurtma ma’lumotlari
                </h3>
                <input
                  type="text"
                  placeholder="Ismingizni kiriting"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full mb-3 p-2 border rounded-xl focus:ring-2 focus:ring-[#D1A84B]"
                />
                <input
                  type="tel"
                  placeholder="Telefon raqamingiz"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full mb-4 p-2 border rounded-xl focus:ring-2 focus:ring-[#D1A84B]"
                />

                <div className="flex justify-between">
                  <button
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300"
                  >
                    Bekor qilish
                  </button>
                  <button
                    onClick={() => {
                      if (!customerName || !phoneNumber)
                        return alert(
                          "Iltimos, ism va telefon raqamingizni kiriting!"
                        );
                      sendOrderToTelegram();
                    }}
                    className="px-4 py-2 bg-[#D1A84B] hover:bg-[#b8903c] text-white rounded-xl"
                  >
                    Yuborish
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ✅ Footer added here */}
      <div className="mt-10">
        <Contact_link />
      </div>
    </>
  );
}