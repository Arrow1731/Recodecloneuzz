// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Catalog from "./Pages/Catalog";
// import Contact from "./Pages/Contact";
// import Admin from "./Pages/Admin";
// import NotFound from "./Pages/NotFound";



// function App() {
//   return (
//     <Router>
//       <Navbar />
      
//       <Routes>
//         <Route path="/" element={<Home />} />        
//         <Route path="/about" element={<About />} />
//         <Route path="/catalog" element={<Catalog />} />        
//         {/* 404 sahifa uchun */}
//         <Route path="*" element={<NotFound />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/admin" element={<Admin />} />
//       </Routes>
//       {/* <Main_Sec_Cards /> */}
//     </Router>
//   );
// }

// export default App;









import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Catalog from "./Pages/Catalog";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin";
import ProductDetail from "./Pages/ProductDetails"; // ✅ New import
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetail />} /> {/* ✅ New route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;