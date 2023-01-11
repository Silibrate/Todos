/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import LogoTitle from '../../images/logoTitle.svg';
import burgerMenu from '../../images/burger.svg';
import closeImg from '../../images/close.svg';

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="logo">
          <img className="logo__img" src={Logo} alt="Лого" />
          <img className="logo__img__text" src={LogoTitle} alt="ЛогоТекст" />
        </div>
        <nav className={`header__nav ${menuOpen ? "header__nav_open" : ""}`}>
          <Link to="/" className="header__link">Главная</Link>
          <a href="#" className="header__link">Билды</a>
          <a href="#" className="header__link">О проекте</a>
        </nav>
        <img onClick={() => setMenuOpen(menuOpen ? false : true)} className='header__burger' src={menuOpen ? closeImg : burgerMenu} alt="Меню" />
        <p className='faq'>FAQ</p>
      </div>
    </header >
  );
}

export default Header;