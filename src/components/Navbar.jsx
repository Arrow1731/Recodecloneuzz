// import React from "react";
// import { NavLink } from "react-router-dom";

// function Navigation() {
//   return (
//     <div className="bg-[white] shadow-md">
//       <nav className="container py-[20px] flex justify-between items-center">

//         <NavLink exact to="/" activeClassName="active">
//           Redore
//         </NavLink>
//         <span className="flex gap-[40px] items-center">
//           <NavLink className='font-lato font-bold text-[#424551]' to="/about" activeClassName="active">
//             About
//           </NavLink>
//           <NavLink className='font-lato font-bold text-[#424551]' to="/catalog" activeClassName="active">
//             Catalog
//           </NavLink>
//           <NavLink className='font-lato font-bold text-[#424551]' to="/contact" activeClassName="active">
//             Contact
//           </NavLink>
//           {/* <NavLink className='font-lato font-bold text-[#424551]' to="/student" activeClassName="active">
//           Student
//         </NavLink>
//         <NavLink className='font-lato font-bold text-[#424551]' to="/teacher" activeClassName="active">
//           Teacher
//         </NavLink> */}
//         </span>
//         <span className="flex gap-[36px] items-center text-[#D1A84B]">
//           <a href="tel: +998943501731">+998 99 500 77 88</a>
//         </span>
//       </nav>
//     </div>
//   );
// }

// export default Navigation;










import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Иконки для бургер-меню

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[white] shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container py-[20px] flex justify-between items-center">
        {/* Логотип */}
        <NavLink exact="true" to="/" activeClassName="active" className="text-2xl font-bold text-[#D1A84B]">
          Redore
        </NavLink>

        {/* Десктопное меню */}
        <span className="hidden md:flex gap-[40px] items-center">
          <NavLink
            className="font-lato font-bold text-[#424551] hover:text-[#D1A84B] transition-colors"
            to="/about"
            activeClassName="active"
          >
            Biz haqimizda
          </NavLink>
          <NavLink
            className="font-lato font-bold text-[#424551] hover:text-[#D1A84B] transition-colors"
            to="/catalog"
            activeClassName="active"
          >
            Mahsulotlar
          </NavLink>
          <NavLink
            className="font-lato font-bold text-[#424551] hover:text-[#D1A84B] transition-colors"
            to="/contact"
            activeClassName="active"
          >
            Bog'lanish
          </NavLink>
        </span>

        {/* Номер телефона — скрывается на маленьких экранах */}
        <span className="hidden md:flex gap-[36px] items-center text-[#D1A84B]">
          <a href="tel:+998943501731" className="font-bold hover:underline">
            +998 99 500 77 88
          </a>
        </span>

        {/* Бургер-меню (показывается только на мобильных устройствах) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#424551] focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <div className="flex flex-col gap-4 mt-2">
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="font-lato font-bold text-[#424551] hover:text-[#D1A84B] transition-colors"
            >
              Biz haqimizda
            </NavLink>
            <NavLink
              to="/catalog"
              onClick={() => setMenuOpen(false)}
              className="font-lato font-bold text-[#424551] hover:text-[#D1A84B] transition-colors"
            >
              Mahsulotlar
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="font-lato font-bold text-[#424551] hover:text-[#D1A84B] transition-colors"
            >
              Bog'lanish
            </NavLink>

            {/* Телефон для мобильной версии */}
            <a
              href="tel:+998943501731"
              className="mt-2 text-[#D1A84B] font-bold hover:underline"
            >
              +998 99 500 77 88
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;