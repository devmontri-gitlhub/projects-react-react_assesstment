////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : เรียกใช้งาน Library ของ React และอื่นๆ ↓↓↓ //
///////////////////////////////////////////////////////////////
import { BrowserRouter, Routes, Route } from "react-router-dom";



////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : เรียกใช้งาน src ในโปรเจคของเรา ↓↓↓ //
///////////////////////////////////////////////////////////////
import Home from "./pages/Home";
import Owner from "./pages/Owner";
import Contact from "./pages/Contact";
import { MemberProvider } from "./context/MemberContext";


////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Variable + Method + FN //
///////////////////////////////////////////////////////////////
function App() {
    return (
        <MemberProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/owner" element={<Owner />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
     </MemberProvider>
      );
    }


////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Export App //
///////////////////////////////////////////////////////////////
export default App;
