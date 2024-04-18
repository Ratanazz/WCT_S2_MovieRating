import React from 'react';
import './Css/SwiperHomepageCss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

function SwiperHomepage() {
  return (
    <div className='SwiperHomepage'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="Card">
            <div className="infomation">
              <h1>Spiderman</h1>
              <div className="info1">
                <h2>Runtime: 2h 12min</h2><h2>Rated: PG13</h2><h2>Release: dd mm yyyy</h2>
              </div>
              <div className="rate">
              <div className="star-icon">
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              </div>
                <h3>7.4/5</h3>
              </div>
            </div>
            <div className="Poster">
              <img src="assets/spidermanposter.jpg" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="Card">
            <div className="infomation">
              <h1>KungFu Panda</h1>
              <div className="info1">
                <h2>Runtime: 1h 12min</h2><h2>Rated: PG13</h2><h2>Release: dd mm yyyy</h2>
              </div>
              <div className="rate">
              <div className="star-icon">
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              </div>
                <h3>7.4/5</h3>
              </div>
            </div>
            <div className="Poster">
              <img src="assets/pandaposter.jpg" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default SwiperHomepage;
