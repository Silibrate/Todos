import newsImg from '../../images/News.png';
import eyeImg from '../../images/infoEye.svg';
import logo from '../../images/logo.svg';
import { useState } from 'react';

const NewGuide = () => {
  const [number, setNumber] = useState(0);
  return (
    <section className="news">
      <div className="news__container">
        <img className='news__img' src={newsImg} alt="Персонаж" />
        <div className="news__content">
          <div className="news__info">
            <p className="news__date">07/02/23</p>
            <p className='news__date__text'>{number} <img className='news__eye' src={eyeImg} alt="Глазик" /> </p>
          </div>
          <h1 onClick={() => setNumber(number + 1)} className='news__title'>Новый гайд на Некроманта</h1>
          <div className="news__build__info">
            <div className="news__build__content">
              <p className="news__build__title">Стоимость</p>
              <p className="news__build__subtitle">Дешевый</p>
            </div>
            <div className="news__build__content">
              <p className="news__build__title">Сложность</p>
              <p className="news__build__subtitle">Легкий</p>
            </div>
            <div className="news__build__content">
              <p className="news__build__title">Урон</p>
              <p className="news__build__subtitle">Высокий</p>
            </div>
          </div>
          <img className='news__logo' src={logo} alt="Лого" />
        </div>
      </div>
    </section>
  );
}

export default NewGuide;