import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import { Navigation, Pagination,} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: "Modi alias animi dolorem aliquam ea eumbeatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consecuatur qui molestiae, Dolorem, perpspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?"
  },
  {
    avatar: AVTR2,
    name: "Shata Wale",
    review: "Modi alias animi dolorem aliquam ea eumbeatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consecuatur qui molestiae, Dolorem, perpspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?"
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review: "Modi alias animi dolorem aliquam ea eumbeatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consecuatur qui molestiae, Dolorem, perpspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?"
  },
  {
    avatar: AVTR4,
    name: "Nana Ama Mcbrown",
    review: "Modi alias animi dolorem aliquam ea eumbeatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consecuatur qui molestiae, Dolorem, perpspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?"
  },
]

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination,]}
        spaceBetween={70}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        
        
        >


        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} />
                  <h5 className='client__name'>{name}</h5>
                </div>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials