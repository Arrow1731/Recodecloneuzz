import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="bg-[white] shadow-md">
    <nav className="container py-[20px] flex justify-between items-center">

      <NavLink exact to="/" activeClassName="active">
        Redore
      </NavLink>
      <span className="flex gap-[40px] items-center">
        <NavLink className='font-lato font-bold text-[#424551]' to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink className='font-lato font-bold text-[#424551]' to="/contact" activeClassName="active">
          Contact
        </NavLink>
        {/* <NavLink className='font-lato font-bold text-[#424551]' to="/student" activeClassName="active">
          Student
        </NavLink>
        <NavLink className='font-lato font-bold text-[#424551]' to="/teacher" activeClassName="active">
          Teacher
        </NavLink> */}
      </span>
      <span className="flex gap-[36px] items-center text-[#D1A84B]">
          <a href="tel: +998943501731">+998 99 500 77 88</a>
      </span>
    </nav>
    </div>
  );
}

export default Navigation;