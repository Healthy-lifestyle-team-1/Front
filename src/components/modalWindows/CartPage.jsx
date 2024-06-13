import React from 'react';
import { Button } from '../ui/Button';
import x from '../../assets/images/icons/light/X.svg';

import s from './styles.module.scss';

const CartPage = ({ onClose }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Dish 1', price: '$10', img: 'path/to/image1.jpg' },
    { id: 2, name: 'Dish 2', price: '$15', img: 'path/to/image2.jpg' },
  ]);

  const removeRow = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className={s.modalOverlay}>
      <div className={s.modal__content}>
        <button className={s.closeButton} onClick={onClose}>
          <img src={x} alt={'Закрыть'} />
        </button>
        <div className={s.cart__header}>
          <div className={s.cart__header__title}>Корзина</div>
          <div className={s.cart__header__text}>
            <div className={s.cart__header__text_total}>Сумма товаров</div>
            <div className={s.cart__header__text_totalAmount}>3 000 р</div>
          </div>
        </div>
        <div className={s.cart__items}>
          {cartItems.map(item => (
            <RowInCart
              key={item.id}
              id={item.id}
              dishImg={<img src={item.img} alt={item.name} />}
              dishName={item.name}
              price={item.price}
              onRemove={removeRow}
            />
          ))}
        </div>
        <textarea placeholder="Комментарий" className={s.comment}></textarea>
        <Button title={'Оформить'} colorScheme={1} />
      </div>
    </div>
  );
};

export default CartPage;
