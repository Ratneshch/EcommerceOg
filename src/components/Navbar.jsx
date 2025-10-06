import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ setSearchQuery }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-800">
          NE<span className="text-orange-500">X</span>TPICK
        </h1>

        {/* Search Bar - hidden on small screens */}
        <div className="hidden md:flex items-center relative w-[400px] lg:w-[600px] border rounded-2xl px-3 py-1">
          <IoReorderThreeOutline className="text-2xl mr-2 text-gray-500" />
          <span className="mr-4 text-gray-700">All Products</span>
          <input
            type="search"
            placeholder="I'm searching for ..."
            className="flex-1 outline-none bg-transparent px-2"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IoIosSearch className="text-2xl text-gray-500" />
        </div>

        {/* Icons */}
        <div className="hidden md:flex text-2xl gap-5 text-gray-700 items-center">
          <IoEarthOutline className="cursor-pointer hover:text-blue-600" />
          <CiHeart className="cursor-pointer hover:text-blue-600" />
          <GoPerson className="cursor-pointer hover:text-blue-600" />
          <CiShoppingCart className="cursor-pointer hover:text-blue-600" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Search + Icons */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-4">
          <div className="flex items-center border rounded-2xl px-3 py-2">
            <IoReorderThreeOutline className="text-2xl mr-2 text-gray-500" />
            <span className="mr-4 text-gray-700">All Products</span>
            <input
              type="search"
              placeholder="I'm searching for ..."
              className="flex-1 outline-none bg-transparent px-2"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <IoIosSearch className="text-2xl text-gray-500" />
          </div>

          <div className="flex justify-around text-3xl text-gray-700 pt-2">
            <IoEarthOutline className="cursor-pointer hover:text-blue-600" />
            <CiHeart className="cursor-pointer hover:text-blue-600" />
            <GoPerson className="cursor-pointer hover:text-blue-600" />
            <CiShoppingCart className="cursor-pointer hover:text-blue-600" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
