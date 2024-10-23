import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Result from "./pages/Result"
import Credit from "./pages/Credit"
import Nav from "./components/Nav"
import Footer from "./components/Footer"


function App() {

  return (
    <div className="min-h-screen bg-slate-50">
      <Nav/>
      
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/result" element={<Result/>} />
      <Route path="/buy" element={<Credit/>} />
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
