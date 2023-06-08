import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240] mx-auto px-24  text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
      <ul className="flex ">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div>
        <AiOutlineMenu size={28} />
      </div>
      <div className="hidden fixed left-0 top-0 h-full w-[60%] border-r-gray-90 bg-[#000300]">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
        <ul className="pt-24 uppercase">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
