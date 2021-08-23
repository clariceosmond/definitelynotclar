import "./items/styles.css";
import { useEffect, useState } from "react";
import ResponseApp from "./ResponseApp";
import AllRoutes from "./routes/AllRoutes";
import { HashRouter as Router } from "react-router-dom";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWidth);
  }, [window.innerWidth]);

  return windowWidth > 845 ? (
    <Router>
      <AllRoutes />
    </Router>
  ) : (
    <ResponseApp />
  );
}
