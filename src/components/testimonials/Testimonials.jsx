import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/test1.jpg';
import AVTR2 from '../../assets/test2.jpg';

//Swiper Imports
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Micheal Jolly</h5>
          <small className='client__review'>
            Hi Jan, Working with You was a fantastic experience. I exceeded my expectations and delivered a high-quality product on time. Highly recommended!
          </small>          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar Two" />
          </div>
          <h5 className='client__name'>Jonny Jordan</h5>
          <small className='client__review'>
            The level of professionalism and dedication is truly outstanding Jan. You took the time to understand my needs and provided excellent portfolio.
          </small>          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar Three" />
          </div>
          <h5 className='client__name'>Jan Motene</h5>
          <small className='client__review'>
            I'm impressed with the attention to detail and expertise. You went above and beyond to ensure a seamless experience. I couldn't be happier!
          </small>          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar Four" />
          </div>
          <h5 className='client__name'>Rihanna</h5>
          <small className='client__review'>
            Absolutely amazing service and user friendly interface! The portfolio is responsive, efficient, and delivered beyond my expectations. I will definitely work with You.
          </small>          
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;
