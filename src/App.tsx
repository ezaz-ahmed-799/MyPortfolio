import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      
    </Routes>
    <Analytics />
  </div>;
}

export default App;
