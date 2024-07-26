import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePopup } from "./context/PopupContext";
import "./InfoPopup.css";
import dancingplague from "./imageinfo/TheDeathDance.jpeg";

function Info1() {
  const { hasSeenPopup, setHasSeenPopup } = usePopup();
  const [isVisible, setIsVisible] = useState(false);
  const danceplague = useRef();
  const tl = useRef();

  useEffect(() => {
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasSeenPopup(true);
      }, 5500); // 1 minute

      return () => {
        console.log("Cleanup");
        clearTimeout(timer); // Clean up timeout on component unmount
      };
    }
  }, [hasSeenPopup, isVisible, setIsVisible, setHasSeenPopup]);

  useGSAP(() => {
    if (isVisible) {
      tl.current = gsap
        .timeline()
        .to(".info-container", {
          x: -400,
          duration: 10,
          delay: 0.5,
        })
        .to(".info-container", {
          x: 300,
        });
    }
  }, [isVisible]);

  return (
    <div ref={danceplague}>
      <div
        className={
          isVisible ? "info-container visible" : "info-container hidden"
        }
      >
        <h2>Info flash!!! `La peste dancante`</h2>
        <img src={dancingplague} alt="danse de la mort" />
        <p>
          Une épidemie sur Moisy-sur-Meth vient de survenir, plusieurs personnes
          de la population danseraient jusqu`à en mourrir, surtout ne les
          rejoingnez pas !.
        </p>
      </div>
    </div>
  );
}

export default Info1;
