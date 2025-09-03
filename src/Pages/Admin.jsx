import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import { motion } from "framer-motion";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin";

export default function Admin() {
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  // Yuklangan mahsulotlarni olish
  const fetchProducts = async () => {
    const snap = await getDocs(collection(db, "products"));
    const items = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProducts(items);
  };

  useEffect(() => {
    if (logged) fetchProducts();
  }, [logged]);

  async function handleLogin(e) {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setLogged(true);
      setMessage("");
    } else {
      setMessage("Login yoki parol noto'g'ri!");
    }
  }

  async function addOrUpdateProduct(e) {
    e.preventDefault();
    if (!title) {
      setMessage("Mahsulot nomi majburiy!");
      return;
    }
    try {
      if (editingProduct) {
        // O'zgartirish rejimi
        const ref = doc(db, "products", editingProduct.id);
        await updateDoc(ref, { title, info, price, imageUrl });
        setMessage("✅ Mahsulot muvaffaqiyatli o'zgartirildi!");
        setEditingProduct(null);
      } else {
        // Yangi mahsulot qo'shish
        await addDoc(collection(db, "products"), {
          title,
          info,
          price,
          imageUrl,
          createdAt: Timestamp.now(),
        });
        setMessage("✅ Mahsulot muvaffaqiyatli qo'shildi!");
      }
      setTitle("");
      setInfo("");
      setPrice("");
      setImageUrl("");
      fetchProducts();
    } catch (err) {
      setMessage("Xatolik: " + err.message);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Haqiqatan ham o'chirmoqchimisiz?")) return;
    await deleteDoc(doc(db, "products", id));
    setMessage("❌ Mahsulot o'chirildi!");
    fetchProducts();
  }

  function handleEdit(product) {
    setTitle(product.title);
    setInfo(product.info);
    setPrice(product.price);
    setImageUrl(product.imageUrl);
    setEditingProduct(product);
    setMessage("");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-[60px]">
      {!logged ? (
        // Login formasi
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md mx-auto mt-[40px]"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Admin panelga kirish
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Login
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D1A84B]"
                placeholder="Login kiriting" required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Parol
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D1A84B]"
                placeholder="Parol kiriting" required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#D1A84B] hover:bg-[#b8903c] text-white font-semibold py-2 rounded-xl shadow-md transition duration-300"
            >
              Tizimga Kirish
            </button>
          </form>
          {message && (
            <p className="text-center mt-4 text-red-500 font-medium">
              {message}
            </p>
          )}
        </motion.div>
      ) : (
        <div className="max-w-4xl mx-auto">
          {/* Mahsulot qo'shish */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-2xl rounded-2xl p-8 mb-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {editingProduct ? "Mahsulotni o'zgartirish" : "Yangi mahsulot qo'shish"}
            </h2>
            <form onSubmit={addOrUpdateProduct} className="space-y-4">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D1A84B]"
                placeholder="Mahsulot nomi"
              />
              <textarea
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D1A84B]"
                placeholder="Mahsulot haqida ma'lumot"
              ></textarea>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D1A84B]"
                placeholder="Narxi (so'm)"
              />
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D1A84B]"
                placeholder="Rasm URL manzili"
              />
              <button
                type="submit"
                className="w-full bg-[#D1A84B] hover:bg-[#b8903c] text-white font-semibold py-2 rounded-xl shadow-md transition duration-300"
              >
                {editingProduct ? "O'zgartirish" : "Mahsulotni Qo'shish"}
              </button>
            </form>
            {message && (
              <p className="mt-4 text-center text-green-600 font-semibold">
                {message}
              </p>
            )}
          </motion.div>

          {/* Mahsulotlar ro'yxati */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white shadow-xl rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4">Barcha mahsulotlar</h3>
            <div className="space-y-4">
              {products.length === 0 ? (
                <p className="text-gray-500 text-center">Hozircha mahsulot yo'q</p>
              ) : (
                products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between bg-gray-50 p-4 rounded-xl shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-16 h-16 rounded-xl object-cover border"
                      />
                      <div>
                        <h4 className="text-lg font-semibold">{product.title}</h4>
                        <p className="text-gray-600">{product.info}</p>
                        <p className="text-[#D1A84B] font-bold">
                          {Number(product.price).toLocaleString()} so'm
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button id="bg_gr"
                        onClick={() => handleEdit(product)}
                        className="text-[green] px-4 py-1 rounded-lg transition"
                      >
                        O'zgartirish
                      </button>
                      <button id="bg_border"
                        onClick={() => handleDelete(product.id)}
                        className="text-[red] px-4 py-1 rounded-lg transition"
                      >
                        O'chirish
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}