import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/test1.jpg'
import AVTR2 from '../../assets/test2.jpg'

//Swiper Imports
import { Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"

      modules={[Pagination]}
      spaceBetween = {40}
      slidesPerView = {1}
      pagination = {{clickable: true}}>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatat One" />
            </div>
            <h5 className='client__name'>Micheal Jolly</h5>
            <small className='client__review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nobis similique voluptas, qui vero pariatur mollitia explicabo distinctio nihil eaque, perspiciatis facilis aliquid animi tempora sapiente! Necessitatibus animi tempora cum.
            </small>          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatat One" />
            </div>
            <h5 className='client__name'>Jonny Jordan</h5>
            <small className='client__review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nobis similique voluptas, qui vero pariatur mollitia explicabo distinctio nihil eaque, perspiciatis facilis aliquid animi tempora sapiente! Necessitatibus animi tempora cum.
            </small>          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatat One" />
            </div>
            <h5 className='client__name'>Jan Motene</h5>
            <small className='client__review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nobis similique voluptas, qui vero pariatur mollitia explicabo distinctio nihil eaque, perspiciatis facilis aliquid animi tempora sapiente! Necessitatibus animi tempora cum.
            </small>          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatat One" />
            </div>
            <h5 className='client__name'>Rihanna</h5>
            <small className='client__review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nobis similique voluptas, qui vero pariatur mollitia explicabo distinctio nihil eaque, perspiciatis facilis aliquid animi tempora sapiente! Necessitatibus animi tempora cum.
            </small>          
        </SwiperSlide>

        
      </Swiper>
    </section>
  )
}

export default Testimonials