import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import '../styles/PageAccueil.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '../assets/logo.png';
import slide1 from '../assets/note1.png';
import slide2 from '../assets/note2.png';
import slide3 from '../assets/note3.png';


const PageAccueil = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    const logoRef = useRef(null);
    const buttonsContainerRef = useRef(null);
    const [isLogoVisible, setIsLogoVisible] = useState(false);
    const [isButtonsVisible, setIsButtonsVisible] = useState(false);
    const [display, setDisplay] = useState('buttons');

    const handleSubmit = () => {
        console.log('Formulaire soumis');
    };

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

    const handleButtonClick = () => {
        setDisplay('additionalButtons');
    };

    const handleAllegeanceClick = () => {
        setDisplay('inputs');
    };

    const handleResetClick = () => {
        setDisplay('buttons');
    };

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
                            {display === 'buttons' && (
                                <>
                                    <button onClick={handleButtonClick}>Établir le lien</button>
                                    <button onClick={handleAllegeanceClick}>Faire allégeance</button>
                                    <button>Qui sommes nous</button>
                                </>
                            )}
                            {display === 'additionalButtons' && (
                                <>
                                    <label>
                                        Nom de registre:<br />
                                        <input type="text" />
                                    </label>
                                    <label>
                                        Parole d'entrée:<br />
                                        <input type="password" />
                                    </label>
                                    <button onClick={handleSubmit}>Soumettre</button>
                                    <button onClick={handleResetClick}>Retour</button>
                                </>
                            )}
                            {display === 'inputs' && (
                                <>
                                    <label>
                                        Nom de registre:
                                        <input type="text" />
                                    </label>
                                    <label>
                                        Nom et prenom:
                                        <input type="text" />
                                    </label>
                                    <label>
                                        Votre logis:
                                        <input type="text" />
                                    </label>
                                    <label>
                                        Votre Hameau:
                                        <input type="text" />
                                    </label>
                                    <label>
                                        Rang social*:
                                        <input type="text" />
                                    </label>
                                    <p className="note">
                                        *Peut être vérifié par la garde royal<br />
                                        tout cas de fausseté sera punis par le roi
                                    </p>
                                    <button onClick={handleSubmit}>Soumettre</button>
                                    <button onClick={handleResetClick}>Retour</button>
                                </>
                            )}
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