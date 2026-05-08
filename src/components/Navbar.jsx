////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : เรียกใช้งาน Library ของ React และอื่นๆ ↓↓↓ //
///////////////////////////////////////////////////////////////
import { Link } from "react-router-dom";


////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : เรียกใช้งาน src ในโปรเจคของเรา ↓↓↓ //
///////////////////////////////////////////////////////////////
//
//
//
////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Variable + Method + FN //
///////////////////////////////////////////////////////////////
const Navbar = () => {
  return (
  <nav className="bg-blue-900 border-b border-blue-800 shadow-lg px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">T</span>
        </div>
        <span className="text-white font-bold text-xl tracking-tight">Portfolio</span>
      </div>

      <div className="nav-links flex gap-8">
        <Link 
          to="/" 
          className="text-blue-100 hover:text-white font-medium transition-colors duration-200 ease-in-out relative group"
        >
          Home
          <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link 
          to="/owner" 
          className="text-blue-100 hover:text-white font-medium transition-colors duration-200 ease-in-out relative group"
        >
          Owner
          <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

      <div className="hidden md:block">
        <Link
        to="/contact"
        className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-transform active:scale-95">
          Contact Me
        </Link>
      </div>
    </nav>
  );
};
////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Export Navbar //
///////////////////////////////////////////////////////////////
export default Navbar;