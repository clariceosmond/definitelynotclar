import "./items/styles.css";
import { useEffect, useState } from "react";
import MainContainer from "./components/MainContainer";
import ResponseApp from "./ResponseApp";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWidth);
  }, [window.innerWidth]);

  return windowWidth > 845 ? <MainContainer /> : <ResponseApp />;
}
