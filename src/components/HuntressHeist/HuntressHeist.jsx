import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Advertising from "../Advertising/Advertising";
import buildImg from '../../images/HantersIn.png';
import Logo from '../../images/logo.svg';
import krestImg from '../../images/descriptionKrest.svg';

const HuntressHeist = () => {
  return (
    <>
      <section className="build">
        <div className="build__header">
          <img className="build__header__img" src={buildImg} alt="Персонаж" />
          <div className="build__header__container">
            <p className="build__header__subtitle">Приятный фарм ограбления</p>
            <h1 className="build__header__title">Explosive arrow Билд на охотницу</h1>
            <p className="build__header__subtitle">Последнее обновление : 10/02/23</p>
          </div>
        </div>
        <div className="build__container">
          <div className="build__info">
            <div className="build__description">
              <h2 className="build__description__title">
                Описание билда
              </h2>
              <p className="build__description__subtitle">
                Суть билда заключаться в эффективном фарме валюты на старте лиги и не только. Из за высокой скорости бега и правильных NPC мы можем пробегать механику кражи.
                Помимо фарма большого количества валюты в краже персонаж так же подходит для фарма убер лабирита и усилиной ее версии для большого количества чарок. По окончанию фарма у вас будет персонаж большого уровня (97-100) так как в краже очень жирные мобы у которых большой базовый опыт.
              </p>
              <div className="build__description__advertising">
                <div className="build__description__advertising__container">
                  <Link to='#' className="build__description__advertising__link">TG</Link>
                  <Link to='#' className="build__description__advertising__link">BE</Link>
                  <Link to='#' className="build__description__advertising__link">ПО РЕКЛАМЕ</Link>
                </div>
                <img src={Logo} alt="Лого" />
              </div>
            </div>
            <div className="build__description__right">
              <ul className="build__description__right__lists">
                <li className="build__description__right__list"><span className="build__description__right__list__title">Персонаж</span> <span className="build__description__right__list__subtitle">Охотница</span></li>
                <li className="build__description__right__list"><span className="build__description__right__list__title">Стоимость</span> <span className="build__description__right__list__subtitle">Дешевая</span></li>
                <li className="build__description__right__list"><span className="build__description__right__list__title">Урон</span> <span className="build__description__right__list__subtitle">Высокий</span></li>
                <li className="build__description__right__list"><span className="build__description__right__list__title build__description__right__text_red">Минусы</span> <span className="build__description__right__list__subtitle">Узконаправленный билд под определенные механики</span></li>
                <li className="build__description__right__list"><span className="build__description__right__list__title build__description__right__text_green">Плюсы</span> <span className="build__description__right__list__subtitle">
                  Сложно умереть <br />
                  Фармит огромное количество валюты<br />
                  Билдообразующий предмет стоит 1c<br />
                  Сильные и дешевые апгрейды<br />
                  Быстро бегает<br />
                </span></li>
                <div className="build__description__right__XXX">
                  <img src={krestImg} alt="Крест" className="build__description__right__XXX__img" />
                  <img src={krestImg} alt="Крест" className="build__description__right__XXX__img" />
                  <img src={krestImg} alt="Крест" className="build__description__right__XXX__img" />
                </div>
              </ul>
            </div>
          </div>
        </div>

      </section>
      <Advertising />
      <Footer />
    </>
  );
}

export default HuntressHeist;