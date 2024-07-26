import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./InfoPopup.css";
import toomuch from "./imageinfo/manykids.jpeg";
import condom from "./imageinfo/capote.png";

function Info2() {
  const [isVisible, setIsVisible] = useState(false);
  const kids = useRef();
  const tl = useRef();
  const [pubContent, setPubContent] = useState(0);

  const pubArray = [
    {
      text: "Trop d'enfants? Savez vous qu'il y a une solution?",
      image: toomuch,
    },
    {
      text: "Utilisez Chevrex ! Le préservatifs en peau de vessie de chévre, car la douceur est un plus.",
      image: condom,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 6000); // 1 minute

    const contentInterval = setInterval(() => {
      setPubContent((prevContent) => (prevContent + 1) % pubArray.length);
    }, 4500); // 30 seconds

    return () => {
      console.log("Cleanup");
      clearTimeout(timer); // Clean up timeout on component unmount
      clearInterval(contentInterval);
    };
  }, [isVisible, pubArray.length]);

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
