const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__subscription">
          <h3 className="footer__title">Узнавай самым первым</h3>
          <form className="footer__form" action="submit">
            <input placeholder="E-mail" className="footer__input" type="email" />
            <button className="footer__button"></button>
          </form>
        </div>
        <div className="footer__nav">
          <nav>
            <ul className="footer__lists">
              <div className="footer__list__br">
                <li className="footer__list"><a className="footer__list__link" href="#">Главная </a></li>
                <li className="footer__list"><a className="footer__list__link" href="#">Билды</a></li>
              </div>
              <div className="footer__list__br">
                <li className="footer__list"><a className="footer__list__link" href="#">О проекте</a></li>
                <li className="footer__list"><a className="footer__list__link" href="#">FAQ</a></li>
              </div>
              <div className="footer__list__br">
                <li className="footer__list"><a className="footer__list__link" href="#">Задизайнено студией: </a></li>
                <li className="footer__list"><a className="footer__list__link" href="#"> AumiDigital</a></li>
              </div>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__ifo">@SILIBRATE</p>
        <p className="footer__ifo">@MARKOFFKAQ</p>
        <p className="footer__ifo">BEHANCE/QAFUXX</p>
        <p className="footer__ifo">ПО РЕКЛАМЕ</p>
      </div>
    </footer>
  );
}

export default Footer;