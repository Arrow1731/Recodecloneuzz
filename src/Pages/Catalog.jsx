import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import Contact_link from "../components/Contact_link";

const TELE_TOKEN = "7956904423:AAFgMhLwFHj504IUpi9ai-ql5aSl1jLfwM4";
const CHAT_IDS = ["6536432455", "1031988447"];

function ProductCard({ product, onOrder }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white/90 backdrop-blur-lg shadow-lg rounded-2xl p-5 flex flex-col justify-between hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100"
    >
      {/* Product Image */}
      <div className="relative w-full h-52">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover rounded-xl shadow-md"
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 truncate">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {product.info}
        </p>
      </div>

      {/* Price & Button */}
      <div className="mt-4">
        <p className="text-2xl font-extrabold text-[#003E3D]">
          {product.price} so'm
        </p>
        <button id="border_bg"
          onClick={() => onOrder(product)}
          className="mt-3 w-full font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
        >
          Buyurtma berish
        </button>
      </div>
    </motion.div>
  );
}

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  // Load products from Firebase
  async function loadProducts() {
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, "products"));
      const arr = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setProducts(arr);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  // Send order to Firebase & Telegram
  async function sendOrder(e) {
    e.preventDefault();
    if (!name || !phone) {
      setMsg("Ism va telefon raqam majburiy!");
      return;
    }

    const order = {
      productId: selected.id,
      productTitle: selected.title,
      name,
      phone,
      createdAt: Timestamp.now(),
    };

    try {
      // Save order to Firebase
      await addDoc(collection(db, "orders"), order);

      // Send Telegram notification
      const text = encodeURIComponent(
        `🛒 Yangi buyurtma!\n\n📦 Mahsulot nomi: ${selected.title}\n👤 Buyurtmachi Ismi: ${name}\n📞 Telefon raqami: ${phone}`
      );

      for (const chatId of CHAT_IDS) {
        fetch(
          `https://api.telegram.org/bot${TELE_TOKEN}/sendMessage?chat_id=${chatId}&text=${text}`
        ).catch((err) => console.error("Telegram error", err));
      }

      setMsg("✅ Buyurtma yuborildi!");
      setSelected(null);
      setName("");
      setPhone("");
    } catch (err) {
      setMsg("Xatolik yuz berdi: " + err.message);
    }
  }

  return (
    <div>
      <div className="min-h-screen bg-gray-50 p-6 mt-[70px]">
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          📦 Mahsulotlar Katalogi
        </h2>

        {/* Products Count */}
        <div className="text-center text-gray-500 mb-8">
          {loading ? "Yuklanmoqda..." : `Jami mahsulotlar soni: ${products.length} ta`}
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onOrder={setSelected} />
          ))}
        </div>

        {/* Modal for placing orders */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
              >
                <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                  🛍 Buyurtma bermoqchi bo'lgan mahsulot nomi: {selected.title}
                </h3>
                <form onSubmit={sendOrder} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Ismingiz
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DEB67B]"
                      placeholder="Ism kiriting" required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Telefon raqamingiz
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DEB67B]"
                      placeholder="+998 90 123 45 67" required
                    />
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-[#DEB67B] to-[#c79c60] hover:opacity-90 text-white font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
                    >
                      Yuborish
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelected(null);
                        setMsg("");
                      }}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
                    >
                      Bekor qilish
                    </button>
                  </div>
                </form>
                {msg && (
                  <p className="mt-4 text-center text-green-600 font-semibold">
                    {msg}
                  </p>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Contact_link />
    </div>
  );
}