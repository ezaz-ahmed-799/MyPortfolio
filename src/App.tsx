import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      
    </Routes>
  </div>;
}

export default App;
