import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForUser  from "./pages/signUpForUser/index";
import Home from "./pages/home/index";
import LoginForUser from "./pages/loginAsUser/index";
import NoPage from "./pages/nopage/index";
import './App.css'

function App() {
return (
    <>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForUser/>} />
          <Route path="/signup" element={<SignUpForUser/>} />
          <Route path="*" element={<NoPage />} />
    </Routes>
    </BrowserRouter>
  </>
);
}

export default App;
