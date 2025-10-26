// import React, { useState, useEffect } from "react";
// import { db } from "../firebase";
// import {
//   collection,
//   addDoc,
//   getDocs,
//   deleteDoc,
//   doc,
//   updateDoc,
//   serverTimestamp,
// } from "firebase/firestore";
// import { motion } from "framer-motion";
// import { FolderClosed, FolderOpen, Search } from "lucide-react";

// const ADMIN_USERNAME = "ADMIN_REDORS";
// const ADMIN_PASSWORD = "REDORS1925";

// export default function Admin() {
//   const [logged, setLogged] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const [title, setTitle] = useState("");
//   const [info, setInfo] = useState("");
//   const [price, setPrice] = useState("");
//   const [imageUrls, setImageUrls] = useState([""]);
//   // <- Set default category to one of the select options
//   const [category, setCategory] = useState("Barchasi");

//   const [message, setMessage] = useState("");
//   const [products, setProducts] = useState([]);
//   const [editingProduct, setEditingProduct] = useState(null);

//   const [openFolders, setOpenFolders] = useState(["Barchasi"]);
//   const [searchTerms, setSearchTerms] = useState({});

//   // 🔹 Fetch all products
//   const fetchProducts = async () => {
//     try {
//       const snap = await getDocs(collection(db, "products"));
//       const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
//       setProducts(items);
//     } catch (err) {
//       console.error("fetchProducts error:", err);
//       setMessage("Xatolik: " + err.message);
//     }
//   };

//   useEffect(() => {
//     if (logged) fetchProducts();
//   }, [logged]);

//   // 🔹 Login logic
//   async function handleLogin(e) {
//     e.preventDefault();
//     if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
//       setLogged(true);
//       setMessage("");
//     } else {
//       setMessage("Login yoki parol noto'g'ri! Iltimos, qaytadan urinib ko'ring.");
//     }
//   }

//   // 🔹 Handle adding / updating product
//   async function addOrUpdateProduct(e) {
//     e.preventDefault();
//     setMessage("");

//     if (!title) return setMessage("Mahsulot nomini kiriting!");
//     if (!price && price !== 0) return setMessage("Narxni kiriting!");
//     if (imageUrls.length === 0 || !imageUrls[0])
//       return setMessage("Kamida bitta rasm URL kiriting!");

//     try {
//       const numericPrice = Number(price);
//       if (isNaN(numericPrice)) return setMessage("Narx noto‘g‘ri formatda!");

//       if (editingProduct) {
//         const ref = doc(db, "products", editingProduct.id);
//         await updateDoc(ref, {
//           title,
//           info,
//           price: numericPrice,
//           imageUrls,
//           category,
//           updatedAt: serverTimestamp(),
//         });
//         setMessage("✅ Mahsulot o‘zgartirildi!");
//         setEditingProduct(null);
//       } else {
//         await addDoc(collection(db, "products"), {
//           title,
//           info,
//           price: numericPrice,
//           imageUrls,
//           category,
//           createdAt: serverTimestamp(),
//         });
//         setMessage("✅ Mahsulot qo‘shildi!");
//       }

//       // reset form
//       setTitle("");
//       setInfo("");
//       setPrice("");
//       setImageUrls([""]);
//       setCategory("Barchasi");
//       // refresh the list
//       fetchProducts();
//     } catch (err) {
//       console.error("addOrUpdateProduct error:", err);
//       setMessage("Xatolik: " + err.message);
//     }
//   }

//   // 🔹 Delete product
//   async function handleDelete(id) {
//     if (!window.confirm("Mahsulotni o‘chirmoqchimisiz?")) return;
//     try {
//       await deleteDoc(doc(db, "products", id));
//       setMessage("❌ Mahsulot o‘chirildi!");
//       fetchProducts();
//     } catch (err) {
//       console.error("delete error:", err);
//       setMessage("Xatolik: " + err.message);
//     }
//   }

//   // 🔹 Edit mode
//   function handleEdit(product) {
//     setTitle(product.title || "");
//     setInfo(product.info || "");
//     setPrice(product.price != null ? product.price : "");
//     setImageUrls(product.imageUrls || [""]);
//     setCategory(product.category || "Barchasi");
//     setEditingProduct(product);
//     setMessage("");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

//   function cancelEdit() {
//     setEditingProduct(null);
//     setTitle("");
//     setInfo("");
//     setPrice("");
//     setImageUrls([""]);
//     setCategory("Barchasi");
//     setMessage("");
//   }

//   // 🔹 Folder toggle
//   function toggleFolder(folder) {
//     setOpenFolders((prev) =>
//       prev.includes(folder) ? prev.filter((f) => f !== folder) : [...prev, folder]
//     );
//   }

//   // 🔹 Search per folder
//   function handleSearch(folder, value) {
//     setSearchTerms((prev) => ({ ...prev, [folder]: value }));
//   }

//   // 🔹 Handle image URL inputs
//   function handleImageChange(index, value) {
//     const updated = [...imageUrls];
//     updated[index] = value;
//     setImageUrls(updated);
//   }

//   function addImageField() {
//     setImageUrls((prev) => [...prev, ""]);
//   }

//   function removeImageField(index) {
//     setImageUrls((prev) => prev.filter((_, i) => i !== index));
//   }

//   const categories = ["Barchasi", "Eshik Mahsulotlari", "Darvoza Mahsulotlari"];

//   const filteredProducts = (folder) => {
//     const term = (searchTerms[folder] || "").toLowerCase();
//     const all = folder === "Barchasi" ? products : products.filter((p) => p.category === folder);
//     return all.filter((p) => p.title?.toLowerCase().includes(term));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 mt-[60px] font-Bornia font-semibold">
//       {!logged ? (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md mx-auto mt-[40px]"
//         >
//           <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//             Boshqaruv panelga kirish
//           </h2>
//           <form onSubmit={handleLogin} className="space-y-4">
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D1A84B]"
//               placeholder="Login kiriting"
//               required
//             />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D1A84B]"
//               placeholder="Parol kiriting"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-[#D1A84B] hover:bg-[#b8903c] text-white font-semibold py-2 rounded-xl shadow-md transition duration-300"
//             >
//               Tizimga Kirish
//             </button>
//           </form>
//           {message && <p className="text-center mt-4 text-red-500">{message}</p>}
//         </motion.div>
//       ) : (
//         <div className="max-w-5xl mx-auto">
//           {/* Add/Edit Form */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-white shadow-2xl rounded-2xl p-8 mb-6"
//           >
//             <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//               {editingProduct ? "Mahsulotni o‘zgartirish" : "Yangi mahsulot qo‘shish"}
//             </h2>
//             <form onSubmit={addOrUpdateProduct} className="space-y-4">
//               <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#D1A84B]"
//                 placeholder="Mahsulot nomi"
//               />
//               <textarea
//                 value={info}
//                 onChange={(e) => setInfo(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#D1A84B]"
//                 placeholder="Mahsulot haqida ma'lumot"
//                 rows={3}
//               />
//               <input
//                 type="number"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#D1A84B]"
//                 placeholder="Narxi (so'm)"
//               />

//               {/* 🔹 Multiple image URLs */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">
//                   Rasm URL manzillari:
//                 </label>
//                 {imageUrls.map((url, index) => (
//                   <div key={index} className="flex gap-2 mb-2">
//                     <input
//                       type="text"
//                       value={url}
//                       onChange={(e) => handleImageChange(index, e.target.value)}
//                       className="flex-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#D1A84B]"
//                       placeholder={`Rasm ${index + 1} URL`}
//                     />
//                     {imageUrls.length > 1 && (
//                       <button
//                         type="button"
//                         onClick={() => removeImageField(index)}
//                         className="text-red-500 font-bold px-3"
//                       >
//                         ✕
//                       </button>
//                     )}
//                   </div>
//                 ))}
//                 <button
//                   type="button"
//                   onClick={addImageField}
//                   className="text-[#D1A84B] mt-1 hover:underline"
//                 >
//                   + Yana rasm qo‘shish
//                 </button>
//               </div>

//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#D1A84B]"
//               >
//                 <option value="Barchasi">Barchasi</option>
//                 <option value="Eshik Mahsulotlari">Eshik Mahsulotlari</option>
//                 <option value="Darvoza Mahsulotlari">Darvoza Mahsulotlari</option>
//               </select>

//               <div className="flex gap-3">
//                 <button
//                   type="submit"
//                   className="flex-1 bg-[#D1A84B] hover:bg-[#b8903c] text-white font-semibold py-2 rounded-xl shadow-md transition duration-300"
//                 >
//                   {editingProduct ? "O‘zgartirish" : "Qo‘shish"}
//                 </button>
//                 {editingProduct && (
//                   <button
//                     type="button"
//                     onClick={cancelEdit}
//                     className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-xl"
//                   >
//                     Bekor qilish
//                   </button>
//                 )}
//               </div>
//             </form>
//             {message && <p className="mt-4 text-center text-green-600">{message}</p>}
//           </motion.div>

//           {/* Folder-style Catalog */}
//           {categories.map((folder) => (
//             <motion.div
//               key={folder}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="bg-white rounded-2xl shadow-md mb-4 overflow-hidden"
//             >
//               <div
//                 className="flex items-center justify-between p-4 cursor-pointer bg-[#D1A84B] text-white font-bold text-lg"
//                 onClick={() => toggleFolder(folder)}
//               >
//                 <div className="flex items-center gap-3">
//                   {openFolders.includes(folder) ? <FolderOpen /> : <FolderClosed />}
//                   <span>{folder}</span>
//                 </div>
//                 <span>{filteredProducts(folder).length} mahsulot</span>
//               </div>

//               {openFolders.includes(folder) && (
//                 <div className="p-4 border-t border-gray-200">
//                   <div className="flex items-center gap-2 mb-4">
//                     <Search className="text-[#D1A84B]" />
//                     <input
//                       type="text"
//                       placeholder="Qidirish..."
//                       value={searchTerms[folder] || ""}
//                       onChange={(e) => handleSearch(folder, e.target.value)}
//                       className="flex-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#D1A84B]"
//                     />
//                   </div>

//                   {filteredProducts(folder).length === 0 ? (
//                     <p className="text-gray-500 text-center py-4">Mahsulot topilmadi</p>
//                   ) : (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       {filteredProducts(folder).map((product) => (
//                         <div
//                           key={product.id}
//                           className="flex gap-4 bg-gray-50 p-4 rounded-xl shadow-sm"
//                         >
//                           <img
//                             src={product.imageUrls?.[0]}
//                             alt={product.title}
//                             className="w-20 h-20 rounded-lg object-cover border"
//                           />
//                           <div className="flex-1">
//                             <h4 className="font-bold text-lg">{product.title}</h4>
//                             <p className="text-gray-600 text-sm">{product.info}</p>
//                             <p className="text-[#D1A84B] font-semibold">
//                               {Number(product.price).toLocaleString()} so'm
//                             </p>
//                             <div className="mt-2 flex gap-2">
//                               <button
//                                 onClick={() => handleEdit(product)}
//                                 className="text-green-600 font-semibold"
//                               >
//                                 O‘zgartirish
//                               </button>
//                               <button
//                                 onClick={() => handleDelete(product.id)}
//                                 className="text-red-500 font-semibold"
//                               >
//                                 O‘chirish
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }





















import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { motion } from "framer-motion";
import {
  FolderClosed,
  FolderOpen,
  Search,
  Eye,
  EyeOff,
  LogOut,
} from "lucide-react";

const ADMIN_USERNAME = "ADMIN_REDORS";
const ADMIN_PASSWORD = "REDORS1925";

export default function Admin() {
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrls, setImageUrls] = useState([""]);
  const [category, setCategory] = useState("Barchasi");

  const [message, setMessage] = useState("");
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const [openFolders, setOpenFolders] = useState(["Barchasi"]);
  const [searchTerms, setSearchTerms] = useState({});

  const categories = ["Barchasi", "Eshik Mahsulotlari", "Darvoza Mahsulotlari"];

  // 🔹 Fetch products
  const fetchProducts = async () => {
    try {
      const snap = await getDocs(collection(db, "products"));
      const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setProducts(items);
    } catch (err) {
      console.error("fetchProducts error:", err);
      setMessage("Xatolik: " + err.message);
    }
  };

  useEffect(() => {
    if (logged) fetchProducts();
  }, [logged]);

  // 🔹 Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setLogged(true);
      setMessage("");
    } else {
      setMessage("❌ Login yoki parol noto‘g‘ri!");
    }
  };

  const handleLogout = () => {
    setLogged(false);
    setUsername("");
    setPassword("");
  };

  // 🔹 Add or update
  const addOrUpdateProduct = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!title) return setMessage("Mahsulot nomini kiriting!");
    if (!price) return setMessage("Narxni kiriting!");
    if (!imageUrls[0]) return setMessage("Kamida bitta rasm URL kiriting!");

    try {
      const numericPrice = Number(price);
      if (isNaN(numericPrice)) return setMessage("Narx noto‘g‘ri formatda!");

      if (editingProduct) {
        const ref = doc(db, "products", editingProduct.id);
        await updateDoc(ref, {
          title,
          info,
          price: numericPrice,
          imageUrls,
          category,
          updatedAt: serverTimestamp(),
        });
        setMessage("✅ Mahsulot yangilandi!");
        setEditingProduct(null);
      } else {
        await addDoc(collection(db, "products"), {
          title,
          info,
          price: numericPrice,
          imageUrls,
          category,
          createdAt: serverTimestamp(),
        });
        setMessage("✅ Mahsulot qo‘shildi!");
      }

      setTitle("");
      setInfo("");
      setPrice("");
      setImageUrls([""]);
      setCategory("Barchasi");
      fetchProducts();
    } catch (err) {
      setMessage("Xatolik: " + err.message);
    }
  };

  // 🔹 Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Mahsulotni o‘chirmoqchimisiz?")) return;
    await deleteDoc(doc(db, "products", id));
    setMessage("❌ Mahsulot o‘chirildi!");
    fetchProducts();
  };

  const handleEdit = (product) => {
    setTitle(product.title);
    setInfo(product.info);
    setPrice(product.price);
    setImageUrls(product.imageUrls);
    setCategory(product.category);
    setEditingProduct(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setEditingProduct(null);
    setTitle("");
    setInfo("");
    setPrice("");
    setImageUrls([""]);
    setCategory("Barchasi");
  };

  // 🔹 Helpers
  const toggleFolder = (folder) => {
    setOpenFolders((prev) =>
      prev.includes(folder)
        ? prev.filter((f) => f !== folder)
        : [...prev, folder]
    );
  };

  const handleSearch = (folder, value) => {
    setSearchTerms((prev) => ({ ...prev, [folder]: value }));
  };

  const filteredProducts = (folder) => {
    const term = (searchTerms[folder] || "").toLowerCase();
    const all =
      folder === "Barchasi"
        ? products
        : products.filter((p) => p.category === folder);
    return all.filter((p) => p.title?.toLowerCase().includes(term));
  };

  // 🔹 Image URL inputs
  const handleImageChange = (index, value) => {
    const updated = [...imageUrls];
    updated[index] = value;
    setImageUrls(updated);
  };

  const addImageField = () => setImageUrls([...imageUrls, ""]);
  const removeImageField = (i) =>
    setImageUrls(imageUrls.filter((_, index) => index !== i));

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-[60px] font-Bornia font-semibold relative">
      {logged && (
        <button
          onClick={handleLogout}
          className="max-w-[250px] relative top-6 right-[-1600px] bg-[#D1A84B] text-white rounded-lg flex justify-center items-center gap-2"
        >
          <LogOut size={18} />Profildan Chiqish
        </button>
      )}

      {!logged ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md mx-auto mt-[60px]"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Admin Panelga Kirish
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#D1A84B]"
              placeholder="Login kiriting"
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl pr-10 focus:ring-2 focus:ring-[#D1A84B]"
                placeholder="Parol kiriting"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[-341px] text-gray-500 hover:text-[#D1A84B]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-[#D1A84B] hover:bg-[#b8903c] text-white font-semibold py-2 rounded-xl shadow-md transition duration-300"
            >
              Tizimga Kirish
            </button>
          </form>
          {message && <p className="text-center mt-4 text-red-500">{message}</p>}
        </motion.div>
      ) : (
        <div className="max-w-5xl mx-auto">
          {/* Add/Edit Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-2xl rounded-2xl p-8 mb-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {editingProduct ? "Mahsulotni o‘zgartirish" : "Yangi mahsulot qo‘shish"}
            </h2>
            <form onSubmit={addOrUpdateProduct} className="space-y-4">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#D1A84B]"
                placeholder="Mahsulot nomi"
              />
              <textarea
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#D1A84B]"
                placeholder="Mahsulot haqida ma'lumot"
                rows={3}
              />
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#D1A84B]"
                placeholder="Narxi (so'm)"
              />

              {/* Image URLs */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Rasm URL manzillari:
                </label>
                {imageUrls.map((url, index) => (
                  <div key={index} className="flex mb-2">
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => handleImageChange(index, e.target.value)}
                      className="w-[85%] px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#D1A84B]"
                      placeholder={`Rasm ${index + 1} URL`}
                    />
                    {imageUrls.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeImageField(index)}
                        className="text-red-500 font-bold px-3"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addImageField}
                  className="text-[#D1A84B] mt-1 hover:underline"
                >
                  + Yana rasm qo‘shish
                </button>
              </div>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#D1A84B]"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-[#D1A84B] hover:bg-[#b8903c] text-white font-semibold py-2 rounded-xl shadow-md transition duration-300"
                >
                  {editingProduct ? "O‘zgartirish" : "Qo‘shish"}
                </button>
                {editingProduct && (
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-xl"
                  >
                    Bekor qilish
                  </button>
                )}
              </div>
            </form>
            {message && <p className="mt-4 text-center text-green-600">{message}</p>}
          </motion.div>

          {/* Folders */}
          {categories.map((folder) => (
            <motion.div
              key={folder}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-md mb-4 overflow-hidden"
            >
              <div
                className="flex items-center justify-between p-4 cursor-pointer bg-[#D1A84B] text-white font-bold text-lg"
                onClick={() => toggleFolder(folder)}
              >
                <div className="flex items-center gap-3">
                  {openFolders.includes(folder) ? <FolderOpen /> : <FolderClosed />}
                  <span>{folder}</span>
                </div>
                <span>{filteredProducts(folder).length} mahsulot</span>
              </div>

              {openFolders.includes(folder) && (
                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Search className="text-[#D1A84B]" />
                    <input
                      type="text"
                      placeholder="Qidirish..."
                      value={searchTerms[folder] || ""}
                      onChange={(e) => handleSearch(folder, e.target.value)}
                      className="flex-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#D1A84B]"
                    />
                  </div>

                  {filteredProducts(folder).length === 0 ? (
                    <p className="text-gray-500 text-center py-4">Mahsulot topilmadi</p>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {filteredProducts(folder).map((product) => (
                        <div
                          key={product.id}
                          className="flex gap-4 bg-gray-50 p-4 rounded-xl shadow-sm"
                        >
                          <img
                            src={product.imageUrls?.[0]}
                            alt={product.title}
                            className="w-20 h-20 rounded-lg object-cover border"
                          />
                          <div className="flex-1">
                            <h4 className="font-bold text-lg">{product.title}</h4>
                            <p className="text-gray-600 text-sm">{product.info}</p>
                            <p className="text-[#D1A84B] font-semibold">
                              {Number(product.price).toLocaleString()} so'm
                            </p>
                            <div className="mt-2 flex gap-2">
                              <button
                                onClick={() => handleEdit(product)}
                                className="text-green-600 font-semibold"
                              >
                                O‘zgartirish
                              </button>
                              <button
                                onClick={() => handleDelete(product.id)}
                                className="text-red-500 font-semibold"
                              >
                                O‘chirish
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}