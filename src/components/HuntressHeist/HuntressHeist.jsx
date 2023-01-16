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
import frenzy from '../../images/gems/frenzy.png';
import hextouchSupport from '../../images/gems/hextouchSupport.png';
import chainSupport from '../../images/gems/chainSupport.png';
import lifetapSupport from '../../images/gems/lifetapSupport.png';
import flamability from '../../images/gems/flamability.png';
import lesserMultipleProjectilesSupport from '../../images/gems/lesserMultipleProjectilesSupport.png';
import lgniteProliferationSupport from '../../images/gems/lgniteProliferationSupport.png';
import combustionSupport from '../../images/gems/combustionSupport.png';
import ballistaTotemSupport from '../../images/gems/ballistaTotemSupport.png';
import elementalDamageWithAttacksSupport from '../../images/gems/elementalDamageWithAttacksSupport.png';
import flameDash from '../../images/gems/flameDash.png';
import blinkArrow from '../../images/gems/blinkArrow.png';
import witheringStep from '../../images/gems/witheringStep.png';
import castWhenDamageTakenSupport from '../../images/gems/castWhenDamageTakenSupport.png';
import moltenShell from '../../images/gems/moltenShell.png';

import defianceBanner from '../../images/gems/defianceBanner.png';
import flameSurge from '../../images/gems/flameSurge.png';
import grace from '../../images/gems/grace.png';
import determination from '../../images/gems/determination.png';
import arroganceSupport from '../../images/gems/arroganceSupport.png';
import vitality from '../../images/gems/vitality.png';

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
                  <p className="build__description__right__list__subtitle_plus">Сложно умереть</p>
                  <p className="build__description__right__list__subtitle_plus">Фармит огромное количество валюты</p>
                  <p className="build__description__right__list__subtitle_plus">Билдообразующий предмет стоит 1c </p>
                  <p className="build__description__right__list__subtitle_plus">Сильные и дешевые апгрейды </p>
                  <p className="build__description__right__list__subtitle_plus">Быстро бегает</p>
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



              <div className="leveling__container">
                <h2 className="leveling__title">Финальный Гир:</h2>
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

              <div className="leveling__container">
                <h2 className="leveling__title">Камни умений:</h2>
                <div className="leveling__text">
                  <div className="leveling__text__conteiner leveling__text_gems">
                    <h3 className="leveling__text__title">Нагрудная броня</h3>
                    <p className="leveling__subtitle">Данная связка дает нам заряды ярости, которые дают нам 24% скорости атаки и 12% чистого урона + вешает горючесть на врагов. Горючесть позволяет добрать шанс поджога, которого нам не хватает и увеличивает урон от огня.</p>
                    <ul className="leveling__gems__lists" >
                      <li className="leveling__gems__list"><span className="gem green"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9GcmVuenkiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/cd16439994/Frenzy.png" alt="Бешенство" /> Бешенство/Frenzy <img className="gem__img__hover" src={frenzy} alt="Бешенство" /></span></li>
                      <li className="leveling__gems__list"><span className="gem blue"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9TdXBwb3J0L0N1cnNlT25IaXQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/da0ae156c5/CurseOnHit.png" alt="Касание порчи" /> Касание порчи/Hextouch Support <img className="gem__img__hover" src={hextouchSupport} alt="Касание порчи" /></span></li>
                      <li className="leveling__gems__list"><span className="gem green"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9TdXBwb3J0L0xlc3Nlck11bHRpcGxlUHJvamVjdGlsZXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/db32a787d3/LesserMultipleProjectiles.png" alt="Дополнительные снаряды" /> Дополнительные снаряды/Lesser Multiple Projectiles Support <img className="gem__img__hover" src={lesserMultipleProjectilesSupport} alt="Дополнительные снаряды" /></span></li>
                      <li className="leveling__gems__list"><span className="gem blue"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9GbGFtbWFiaWxpdHkiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/ba43e87752/Flammability.png" alt="Горючесть" /> Горючесть/Flammability <img className="gem__img__hover" src={flamability} alt="Горючесть" /></span></li>
                      <li className="leveling__gems__list"><span className="gem red"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9TdXBwb3J0L0xpZmVUYXAiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/9cef38ae47/LifeTap.png" alt="Жизнеотвод" /> Жизнеотвод/Lifetap Support <img className="gem__img__hover" src={lifetapSupport} alt="Жизнеотвод" /></span></li>
                      <li className="leveling__gems__list"><span className="gem green"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9TdXBwb3J0L2NoYWluIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/812e47f631/chain.png" alt="Цепь" /> Цепь/Chain Support <img className="gem__img__hover" src={chainSupport} alt="Цепь" /></span></li>
                    </ul>
                  </div>

                  <div className="leveling__text__conteiner">
                    <h3 className="leveling__text__title">Лук</h3>
                    <p className="leveling__subtitle">ignite proliferation меняем на empower 3+ lvl и получаем мод на перчатках на распространение на других врагов в радиусе c помощью (Мелкий древний уголёк).</p>
                    <ul className="leveling__gems__lists" >
                      <li className="leveling__gems__list"><span className="gem green"><img className="gem__img__hover" src={explosiveArrow} alt="Взрывная стрела" /><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9FeHBsb3NpdmVBcnJvdyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/a9cd35adfb/ExplosiveArrow.png" alt="Взрывная стрела" /> Взрывная стрела/Explosive arrow</span></li>
                      <li className="leveling__gems__list"><span className="gem red"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9TdXBwb3J0L1dlYXBvbkVsZW1lbnRhbERhbWFnZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/2cfbdc80b2/WeaponElementalDamage.png" alt="Урон от стихий атаками" /> Урон от стихий атаками/Elemental Damage with Attacks Support <img className="gem__img__hover" src={elementalDamageWithAttacksSupport} alt="Урон от стихий атаками" /></span></li>
                      <li className="leveling__gems__list"><span className="gem red"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9TdXBwb3J0L1JhbmdlZEF0dGFja1RvdGVtIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/b7ee0c564e/RangedAttackTotem.png" alt="Тотем-баллиста" /> Тотем-баллиста/Ballista Totem Support <img className="gem__img__hover" src={ballistaTotemSupport} alt="Тотем-баллиста" /></span></li>
                      <li className="leveling__gems__list"><span className="gem blue"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9TdXBwb3J0L0NoYW5jZXRvSWduaXRlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/b24521e59a/ChancetoIgnite.png" alt="Воспламенение" /> Воспламенение/Combustion Support <img className="gem__img__hover" src={combustionSupport} alt="Воспламенение" /></span></li>
                      <li className="leveling__gems__list"><span className="gem blue"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9TdXBwb3J0L0lnbml0ZVByb2xpZmVyYXRpb24iLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e6a337b58f/IgniteProliferation.png" alt="Распространение поджога" /> Распространение поджога/Lifetap Support <img className="gem__img__hover" src={lgniteProliferationSupport} alt="Распространение поджога" /></span></li>
                      <li className="leveling__gems__list"><span className="gem red"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9TdXBwb3J0L0xpZmVUYXAiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/9cef38ae47/LifeTap.png" alt="Жизнеотвод" /> Жизнеотвод/Lifetap Support <img className="gem__img__hover" src={lifetapSupport} alt="Жизнеотвод" /></span></li>
                    </ul>
                  </div>

                  <div className="leveling__text__conteiner">
                    <h3 className="leveling__text__title">Любой 4 линк</h3>
                    <p className="leveling__subtitle">Данная связка дает нам большую мобильность так как <span className="gem green"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9CbGlua0Fycm93IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/2836299d6e/BlinkArrow.png" alt="Стрела-телепорт" /> Стрела-телепорт/Blink Arrow <img className="gem__img__hover" src={blinkArrow} alt="Стрела-телепорт" /></span> и <span className="gem blue"><img className="gem__img__hover" src={flameDash} alt="Огненный рывок" /><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9GbGFtZURhc2giLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/6816a20975/FlameDash.png" alt="Огненный рывок" />Огненный рывок/Flame dash</span> имею разные откаты, что позволяет постоянно спамить их по очереди.</p>
                    <ul className="leveling__gems__lists" >
                      <li className="leveling__gems__list"><span className="gem blue"><img className="gem__img__hover" src={flameDash} alt="Огненный рывок" /><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9GbGFtZURhc2giLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/6816a20975/FlameDash.png" alt="Огненный рывок" />Огненный рывок/Flame dash</span></li>
                      <li className="leveling__gems__list"><span className="gem green"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9CbGlua0Fycm93IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/2836299d6e/BlinkArrow.png" alt="Стрела-телепорт" /> Стрела-телепорт/Blink Arrow <img className="gem__img__hover" src={blinkArrow} alt="Стрела-телепорт" /></span></li>
                      <li className="leveling__gems__list"><span className="gem green"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9XaXRoZXJpbmdTdGVwR2VtIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/6f949bee1e/WitheringStepGem.png" alt="Губительный шаг" /> Губительный шаг/Withering Step <img className="gem__img__hover" src={witheringStep} alt="Губительный шаг" /></span></li>
                      <li className="leveling__gems__list"><span className="gem red"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9TdXBwb3J0L0xpZmVUYXAiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/9cef38ae47/LifeTap.png" alt="Жизнеотвод" /> Жизнеотвод/Lifetap Support <img className="gem__img__hover" src={lifetapSupport} alt="Жизнеотвод" /></span></li>
                    </ul>
                  </div>

                  <div className="leveling__text__conteiner">
                    <h3 className="leveling__text__title">Любой 2 линк</h3>
                    <p className="leveling__subtitle">уменьшения всего входящего по нам урона под действием <span className="gem red"><img className="gem__img__hover" src={moltenShell} alt="Расплавленный панцирь" /><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9Nb2x0ZW5TaGVsbCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/9d2618a44a/MoltenShell.png" alt="Расплавленный панцирь" />Расплавленный панцирь/Molten Shell</span> за счет брони.</p>
                    <ul className="leveling__gems__lists" >
                      <li className="leveling__gems__list"><span className="gem red"><img className="gem__img__hover" src={moltenShell} alt="Расплавленный панцирь" /><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9Nb2x0ZW5TaGVsbCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/9d2618a44a/MoltenShell.png" alt="Расплавленный панцирь" />Расплавленный панцирь/Molten Shell</span></li>
                      <li className="leveling__gems__list"><span className="gem red"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9TdXBwb3J0L0Nhc3RPbkRtZ1Rha2VuIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/2f075f5964/CastOnDmgTaken.png" alt="Сотворение чар при получении урона" /> Сотворение чар при получении урона/Cast when Damage Taken Support <img className="gem__img__hover" src={castWhenDamageTakenSupport} alt="Сотворение чар при получении урона" /></span></li>
                    </ul>
                  </div>

                  <div className="leveling__text__conteiner">
                    <h3 className="leveling__text__title">Любой 2 линк</h3>
                    <p className="leveling__subtitle">Резервирует здоровье но взамен дает большое количество регенерации.</p>
                    <ul className="leveling__gems__lists" >
                      <li className="leveling__gems__list"><span className="gem red"><img className="gem__img__hover" src={vitality} alt="Живучесть" /><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9WaXRhbGl0eSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/125dbe04db/Vitality.png" alt="Живучесть" />Живучесть/Vitality</span></li>
                      <li className="leveling__gems__list"><span className="gem red"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9TdXBwb3J0L0Jsb29kTWFnaWMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/f90e23f319/BloodMagic.png" alt="Заносчивость" /> Заносчивость/Arrogance Support <img className="gem__img__hover" src={arroganceSupport} alt="Заносчивость" /></span></li>
                    </ul>
                  </div>

                  <div className="leveling__text__conteiner">
                    <h3 className="leveling__text__title">Гемы без линка</h3>
                    <p className="leveling__subtitle">И <span className="gem blue"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9GbGFtZXdoaXAiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/005ce2aecc/Flamewhip.png" alt="Выброс пламени" /> Выброс пламени/Flame Surge <img className="gem__img__hover" src={flameSurge} alt="Выброс пламени" /></span> - оставляем 1 лвл чтобы не тратил ману.
                      Он дает 25% more damage когда враг стоит на подожжённой земле. Используем для сингл таргета</p>
                    <ul className="leveling__gems__lists" >
                      <li className="leveling__gems__list"><span className="gem red"><img className="gem__img__hover" src={determination} alt="Решимость" /><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9EZXRlcm1pbmF0aW9uIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/64c8ca9798/Determination.png" alt="Решимость" />Решимость/Determination</span></li>
                      <li className="leveling__gems__list"><span className="gem green"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9HcmFjZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/e98082048a/Grace.png" alt="Грация" /> Грация/Grace <img className="gem__img__hover" src={grace} alt="Грация" /></span></li>
                      <li className="leveling__gems__list"><span className="gem red"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9Bcm1vdXJhbmRFdmFzaW9uQmFubmVyIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/b1f3dcfaa6/ArmourandEvasionBanner.png" alt="Знамя непокорности" /> Знамя непокорности/Defiance Banner <img className="gem__img__hover" src={defianceBanner} alt="Знамя непокорности" /></span></li>
                      <li className="leveling__gems__list"><span className="gem blue"><img className="gem__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9GbGFtZXdoaXAiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/005ce2aecc/Flamewhip.png" alt="Выброс пламени" /> Выброс пламени/Flame Surge <img className="gem__img__hover" src={flameSurge} alt="Выброс пламени" /></span></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="leveling__container">
                <h2 className="leveling__title">Крафт:</h2>
                <div className="leveling__text">
                  <div className="leveling__text__conteiner">
                    <p className="leveling__subtitle">Найти дешевый 6-линк лук нам позволит карточка Имперское наследие. Данная карточка имеет 4 удобные карты для выпадения и достаточно дешевая.
                      Самый легкий способ ее достать это запускать мисси Кирака с надписью (вы находите полную коллекцию карт), всегда будет то что вам надо.</p>
                    <p className="leveling__subtitle">Для получения лука с +3 к размещённым камням нужна 1 <span className="currency"><img className="currency__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lNb2RWYWx1ZXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e1a54ff97d/CurrencyModValues.png" alt="божественная сфера" />божественная сфера</span>, 1 <span className="currency"><img className="currency__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lBZGRNb2RUb1JhcmUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/b102771c23/CurrencyAddModToRare.png" alt="сфера возвышения" />сфера возвышения</span> и несколько сущностей <span className="currency currency_essence"><img className="currency__img" src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvRXNzZW5jZS9EcmVhZDYiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/8910bae3d0/Dread6.png" alt="Визжащая сущность жути" />Визжащая сущность жути</span>.</p>
                    <p className="leveling__subtitle">1. Для будущего крафта с огорода желательно поднять качество до 28+ с помощью Безупречного ископаемого.</p>
                    <p className="leveling__subtitle">2. Кидать Сущность до тех пор пока не выпадет скорость атаки и хотя бы 1 свободный суффикс и префикс.</p>
                    <p className="leveling__subtitle">3. После крафтим на станке (не может выпасть атак мод) за божественную сферу, кидаем сферу возвышения и гарантированно получаем +1.</p>
                    <p className="leveling__subtitle">4. Убираем (не может выпасть атак мод) на %множитель огненного урона.</p>
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