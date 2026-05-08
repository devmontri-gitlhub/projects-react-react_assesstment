////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : เรียกใช้งาน Library ของ React และอื่นๆ ↓↓↓ //
///////////////////////////////////////////////////////////////
import { useState } from "react";


////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : เรียกใช้งาน src ในโปรเจคของเรา ↓↓↓ //
///////////////////////////////////////////////////////////////
import MainLayout from "../components/MainLayout";
import UserSection from "../components/UserSection";
import AdminSection from "../components/AdminSection";

////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Variable + Method  ↓↓↓ //
///////////////////////////////////////////////////////////////
const Home = () => {
const [sector, setSector] = useState(""); 

////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Variable + Method + FN //
///////////////////////////////////////////////////////////////
const renderHeader = () => {
    switch (sector) {
      case "user": return "Generation Thailand \n Home - User Section";
      case "admin": return "Generation Thailand \n Home - Admin Section";
      default: return "Generation Thailand \n React - Assessment";
    }
  };

////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : .JSX Display //
///////////////////////////////////////////////////////////////
    return (
  <MainLayout>
  <div className="home-content min-h-screen bg-gray-100 flex flex-col items-center pt-16 px-4">
        <h1 className="main-title text-5xl font-bold text-slate-900 mb-12 text-center leading-tight">
          {renderHeader()}
        </h1>
        
        <div className="button-group flex gap-10 mb-16">
          <button className="nav-btn bg-white text-slate-900 font-bold py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 border border-gray-200"
            onClick={() => setSector("user")}
          >
            User Home Section
          </button>
          <button className="nav-btn bg-white text-slate-900 font-bold py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 border border-gray-200"
            onClick={() => setSector("admin")}
          >
            Admin Home Section
          </button>
        </div>

        <div className="w-full max-w-4xl overflow-hidden rounded-lg border border-gray-300 shadow-sm">
          <table className="w-full text-left bg-white border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-300">
                <th className="py-3 px-6 text-center font-bold text-slate-800 border-r border-gray-300">Name</th>
                <th className="py-3 px-6 text-center font-bold text-slate-800 border-r border-gray-300">Last Name</th>
                <th className="py-3 px-6 text-center font-bold text-slate-800">Position</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 h-12">
                <td className="border-r border-gray-200"></td>
                <td className="border-r border-gray-200"></td>
                <td></td>
              </tr>
              <tr className="border-b border-gray-200 h-12">
                <td className="border-r border-gray-200"></td>
                <td className="border-r border-gray-200"></td>
                <td></td>
              </tr>
              <tr className="h-12">
                <td className="border-r border-gray-200"></td>
                <td className="border-r border-gray-200"></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        {sector === "user" && <UserSection />}
        {sector === "admin" && <AdminSection />}
      </div>
    </MainLayout>
  );
};


////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Export Home //
///////////////////////////////////////////////////////////////
export default Home;