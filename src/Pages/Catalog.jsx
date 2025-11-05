// // import React, { useEffect, useState } from "react";
// // import { db } from "../firebase";
// // import {
// //   collection,
// //   getDocs,
// //   addDoc,
// //   serverTimestamp,
// // } from "firebase/firestore";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useNavigate } from "react-router-dom";
// // import Contact_link from "../components/Contact_link";
// // import Logomini from "../assets/images/Main_logo.png";

// // const TELE_TOKEN = "7956904423:AAFgMhLwFHj504IUpi9ai-ql5aSl1jLfwM4";
// // const CHAT_IDS = ["6536432455", "1031988447"];

// // function ProductCard({ product, onOrder, onZoom }) {
// //   const navigate = useNavigate();

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, scale: 0.9 }}
// //       animate={{ opacity: 1, scale: 1 }}
// //       transition={{ duration: 0.3 }}
// //       className="bg-white/90 backdrop-blur-lg shadow-lg rounded-2xl p-5 flex flex-col justify-between hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100 cursor-pointer"
// //       onClick={() => navigate(`/product/${product.id}`)}
// //     >
// //       <div className="relative w-full h-52">
// //         <img
// //           src={product.imageUrl}
// //           alt={product.title}
// //           className="w-full h-full object-cover rounded-xl shadow-md"
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
// //       selectedCategory === "Barchasi" ? true : p.category === selectedCategory;

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

// function ProductCard({ product }) {
//   const navigate = useNavigate();

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.3 }}
//       className="bg-white/90 backdrop-blur-lg shadow-lg rounded-2xl 
//              p-4 sm:p-5 flex flex-col justify-between 
//              hover:shadow-2xl hover:scale-105 
//              transition-all duration-300 border border-gray-100 
//              cursor-pointer w-full max-w-[360px] mx-auto"
//       onClick={() => navigate(`/product/${product.id}`)}
//     >
//       {/* 🔹 Image Section */}
//       <div className="relative w-full h-[200px] sm:h-[240px] md:h-[260px] lg:h-[280px] xl:h-[300px]">
//         <img
//           src={product.imageUrls?.[0] || ""}
//           alt={product.title}
//           className="w-full h-full object-cover rounded-xl shadow-md"
//         />
//       </div>

//       {/* 🔹 Product Info */}
//       <div className="mt-3 sm:mt-4 flex flex-col flex-grow">
//         <h3 className="text-base sm:text-lg font-bold text-gray-800 truncate">
//           {product.title}
//         </h3>
//         <p className="text-gray-600 text-xs sm:text-sm mt-2 line-clamp-2">
//           {product.info}
//         </p>
//       </div>

//       {/* 🔹 Price */}
//       <div className="mt-3 sm:mt-4">
//         <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#003E3D]">
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
//   const [searchTerm, setSearchTerm] = useState("");

//   // 🔹 Load products from Firestore
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

//   // 🔹 Filter by category & search
//   const filteredProducts = products.filter((p) => {
//     const matchesCategory =
//       selectedCategory === "Barchasi" ? true : p.category === selectedCategory;

//     const matchesSearch =
//       p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       p.info?.toLowerCase().includes(searchTerm.toLowerCase());

//     return matchesCategory && matchesSearch;
//   });

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

//         {/* 🔹 Category buttons */}
//         <div className="flex justify-between flex-wrap gap-3 mb-6">
//           {["Barchasi", "Eshik Mahsulotlari", "Darvoza Mahsulotlari"].map(
//             (cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`flex-1 px-4 py-2 rounded-xl shadow-md text-sm sm:text-base font-semibold transition ${selectedCategory === cat
//                   ? "bg-[#D1A84B] text-white"
//                   : "bg-white text-gray-700 border"
//                   }`}
//               >
//                 {cat}
//               </button>
//             )
//           )}
//         </div>

//         {/* 🔹 Search input */}
//         <div className="w-full bg-[#D1A84B] flex justify-center items-center py-4 rounded-xl mb-8 px-4">
//           <input
//             type="text"
//             placeholder="Mahsulot nomi yoki ma’lumot bo‘yicha qidirish..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full max-w-xl px-4 py-2 rounded-lg focus:outline-none border border-transparent focus:border-white shadow-sm"
//           />
//         </div>

//         {/* 🔹 Product grid (fully responsive) */}
//         <div className="
//               grid gap-6 
//               grid-cols-1               /* Phones: 1 item per row */
//               sm:grid-cols-2            /* Small screens: 2 items */
//               md:grid-cols-3            /* Tablets: 3 items */
//               lg:grid-cols-4            /* Laptops: 4 items */
//               xl:grid-cols-5            /* Desktops: 5 items */
//               2xl:grid-cols-6           /* Very large screens: 6 items */
//               px-4 py-6                 /* Add padding around grid */
//           >">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((p) => (
//               <ProductCard key={p.id} product={p} />
//             ))
//           ) : (
//             <p className="text-center text-gray-500 col-span-full">
//               Hozircha mahsulot yo‘q
//             </p>
//           )}
//         </div>

//       </div>

//       <Contact_link />
//     </div>
//   );
// }


















import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Contact_link from "../components/Contact_link";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white/90 backdrop-blur-lg shadow-lg rounded-2xl 
                 p-4 sm:p-5 flex flex-col justify-between 
                 hover:shadow-2xl hover:scale-105 
                 transition-all duration-300 border border-gray-100 
                 cursor-pointer w-full max-w-[360px] mx-auto"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative w-full h-[200px] sm:h-[240px] md:h-[260px] lg:h-[280px] xl:h-[300px]">
        <img
          src={product.imageUrls?.[0] || ""}
          alt={product.title}
          className="w-full h-full object-cover rounded-xl shadow-md"
        />
      </div>
      <div className="mt-3 sm:mt-4 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg font-bold text-gray-800 truncate">
          {product.title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mt-2 line-clamp-2">
          {product.info}
        </p>
      </div>
      <div className="mt-3 sm:mt-4">
        <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#003E3D]">
          {product.price ? Number(product.price).toLocaleString() + " so'm" : "—"}
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
  const [costFilter, setCostFilter] = useState([0, 1000000]);
  const [topProductsFilter, setTopProductsFilter] = useState("All");
  const [colorFilter, setColorFilter] = useState("");

  // Load products from Firestore
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

  // Filter products
  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "Barchasi" ? true : p.category === selectedCategory;

    const matchesSearch =
      p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.info?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCost =
      p.price >= costFilter[0] && p.price <= costFilter[1];

    const matchesTopProducts =
      topProductsFilter === "All" ? true : p.topBought === true;

    const matchesColor = colorFilter ? p.color === colorFilter : true;

    return matchesCategory && matchesSearch && matchesCost && matchesTopProducts && matchesColor;
  });

  const colors = [
    { name: "White", hex: "#FFFFFF" },
    { name: "Black", hex: "#000000" },
    { name: "Grey", hex: "#A9A9A9" },
    { name: "Chocolate", hex: "#D2691E" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-[70px] p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-800">
        📦 Mahsulotlar Katalogi
      </h2>

      <div className="text-center text-gray-500 mb-8">
        {loading ? "Yuklanmoqda..." : `Jami mahsulotlar soni: ${products.length} ta`}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* 🔹 Modern Filter Sidebar */}
        <div className="lg:w-1/4 bg-white p-5 rounded-xl shadow-md space-y-6">
          <h3 className="font-bold text-xl mb-4">Filterlar</h3>

          {/* Category */}
          <div>
            <p className="font-semibold mb-2">Kategoriya</p>
            {["Barchasi", "Eshik Mahsulotlari", "Darvoza Mahsulotlari"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`block w-full text-left px-4 py-2 rounded-lg mb-2 transition font-medium ${
                  selectedCategory === cat
                    ? "bg-[#D1A84B] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cost Filter */}
          <div>
            <p className="font-semibold mb-2">Narx oralig'i (so'm)</p>
            <div className="flex items-center gap-2">
              <span>{costFilter[0].toLocaleString()}</span>
              <input
                type="range"
                min={0}
                max={1000000}
                step={10000}
                value={costFilter[0]}
                onChange={(e) => setCostFilter([Number(e.target.value), costFilter[1]])}
                className="w-full"
              />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span>{costFilter[1].toLocaleString()}</span>
              <input
                type="range"
                min={0}
                max={1000000}
                step={10000}
                value={costFilter[1]}
                onChange={(e) => setCostFilter([costFilter[0], Number(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>

          {/* Top Products */}
          <div>
            <p className="font-semibold mb-2">Top Products</p>
            <select
              value={topProductsFilter}
              onChange={(e) => setTopProductsFilter(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="All">All</option>
              <option value="Top">Top Products</option>
            </select>
          </div>

          {/* Color Filter */}
          <div>
            <p className="font-semibold mb-2">Rang</p>
            <div className="flex gap-3">
              {colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() =>
                    setColorFilter(colorFilter === c.name ? "" : c.name)
                  }
                  className={`w-8 h-8 rounded-full border-2 transition ${
                    colorFilter === c.name ? "border-[#D1A84B]" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: c.hex }}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* 🔹 Main Content: Search & Products */}
        <div className="flex-1">
          {/* Search Input */}
          <div className="w-full bg-[#D1A84B] flex justify-center items-center py-4 rounded-xl mb-8 px-4">
            <input
              type="text"
              placeholder="Mahsulot nomi yoki ma’lumot bo‘yicha qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-xl px-4 py-2 rounded-lg focus:outline-none border border-transparent focus:border-white shadow-sm"
            />
          </div>

          {/* Product Grid */}
          <div className="
              grid gap-6 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-3 
              xl:grid-cols-4 
              2xl:grid-cols-5 
              px-4 py-6
          ">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                Hozircha mahsulot yo‘q
              </p>
            )}
          </div>
        </div>
      </div>

      <Contact_link />
    </div>
  );
}