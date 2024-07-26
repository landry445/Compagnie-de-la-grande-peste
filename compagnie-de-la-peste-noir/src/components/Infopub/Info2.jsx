import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePopup } from "./context/PopupContext";
import "./InfoPopup.css";
import toomuch from "./imageinfo/manykids.jpeg";
import condom from "./imageinfo/capote.png";

function Info2() {
  const { hasSeenPopup2, setHasSeenPopup2 } = usePopup();
  const [isVisible, setIsVisible] = useState(false);
  const kids = useRef();
  const tl = useRef();
  const [pubContent, setPubContent] = useState(0);

  const pubArray = [
    {
      text: "Utilisez Chevrex ! Le préservatifs en peau de vessie de chévre, car la douceur est un plus.",
      image: condom,
    },
    {
      text: "Trop d'enfants? Savez vous qu'il y avait une solution?",
      image: toomuch,
    },
  ];

  useEffect(() => {
    if (!hasSeenPopup2) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasSeenPopup2(true);
      }, 22500); // 22.5 seconds

      return () => {
        console.log("Cleanup timer");
        clearTimeout(timer); // Clean up timeout on component unmount
      };
    }

    if (isVisible) {
      const contentInterval = setInterval(() => {
        setPubContent((prevContent) => (prevContent + 1) % pubArray.length);
      }, 4000); // 4 seconds

      return () => {
        console.log("Cleanup content interval");
        clearInterval(contentInterval);
      };
    }
  }, [hasSeenPopup2, isVisible, pubArray.length, setHasSeenPopup2]);

  useGSAP(() => {
    if (isVisible) {
      tl.current = gsap
        .timeline()
        .to(".info-container2", {
          x: 400,
          duration: 10,
          delay: 0.5,
        })
        .to(".info-container2", {
          x: -300,
        });
    }
  }, [isVisible]);

  return (
    <div ref={kids}>
      <div
        className={
          isVisible ? "info-container2 visible" : "info-container2 hidden"
        }
      >
        <h2>Info Pub</h2>
        <img src={pubArray[pubContent].image} alt="info content" />
        <p>{pubArray[pubContent].text}</p>
      </div>
    </div>
  );
}

export default Info2;
