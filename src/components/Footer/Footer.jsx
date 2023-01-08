const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__subscription">
          <h3 className="footer__title">Узнавай самым первым</h3>
          <form className="footer__form" action="submit">
            <input className="footer__input" type="text" />
            <button className="footer__button"></button>
          </form>
        </div>
        <div className="footer__nav">
          <nav>
            <ul className="footer__lists">
              <li className="footer__lists"><a href="#">Главная </a></li>
              <li className="footer__lists"><a href="#">Билды </a></li>
              <li className="footer__lists"><a href="#">О проекте </a></li>
              <li className="footer__lists"><a href="#">FAQ </a></li>
              <li className="footer__lists"><a href="#">Задизайнено студией: </a></li>
              <li className="footer__lists"><a href="#">AumiDigital </a></li>
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