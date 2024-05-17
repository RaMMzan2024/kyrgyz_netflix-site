import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitileCards from '../../components/TitileCards/TitleCards';
import Footer from '../../components/Footer/Footer';




const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Обнаружение его связей с тайной древнего ордена, молодой
            человек, живущий в современном Стамбуле, отправляется на поиски, чтобы спасти 
 города с Бессмертным врагом.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitileCards />
        </div>
      </div>
      <div className="more-cards">
        <TitileCards title={"Фильмы-блокбастеры"} category={"top_rated"} />
        <TitileCards title={"Только на Netflix"} category={"popular"} />
        <TitileCards title={"Предстоящий"} category={"upcoming"} />
        <TitileCards title={"Лучшие фотографии для Вас"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;