import React from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/swiper-bundle.css";

function Banner() {
  return (
    <div className="carousel">
      <Swiper
        loop={true}
        modules={[EffectFade, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        className="swiper1"
        speed={500}
      >
        <SwiperSlide
          style={{
            background: ` linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(${banner1})`,
          }}
        >
          <div className="movie-info">
            <h1>Top Gun: Maverick</h1>
            <h2>Action | Drama | 130 min</h2>
            <article>
              After thirty years, Maverick is still pushing the envelope as a
              top naval aviator, but must confront ghosts of his past when he
              leads TOP GUN's elite graduates on a mission that demands the
              ultimate sacrifice from those chosen to fly it.
            </article>

            <button>View Movies</button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(${banner2})`,
          }}
        >
          <div className="movie-info">
            <h1>Evil Dead Rise</h1>
            <h2>Horror | 96 min</h2>
            <article>
              A twisted tale of two estranged sisters whose reunion is cut short
              by the rise of flesh-possessing demons, thrusting them into a
              primal battle for survival as they face the most nightmarish
              version of family imaginable.
            </article>

            <button>View Movies</button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: ` linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(${banner3})`,
          }}
        >
          <div className="movie-info">
            <h1>The Super Mario Bros.</h1>
            <h2>Adventure | Comedy | 92 min</h2>
            <article>
              A Brooklyn plumber named Mario travels through the Mushroom
              Kingdom with a princess named Peach and an anthropomorphic
              mushroom named Toad to find Mario's brother, Luigi, and to save
              the world from a ruthless fire-breathing Koopa named Bowser.
            </article>

            <button>View Movies</button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: ` linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(${banner4})`,
          }}
        >
          <div className="movie-info">
            <h1>John Wick: Chapter 4</h1>
            <h2>Action | Thriller | 169 min</h2>
            <article>
              John Wick uncovers a path to defeating The High Table. But before
              he can earn his freedom, Wick must face off against a new enemy
              with powerful alliances across the globe and forces that turn old
              friends into foes.
            </article>

            <button>View Movies</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
