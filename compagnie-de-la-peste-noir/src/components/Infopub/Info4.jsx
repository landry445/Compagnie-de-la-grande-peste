import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./InfoPopup.css";
import abdou from "./imageinfo/abdou.jpg";

function Info1() {
  const [isVisible, setIsVisible] = useState(false);
  const interview = useRef();
  const tl = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 67500); // 1 minute

    return () => {
      console.log("Cleanup");
      clearTimeout(timer); // Clean up timeout on component unmount
    };
  }, [isVisible]);

  useGSAP(() => {
    if (isVisible) {
      tl.current = gsap
        .timeline()
        .to(".info-container4", {
          y: -500,
          duration: 8,
          delay: 0.5,
        })
        .to(".info-container4", {
          y: 600,
        });
    }
  }, [isVisible]);

  return (
    <div ref={interview}>
      <div
        className={
          isVisible ? "info-container4 visible" : "info-container4 hidden"
        }
      >
        <h2>Interview</h2>
        <img src={abdou} alt="abdou" />
        <p>
          Après Jeanne d'Arc qui entendait Dieu, ne loupez pas notre interview
          de notre invité Abdou, celui qui entend les voix.
        </p>
      </div>
    </div>
  );
}

export default Info1;
