                                       ((:___ขั้นตอนในการคิด___:))
[1. สร้างโปรเจคใหม่ + Upload to Github + Deploy Vercel + Send Link URL]
                                ↓↓↓↓↓↓↓↓↓↓↓↓
[2. วิเคราะโจทย์ว่าต้องทำอย่างไร และสร้างโครงสร้างตามนั้น เพื่อรอเขียนโค๊ดทีหลัง]
            [2.1 ต้องการแบ่ง Layout เป็นสองส่วน คือส่วนของ Menu และ ส่วนแสดง Pages]
               • components
                    (src/components/MainLayout.jsx) จัดการ Layout หลัก (Navbar + Content)
                    (src/components/Navbar.jsx) แถบเมนูด้านบน (Home / Owner)
                    (src/components/UserSection.jsx) แสดงตารางสำหรับ User (Read-only)
                    (src/components/AdminSection.jsx) ฟอร์ม Add/Edit และตารางที่มีปุ่ม Delete/Edit
               • context
                    (src/context/MemberContext.jsx)  ตัวกลางจัดการ State และ API (GET, POST, PUT, DELETE)
              • pages
                    (src/pages/Home.jsx)  หน้าหลักสำหรับสลับโหมด Admin/User
                    (src/pages/Owner.jsx) หน้าแสดงประวัติผู้จัดทำ
              • App.jsx  ตั้งค่า React Router
              • main.jsx จุดเริ่มต้นของแอป
              [2.2. ทำโครงหน้าต่างๆ ให้เรียบร้อย]

-----------------------------------------------------------------------------------------------
                                        ((:___อธิบายขั้นตอนในการคิด___:))
1. ติดตั้งโปรเจคใหม่
     • สร้างโฟลเดอร์หลัก ที่ต้องการสร้างโปรเจคด้านใน
     • สร้างโฟลเดร์โปรเจค npm create vite@latest [ชื่อโปรเจค] **ติดตั้ง V.4
     • เข้าโฟลเดอร์ cd [ชื่อโปรเจค]
     • ติดตั้ง Mudule พื้นฐานของ React ด้วยคำสั่ง npm install
     • ตัว Tailwin Css เราไม่ต้องติดตั้งเพิ่ม เพราะเป็น V4 ให้เอาโค๊ดไปใส่ด้วยไฟล์ vite.config.js
                                import { defineConfig } from 'vite'
                                import tailwindcss from '@tailwindcss/vite'

                                export default defineConfig({
                                plugins: [
                                tailwindcss(),
                                ],
                                })
        และเปิดไฟล์ src/index.css ลบโค๊ดทั้งหมดในไฟล์นี้ และเอาโค๊ดนี้ไปใส่
        @import "tailwindcss"; เป็นการเรียกใช้งาน  tailwindcss จากนั้นให้ไปทดลองเขียนโค๊ดที่ไฟล์ app.jsx ว่าตัว Tialwind ทำงานปกติรึเปล่า 
        • อย่าลืมลง Reacut-Router-Dom ให้พิมพ์คำสั่ง npm install react-router-dom
        • หากปกติให้อัพขึ้น Github และทำ Vercel ต่อเลย จากนั้นนำลิงค์ URL ไปวางส่งให้คุณนิติและคุณกัน
------------------------------------------------------------------------------------
  <<<<<<<<<<<V.1 My new project is ready for coding. >>>>>>>>>>>>>
------------------------------------------------------------------------------------    

2. เริ่มทำโครงโปรเจคของเรา + เขียนโค๊ด Font End เริ่มต้นให้มีการทำงานวนหากันได้ หรือจบกระบวนการที่ต้องการได้
            2.1 สร้างโฟลเดอร์ให้เรียบร้อย เช่น components, context. pages
            2.2 สร้างไฟล์ที่ต้องการให้ครบ หรืออาจจะใส่โค๊ดให้มันทำงานตามโครงสร้างที่เราต้องการก่อนก็ได้
                        2.2.1 เริ่มต้นจากองค์ประกอบแบบกว้างไปสู่องค์ประกอบที่เล็ก
                        (555+ run แล้ว Error ดันลืมลง react-router-dom)
------------------------------------------------------------------------------------
  <<<<<<<V.2 A new project for website structure is ready. >>>>>>>>>>>
------------------------------------------------------------------------------------                                            2.2.2 ตกแต่งหน้าต่างๆ ของเวปไซต์ให้ดูดี ใส่ส่วนที่ไม่มีความซับซ้อน
                          • Navbar.jsx : ตกแต่งหน้าเวปด้วย Tailwind CSS ของ Navbar.jsx ให้สวยด้วย AI (ไม่มีเวลามานั่งดีไซด์)
                          • Owner.jsx : ตกแต่งหน้า Owner ซึ่งไม่ได้มีอะไรแค่ข้อมูลส่วนตัว ตกแต่งด้วย AI (ไม่มีเวลามานั่งดีไซด์) 
                          (ตรงส่วนนี้ขอตัดสินใจ เพิ่มรูปตัวเอง โดยสร้างโฟลเดอร์ impages ที่ path : src/assets/images)
                         2.2.2 เริ่มตกแต่งหน้า Home โดยการวางโครง ซึ่งจะมี ปุ่มกด 2ปุ่ม คือ
                              • User Home Section
                              • Admin Home Section
                          ทำทั้งสองหน้าให้ทำงานร่วมกันในหน้า Hom : Home.jsx ให้ได้ โดยการดึงเอา Component มาใช้งาน คือ UserSection.jsx และ AdminSection.jsx โดยการใช้ Method : useState 
                          const [sector, setSector] = useState(""); 
                          และมีการเปลี่ยนค่า โดยการคลิกปุ่ม เช่น User จะมีการเรียกฟังชั่น setSector และส่งค่า User มาเก็บไว้ในตัวแปล sector จากนั้นจะมีการตรวจสอบตัวแปล sector ที่ตรงส่วนหัวใจ .Jsx ของ React เพื่อเลือกว่าจะแสดงส่วนของ User หรือ Admin
                                    {sector === "user" && <UserSection />}
                                    {sector === "admin" && <AdminSection />}
                         *** และหลังจากทำแล้ว เกิดปัญหาโค๊ดไม่แสดง ดังนั้นผมจึงไปเพิ่มโค๊ดส่วน UserSection.jsx และ AdminSection  เพราะมีการเรียกใช้งาน แต่ไม่มีอะไรส่งมาที่หน้านี้***
                        *** หลังจากทำแล้วโค๊ด และโครงหน้าเว็บแสดงแล้ว ผมจึงขอจบ V.3 เอาไว้ตรงนี้ ***

------------------------------------------------------------------------------------
  <<<<<<<V.3 adds Tailwind CSS styling, refines the website structure, and adds code for UserSection.jsx and AdminSection.jsx. >>>>>>>>>>>
------------------------------------------------------------------------------------                              