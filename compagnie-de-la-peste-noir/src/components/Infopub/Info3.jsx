import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePopup } from "./context/PopupContext";
import "./InfoPopup.css";
import diamand from "./imageinfo/poudre.jpeg";
import knight from "./imageinfo/bellypain.jpeg";

function Info3() {
  const { hasSeenPopup3, setHasSeenPopup3 } = usePopup();
  const [isVisible, setIsVisible] = useState(false);
  const powder = useRef();
  const tl = useRef();
  const [pubContent, setPubContent] = useState(0);

  const pubArray = [
    {
      text: "Constipé? Mal au ventre ? En armure c'est compliqué.",
      image: knight,
    },
    {
      text: "N'attendez plus! Diamantix, la poudre de diamant qui vous nettoie les entrailles. Effect secondaire : peut entraîner la mort",
      image: diamand,
    },
  ];

  useEffect(() => {
    if (!hasSeenPopup3) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasSeenPopup3(true);
      }, 49500); // 49.5 seconds

      return () => {
        console.log("Cleanup timer");
        clearTimeout(timer); // Clean up timeout on component unmount
      };
    }

    if (isVisible) {
      const contentInterval = setInterval(() => {
        setPubContent((prevContent) => (prevContent + 1) % pubArray.length);
      }, 4500); // 4.5 seconds

      return () => {
        console.log("Cleanup content interval");
        clearInterval(contentInterval);
      };
    }
  }, [hasSeenPopup3, isVisible, pubArray.length, setHasSeenPopup3]);

  useGSAP(() => {
    if (isVisible) {
      tl.current = gsap
        .timeline()
        .to(".info-container3", {
          y: 300,
          duration: 10,
          delay: 0.5,
        })
        .to(".info-container3", {
          y: -500,
        });
    }
  }, [isVisible]);

  return (
    <div ref={powder}>
      <div
        className={
          isVisible ? "info-container3 visible" : "info-container3 hidden"
        }
      >
        <h2>Info Pub</h2>
        <img src={pubArray[pubContent].image} alt="info content" />
        <p>{pubArray[pubContent].text}</p>
      </div>
    </div>
  );
}

export default Info3;
