import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import "./CSS/animation.css";

function App() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll<HTMLElement>(
      "[data-animate], .right-to-left"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible", "animate");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      }
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;
