import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Advertising from "../Advertising/Advertising";
import Leveling from "../Leveling/Leveling";
import buildImg from '../../images/HunteresDescripteonBild.png';
import Logo from '../../images/logo.svg';
import krestImg from '../../images/descriptionKrest.svg';
import RainOfArrows from '../../images/gems/RainOfArrows.png';
import LightningDamageSupport from '../../images/gems/LightningDamageSupport.png';
import ColdDamage from '../../images/gems/ColdDamage.png';
import explosiveArrow from '../../images/gems/explosiveArrow.png';
import quillRain from '../../images/unique/quillRain.png';
import HyrrisBite from '../../images/unique/HyrrisBite.png';
import goldrim from '../../images/unique/goldrim.png';
import tabulaRasa from '../../images/unique/tabulaRasa.png';
import wilmasRequital from '../../images/unique/wilmasRequital.png';
import dyadianDawn from '../../images/unique/dyadianDawn.png';

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
                  Сложно умереть
                  Фармит огромное количество валюты
                  Билдообразующий предмет стоит 1c
                  Сильные и дешевые апгрейды
                  Быстро бегает
                </span></li>
                <div className="build__description__right__XXX">
                  <img src={krestImg} alt="Крест" className="build__description__right__XXX__img" />
                  <img src={krestImg} alt="Крест" className="build__description__right__XXX__img" />
                  <img src={krestImg} alt="Крест" className="build__description__right__XXX__img" />
                </div>
              </ul>
            </div>
          </div>
          <Leveling>
            <div className="leveling">

              <div className="leveling__container">
                <h2 className="leveling__title">Левелинг:</h2>
                <div className="leveling__text">
                  <p className="leveling__subtitle">Начинаем с
                    <span className="gem green">
                      <img className="gem__img__hover" src={RainOfArrows} alt="Описание" />
                      <img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9SYWlub2ZBcnJvd3MiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/a7e02c03ad/RainofArrows.png" alt="Ливень стрел" />
                      Ливень стрел/Rain of arrows</span>, в связке с камнями на
                    <span className="gem blue"><img className="gem__img__hover" src={LightningDamageSupport} alt="Урон молнией" /> <img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9TdXBwb3J0L0FkZGVkTGlnaHRuaW5nRGFtYWdlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/2d0e496d25/AddedLightningDamage.png" alt="Урон молнией" />Урон молнией/Lightning Damage Support</span>и
                    <span className="gem green"><img className="gem__img__hover" src={ColdDamage} alt="Урон холодом" /> <img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9TdXBwb3J0L0FkZGVkQ29sZERhbWFnZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/2da648ff1b/AddedColdDamage.png" alt="Урон холодом" />Урон холодом/cold damage supports.</span>
                    Во втором акте берем 2 любых элементальных геральда для флат урона.
                    На 28 переодеваемся в <span className="gem green"><img className="gem__img__hover" src={explosiveArrow} alt="Взрывная стрела" /><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9FeHBsb3NpdmVBcnJvdyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/a9cd35adfb/ExplosiveArrow.png" alt="Взрывная стрела" /> Взрывная стрела/explosive arrow</span>.</p>
                </div>
              </div>

              <div className="leveling__unique__items">
                <div className="leveling__container">
                  <h2 className="leveling__title">Уникальные предметы для прокачки:</h2>
                  <div className="leveling__text">
                    <p className="leveling__subtitle">
                      <span className="unique"><img className="unique__hover" src={quillRain} alt="Ливень перьев" />Ливень перьев/Quill Rain</span>. Лук с большим количеством атак в секунду что идеально подходит под быстрый левелинг и для локаций 83 уровня. Одевается на 5 уровне персонажа и прослужит в плоть до эндгейма. Меняем только в том случае если есть лук с +3 к уровню камней и атак в секунду. Стоимость ~1с.
                    </p>
                    <p className="leveling__subtitle"><span className="unique"><img className="unique__hover" src={HyrrisBite} alt="Гибель Хайрри" /> Гибель Хайрри/Hyrri's Bite</span>. Хороший колчан с атрибутами и здоровьем за удар. Используем до кровавого акведука, после чего меняем на любой колчан с хп/резисты точность/периодический урон. Cтоимость ~1с.</p>
                    <p className="leveling__subtitle"><span className="unique"><img className="unique__hover" src={goldrim} alt="Золотой колпак" /> Золотой колпак/Goldrim</span>.Универсальная левелинг шляпа закрывает проблему с резистами. Можно Использовать до акведука. Меняем при наличии шлема с хп и большим количеством резистов.
                      стоимость ~3с.</p>
                    <p className="leveling__subtitle"><span className="unique"><img className="unique__hover" src={tabulaRasa} alt="Табула раса" />Табула раса/Tabula Rasa</span>.Универсальная левелинг рубашка делающая левелинг в разы быстрее из за наличия 6 связаных гнезд что сильно поднимает наш урон. Меняем при наличии 5 связанных гнезд с хп и резистами.
                      стоимость ~5с.</p>
                  </div>
                </div>
              </div>


              <div className="leveling__character">
                <div className="leveling__container">
                  <h2 className="leveling__title">
                    Прокачка персонажа:
                  </h2>
                  <div className="leveling__text">
                    <div className="leveling__text__conteiner">
                      <h3 className="leveling__text__title">
                        Дерево талантов
                      </h3>
                      <ul className="leveling__text__lists leveling__subtitle">
                        <li className="leveling__text__list"><a className="leveling__text__list__link" href="https://pastebin.com/wfzswm4J">- древо пассивный умений с плавным переходом от 1 уровня до 100</a> </li>
                        <li className="leveling__text__list"><a className="leveling__text__list__link" href="https://www.youtube.com/watch?v=yUSIFxjh6kI&t=0s">- Объяснения как и куда вставлять ссылку на древо билда.</a></li>
                      </ul>
                    </div>
                    <div className="leveling__text__conteiner">
                      <h3 className="leveling__text__title">Класс восхождения</h3>
                      <h4 className="leveling__text__title_h4">Налётчик</h4>
                      <p className="leveling__subtitle"><span className="leveling__subtitle_bold">1 - Быстрое нападение.</span> Увеличивает нашу скорость атаки и передвижения, освобождает место для флакона. </p>
                      <p className="leveling__subtitle"><span className="leveling__subtitle_bold">2 - Воплощение спешки.</span> Удваивает предыдущее восхождение и увеличивает шанс уклонения.</p>
                      <p className="leveling__subtitle"><span className="leveling__subtitle_bold">3 - Призрачный удар.</span> Облегчает набор подавления урона от чар и освобождает для флакона.</p>
                      <p className="leveling__subtitle"><span className="leveling__subtitle_bold">4 - Воплощение пелены.</span> Легкий способ повесить восприимчивость к огню и делает на неуязвимыми к стихийным состояниям.</p>
                    </div>
                    <div className="leveling__text__conteiner">
                      <h3 className="leveling__text__title">Пантеон</h3>
                      <h4 className="leveling__text__title_h4">Старший бог</h4>
                      <p className="leveling__subtitle">Душа Лунарис</p>
                      <h4 className="leveling__text__title_h4">Младший бог</h4>
                      <p className="leveling__subtitle">Душа Граткул</p>
                    </div>
                    <div className="leveling__text__conteiner">
                      <h3 className="leveling__text__title">Самоцветы</h3>
                      <p className="leveling__subtitle">Наносящие урон состояния. наносят урон на % быстрее
                        +% к множителю постепенного урона от огня
                        -урон тотемов, увеличение урона,
                        -% здоровье
                        -+% сопротивления всем стихиям</p>
                    </div>
                    <div className="leveling__text__conteiner">
                      <h3 className="leveling__text__title">Квест Разбойничьи дрязги</h3>
                      <p className="leveling__subtitle">Убейте всех бандитов.</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="leveling__character">
                <div className="leveling__container">
                  <h2 className="leveling__title">Нагрудная броня:</h2>
                  <div className="leveling__text">
                    <div className="leveling__text__conteiner">
                      <h3 className="leveling__text__title">Шлем</h3>
                      <p className="leveling__subtitle"><img className="unique__hover" src={wilmasRequital} alt="Возмездие Вильмы" /> <span className="unique"><img className="unique__hover" src={wilmasRequital} alt="Возмездие Вильмы" />Возмездие Вильмы - Диадема Солярис/Wilmas - Requital</span>. Позволяет сконвертировать скорость сотворения чар в скорость атаки полученную с усиленного боевого ража. В сумме мы получаем 70% скорости атаки, +1 к числу тотемов, необходимую точность, урон от стихийных атак
                        стоимость ~1с.</p>
                    </div>

                    <div className="leveling__text__conteiner">
                      <h3 className="leveling__text__title">Пояс</h3>
                      <p className="leveling__subtitle"><img className="unique__hover" src={wilmasRequital} alt="Возмездие Вильмы" /> <span className="unique"><img className="unique__hover" src={dyadianDawn} alt="Возмездие Вильмы" />Дядианская заря - Широкий ремень/Dyadian Dawn</span>. Самый сильный предмет для увеличения урона поджога (как можно быстрее следует намазать элементальными каталистами).Помимо урона дает необходимые резисты и здоровье.стоимость ~4с.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Leveling>
        </div>

      </section>
      <Advertising />
      <Footer />
    </>
  );
}

export default HuntressHeist;