import React, { useState } from 'react';
import cn from 'classnames';
import s from './styles.module.scss';
import brainImg from '../../assets/images/brain-img.png';
import { Button } from '../ui/Button';

const articles = [
  {
    title: 'Надо ли вам это?',
    content: `
      Зачем вообще питаться <span className={s.bookSection__about__textThumbnail}>здорово и «правильно»</span>? И надо ли вам это, дорогой читатель? И что вообще значит — «здорово и правильно»? <br /><br />
      Мы часто слышим про такую пропорцию: «красота, здоровье, фигура — это на 80% питание, и на 20% - тренировки». Кто-то говорит о соотношении 70/30, но в любом случае цифра — умозрительная и примерная, штангенциркулем, калипером или любым другим прибором это не измерить. <br /><br />
      Еще есть выражение:<span className={s.bookSection__about__textItalic}>«Мы есть то, что мы едим» (и вдыхаем!) — можно спорить о том, кто это первым сказал, но не о том, что это справедливо. По мнению ученых, наше тело обновляется полностью новым набором клеток за 7-10 лет. Это средняя цифра, все сильно зависит от того, о каких тканях идет речь: кровь обновляется быстрее всего, счет идет на дни и недели, связки, кости - наоборот - медленнее всех. </span> <br/><br />
      При этом не хочется отдавать <span className={s.bookSection__about__textThumbnail}> 80% своего времени и внимания</span> на заботы о питании.
      И решать каждый день одни и те же задачи. <br/><br />
      <span className={s.bookSection__about__textItalic}>Картинка ниже отлично иллюстрирует долю питания в голове человека, который живет полноценной жизнью и не скатывается мыслями только к еде.</span><br /><br />
      <img className={s.bookSection__about__textImg} src="{brainImg}" alt="фото из книги" /><br /><br />
      А вот когда тема питания расширяет свою зону влияния в ваших мыслях — это уже
      нездорово. Даже если ваша тарелка выглядит безупречно, но дается с помощью жертвы остальных сфер жизни — можно ли назвать такую жизнь счастливой? А здоровой? <br />
      Задача, которая стоит перед этой книгой — дать простое, понятное, основанное на современных научных знаниях решение и ответ на вопрос «Как питаться одновременно максимально здорово и просто». <br/>
      Книга «Метод Тарелки» для вас, если вы хотите: <br/>
      <ul className={s.bookSection__about__textList}>
        <li className={s.bookSection__about__textListItem}>перестать ежедневно беспокоиться о своем питании, проверяя его на полноценность и сбалансированность,</li>
        <li className={s.bookSection__about__textListItem}>прожить дольше и активнее (а здоровое питание — важная часть этой задачи),</li>
        <li className={s.bookSection__about__textListItem}>если вы хотите того же самого своим детям, родителям и партнеру, важно понятно им это объяснить и лучше — собственным примером.</li>
      </ul>
      В книге вы найдете выводы из обзоров научных исследований о питании за почти 10 лет существования проекта Зожник, учебных материалов Ассоциации профессионалов фитнеса, десятков книг от передовых специалистов о питании. <br/><br />
      <span className={s.bookSection__about__textThumbnail}>Все, что здесь написано, не придумано — это выжимки из статей, учебников, книг, исследований для облегчения понимания и экономии вашего времени.</span><br/><br />
      <span className={s.bookSection__about__textItalic}>А еще эта книга живая. Она растет как дерево. Мы добавляем, обновляем, улучшаем 
      и выпускаем обновленную версию. И если у вас есть пожелания, как улучшить книгу, если вы обнаружили какую-то ошибку или вы специалист и предлагаете изучить новые научные данные - пишите нам на m@zozhnik.ru </span>
    `,
  },
  {
    title: 'Вредные советы / Что надо выкинуть из головы',
    content: 'Содержание второй статьи...',
  },
  {
    title: '6 тезисов о здоровом питании',
    content: 'Содержание третьей статьи...',
  },
  {
    title: 'Метод Тарелки. Простые принципы здорового питания',
    content: 'Содержание четвертой статьи...',
  },
  {
    title: 'Специи. Золотые ключики разнообразия',
    content: 'Содержание пятой статьи...',
  },
  {
    title: 'Как съедать больше овощей',
    content: 'Содержание шестой статьи...',
  },
];

export const BookSection = () => {
  const [activeArticle, setActiveArticle] = useState(articles[0]);

  return (
    <div className={s.bookSection__container}>
      <div className={s.bookSection__about}>
        <div className={s.bookSection__about__title}>{activeArticle.title}</div>
        <div
          className={s.bookSection__about__text}
          dangerouslySetInnerHTML={{ __html: activeArticle.content }}
        />
      </div>
      <div className={s.bookSection__content}>
        <div className={s.bookSection__content__title}>Содержание</div>
        <ul className={s.bookSection__content__list}>
          {articles.map((article, index) => (
            <li
              key={index}
              className={cn(s.bookSection__content__listItem, {
                [s.active]: activeArticle.title === article.title,
              })}
              onClick={() => setActiveArticle(article)}
            >
              {article.title}
            </li>
          ))}
        </ul>
        <Button
          title="Открыть доступ"
          onClick={() => console.log('Button clicked')}
          colorScheme={1}
          size={1}
        />
      </div>
    </div>
  );
};
