import Logo from '../../images/logo.svg';
import advertisingImg from '../../images/advertisign.svg';

const Advertising = () => {
  return (
    <section className="advertising">
      <div className="advertising__tg">
        <p className="advertising__tg__text">ПО РЕКЛАМЕ TG: @MARKOFFKAQ / @SILIBRATE <img className="advertising__logo" src={Logo} alt="лого" />ПО РЕКЛАМЕ TG: @MARKOFFKAQ / @SILIBRATE</p>
      </div>

      <div className="advertising__container">
        <div className="advertising__info">
          <p className="advertising__info__text">
            Это самые популярные билды
            в этой лиге, смотреть другие тут.
          </p>
          <img className='advertising__img' src={advertisingImg} alt="Стрелка" />
        </div>
        <p className='advertising__text'>сайт обновляется
          каждый день.</p>
      </div>
    </section>
  );
}

export default Advertising;