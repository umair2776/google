import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

// Import required modules
import { Pagination } from 'swiper/modules';

const Carousel = () => {
  return (
    <>
    <div className='discover'>
        <h3>Discover top Picks</h3>
    
        <p>Google PLay Games on PC
        </p>
    </div>
    
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src='https://i.ytimg.com/vi/PqMlpEa_N0A/hqdefault.jpg' alt="Slide 1" />
          <div className='cover '>
            <div className='img'>
              <img src='https://play-lh.googleusercontent.com/pQqL4JTm_4PS4UGdvVNnv4f0AYXeRwItrhlAhu84_jtUO-xslQmRaHgrJouYh82OPps=s128-rw' />
            </div>
            <div className='check'>
              <h5>Mobile Legends:Bang Bang</h5>
              <p>Action</p>
              <span>4.1</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src='https://i.ytimg.com/vi/qNvgdUZ91rA/hqdefault.jpg' alt="Slide 2" />
          <div className='cover '>
            <div className='img'>
              <img src='https://play-lh.googleusercontent.com/FVQXdzxDphpLdMRqIc5kG4C_Dc4AEO7-9uKHPt85v5_6Sp3J4mTV1S6P3ipLEoK6lDer=s128-rw' />
            </div>
            <div className='check'>
              <h5>Summoners War</h5>
              <p>Role Playing</p>
              <span>4.1</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src='https://i.ytimg.com/vi/DSdnIQs-_o8/hqdefault.jpg' alt="Slide 3" />
          <div className='cover '>
            <div className='img'>
              <img src='https://play-lh.googleusercontent.com/HypYezzu2m9CZjY2pNFPJT6gIAvJRBW4nNcqsBkdM5bYZ37utBDVhJ3O47b9wzV4cA=s128-rw' />
            </div>
            <div className='check'>
              <h5>Idle Heroes</h5>
              <p>Role Playing</p>
              <span>4.6</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src='https://i.ytimg.com/vi/L46PkGz3SqI/hqdefault.jpg' alt="Slide 4" />
          <div className='cover '>
            <div className='img'>
              <img src='https://play-lh.googleusercontent.com/87ZWG0h0ohRprr_B-ikfu66EgiL__wNWROk9yW5xl918h0RSzfAjRC4OnIaXhTux_mRW=s128-rw' />
            </div>
            <div className='check'>
              <h5>Township</h5>
              <p>Casual</p>
              <span>4.8</span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src='https://play-lh.googleusercontent.com/Erg0XWGumesxbKVUOn7yGlcwiEtuJKC0qC5xgf9gxCvl8WcZe-0oWReeobEuCu7u9PQ=w832-h470-rw' />
          <div className='cover '>
            <div className='img'>
              <img src='https://play-lh.googleusercontent.com/J_4kcCrgNmQdEcMgWG5_ZX5o5Z3GFnkcapT17K3tDf4WOWJ1C29J0yTqFKcGc2m0gXo=s128-rw' />
            </div>
            <div className='check'>
              <h5>Top War: Battle Game</h5>
              <p>Strategy</p>
              <span>2.9</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
