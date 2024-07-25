import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import '../styles/PageAccueil.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '../assets/logo.png';
import slide1 from '../assets/logo.png';
import slide2 from '../assets/logo.png';
import slide3 from '../assets/logo.png';


const PageAccueil = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const logoRef = useRef(null);
    const buttonsContainerRef = useRef(null);
    const [isLogoVisible, setIsLogoVisible] = useState(false);
    const [isButtonsVisible, setIsButtonsVisible] = useState(false);

    useEffect(() => {
        const logoObserver = new IntersectionObserver(
            ([entry]) => {
                console.log('Logo Observer entry:', entry);
                if (entry.isIntersecting) {
                    setIsLogoVisible(true);
                    logoObserver.disconnect();
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0
            }
        );
        if (logoRef.current) {
            logoObserver.observe(logoRef.current);
        }

        const buttonsObserver = new IntersectionObserver(
            ([entry]) => {
                console.log('Buttons Observer entry:', entry);
                if (entry.isIntersecting) {
                    setIsButtonsVisible(true);
                    buttonsObserver.disconnect();
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.2
            }
        );
        if (buttonsContainerRef.current) {
            buttonsObserver.observe(buttonsContainerRef.current);
        }

        return () => {
            if (logoRef.current) {
                logoObserver.unobserve(logoRef.current);
            }
            if (buttonsContainerRef.current) {
                buttonsObserver.unobserve(buttonsContainerRef.current);
            }
        };
    }, []);

    return (
        <div className="page-accueil">
            <section className="section section1">
                <div className="slogan">
                    Moins de saignées, plus de sérénité.
                </div>
            </section>
            <section className="section section2">
                <div className="content">
                    <div className={`logo ${isLogoVisible ? 'animate' : ''}`} ref={logoRef}>
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className={`buttons-container ${isButtonsVisible ? 'animate' : ''}`} ref={buttonsContainerRef}>
                        <div className="buttons">
                            <button>Établir le lien</button>
                            <button>Faire allégeance</button>
                            <button>Qui sommes nous</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section3">
                <div className="carousel">
                    <Slider {...settings}>
                        <div>
                            <img src={slide1} alt="slide1" />
                        </div>
                        <div>
                            <img src={slide2} alt="slide2" />
                        </div>
                        <div>
                            <img src={slide3} alt="slide3" />
                        </div>
                    </Slider>
                </div>
            </section>
        </div>
    );
}

export default PageAccueil;
