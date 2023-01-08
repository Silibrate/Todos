import arrowImg from '../../images/strelka.svg';
import RubakaImg from '../../images/Rubaka.png';

const Builds = () => {
  return (
    <section className="builds">
      <div className="builds__container">
        <div className="cart">
          <p className="cart__subtitle">
            Билды
          </p>
          <h2 className="cart__title">
            Рубака через вихрь. Билд на дуэлянта
          </h2>
          <p className="cart__text">
            Рубака через Вихрь (Cyclone) - сильный боец ближнего боя, использующий каноническую способность. Это очень приятный билд для зачистки карт.
          </p>
          <div className="cart__container">
            <img className='cart__img' src={RubakaImg} alt="Персонаж" />
            <div className="cart__info">
              <p className="cart__date">04 января</p>
              <a className='cart__link' href="#">Читать <img className='cart__link__arrow' src={arrowImg} alt="Стрелка" /></a>
            </div>
          </div>
        </div>

        <div className="cart">
          <p className="cart__subtitle">
            Билды
          </p>
          <h2 className="cart__title">
            Рубака через вихрь. Билд на дуэлянта
          </h2>
          <p className="cart__text">
            Рубака через Вихрь (Cyclone) - сильный боец ближнего боя, использующий каноническую способность. Это очень приятный билд для зачистки карт.
          </p>
          <div className="cart__container">
            <img className='cart__img' src={RubakaImg} alt="Персонаж" />
            <div className="cart__info">
              <p className="cart__date">04 января</p>
              <a className='cart__link' href="#">Читать <img className='cart__link__arrow' src={arrowImg} alt="Стрелка" /></a>
            </div>
          </div>
        </div>

        <div className="cart">
          <p className="cart__subtitle">
            Билды
          </p>
          <h2 className="cart__title">
            Рубака через вихрь. Билд на дуэлянта
          </h2>
          <p className="cart__text">
            Рубака через Вихрь (Cyclone) - сильный боец ближнего боя, использующий каноническую способность. Это очень приятный билд для зачистки карт.
          </p>
          <div className="cart__container">
            <img className='cart__img' src={RubakaImg} alt="Персонаж" />
            <div className="cart__info">
              <p className="cart__date">04 января</p>
              <a className='cart__link' href="#">Читать <img className='cart__link__arrow' src={arrowImg} alt="Стрелка" /></a>
            </div>
          </div>
        </div>

        <div className="cart">
          <p className="cart__subtitle">
            Билды
          </p>
          <h2 className="cart__title">
            Рубака через вихрь. Билд на дуэлянта
          </h2>
          <p className="cart__text">
            Рубака через Вихрь (Cyclone) - сильный боец ближнего боя, использующий каноническую способность. Это очень приятный билд для зачистки карт.
          </p>
          <div className="cart__container">
            <img className='cart__img' src={RubakaImg} alt="Персонаж" />
            <div className="cart__info">
              <p className="cart__date">04 января</p>
              <a className='cart__link' href="#">Читать <img className='cart__link__arrow' src={arrowImg} alt="Стрелка" /></a>
            </div>
          </div>
        </div>
      </div>
      <button className='builds__button'>Смотреть остальные билды</button>
    </section>
  );
}

export default Builds;