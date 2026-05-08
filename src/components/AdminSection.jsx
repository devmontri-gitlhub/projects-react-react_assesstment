////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : เรียกใช้งาน Library ของ React และอื่นๆ ↓↓↓ //
///////////////////////////////////////////////////////////////
import { useContext, useState } from "react";


////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : เรียกใช้งาน src ในโปรเจคของเรา ↓↓↓ //
///////////////////////////////////////////////////////////////
import { MemberContext } from "../context/MemberContext";


////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Start Component ↓↓↓ //
///////////////////////////////////////////////////////////////
const AdminSection = () => {

////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Variable  //
///////////////////////////////////////////////////////////////
//
//

////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Variable + Method //
///////////////////////////////////////////////////////////////
{/* ↓↓↓  Start : Post : รับ และส่ง useContext ด้วย Fn : creageMember*/ }
const { members, createMember, updateMember, deleteMember } = useContext(MemberContext);

const [formData, setFormData] = useState({ name: "", lastname: "", position: "" });
const [editId, setEditId] = useState(null);


////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Variable + Method + FN //
///////////////////////////////////////////////////////////////
const handleSubmit = () => {
    if (!formData.name || !formData.lastname) return alert("Please fill all fields");

if (editId) {
      updateMember(editId, formData);
      setEditId(null);
    } else {
      createMember(formData);
    }
    setFormData({ name: "", lastname: "", position: "" });
  };   
  
const handleEdit = (member) => {
    setEditId(member.id);
    setFormData({ name: member.name, lastname: member.lastname, position: member.position });
  };

////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : .jsx Display //
///////////////////////////////////////////////////////////////
    return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm">
        <h3 className="text-xl font-bold text-slate-800 mb-4">{editId ? "Update User" : "Create User Here"}</h3>
        <div className="flex flex-wrap gap-4">
          <input 
            className="flex-1 min-w-[200px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Name" 
            value={formData.name} 
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
          />
          <input 
            className="flex-1 min-w-[200px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Last Name" 
            value={formData.lastname} 
            onChange={(e) => setFormData({...formData, lastname: e.target.value})} 
          />
          <input 
            className="flex-1 min-w-[200px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Position" 
            value={formData.position} 
            onChange={(e) => setFormData({...formData, position: e.target.value})} 
          />
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition-colors shadow-sm active:scale-95"
            onClick={handleSubmit}
          >
            {editId ? "Update" : "Save"}
          </button>
        </div>
      </div>

      <div className="w-full overflow-hidden rounded-lg border border-gray-300 shadow-sm">
        <table className="w-full text-left bg-white border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-300">
              <th className="py-3 px-6 text-center font-bold text-slate-800 border-r border-gray-300">Name</th>
              <th className="py-3 px-6 text-center font-bold text-slate-800 border-r border-gray-300">Last Name</th>
              <th className="py-3 px-6 text-center font-bold text-slate-800 border-r border-gray-300">Position</th>
              <th className="py-3 px-6 text-center font-bold text-slate-800">Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                <td className="py-3 px-6 text-center border-r border-gray-200 text-slate-700">{member.name}</td>
                <td className="py-3 px-6 text-center border-r border-gray-200 text-slate-700">{member.lastname}</td>
                <td className="py-3 px-6 text-center border-r border-gray-200 text-slate-700">{member.position}</td>
                <td className="py-3 px-6 text-center space-x-2">
                  <button 
                    className="text-blue-600 hover:text-blue-800 font-semibold transition-colors" 
                    onClick={() => handleEdit(member)}
                  >
                    Edit
                  </button>
                  <button 
                    className="text-red-500 hover:text-red-700 font-semibold transition-colors" 
                    onClick={() => deleteMember(member.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};




////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Export AdminSection //
///////////////////////////////////////////////////////////////
export default AdminSection;