import './App.css'

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <div className="rounded-2xl bg-white p-10 shadow-2xl shadow-blue-500/50">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-bounce">
          Tailwind Working! 🚀
        </h1>
        <p className="mt-4 text-center text-gray-600 font-medium">
          ถ้าเห็นข้อความนี้เด้งไปมา และพื้นหลังสีเข้ม <br/>
          แสดงว่าติดตั้ง Tailwind สำเร็จแล้วครับ
        </p>
        <button className="mt-6 w-full rounded-full bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 transition-all active:scale-95">
          ยินดีด้วย!
        </button>
      </div>
    </div>
  )
}



export default App
