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
const { members, createMember } = useContext(MemberContext);

const [formData, setFormData] = useState({ name: "", lastname: "", position: "" });
const [editId, setEditId] = useState(null);


////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Variable + Method + FN //
///////////////////////////////////////////////////////////////
const handleSubmit = () => {
    if (!formData.name || !formData.lastname) return alert("Please fill all fields");

if (editId) {
      //updateMember(editId, formData);
      setEditId(null);
    } else {
      createMember(formData);
    }
    setFormData({ name: "", lastname: "", position: "" });
  };   
  


////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : .jsx Display //
///////////////////////////////////////////////////////////////
    return (
    <div className="admin-section">
      <div className="create-user-form">
        <h3>{editId ? "Update User" : "Create User Here"}</h3>
        <div className="input-group">
          <input 
            placeholder="Name" 
            value={formData.name} 
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
          />
          <input 
            placeholder="Last Name" 
            value={formData.lastname} 
            onChange={(e) => setFormData({...formData, lastname: e.target.value})} 
          />
          <input 
            placeholder="Position" 
            value={formData.position} 
            onChange={(e) => setFormData({...formData, position: e.target.value})} 
          />
          <button className="save-btn" onClick={handleSubmit}>
            {editId ? "Update" : "Save"}
          </button>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.lastname}</td>
                <td>{member.position}</td>
                <td>
                  <button className="edit-btn" onClick="">Edit</button>
                  <button className="delete-btn" onClick="">Delete</button>
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