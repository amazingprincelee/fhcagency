import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.png";
import slide5 from "../images/slide5.jpg";

function MyCarousel() {
  return (
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" className="" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" className="" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" className="" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" className="active" aria-current="true"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item">
          <img src={slide3} alt='slide-1' />
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Empowering Futures, Enriching Lives</h1>
              <p className="opacity-75 slide-p-size">Your Trusted Recruitment Agency for Compassionate
                Support Workers and Dedicated Healthcare Teams, Bringing Specialized Services to the Comfort of
                Home for Autistic Children</p>
                <p><Link className="btn btn-lg btn-danger" to="/register">Sign up today</Link></p>
            </div>
          </div>
        </div>
        <div className="carousel-item active carousel-item-start">
          <img src={slide2} alt='slide-2' />
          <div className="container">
            <div className="carousel-caption">
              <h1>Faith Health Care Agency Ltd - Nurturing Dreams, Transforming Lives</h1>
              <p className="opacity-75 slide-p-size" >"24/7 Service for Children with
                Disabilities, Delivering Personalized Care for Every Need, Every Moment."</p>
                <p><Link className="btn btn-lg btn-danger" to="/aboutus">Learn more</Link></p>
            </div>
          </div>
        </div>
        <div className="carousel-item carousel-item-next carousel-item-start">
          <img src={slide1} alt='slide-3' />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>Faith Healthcare Agency.</h1>
              <p className="opacity-75 slide-p-size">"Delivers a symphony of wellness, where every service is a testament to our
                commitment to healing with heart."</p>
                <p><Link className="btn btn-lg btn-danger" to="/register">Sign up today</Link></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide4} alt='slide-4' />
          <div className="container">
            <div className="carousel-caption">
              <h1>Faith Health Care Staff</h1>
              <p className="opacity-75 slide-p-size">Committed, Caring, Expert and Compassionate.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide5} alt='slide-5' />
          <div className="container">
            <div className="carousel-caption">
              <h1>Our Specialty</h1>
              <p className="opacity-75 slide-p-size">We specialize in providing top-notch healthcare and nursing professionals for Domiciliary Care,
                Elderly Care Services, End-Of-Life Care, Physical Disabilities Care, Specialist Services, Children With
                Special Needs.</p>
                <p><Link className="btn btn-lg btn-danger" to="/gallery">Browse gallery</Link></p>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default MyCarousel;
