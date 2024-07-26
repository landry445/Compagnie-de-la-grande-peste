import '../styles/Carousel.css';
import Card from './Card';
import Card2 from './Card2';
import Card3 from './Card3';

const Carousel = () => {
  return (
    // <div className='container-carousel'>
      <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
      <li id="carousel__slide1"
          tabIndex="0"
          className="carousel__slide">
            <Card />
        <div className="carousel__snapper">
          <a href="#carousel__slide4"
            className="carousel__prev">Go to last slide</a>
          <a href="#carousel__slide2"
            className="carousel__next">Go to next slide</a>
        </div>
      </li>
      <li id="carousel__slide2"
          tabIndex="0"
          className="carousel__slide">
            <Card2 />
        <div className="carousel__snapper"></div>
        <a href="#carousel__slide1"
          className="carousel__prev">Go to previous slide</a>
        <a href="#carousel__slide3"
          className="carousel__next">Go to next slide</a>
      </li>
      <li id="carousel__slide3"
          tabIndex="0"
          className="carousel__slide">
          <Card3 />
        <div className="carousel__snapper"></div>
        <a href="#carousel__slide2"
          className="carousel__prev">Go to previous slide</a>
        <a href="#carousel__slide4"
          className="carousel__next">Go to next slide</a>
      </li>
    </ol>
    <aside className="carousel__navigation">
      <ol className="carousel__navigation-list">
        <li className="carousel__navigation-item">
          <a href="#carousel__slide1"
            className="carousel__navigation-button">Go to slide 1</a>
        </li>
        <li className="carousel__navigation-item">
          <a href="#carousel__slide2"
            className="carousel__navigation-button">Go to slide 2</a>
        </li>
        <li className="carousel__navigation-item">
          <a href="#carousel__slide3"
            className="carousel__navigation-button">Go to slide 3</a>
        </li>
      </ol>
    </aside>
      </section>
    // </div>
  );
};

export default Carousel;
