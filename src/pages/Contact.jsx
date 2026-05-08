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
const Contact = () => {
  const ownerData = {
    name: "Montri",
    nickname: "Tri/ตรี",
    fullName: "JSD12 : 16_Montri (Tri/ตรี)",
    email: "dev.montri@gmail.com",
    linkedin: "www.linkedin.com/in/dev-montri1986",
    linkedinUrl: "https://www.linkedin.com/in/dev-montri1986"
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="contact-content max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100 transition-all hover:shadow-2xl">
          <div className="h-48 bg-gradient-to-r from-blue-700 to-blue-900 flex flex-col items-center justify-start pt-8 gap-4">
            <h2 className="text-3xl font-bold text-white tracking-wider">CONTACT ME</h2>
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
              <h1 className="text-3xl font-bold text-blue-900 tracking-tight mb-2">
                {ownerData.fullName}
              </h1>
              <p className="text-blue-600 font-medium mb-8">Feel free to reach out to me</p>
              
              <div className="space-y-4 max-w-md mx-auto text-left">
                <div className="flex items-center p-4 bg-blue-50 rounded-2xl border border-blue-100 transition-transform hover:scale-105">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-blue-200 shadow-lg">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Email</p>
                    <a href={`mailto:${ownerData.email}`} className="text-blue-900 font-semibold hover:text-blue-700 transition-colors">
                      {ownerData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-50 rounded-2xl border border-blue-100 transition-transform hover:scale-105">
                  <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center mr-4 shadow-blue-200 shadow-lg">
                    <span className="text-white text-xl">🔗</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Linkedin</p>
                    <a href={ownerData.linkedinUrl} target="_blank" rel="noreferrer" className="text-blue-900 font-semibold hover:text-blue-700 transition-colors">
                      {ownerData.linkedin}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex justify-center gap-4">
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
//  ↓↓↓ Start : Export Contact //
///////////////////////////////////////////////////////////////
export default Contact;