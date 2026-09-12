import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logoImg from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="h-24 bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-6" dir="rtl">
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="لوجو عدسة"
            className="w-12 h-auto object-contain cursor-pointer hover:scale-110 transition-all duration-300"
          />
          <div className="flex flex-col">
            <span className="text-white font-bold text-2xl leading-tight">عدسة</span>
            <span className="text-[#FFA500] text-xs">عالم التصوير الفوتوغرافي</span>
          </div>
        </div>

        <div className="hidden lg:block center">
          <ul className="flex items-center gap-2 bg-[#141414] border border-gray-500/50 rounded-full p-1.5">
            <li>
              <NavLink
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={({ isActive }) =>
                  isActive
                    ? "bg-linear-to-r from-[#EE5E0E] to-[#FFA500] text-white px-7 py-2.5 block rounded-full font-bold cursor-pointer transition-all duration-300"
                    : "text-gray-400 hover:text-white px-5 py-2 block rounded-full transition-all duration-300 cursor-pointer"
                }>
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={({ isActive }) =>
                  isActive
                    ? "bg-linear-to-r from-[#EE5E0E] to-[#FFA500] text-white px-7 py-2.5 block rounded-full font-bold cursor-pointer transition-all duration-300"
                    : "text-gray-400 hover:text-white px-5 py-2 block rounded-full transition-all duration-300 cursor-pointer"
                }>
                المدونة
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={({ isActive }) =>
                  isActive
                    ? "bg-linear-to-r from-[#EE5E0E] to-[#FFA500] text-white px-7 py-2.5 block rounded-full font-bold cursor-pointer transition-all duration-300"
                    : "text-gray-400 hover:text-white px-5 py-2 block rounded-full transition-all duration-300 cursor-pointer"
                }>
                من نحن
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          <div className="text-gray-400 cursor-pointer text-xl transition-all hover:text-[#EE5E0E] border border-transparent hover:border-gray-500/50 p-2 lg:p-3 rounded-2xl duration-300">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <Link to="/blog" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hidden lg:block bg-linear-to-r from-[#EE5E0E] to-[#FFA500] text-white px-8 py-3 rounded-full cursor-pointer hover:-translate-y-0.5 transition-all duration-300 font-bold">
            ابدأ القراءة
          </Link>

          <button 
            className="lg:hidden text-white text-2xl p-2 cursor-pointer hover:text-[#EE5E0E] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>

      <div 
        className={`lg:hidden absolute top-24 left-0 w-full h-[calc(100vh-6rem)] bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-gray-800 p-6 flex flex-col transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4 pointer-events-none"
        }`} 
        dir="rtl"
      >
        <div className={`bg-[#141414] border border-gray-800 rounded-3xl p-4 flex flex-col shadow-2xl transition-all duration-300 delay-100 ${
          isMobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
          <ul className="flex flex-col gap-1 mb-6">
            <li>
              <NavLink
                to="/"
                onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EE5E0E] border border-[#EE5E0E]/50 bg-[#EE5E0E]/5 px-6 py-4 block rounded-2xl font-bold transition-all duration-300"
                    : "text-gray-400 hover:text-white px-6 py-4 block rounded-2xl border border-transparent transition-all duration-300"
                }>
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EE5E0E] border border-[#EE5E0E]/50 bg-[#EE5E0E]/5 px-6 py-4 block rounded-2xl font-bold transition-all duration-300"
                    : "text-gray-400 hover:text-white px-6 py-4 block rounded-2xl border border-transparent transition-all duration-300"
                }>
                المدونة
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EE5E0E] border border-[#EE5E0E]/50 bg-[#EE5E0E]/5 px-6 py-4 block rounded-2xl font-bold transition-all duration-300"
                    : "text-gray-400 hover:text-white px-6 py-4 block rounded-2xl border border-transparent transition-all duration-300"
                }>
                من نحن
              </NavLink>
            </li>
          </ul>
          <Link to="/blog" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="bg-linear-to-r from-[#EE5E0E] to-[#FFA500] text-white px-8 py-4 text-center rounded-2xl cursor-pointer font-bold w-full transition-transform hover:scale-[1.02]">
            ابدأ القراءة
          </Link>
        </div>
      </div>
    </nav>
  );
}
