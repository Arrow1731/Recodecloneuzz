// // // // // import React, { useEffect, useState } from "react";
// // // // // import { db } from "../firebase";
// // // // // import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
// // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // import Contact_link from "../components/Contact_link";

// // // // // const TELE_TOKEN = "7956904423:AAFgMhLwFHj504IUpi9ai-ql5aSl1jLfwM4";
// // // // // const CHAT_IDS = ["6536432455", "1031988447"];

// // // // // function ProductCard({ product, onOrder }) {
// // // // //   return (
// // // // //     <motion.div
// // // // //       initial={{ opacity: 0, scale: 0.9 }}
// // // // //       animate={{ opacity: 1, scale: 1 }}
// // // // //       transition={{ duration: 0.3 }}
// // // // //       className="bg-white/90 backdrop-blur-lg shadow-lg rounded-2xl p-5 flex flex-col justify-between hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100"
// // // // //     >
// // // // //       <div className="relative w-full h-52">
// // // // //         <img
// // // // //           src={product.imageUrl}
// // // // //           alt={product.title}
// // // // //           className="w-full h-full object-cover rounded-xl shadow-md"
// // // // //           onError={(e) => (e.target.style.display = "none")}
// // // // //         />
// // // // //       </div>

// // // // //       <div className="mt-4 flex flex-col flex-grow">
// // // // //         <h3 className="text-lg font-bold text-gray-800 truncate">{product.title}</h3>
// // // // //         <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.info}</p>
// // // // //       </div>

// // // // //       <div className="mt-4">
// // // // //         <p className="text-2xl font-extrabold text-[#003E3D]">
// // // // //           {product.price != null ? Number(product.price).toLocaleString() + " so'm" : "—"}
// // // // //         </p>
// // // // //         <button
// // // // //           id="border_bg"
// // // // //           onClick={() => onOrder(product)}
// // // // //           className="mt-3 w-full font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
// // // // //         >
// // // // //           Buyurtma berish
// // // // //         </button>
// // // // //       </div>
// // // // //     </motion.div>
// // // // //   );
// // // // // }

// // // // // export default function Catalog() {
// // // // //   const [products, setProducts] = useState([]);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [selectedCategory, setSelectedCategory] = useState("Barchasi");
// // // // //   const [selected, setSelected] = useState(null);
// // // // //   const [name, setName] = useState("");
// // // // //   const [phone, setPhone] = useState("");
// // // // //   const [msg, setMsg] = useState("");

// // // // //   async function loadProducts() {
// // // // //     setLoading(true);
// // // // //     try {
// // // // //       const snap = await getDocs(collection(db, "products"));
// // // // //       const arr = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
// // // // //       setProducts(arr);
// // // // //     } catch (err) {
// // // // //       console.error("loadProducts error:", err);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   }

// // // // //   useEffect(() => {
// // // // //     loadProducts();
// // // // //   }, []);

// // // // //   const filteredProducts = products.filter((p) => {
// // // // //     if (selectedCategory === "Bizniki") return p.category === "Bizniki";
// // // // //     if (selectedCategory === "Boshqalar") return !p.category || p.category !== "Bizniki";
// // // // //     return true;
// // // // //   });

// // // // //   async function sendOrder(e) {
// // // // //     e.preventDefault();
// // // // //     if (!selected) {
// // // // //       setMsg("Mahsulot tanlanmadi");
// // // // //       return;
// // // // //     }
// // // // //     if (!name || !phone) {
// // // // //       setMsg("Ism va telefon raqam majburiy!");
// // // // //       return;
// // // // //     }

// // // // //     const order = {
// // // // //       productId: selected.id,
// // // // //       productTitle: selected.title,
// // // // //       name,
// // // // //       phone,
// // // // //       createdAt: serverTimestamp(),
// // // // //     };

// // // // //     try {
// // // // //       await addDoc(collection(db, "orders"), order);

// // // // //       const text = encodeURIComponent(
// // // // //         `🛒 Yangi buyurtma!\n\n📦 Mahsulot nomi: ${selected.title}\n👤 Buyurtmachi Ismi: ${name}\n📞 Telefon raqami: ${phone}`
// // // // //       );

// // // // //       for (const chatId of CHAT_IDS) {
// // // // //         fetch(`https://api.telegram.org/bot${TELE_TOKEN}/sendMessage?chat_id=${chatId}&text=${text}`).catch((err) =>
// // // // //           console.error("Telegram error", err)
// // // // //         );
// // // // //       }

// // // // //       setMsg("✅ Buyurtma yuborildi!");
// // // // //       setSelected(null);
// // // // //       setName("");
// // // // //       setPhone("");
// // // // //     } catch (err) {
// // // // //       console.error("sendOrder error:", err);
// // // // //       setMsg("Xatolik yuz berdi: " + (err.message || err));
// // // // //     }
// // // // //   }

// // // // //   return (
// // // // //     <div>
// // // // //       <div className="min-h-screen bg-gray-50 p-6 mt-[70px]">
// // // // //         <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">📦 Mahsulotlar Katalogi</h2>

// // // // //         <div className="text-center text-gray-500 mb-8">
// // // // //           {loading ? "Yuklanmoqda..." : `Jami mahsulotlar soni: ${products.length} ta`}
// // // // //         </div>

// // // // //         <div className="flex justify-center gap-4 mb-6 container">
// // // // //           {/* <button
// // // // //             onClick={() => setSelectedCategory("Barchasi")}
// // // // //             className={`px-6 py-2 rounded-xl shadow-md transition ${selectedCategory === "Barchasi" ? "bg-[#D1A84B] text-white" : "bg-white text-gray-700 border"}`}
// // // // //           >
// // // // //             Barchasi
// // // // //           </button> */}
// // // // //           <button
// // // // //             onClick={() => setSelectedCategory("Boshqalar")}
// // // // //             className={`px-6 py-2 rounded-xl shadow-md transition ${selectedCategory === "Bizniki" ? "bg-[#D1A84B] text-white" : "bg-white text-gray-700 border"}`}
// // // // //           >
// // // // //             Mahsulotlar
// // // // //           </button>
// // // // //           <button
// // // // //             onClick={() => setSelectedCategory("Bizniki")}
// // // // //             className={`px-6 py-2 rounded-xl shadow-md transition ${selectedCategory === "Boshqalar" ? "bg-[#D1A84B] text-white" : "bg-white text-gray-700 border"}`}
// // // // //           >
// // // // //             Boshqa Mahsulotlar
// // // // //           </button>
// // // // //         </div>

// // // // //         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
// // // // //           {filteredProducts.length > 0 ? (
// // // // //             filteredProducts.map((p) => <ProductCard key={p.id} product={p} onOrder={setSelected} />)
// // // // //           ) : (
// // // // //             <p className="text-center text-gray-500 col-span-full">Hozircha mahsulot yo'q</p>
// // // // //           )}
// // // // //         </div>

// // // // //         <AnimatePresence>
// // // // //           {selected && (
// // // // //             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// // // // //               <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} transition={{ duration: 0.3 }} className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
// // // // //                 <h3 className="text-xl font-bold text-center mb-4 text-gray-800">🛍 Buyurtma bermoqchi bo'lgan mahsulot nomi: {selected.title}</h3>
// // // // //                 <form onSubmit={sendOrder} className="space-y-4">
// // // // //                   <div>
// // // // //                     <label className="block text-gray-700 font-medium mb-1">Ismingiz</label>
// // // // //                     <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DEB67B]" placeholder="Ism kiriting" required />
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <label className="block text-gray-700 font-medium mb-1">Telefon raqamingiz</label>
// // // // //                     <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DEB67B]" placeholder="+998 90 123 45 67" required />
// // // // //                   </div>
// // // // //                   <div className="flex gap-3 mt-4">
// // // // //                     <button type="submit" className="flex-1 bg-gradient-to-r from-[#DEB67B] to-[#c79c60] hover:opacity-90 text-white font-semibold py-2 rounded-xl shadow-md transition-all duration-300">Yuborish</button>
// // // // //                     <button type="button" onClick={() => { setSelected(null); setMsg(""); }} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-xl shadow-md transition-all duration-300">Bekor qilish</button>
// // // // //                   </div>
// // // // //                 </form>
// // // // //                 {msg && <p className="mt-4 text-center text-green-600 font-semibold">{msg}</p>}
// // // // //               </motion.div>
// // // // //             </motion.div>
// // // // //           )}
// // // // //         </AnimatePresence>
// // // // //       </div>
// // // // //       <Contact_link />
// // // // //     </div>
// // // // //   );
// // // // // }








// // // // import React, { useEffect, useState } from "react";
// // // // import { db } from "../firebase";
// // // // import {
// // // //   collection,
// // // //   getDocs,
// // // //   addDoc,
// // // //   serverTimestamp,
// // // // } from "firebase/firestore";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import Contact_link from "../components/Contact_link";
// // // // import Logomini from "../assets/images/Main_logo.png";

// // // // const TELE_TOKEN = "7956904423:AAFgMhLwFHj504IUpi9ai-ql5aSl1jLfwM4";
// // // // const CHAT_IDS = ["6536432455", "1031988447"];

// // // // function ProductCard({ product, onOrder, onZoom }) {
// // // //   return (
// // // //     <motion.div
// // // //       initial={{ opacity: 0, scale: 0.9 }}
// // // //       animate={{ opacity: 1, scale: 1 }}
// // // //       transition={{ duration: 0.3 }}
// // // //       className="bg-white/90 backdrop-blur-lg shadow-lg rounded-2xl p-5 flex flex-col justify-between hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100"
// // // //     >
// // // //       <div className="relative w-full h-52">
// // // //         <img
// // // //           src={product.imageUrl}
// // // //           alt={product.title}
// // // //           className="w-full h-full object-cover rounded-xl shadow-md cursor-zoom-in"
// // // //           onClick={() => onZoom(product.imageUrl)}
// // // //           onError={(e) => (e.target.style.display = "none")}
// // // //         />
// // // //       </div>

// // // //       <div className="mt-4 flex flex-col flex-grow">
// // // //         <h3 className="text-lg font-bold text-gray-800 truncate">
// // // //           {product.title}
// // // //         </h3>
// // // //         <p className="text-gray-600 text-sm mt-2 line-clamp-2">
// // // //           {product.info}
// // // //         </p>
// // // //       </div>

// // // //       <div className="mt-4">
// // // //         <p className="text-2xl font-extrabold text-[#003E3D]">
// // // //           {product.price != null
// // // //             ? Number(product.price).toLocaleString() + " so'm"
// // // //             : "—"}
// // // //         </p>
// // // //         <button
// // // //           id="border_bg"
// // // //           onClick={() => onOrder(product)}
// // // //           className="mt-3 w-full font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
// // // //         >
// // // //           Buyurtma berish
// // // //         </button>
// // // //       </div>
// // // //     </motion.div>
// // // //   );
// // // // }

// // // // export default function Catalog() {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [selectedCategory, setSelectedCategory] = useState("Barchasi");
// // // //   const [selected, setSelected] = useState(null);
// // // //   const [zoomedImg, setZoomedImg] = useState(null);
// // // //   const [name, setName] = useState("");
// // // //   const [phone, setPhone] = useState("");
// // // //   const [msg, setMsg] = useState("");

// // // //   async function loadProducts() {
// // // //     setLoading(true);
// // // //     try {
// // // //       const snap = await getDocs(collection(db, "products"));
// // // //       const arr = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
// // // //       setProducts(arr);
// // // //     } catch (err) {
// // // //       console.error("loadProducts error:", err);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   }

// // // //   useEffect(() => {
// // // //     loadProducts();
// // // //   }, []);

// // // //   const filteredProducts = products.filter((p) => {
// // // //     if (selectedCategory === "Bizniki") return p.category === "Bizniki";
// // // //     if (selectedCategory === "Boshqalar")
// // // //       return !p.category || p.category !== "Bizniki";
// // // //     return true;
// // // //   });

// // // //   async function sendOrder(e) {
// // // //     e.preventDefault();
// // // //     if (!selected) {
// // // //       setMsg("Mahsulot tanlanmadi");
// // // //       return;
// // // //     }
// // // //     if (!name || !phone) {
// // // //       setMsg("Ism va telefon raqam majburiy!");
// // // //       return;
// // // //     }

// // // //     const order = {
// // // //       productId: selected.id,
// // // //       productTitle: selected.title,
// // // //       name,
// // // //       phone,
// // // //       createdAt: serverTimestamp(),
// // // //     };

// // // //     try {
// // // //       await addDoc(collection(db, "orders"), order);

// // // //       const text = encodeURIComponent(
// // // //         `🛒 Yangi buyurtma!\n\n📦 Mahsulot nomi: ${selected.title}\n👤 Buyurtmachi Ismi: ${name}\n📞 Telefon raqami: ${phone}`
// // // //       );

// // // //       for (const chatId of CHAT_IDS) {
// // // //         fetch(
// // // //           `https://api.telegram.org/bot${TELE_TOKEN}/sendMessage?chat_id=${chatId}&text=${text}`
// // // //         ).catch((err) => console.error("Telegram error", err));
// // // //       }

// // // //       setMsg("✅ Buyurtma yuborildi!");
// // // //       setSelected(null);
// // // //       setName("");
// // // //       setPhone("");
// // // //     } catch (err) {
// // // //       console.error("sendOrder error:", err);
// // // //       setMsg("Xatolik yuz berdi: " + (err.message || err));
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div>
// // // //       <div className="min-h-screen bg-gray-50 p-6 mt-[70px]">
// // // //         <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
// // // //           📦 Mahsulotlar Katalogi
// // // //         </h2>

// // // //         <div className="text-center text-gray-500 mb-8">
// // // //           {loading
// // // //             ? "Yuklanmoqda..."
// // // //             : `Jami mahsulotlar soni: ${products.length} ta`}
// // // //         </div>

// // // //         <div className="flex justify-center gap-4 mb-6 container">
// // // //           <button
// // // //             onClick={() => setSelectedCategory("Boshqalar")}
// // // //             className={`px-6 py-2 rounded-xl shadow-md transition ${
// // // //               selectedCategory === "Bizniki"
// // // //                 ? "bg-[#D1A84B] text-white"
// // // //                 : "bg-white text-gray-700 border"
// // // //             }`}
// // // //           >
// // // //             Eshik Mahsulotlari
// // // //           </button>
// // // //           <button
// // // //             onClick={() => setSelectedCategory("Bizniki")}
// // // //             className={`px-6 py-2 rounded-xl shadow-md transition ${
// // // //               selectedCategory === "Boshqalar"
// // // //                 ? "bg-[#D1A84B] text-white"
// // // //                 : "bg-white text-gray-700 border"
// // // //             }`}
// // // //           >
// // // //             Boshqa Mahsulotlari
// // // //           </button>
// // // //           <button
// // // //             onClick={() => setSelectedCategory("Bizniki")}
// // // //             className={`px-6 py-2 rounded-xl shadow-md transition ${
// // // //               selectedCategory === "Boshqalar"
// // // //                 ? "bg-[#D1A84B] text-white"
// // // //                 : "bg-white text-gray-700 border"
// // // //             }`}
// // // //           >
// // // //             Darvoza Mahsulotlari
// // // //           </button>
// // // //         </div>

// // // //         {/* Search section */}
// // // //         <div className="max-w-[100%] w-full h-[80px] bg-[#D1A84B] flex items-center">
// // // //           <div className="container">
// // // //             <input type="search" name="" id="" />
// // // //           </div>
// // // //         </div>

// // // //         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
// // // //           {filteredProducts.length > 0 ? (
// // // //             filteredProducts.map((p) => (
// // // //               <ProductCard
// // // //                 key={p.id}
// // // //                 product={p}
// // // //                 onOrder={setSelected}
// // // //                 onZoom={setZoomedImg}
// // // //               />
// // // //             ))
// // // //           ) : (
// // // //             <p className="text-center text-gray-500 col-span-full">
// // // //               Hozircha mahsulot yo'q
// // // //             </p>
// // // //           )}
// // // //         </div>

// // // //         {/* ORDER MODAL */}
// // // //         <AnimatePresence>
// // // //           {selected && (
// // // //             <motion.div
// // // //               initial={{ opacity: 0 }}
// // // //               animate={{ opacity: 1 }}
// // // //               exit={{ opacity: 0 }}
// // // //               className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
// // // //             >
// // // //               <motion.div
// // // //                 initial={{ scale: 0.8 }}
// // // //                 animate={{ scale: 1 }}
// // // //                 exit={{ scale: 0.8 }}
// // // //                 transition={{ duration: 0.3 }}
// // // //                 className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
// // // //               >
// // // //                 <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
// // // //                   <center>
// // // //                     <img className="max-w-[150px]" src={Logomini} alt="" />
// // // //                   </center>{" "}
// // // //                   Buyurtma bermoqchi bo'lgan mahsulot nomi:{" "}
// // // //                   <b className="text-[25px]">{selected.title}</b>
// // // //                 </h3>
// // // //                 <form onSubmit={sendOrder} className="space-y-4">
// // // //                   <div>
// // // //                     <label className="block text-gray-700 font-medium mb-1">
// // // //                       Ismingiz
// // // //                     </label>
// // // //                     <input
// // // //                       value={name}
// // // //                       onChange={(e) => setName(e.target.value)}
// // // //                       className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DEB67B]"
// // // //                       placeholder="Ism kiriting"
// // // //                       required
// // // //                     />
// // // //                   </div>
// // // //                   <div>
// // // //                     <label className="block text-gray-700 font-medium mb-1">
// // // //                       Telefon raqamingiz
// // // //                     </label>
// // // //                     <input
// // // //                       value={phone}
// // // //                       onChange={(e) => setPhone(e.target.value)}
// // // //                       className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DEB67B]"
// // // //                       placeholder="+998 90 123 45 67"
// // // //                       required
// // // //                     />
// // // //                   </div>
// // // //                   <div className="flex gap-3 mt-4">
// // // //                     <button
// // // //                       type="submit"
// // // //                       className="flex-1 bg-gradient-to-r from-[#DEB67B] to-[#c79c60] hover:opacity-90 text-white font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
// // // //                     >
// // // //                       Yuborish
// // // //                     </button>
// // // //                     <button
// // // //                       type="button"
// // // //                       onClick={() => {
// // // //                         setSelected(null);
// // // //                         setMsg("");
// // // //                       }}
// // // //                       className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
// // // //                     >
// // // //                       Bekor qilish
// // // //                     </button>
// // // //                   </div>
// // // //                 </form>
// // // //                 {msg && (
// // // //                   <p className="mt-4 text-center text-green-600 font-semibold">
// // // //                     {msg}
// // // //                   </p>
// // // //                 )}
// // // //               </motion.div>
// // // //             </motion.div>
// // // //           )}
// // // //         </AnimatePresence>

// // // //         {/* IMAGE ZOOM MODAL */}
// // // //         <AnimatePresence>
// // // //           {zoomedImg && (
// // // //             <motion.div
// // // //               initial={{ opacity: 0 }}
// // // //               animate={{ opacity: 1 }}
// // // //               exit={{ opacity: 0 }}
// // // //               className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
// // // //               onClick={() => setZoomedImg(null)}
// // // //             >
// // // //               <motion.img
// // // //                 src={zoomedImg}
// // // //                 initial={{ scale: 0.8 }}
// // // //                 animate={{ scale: 1 }}
// // // //                 exit={{ scale: 0.8 }}
// // // //                 transition={{ duration: 0.3 }}
// // // //                 className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl cursor-zoom-out"
// // // //               />
// // // //             </motion.div>
// // // //           )}
// // // //         </AnimatePresence>
// // // //       </div>

// // // //       <Contact_link />
// // // //     </div>
// // // //   );
// // // // }



























// // // import React, { useEffect, useState } from "react";
// // // import { db } from "../firebase";
// // // import {
// // //   collection,
// // //   getDocs,
// // //   addDoc,
// // //   serverTimestamp,
// // // } from "firebase/firestore";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import Contact_link from "../components/Contact_link";
// // // import Logomini from "../assets/images/Main_logo.png";

// // // const TELE_TOKEN = "7956904423:AAFgMhLwFHj504IUpi9ai-ql5aSl1jLfwM4";
// // // const CHAT_IDS = ["6536432455", "1031988447"];

// // // function ProductCard({ product, onOrder, onZoom }) {
// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0, scale: 0.9 }}
// // //       animate={{ opacity: 1, scale: 1 }}
// // //       transition={{ duration: 0.3 }}
// // //       className="bg-white/90 backdrop-blur-lg shadow-lg rounded-2xl p-5 flex flex-col justify-between hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100"
// // //     >
// // //       <div className="relative w-full h-52">
// // //         <img
// // //           src={product.imageUrl}
// // //           alt={product.title}
// // //           className="w-full h-full object-cover rounded-xl shadow-md cursor-zoom-in"
// // //           onClick={() => onZoom(product.imageUrl)}
// // //           onError={(e) => (e.target.style.display = "none")}
// // //         />
// // //       </div>

// // //       <div className="mt-4 flex flex-col flex-grow">
// // //         <h3 className="text-lg font-bold text-gray-800 truncate">
// // //           {product.title}
// // //         </h3>
// // //         <p className="text-gray-600 text-sm mt-2 line-clamp-2">
// // //           {product.info}
// // //         </p>
// // //       </div>

// // //       <div className="mt-4">
// // //         <p className="text-2xl font-extrabold text-[#003E3D]">
// // //           {product.price != null
// // //             ? Number(product.price).toLocaleString() + " so'm"
// // //             : "—"}
// // //         </p>
// // //         <button
// // //           id="border_bg"
// // //           onClick={() => onOrder(product)}
// // //           className="mt-3 w-full font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
// // //         >
// // //           Buyurtma berish
// // //         </button>
// // //       </div>
// // //     </motion.div>
// // //   );
// // // }

// // // export default function Catalog() {
// // //   const [products, setProducts] = useState([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [selectedCategory, setSelectedCategory] = useState("Barchasi");
// // //   const [selected, setSelected] = useState(null);
// // //   const [zoomedImg, setZoomedImg] = useState(null);
// // //   const [name, setName] = useState("");
// // //   const [phone, setPhone] = useState("");
// // //   const [msg, setMsg] = useState("");
// // //   const [searchTerm, setSearchTerm] = useState("");

// // //   async function loadProducts() {
// // //     setLoading(true);
// // //     try {
// // //       const snap = await getDocs(collection(db, "products"));
// // //       const arr = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
// // //       setProducts(arr);
// // //     } catch (err) {
// // //       console.error("loadProducts error:", err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   }

// // //   useEffect(() => {
// // //     loadProducts();
// // //   }, []);

// // //   const filteredProducts = products.filter((p) => {
// // //     const categoryMatch =
// // //       selectedCategory === "Barchasi"
// // //         ? true
// // //         : selectedCategory === "Bizniki"
// // //         ? p.category === "Bizniki"
// // //         : !p.category || p.category !== "Bizniki";

// // //     const searchMatch =
// // //       p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //       p.info?.toLowerCase().includes(searchTerm.toLowerCase());

// // //     return categoryMatch && searchMatch;
// // //   });

// // //   async function sendOrder(e) {
// // //     e.preventDefault();
// // //     if (!selected) {
// // //       setMsg("Mahsulot tanlanmadi");
// // //       return;
// // //     }
// // //     if (!name || !phone) {
// // //       setMsg("Ism va telefon raqam majburiy!");
// // //       return;
// // //     }

// // //     const order = {
// // //       productId: selected.id,
// // //       productTitle: selected.title,
// // //       name,
// // //       phone,
// // //       createdAt: serverTimestamp(),
// // //     };

// // //     try {
// // //       await addDoc(collection(db, "orders"), order);

// // //       const text = encodeURIComponent(
// // //         `🛒 Yangi buyurtma!\n\n📦 Mahsulot nomi: ${selected.title}\n👤 Buyurtmachi Ismi: ${name}\n📞 Telefon raqami: ${phone}`
// // //       );

// // //       for (const chatId of CHAT_IDS) {
// // //         fetch(
// // //           `https://api.telegram.org/bot${TELE_TOKEN}/sendMessage?chat_id=${chatId}&text=${text}`
// // //         ).catch((err) => console.error("Telegram error", err));
// // //       }

// // //       setMsg("✅ Buyurtma yuborildi!");
// // //       setSelected(null);
// // //       setName("");
// // //       setPhone("");
// // //     } catch (err) {
// // //       console.error("sendOrder error:", err);
// // //       setMsg("Xatolik yuz berdi: " + (err.message || err));
// // //     }
// // //   }

// // //   return (
// // //     <div>
// // //       <div className="min-h-screen bg-gray-50 p-4 sm:p-6 mt-[70px]">
// // //         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-800">
// // //           📦 Mahsulotlar Katalogi
// // //         </h2>

// // //         <div className="text-center text-gray-500 mb-8">
// // //           {loading
// // //             ? "Yuklanmoqda..."
// // //             : `Jami mahsulotlar soni: ${products.length} ta`}
// // //         </div>

// // //         {/* Category buttons */}
// // //         <div className="flex justify-between gap-3 mb-6">
// // //           <button
// // //             onClick={() => setSelectedCategory("Barchasi")}
// // //             className={`px-5 py-2 rounded-xl shadow-md transition ${
// // //               selectedCategory === "Barchasi"
// // //                 ? "bg-[#D1A84B] text-white"
// // //                 : "bg-white text-gray-700 border"
// // //             }`}
// // //           >
// // //             Barchasi
// // //           </button>
// // //           <button
// // //             onClick={() => setSelectedCategory("Eshik Mahsulotlari")}
// // //             className={`px-5 py-2 rounded-xl shadow-md transition ${
// // //               selectedCategory === "Eshik Mahsulotlari"
// // //                 ? "bg-[#D1A84B] text-white"
// // //                 : "bg-white text-gray-700 border"
// // //             }`}
// // //           >
// // //             Eshik Mahsulotlari
// // //           </button>
// // //           <button
// // //             onClick={() => setSelectedCategory("Darvoza Mahsulotlari")}
// // //             className={`px-5 py-2 rounded-xl shadow-md transition ${
// // //               selectedCategory === "Darvoza Mahsulotlari"
// // //                 ? "bg-[#D1A84B] text-white"
// // //                 : "bg-white text-gray-700 border"
// // //             }`}
// // //           >
// // //             Darvoza Mahsulotlari
// // //           </button>
// // //         </div>

// // //         {/* Search section */}
// // //         <div className="w-full bg-[#D1A84B] flex justify-center items-center py-4 rounded-xl mb-8 px-4">
// // //           <input
// // //             type="text"
// // //             placeholder="Mahsulot nomi yoki ma’lumot bo‘yicha qidirish..."
// // //             value={searchTerm}
// // //             onChange={(e) => setSearchTerm(e.target.value)}
// // //             className="w-full max-w-xl px-4 py-2 rounded-lg focus:outline-none border border-transparent focus:border-white shadow-sm"
// // //           />
// // //         </div>

// // //         {/* Product grid */}
// // //         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
// // //           {filteredProducts.length > 0 ? (
// // //             filteredProducts.map((p) => (
// // //               <ProductCard
// // //                 key={p.id}
// // //                 product={p}
// // //                 onOrder={setSelected}
// // //                 onZoom={setZoomedImg}
// // //               />
// // //             ))
// // //           ) : (
// // //             <p className="text-center text-gray-500 col-span-full">
// // //               Hozircha mahsulot yo'q
// // //             </p>
// // //           )}
// // //         </div>

// // //         {/* ORDER MODAL */}
// // //         <AnimatePresence>
// // //           {selected && (
// // //             <motion.div
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               exit={{ opacity: 0 }}
// // //               className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
// // //             >
// // //               <motion.div
// // //                 initial={{ scale: 0.8 }}
// // //                 animate={{ scale: 1 }}
// // //                 exit={{ scale: 0.8 }}
// // //                 transition={{ duration: 0.3 }}
// // //                 className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
// // //               >
// // //                 <h3 className="text-lg sm:text-xl font-bold text-center mb-4 text-gray-800">
// // //                   <center>
// // //                     <img className="max-w-[150px]" src={Logomini} alt="" />
// // //                   </center>
// // //                   Buyurtma bermoqchi bo'lgan mahsulot nomi:
// // //                   <b className="text-[20px] sm:text-[25px] block mt-2">
// // //                     {selected.title}
// // //                   </b>
// // //                 </h3>
// // //                 <form onSubmit={sendOrder} className="space-y-4">
// // //                   <div>
// // //                     <label className="block text-gray-700 font-medium mb-1">
// // //                       Ismingiz
// // //                     </label>
// // //                     <input
// // //                       value={name}
// // //                       onChange={(e) => setName(e.target.value)}
// // //                       className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DEB67B]"
// // //                       placeholder="Ism kiriting"
// // //                       required
// // //                     />
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-gray-700 font-medium mb-1">
// // //                       Telefon raqamingiz
// // //                     </label>
// // //                     <input
// // //                       value={phone}
// // //                       onChange={(e) => setPhone(e.target.value)}
// // //                       className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DEB67B]"
// // //                       placeholder="+998 90 123 45 67"
// // //                       required
// // //                     />
// // //                   </div>
// // //                   <div className="flex flex-col sm:flex-row gap-3 mt-4">
// // //                     <button
// // //                       type="submit"
// // //                       className="flex-1 bg-gradient-to-r from-[#DEB67B] to-[#c79c60] hover:opacity-90 text-white font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
// // //                     >
// // //                       Yuborish
// // //                     </button>
// // //                     <button
// // //                       type="button"
// // //                       onClick={() => {
// // //                         setSelected(null);
// // //                         setMsg("");
// // //                       }}
// // //                       className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
// // //                     >
// // //                       Bekor qilish
// // //                     </button>
// // //                   </div>
// // //                 </form>
// // //                 {msg && (
// // //                   <p className="mt-4 text-center text-green-600 font-semibold">
// // //                     {msg}
// // //                   </p>
// // //                 )}
// // //               </motion.div>
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>

// // //         {/* IMAGE ZOOM MODAL */}
// // //         <AnimatePresence>
// // //           {zoomedImg && (
// // //             <motion.div
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               exit={{ opacity: 0 }}
// // //               className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
// // //               onClick={() => setZoomedImg(null)}
// // //             >
// // //               <motion.img
// // //                 src={zoomedImg}
// // //                 initial={{ scale: 0.8 }}
// // //                 animate={{ scale: 1 }}
// // //                 exit={{ scale: 0.8 }}
// // //                 transition={{ duration: 0.3 }}
// // //                 className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl cursor-zoom-out"
// // //               />
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>
// // //       </div>

// // //       <Contact_link />
// // //     </div>
// // //   );
// // // }















// // import React, { useEffect, useState } from "react";
// // import { db } from "../firebase";
// // import {
// //   collection,
// //   getDocs,
// //   addDoc,
// //   serverTimestamp,
// // } from "firebase/firestore";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Contact_link from "../components/Contact_link";
// // import Logomini from "../assets/images/Main_logo.png";

// // const TELE_TOKEN = "7956904423:AAFgMhLwFHj504IUpi9ai-ql5aSl1jLfwM4";
// // const CHAT_IDS = ["6536432455", "1031988447"];

// // function ProductCard({ product, onOrder, onZoom }) {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, scale: 0.9 }}
// //       animate={{ opacity: 1, scale: 1 }}
// //       transition={{ duration: 0.3 }}
// //       className="bg-white/90 backdrop-blur-lg shadow-lg rounded-2xl p-5 flex flex-col justify-between hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100"
// //     >
// //       <div className="relative w-full h-52">
// //         <img
// //           src={product.imageUrl}
// //           alt={product.title}
// //           className="w-full h-full object-cover rounded-xl shadow-md cursor-zoom-in"
// //           onClick={() => onZoom(product.imageUrl)}
// //           onError={(e) => (e.target.style.display = "none")}
// //         />
// //       </div>

// //       <div className="mt-4 flex flex-col flex-grow">
// //         <h3 className="text-lg font-bold text-gray-800 truncate">
// //           {product.title}
// //         </h3>
// //         <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.info}</p>
// //       </div>

// //       <div className="mt-4">
// //         <p className="text-2xl font-extrabold text-[#003E3D]">
// //           {product.price
// //             ? Number(product.price).toLocaleString() + " so'm"
// //             : "—"}
// //         </p>
// //         <button
// //           id="border_bg"
// //           onClick={() => onOrder(product)}
// //           className="mt-3 w-full font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
// //         >
// //           Buyurtma berish
// //         </button>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // export default function Catalog() {
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [selectedCategory, setSelectedCategory] = useState("Barchasi");
// //   const [selected, setSelected] = useState(null);
// //   const [zoomedImg, setZoomedImg] = useState(null);
// //   const [name, setName] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [msg, setMsg] = useState("");
// //   const [searchTerm, setSearchTerm] = useState("");

// //   // Load all products from Firestore
// //   async function loadProducts() {
// //     setLoading(true);
// //     try {
// //       const snap = await getDocs(collection(db, "products"));
// //       const arr = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
// //       setProducts(arr);
// //     } catch (err) {
// //       console.error("loadProducts error:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   useEffect(() => {
// //     loadProducts();
// //   }, []);

// //   // Filter products by category & search
// //   const filteredProducts = products.filter((p) => {
// //     const matchesCategory =
// //       selectedCategory === "Barchasi"
// //         ? true
// //         : p.category === selectedCategory;

// //     const matchesSearch =
// //       p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       p.info?.toLowerCase().includes(searchTerm.toLowerCase());

// //     return matchesCategory && matchesSearch;
// //   });

// //   // Send order to Firestore + Telegram
// //   async function sendOrder(e) {
// //     e.preventDefault();
// //     if (!selected) return setMsg("Mahsulot tanlanmadi");
// //     if (!name || !phone) return setMsg("Ism va telefon raqam majburiy!");

// //     const order = {
// //       productId: selected.id,
// //       productTitle: selected.title,
// //       name,
// //       phone,
// //       createdAt: serverTimestamp(),
// //     };

// //     try {
// //       await addDoc(collection(db, "orders"), order);

// //       const text = encodeURIComponent(
// //         `🛒 Yangi buyurtma!\n\n📦 Mahsulot nomi: ${selected.title}\n👤 Ism: ${name}\n📞 Telefon: ${phone}`
// //       );

// //       for (const chatId of CHAT_IDS) {
// //         fetch(
// //           `https://api.telegram.org/bot${TELE_TOKEN}/sendMessage?chat_id=${chatId}&text=${text}`
// //         ).catch((err) => console.error("Telegram error", err));
// //       }

// //       setMsg("✅ Buyurtma yuborildi!");
// //       setSelected(null);
// //       setName("");
// //       setPhone("");
// //     } catch (err) {
// //       console.error("sendOrder error:", err);
// //       setMsg("Xatolik: " + err.message);
// //     }
// //   }

// //   return (
// //     <div>
// //       <div className="min-h-screen bg-gray-50 p-4 sm:p-6 mt-[70px]">
// //         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-800">
// //           📦 Mahsulotlar Katalogi
// //         </h2>

// //         <div className="text-center text-gray-500 mb-8">
// //           {loading
// //             ? "Yuklanmoqda..."
// //             : `Jami mahsulotlar soni: ${products.length} ta`}
// //         </div>

// //         {/* Category buttons */}
// //         <div className="flex justify-between gap-3 mb-6">
// //           {["Barchasi", "Eshik Mahsulotlari", "Darvoza Mahsulotlari"].map(
// //             (cat) => (
// //               <button
// //                 key={cat}
// //                 onClick={() => setSelectedCategory(cat)}
// //                 className={`flex-1 px-4 py-2 rounded-xl shadow-md text-sm sm:text-base font-semibold transition ${
// //                   selectedCategory === cat
// //                     ? "bg-[#D1A84B] text-white"
// //                     : "bg-white text-gray-700 border"
// //                 }`}
// //               >
// //                 {cat}
// //               </button>
// //             )
// //           )}
// //         </div>

// //         {/* Search input */}
// //         <div className="w-full bg-[#D1A84B] flex justify-center items-center py-4 rounded-xl mb-8 px-4">
// //           <input
// //             type="text"
// //             placeholder="Mahsulot nomi yoki ma’lumot bo‘yicha qidirish..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="w-full max-w-xl px-4 py-2 rounded-lg focus:outline-none border border-transparent focus:border-white shadow-sm"
// //           />
// //         </div>

// //         {/* Product grid */}
// //         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
// //           {filteredProducts.length > 0 ? (
// //             filteredProducts.map((p) => (
// //               <ProductCard
// //                 key={p.id}
// //                 product={p}
// //                 onOrder={setSelected}
// //                 onZoom={setZoomedImg}
// //               />
// //             ))
// //           ) : (
// //             <p className="text-center text-gray-500 col-span-full">
// //               Hozircha mahsulot yo‘q
// //             </p>
// //           )}
// //         </div>

// //         {/* ORDER MODAL */}
// //         <AnimatePresence>
// //           {selected && (
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
// //             >
// //               <motion.div
// //                 initial={{ scale: 0.8 }}
// //                 animate={{ scale: 1 }}
// //                 exit={{ scale: 0.8 }}
// //                 transition={{ duration: 0.3 }}
// //                 className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
// //               >
// //                 <h3 className="text-lg sm:text-xl font-bold text-center mb-4 text-gray-800">
// //                   <center>
// //                     <img className="max-w-[150px]" src={Logomini} alt="" />
// //                   </center>
// //                   <b className="text-[20px] sm:text-[25px] block mt-2">
// //                     {selected.title}
// //                   </b>
// //                 </h3>

// //                 <form onSubmit={sendOrder} className="space-y-4">
// //                   <div>
// //                     <label className="block text-gray-700 font-medium mb-1">
// //                       Ismingiz
// //                     </label>
// //                     <input
// //                       value={name}
// //                       onChange={(e) => setName(e.target.value)}
// //                       className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DEB67B]"
// //                       placeholder="Ism kiriting"
// //                       required
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-gray-700 font-medium mb-1">
// //                       Telefon raqamingiz
// //                     </label>
// //                     <input
// //                       value={phone}
// //                       onChange={(e) => setPhone(e.target.value)}
// //                       className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DEB67B]"
// //                       placeholder="+998 90 123 45 67"
// //                       required
// //                     />
// //                   </div>

// //                   <div className="flex flex-col sm:flex-row gap-3 mt-4">
// //                     <button
// //                       type="submit"
// //                       className="flex-1 bg-gradient-to-r from-[#DEB67B] to-[#c79c60] hover:opacity-90 text-white font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
// //                     >
// //                       Yuborish
// //                     </button>
// //                     <button
// //                       type="button"
// //                       onClick={() => {
// //                         setSelected(null);
// //                         setMsg("");
// //                       }}
// //                       className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
// //                     >
// //                       Bekor qilish
// //                     </button>
// //                   </div>
// //                 </form>

// //                 {msg && (
// //                   <p className="mt-4 text-center text-green-600 font-semibold">
// //                     {msg}
// //                   </p>
// //                 )}
// //               </motion.div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>

// //         {/* IMAGE ZOOM MODAL */}
// //         <AnimatePresence>
// //           {zoomedImg && (
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
// //               onClick={() => setZoomedImg(null)}
// //             >
// //               <motion.img
// //                 src={zoomedImg}
// //                 initial={{ scale: 0.8 }}
// //                 animate={{ scale: 1 }}
// //                 exit={{ scale: 0.8 }}
// //                 transition={{ duration: 0.3 }}
// //                 className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl cursor-zoom-out"
// //               />
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>

// //       <Contact_link />
// //     </div>
// //   );
// // }




















// import React, { useEffect, useState } from "react";
// import { db } from "../firebase";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   serverTimestamp,
// } from "firebase/firestore";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import Contact_link from "../components/Contact_link";
// import Logomini from "../assets/images/Main_logo.png";

// const TELE_TOKEN = "7956904423:AAFgMhLwFHj504IUpi9ai-ql5aSl1jLfwM4";
// const CHAT_IDS = ["6536432455", "1031988447"];

// function ProductCard({ product, onOrder, onZoom }) {
//   const navigate = useNavigate();

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.3 }}
//       className="bg-white/90 backdrop-blur-lg shadow-lg rounded-2xl p-5 flex flex-col justify-between hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100 cursor-pointer"
//       onClick={() => navigate(`/product/${product.id}`)}
//     >
//       <div className="relative w-full h-52">
//         <img
//           src={product.imageUrl}
//           alt={product.title}
//           className="w-full h-full object-cover rounded-xl shadow-md"
//           onError={(e) => (e.target.style.display = "none")}
//         />
//       </div>

//       <div className="mt-4 flex flex-col flex-grow">
//         <h3 className="text-lg font-bold text-gray-800 truncate">
//           {product.title}
//         </h3>
//         <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.info}</p>
//       </div>

//       <div className="mt-4">
//         <p className="text-2xl font-extrabold text-[#003E3D]">
//           {product.price
//             ? Number(product.price).toLocaleString() + " so'm"
//             : "—"}
//         </p>
//       </div>
//     </motion.div>
//   );
// }

// export default function Catalog() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("Barchasi");
//   const [selected, setSelected] = useState(null);
//   const [zoomedImg, setZoomedImg] = useState(null);
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [msg, setMsg] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");

//   // Load all products from Firestore
//   async function loadProducts() {
//     setLoading(true);
//     try {
//       const snap = await getDocs(collection(db, "products"));
//       const arr = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
//       setProducts(arr);
//     } catch (err) {
//       console.error("loadProducts error:", err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   // Filter products by category & search
//   const filteredProducts = products.filter((p) => {
//     const matchesCategory =
//       selectedCategory === "Barchasi" ? true : p.category === selectedCategory;

//     const matchesSearch =
//       p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       p.info?.toLowerCase().includes(searchTerm.toLowerCase());

//     return matchesCategory && matchesSearch;
//   });

//   // Send order to Firestore + Telegram
//   async function sendOrder(e) {
//     e.preventDefault();
//     if (!selected) return setMsg("Mahsulot tanlanmadi");
//     if (!name || !phone) return setMsg("Ism va telefon raqam majburiy!");

//     const order = {
//       productId: selected.id,
//       productTitle: selected.title,
//       name,
//       phone,
//       createdAt: serverTimestamp(),
//     };

//     try {
//       await addDoc(collection(db, "orders"), order);

//       const text = encodeURIComponent(
//         `🛒 Yangi buyurtma!\n\n📦 Mahsulot nomi: ${selected.title}\n👤 Ism: ${name}\n📞 Telefon: ${phone}`
//       );

//       for (const chatId of CHAT_IDS) {
//         fetch(
//           `https://api.telegram.org/bot${TELE_TOKEN}/sendMessage?chat_id=${chatId}&text=${text}`
//         ).catch((err) => console.error("Telegram error", err));
//       }

//       setMsg("✅ Buyurtma yuborildi!");
//       setSelected(null);
//       setName("");
//       setPhone("");
//     } catch (err) {
//       console.error("sendOrder error:", err);
//       setMsg("Xatolik: " + err.message);
//     }
//   }

//   return (
//     <div>
//       <div className="min-h-screen bg-gray-50 p-4 sm:p-6 mt-[70px]">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-800">
//           📦 Mahsulotlar Katalogi
//         </h2>

//         <div className="text-center text-gray-500 mb-8">
//           {loading
//             ? "Yuklanmoqda..."
//             : `Jami mahsulotlar soni: ${products.length} ta`}
//         </div>

//         {/* Category buttons */}
//         <div className="flex justify-between gap-3 mb-6">
//           {["Barchasi", "Eshik Mahsulotlari", "Darvoza Mahsulotlari"].map(
//             (cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`flex-1 px-4 py-2 rounded-xl shadow-md text-sm sm:text-base font-semibold transition ${
//                   selectedCategory === cat
//                     ? "bg-[#D1A84B] text-white"
//                     : "bg-white text-gray-700 border"
//                 }`}
//               >
//                 {cat}
//               </button>
//             )
//           )}
//         </div>

//         {/* Search input */}
//         <div className="w-full bg-[#D1A84B] flex justify-center items-center py-4 rounded-xl mb-8 px-4">
//           <input
//             type="text"
//             placeholder="Mahsulot nomi yoki ma’lumot bo‘yicha qidirish..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full max-w-xl px-4 py-2 rounded-lg focus:outline-none border border-transparent focus:border-white shadow-sm"
//           />
//         </div>

//         {/* Product grid */}
//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((p) => (
//               <ProductCard
//                 key={p.id}
//                 product={p}
//                 onOrder={setSelected}
//                 onZoom={setZoomedImg}
//               />
//             ))
//           ) : (
//             <p className="text-center text-gray-500 col-span-full">
//               Hozircha mahsulot yo‘q
//             </p>
//           )}
//         </div>

//         {/* ORDER MODAL */}
//         <AnimatePresence>
//           {selected && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
//             >
//               <motion.div
//                 initial={{ scale: 0.8 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0.8 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
//               >
//                 <h3 className="text-lg sm:text-xl font-bold text-center mb-4 text-gray-800">
//                   <center>
//                     <img className="max-w-[150px]" src={Logomini} alt="" />
//                   </center>
//                   <b className="text-[20px] sm:text-[25px] block mt-2">
//                     {selected.title}
//                   </b>
//                 </h3>

//                 <form onSubmit={sendOrder} className="space-y-4">
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-1">
//                       Ismingiz
//                     </label>
//                     <input
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DEB67B]"
//                       placeholder="Ism kiriting"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-1">
//                       Telefon raqamingiz
//                     </label>
//                     <input
//                       value={phone}
//                       onChange={(e) => setPhone(e.target.value)}
//                       className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DEB67B]"
//                       placeholder="+998 90 123 45 67"
//                       required
//                     />
//                   </div>

//                   <div className="flex flex-col sm:flex-row gap-3 mt-4">
//                     <button
//                       type="submit"
//                       className="flex-1 bg-gradient-to-r from-[#DEB67B] to-[#c79c60] hover:opacity-90 text-white font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
//                     >
//                       Yuborish
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setSelected(null);
//                         setMsg("");
//                       }}
//                       className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
//                     >
//                       Bekor qilish
//                     </button>
//                   </div>
//                 </form>

//                 {msg && (
//                   <p className="mt-4 text-center text-green-600 font-semibold">
//                     {msg}
//                   </p>
//                 )}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* IMAGE ZOOM MODAL */}
//         <AnimatePresence>
//           {zoomedImg && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
//               onClick={() => setZoomedImg(null)}
//             >
//               <motion.img
//                 src={zoomedImg}
//                 initial={{ scale: 0.8 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0.8 }}
//                 transition={{ duration: 0.3 }}
//                 className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl cursor-zoom-out"
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       <Contact_link />
//     </div>
//   );
// }






















import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Contact_link from "../components/Contact_link";
import Logomini from "../assets/images/Main_logo.png";

const TELE_TOKEN = "7956904423:AAFgMhLwFHj504IUpi9ai-ql5aSl1jLfwM4";
const CHAT_IDS = ["6536432455", "1031988447"];

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white/90 backdrop-blur-lg shadow-lg rounded-2xl p-5 flex flex-col justify-between hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100 cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative w-[330px] h-[300px]">
        <img
          src={product.imageUrls?.[0] || ""}
          alt={product.title}
          className="w-full h-[300px] shadow-md"
        />
      </div>

      <div className="mt-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 truncate">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.info}</p>
      </div>

      <div className="mt-4">
        <p className="text-2xl font-extrabold text-[#003E3D]">
          {product.price
            ? Number(product.price).toLocaleString() + " so'm"
            : "—"}
        </p>
      </div>
    </motion.div>
  );
}

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Barchasi");
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 Load products from Firestore
  async function loadProducts() {
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, "products"));
      const arr = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setProducts(arr);
    } catch (err) {
      console.error("loadProducts error:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  // 🔹 Filter by category & search
  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "Barchasi" ? true : p.category === selectedCategory;

    const matchesSearch =
      p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.info?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6 mt-[70px]">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-800">
          📦 Mahsulotlar Katalogi
        </h2>

        <div className="text-center text-gray-500 mb-8">
          {loading
            ? "Yuklanmoqda..."
            : `Jami mahsulotlar soni: ${products.length} ta`}
        </div>

        {/* 🔹 Category buttons */}
        <div className="flex justify-between flex-wrap gap-3 mb-6">
          {["Barchasi", "Eshik Mahsulotlari", "Darvoza Mahsulotlari"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-1 px-4 py-2 rounded-xl shadow-md text-sm sm:text-base font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-[#D1A84B] text-white"
                    : "bg-white text-gray-700 border"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* 🔹 Search input */}
        <div className="w-full bg-[#D1A84B] flex justify-center items-center py-4 rounded-xl mb-8 px-4">
          <input
            type="text"
            placeholder="Mahsulot nomi yoki ma’lumot bo‘yicha qidirish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-xl px-4 py-2 rounded-lg focus:outline-none border border-transparent focus:border-white shadow-sm"
          />
        </div>

        {/* 🔹 Product grid */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              Hozircha mahsulot yo‘q
            </p>
          )}
        </div>
      </div>

      <Contact_link />
    </div>
  );
}