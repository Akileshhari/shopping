import React, { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import Login from "./login";

function Header() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", query);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 shadow-lg p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <img src="/logo.png" alt="Brand Logo" className="h-8 w-auto" />

          {/* Search Bar (Hidden on Mobile) */}
          <form onSubmit={handleSearch} className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-100 p-2 pl-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#7557A3] text-[#7557A3] placeholder-[#7557A3]"
              style={{ borderRadius: 50, borderColor: "#7557A3" }}
            />
            <button type="submit" className="absolute inset-y-0 left-2 flex items-center text-[#7557A3]">
              <Search className="w-5 h-5" />
            </button>
          </form>

          {/* Cart Icon, Login, and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <button className="relative text-[#7557A3] hover:text-[#644a8c]">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                3
              </span>
            </button>

            {/* Login Button (Opens Modal) */}
            <button
              className="px-10 py-2 bg-[#7557A3] text-white rounded-lg hover:bg-[#644a8c] transition hidden md:block uppercase"
              onClick={() => setModalOpen(true)}
            >
              Login/Signup
            </button>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-white shadow-md p-4 rounded-lg">
            <form onSubmit={handleSearch} className="relative mb-4">
              <input
                type="text"
                className="w-full p-2 border rounded-lg mt-1 focus:ring-2 focus:ring-[#7557A3] focus:outline-none placeholder-gray-400"
                style={{ borderRadius: 50, borderColor: "#7557A3" }}
              />
              <button type="submit" className="absolute inset-y-0 left-2 flex items-center text-gray-500">
                <Search className="w-5 h-5" />
              </button>
            </form>

            {/* Mobile Login Button */}
            <button
              className="w-25 py-2 bg-[#7557A3] text-white rounded-lg hover:bg-[#644a8c] transition"
              onClick={() => setModalOpen(true)}
            >
              Login
            </button>
          </div>
        )}
      </nav>

      {/* Modal */}
      {modalOpen && <Login setModalOpen={setModalOpen} />}
    </>
  );
}

export default Header;
