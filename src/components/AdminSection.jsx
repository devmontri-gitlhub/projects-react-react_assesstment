////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : เรียกใช้งาน Library ของ React และอื่นๆ ↓↓↓ //
///////////////////////////////////////////////////////////////
//import { useContext, useState } from "react";


////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : เรียกใช้งาน src ในโปรเจคของเรา ↓↓↓ //
///////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Variable + Method + FN //
///////////////////////////////////////////////////////////////

const AdminSection = () => {
    return (
    <div className="admin-section">
      <div className="create-user-form">
        <h3>"Update User" : "Create User Here"</h3>
        <div className="input-group">
          <input 
            placeholder="Name" 
            value=""
            onChange=""
          />
          <input 
            placeholder="Last Name" 
            value=""
            onChange="" 
          />
          <input 
            placeholder="Position" 
            value=""
            onChange=""
          />
          <button className="save-btn">
           Save
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
            
              <tr key="">
                <td>member.name</td>
                <td>member.lastname</td>
                <td>member.position</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            
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