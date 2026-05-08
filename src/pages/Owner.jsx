////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : เรียกใช้งาน Library ของ React และอื่นๆ ↓↓↓ //
///////////////////////////////////////////////////////////////
//
//
////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : เรียกใช้งาน src ในโปรเจคของเรา ↓↓↓ //
///////////////////////////////////////////////////////////////
import MainLayout from "../components/MainLayout";
import profileImage from "../assets/images/t_pages_ownwer_turtle_desktop.jpg";

////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Variable + Method + FN //
///////////////////////////////////////////////////////////////
const Owner = () => {
  return (
   <MainLayout>
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="owner-content max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100 transition-all hover:shadow-2xl">
          <div className="h-48 bg-gradient-to-r from-blue-700 to-blue-900 flex flex-col items-center justify-start pt-8 gap-4">
            <h2 className="text-3xl font-bold text-white tracking-wider">PROFILE</h2>
            <div className="relative">
              <img 
                src={profileImage}
                alt="Profile" 
                className="profile-img w-40 h-40 rounded-full border-4 border-white object-cover shadow-md bg-white" 
              />
            </div>
          </div>
          
          <div className="px-8 pb-12 mt-24">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-blue-900 tracking-tight">
                JSD12 : 16_Montri (Tri/ตรี)
              </h1>
              
              <div className="mt-8 space-y-4">
                <div className="inline-block px-4 py-1 bg-blue-50 rounded-full">
                  
                
                </div>
                
                <p className="text-slate-600 leading-relaxed text-lg max-w-md mx-auto">
                  I'm a <span className="text-blue-600 font-semibold">Full Stack Developer</span> student 
                  at Generation Thailand with 5 years of <span className="text-blue-600 font-semibold">IT Support</span> background.
                </p>
              </div>

              <div className="mt-10 flex justify-center gap-4">
                <div className="h-1 w-12 bg-blue-200 rounded-full"></div>
                <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
                <div className="h-1 w-12 bg-blue-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

////////////////////////////////////////////////////////////////
//  ↓↓↓ Start : Export Owner //
///////////////////////////////////////////////////////////////
export default Owner;