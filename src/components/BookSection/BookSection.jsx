import React from 'react';
import cn from 'classnames';
import s from './styles.module.scss';
import brainImg from '../../assets/images/brain-img.png'
import { Button } from '../ui/Button';

export const BookSection = () => {
	return (
		<div className={s.bookSection__container}>
			<div className={s.bookSection__about}>
			<div className={s.bookSection__about__title}>
			Надо ли вам это?
			</div>
			<div className={s.bookSection__about__text}>
			Зачем вообще питаться здорово и «правильно»? И надо ли вам это, дорогой читатель? И что вообще значит — «здорово и правильно»? <br /><br />
			Мы часто слышим про такую пропорцию: «красота, здоровье, фигура — это на 80% питание, и на 20% - тренировки». Кто-то говорит о соотношении 70/30, но в любом случае цифра — умозрительная и примерная, штангенциркулем, калипером или любым другим прибором это не измерить. <br /><br />
			Еще есть выражение: «Мы есть то, что мы едим» (и вдыхаем!) — можно спорить о том, кто это первым сказал, но не о том, что это справедливо. По мнению ученых, наше тело обновляется полностью новым набором клеток за 7-10 лет. Это средняя цифра, все сильно зависит от того, о каких тканях идет речь: кровь обновляется быстрее всего, счет идет на дни и недели, связки, кости - наоборот - медленнее всех. <br/><br />
			При этом не хочется отдавать 80% своего времени и внимания на заботы о питании.
И решать каждый день одни и те же задачи. <br/><br />
Картинка ниже отлично иллюстрирует долю питания в голове человека, который живет полноценной жизнью и не скатывается мыслями только к еде.<br /><br />
<img className={s.bookSection__about__textImg} src={brainImg} alt="фото из книги" /><br /><br />
А вот когда тема питания расширяет свою зону влияния в ваших мыслях — это уже
нездорово. Даже если ваша тарелка выглядит безупречно, но дается с помощью жертвы остальных сфер жизни — можно ли назвать такую жизнь счастливой? А здоровой? <br />
Задача, которая стоит перед этой книгой — дать простое, понятное, основанное на современных научных знаниях решение и ответ на вопрос «Как питаться одновременно максимально здорово и просто». <br/>
Книга «Метод Тарелки» для вас, если вы хотите: <br/><br />
<ul className={s.bookSection__about__textList}>
	<li className={s.bookSection__about__textListItem}>перестать ежедневно беспокоиться о своем питании, проверяя его на полноценность и сбалансированность,</li>
	<li className={s.bookSection__about__textListItem}>прожить дольше и активнее (а здоровое питание — важная часть этой задачи),</li>
	<li className={s.bookSection__about__textListItem}>если вы хотите того же самого своим детям, родителям и партнеру, важно понятно им это объяснить и лучше — собственным примером.</li>
</ul>
В книге вы найдете выводы из обзоров научных исследований о питании за почти 10 лет существования проекта Зожник, учебных материалов Ассоциации профессионалов фитнеса, десятков книг от передовых специалистов о питании. <br/><br />
Все, что здесь написано, не придумано — это выжимки из статей, учебников, книг, исследований для облегчения понимания и экономии вашего времени. <br/><br />
А еще эта книга живая. Она растет как дерево. Мы добавляем, обновляем, улучшаем 
и выпускаем обновленную версию. И если у вас есть пожелания, как улучшить книгу, если вы обнаружили какую-то ошибку или вы специалист и предлагаете изучить новые научные данные - пишите нам на m@zozhnik.ru <br/><br />
<a href=""></a>

			</div>
			
			</div>






			<div className={s.bookSection__content}>
			<div className={s.bookSection__content__title}>
			
			</div>
	
			<ul className={s.bookSection__content__list}>
				<li className={s.bookSection__content__listItem}>Надо ли вам это?</li>
				<li className={s.bookSection__content__listItem}>Вредные советы / Что надо выкинуть из головы</li>
				<li className={s.bookSection__content__listItem}>6 тезисов о здоровом питании</li>
				<li className={s.bookSection__content__listItem}>Метод Тарелки.<br/>
				Простые принципы здорового питания</li>
				<li className={s.bookSection__content__listItem}>Специи. Золотые ключики разнообразия</li>
				<li className={s.bookSection__content__listItem}>Как съедать больше овощей</li>
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