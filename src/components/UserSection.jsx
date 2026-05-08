////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : เรียกใช้งาน Library ของ React และอื่นๆ ↓↓↓ //
///////////////////////////////////////////////////////////////
import { useContext } from "react";

////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : เรียกใช้งาน src ในโปรเจคของเรา ↓↓↓ //
///////////////////////////////////////////////////////////////
import { MemberContext } from "../context/MemberContext";

////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Start Component ↓↓↓ //
///////////////////////////////////////////////////////////////
const UserSection = () => {

////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Variable + Method  ↓↓↓ //
///////////////////////////////////////////////////////////////
const { members } = useContext(MemberContext);

////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Variable + Method + FN //
///////////////////////////////////////////////////////////////
//
//
//

////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : .JSX Display //
///////////////////////////////////////////////////////////////
   return (
    <div className="w-full max-w-4xl overflow-hidden rounded-lg border border-gray-300 shadow-sm mx-auto">
      <table className="w-full text-left bg-white border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-300">
            <th className="py-3 px-6 text-center font-bold text-slate-800 border-r border-gray-300">Name</th>
            <th className="py-3 px-6 text-center font-bold text-slate-800 border-r border-gray-300">Last Name</th>
            <th className="py-3 px-6 text-center font-bold text-slate-800">Position</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id} className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
              <td className="py-3 px-6 text-center border-r border-gray-200 text-slate-700">{member.name}</td>
              <td className="py-3 px-6 text-center border-r border-gray-200 text-slate-700">{member.lastname}</td>
              <td className="py-3 px-6 text-center text-slate-700">{member.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Export UserSection //
///////////////////////////////////////////////////////////////

export default UserSection;

