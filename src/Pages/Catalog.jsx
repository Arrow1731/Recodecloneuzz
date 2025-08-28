// import React, { useEffect, useState } from 'react'
// import { db, collection, getDocs, addDoc, Timestamp } from '../firebase'

// const TELE_TOKEN = '8064248553:AAG738iEmbGLXj3SIktd3-L8ZTI5qZya1Yo'
// const CHAT_IDS = ['6536432455','1049603718']

// function ProductCard({p, onOrder}){
//   return (
//     <div className="card">
//       <img src={p.imageUrl} alt={p.title} style={{width:'100%',height:160,objectFit:'cover',borderRadius:6}} onError={(e)=>e.target.style.display='none'} />
//       <h4>{p.title}</h4>
//       <div style={{minHeight:40}}>{p.info}</div>
//       <div style={{marginTop:8,fontWeight:'bold'}}>{p.price}</div>
//       <div className="row" style={{marginTop:10}}>
//         <button onClick={()=>onOrder(p)} className="small">Order</button>
//       </div>
//     </div>
//   )
// }

// export default function Catalog(){
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [selected, setSelected] = useState(null)
//   const [name, setName] = useState('')
//   const [phone, setPhone] = useState('')
//   const [msg, setMsg] = useState('')

//   async function load(){
//     setLoading(true)
//     try{
//       const snap = await getDocs(collection(db,'products'))
//       const arr = snap.docs.map(d=>({id:d.id, ...d.data()}))
//       setProducts(arr)
//     }catch(err){
//       console.error(err)
//     }finally{ setLoading(false) }
//   }

//   useEffect(()=>{ load() },[])

//   async function sendOrder(e){
//     e.preventDefault()
//     if(!name || !phone) { setMsg('Name and phone required'); return }
//     const order = { productId: selected.id, productTitle: selected.title, name, phone, createdAt: Timestamp.now() }
//     try{
//       // save to firebase
//       await addDoc(collection(db,'orders'), order)
//       setMsg('Order saved. Sending to Telegram...')
//       // send to telegram (both chats)
//       const text = encodeURIComponent(`New order:\nProduct: ${selected.title}\nName: ${name}\nPhone: ${phone}`)
//       for(const chatId of CHAT_IDS){
//         // Note: in browsers fetch to Telegram may be blocked by CORS if Telegram blocks; recommended to call from server.
//         fetch(`https://api.telegram.org/bot${TELE_TOKEN}/sendMessage?chat_id=${chatId}&text=${text}`)
//           .catch(err => console.error('tg err',err))
//       }
//       setMsg('Order sent.')
//       setSelected(null); setName(''); setPhone('')
//     }catch(err){
//       setMsg('Error: '+err.message)
//     }
//   }

//   return (
//     <div className='container'>
//       <div style={{marginBottom:12}}>
//         <strong>Products</strong> {loading ? '(loading...)' : `(${products.length})`}
//       </div>
//       <div className="grid">
//         {products.map(p=> <ProductCard key={p.id} p={p} onOrder={setSelected} />)}
//       </div>

//       {selected && (
//         <div className="modal">
//           <div className="modal-inner">
//             <h3>Order: {selected.title}</h3>
//             <form onSubmit={sendOrder}>
//               <label>Your name<input value={name} onChange={e=>setName(e.target.value)} /></label>
//               <label>Phone<input value={phone} onChange={e=>setPhone(e.target.value)} /></label>
//               <div className="row" style={{marginTop:10}}>
//                 <button type="submit">Send</button>
//                 <button type="button" onClick={()=>{ setSelected(null); setMsg('') }} className="small">Cancel</button>
//               </div>
//             </form>
//             <div style={{marginTop:8,color:'green'}}>{msg}</div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
























import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import Contact_link from '../components/Contact_link';

const TELE_TOKEN = "8064248553:AAG738iEmbGLXj3SIktd3-L8ZTI5qZya1Yo";
const CHAT_IDS = ["6536432455", "1049603718"];

function ProductCard({ product, onOrder }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
    >
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-48 object-cover rounded-lg"
        onError={(e) => (e.target.style.display = "none")}
      />
      <h3 className="text-lg font-semibold mt-3">{product.title}</h3>
      <p className="text-gray-600 text-sm h-12 overflow-hidden">{product.info}</p>
      <p className="text-xl font-bold text-[#D1A84B] mt-3">
        {product.price} so'm
      </p>
      <button
        onClick={() => onOrder(product)}
        className="mt-4 w-full bg-[#D1A84B] hover:bg-[#b8903c] text-white font-semibold py-2 rounded-xl shadow-md transition duration-300"
      >
        Buyurtma berish
      </button>
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

  // Загрузка товаров из Firebase
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

  // Отправка заказа
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
      // Сохраняем заказ в Firebase
      await addDoc(collection(db, "orders"), order);

      // Отправляем сообщение в Telegram
      const text = encodeURIComponent(
        `🛒 Yangi buyurtma!\n📦 Mahsulot: ${selected.title}\n👤 Ism: ${name}\n📞 Telefon: ${phone}`
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
      <div className="min-h-screen bg-gray-100 p-6 mt-[70px]">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          📦 Mahsulotlar katalogi
        </h2>
        <div className="text-center text-gray-500 mb-6">
          {loading ? "Yuklanmoqda..." : `Jami mahsulotlar: ${products.length}`}
        </div>

        {/* Сетка товаров */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onOrder={setSelected} />
          ))}
        </div>

        {/* Модальное окно оформления заказа */}
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
                  🛍 Buyurtma: {selected.title}
                </h3>
                <form onSubmit={sendOrder} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Ismingiz
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D1A84B]"
                      placeholder="Ism kiriting"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Telefon raqamingiz
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D1A84B]"
                      placeholder="+998 90 123 45 67"
                    />
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-[#D1A84B] hover:bg-[#b8903c] text-white font-semibold py-2 rounded-xl shadow-md transition duration-300"
                    >
                      Yuborish
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelected(null);
                        setMsg("");
                      }}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-xl shadow-md transition duration-300"
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