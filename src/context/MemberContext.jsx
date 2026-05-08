////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : เรียกใช้งาน Library ของ React และอื่นๆ ↓↓↓ //
///////////////////////////////////////////////////////////////
import { createContext, useState, useEffect } from "react";

////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : เรียกใช้งาน src ในโปรเจคของเรา ↓↓↓ //
///////////////////////////////////////////////////////////////
//
//
//

////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Variable ↓↓↓ //
///////////////////////////////////////////////////////////////
//
//
//

////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Variable + Method ↓↓↓ //
///////////////////////////////////////////////////////////////
export const MemberContext = createContext();


////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Variable + Method + FN ↓↓↓ //
///////////////////////////////////////////////////////////////

{/* ////////////////////////////////////////////////////////////////////////////////////////// */}
{/* Start : Fetch : การดึงข้อมูลจากเว็บนอก และนำมาใช้งาน ส่งไปแสดงที่ UserSection.jsx */}
export const MemberProvider = ({ children }) => {
  const [members, setMembers] = useState([]);
  const API_URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

 const fetchMembers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

{/* ////////////////////////////////////////////////////////////////////////////////////////// */}
{/* Start : useEffect : เมื่อเปิดปุ้บ เรียกใช้ Fn: fetchMember ดึงข้อมูลล่าสุดมาใช้งานทันที */}
useEffect(() => {
    fetchMembers();
  }, []);

  {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
{/* Start : POST : เมื่อเปิดปุ้บ เรียกใช้ Fn: fetchMember ดึงข้อมูลล่าสุดมาใช้งานทันที */}
{/* ↓↓↓   รับ ด้วย Fn : creageMember โดยมีค่าตัวแปล Members ติดมาด้วย จากนั้นส่งคำสั่งเป็น POST ไปยัง URL และ แปลงโค๊ด JASON ส่งไปด้วย*/ }
{/*  เรียก Fn : fetchMembers เพื่อเรียกข้อมูลล่าสุดจาก API  */ }  
 const createMember = async (newMember) => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMember),
    });
    fetchMembers();
  };

{/* Start : PUT : เมื่อเปิดปุ้บ เรียกใช้ Fn: fetchMember ดึงข้อมูลล่าสุดมาใช้งานทันที */}
{/* ↓↓↓   รับ ด้วย Fn : updateMember โดยมีค่าตัวแปร editId, formData ติดมาด้วย ส่งคำสั่งเป็น POST ไปยัง URL และ แปลงโค๊ด JASON ส่งไปด้วย*/ }
{/*  เรียก Fn : fetchMembers เพื่อเรียกข้อมูลล่าสุดจาก API  */ }
 const updateMember = async (id, updatedData) => {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    fetchMembers();
  }; 

{/* Start : DELETE : เมื่อเปิดปุ้บ เรียกใช้ Fn: fetchMember ดึงข้อมูลล่าสุดมาใช้งานทันที */}
{/* ↓↓↓   รับ ด้วย Fn : deleteMember โดยมีค่าตัวแปร member.id ติดมาด้วย  */ }
{/*  ทำการค้นหาข้อมูลด้วย ID ก่อน จากนั้นจึงส่งคำสั่งเป็น DELETE ไปลบ */ }
{/*  เรียก Fn : fetchMembers เพื่อเรียกข้อมูลล่าสุดจาก API  */ }
const deleteMember = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchMembers();
  };

////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : .jsx แสดงข้อมูล ↓↓↓ //
///////////////////////////////////////////////////////////////
  return (
    <MemberContext.Provider value={{ members, fetchMembers, createMember, updateMember, deleteMember}}>
      {children}
    </MemberContext.Provider>
  );
};