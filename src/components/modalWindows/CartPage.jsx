import React from 'react';
import s from './styles.module.scss';

const CartPage = ({ onClose }) => {
  return (
    <div className={s.modalOverlay}>
      <div className={s.modal__content}>
        <button className={s.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={s.cart__header}>
          <h2>Корзина</h2>
          <div className={s.cart__total}>Сумма товаров</div>
          <div className={s.cart__totalAmount}>3 000 р</div>
        </div>
        <div className={s.cart__items}>
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div key={index} className={s.cart__item}>
                <img
                  src="image_url"
                  alt="product"
                  className={s.cart__item__image}
                />
                <div className={s.cart__item__info}>
                  <div className={s.cart__item__name}>
                    Куриная грудка с яйцами, рисом
                  </div>
                  <div className={s.cart__item__price}>1 000 р</div>
                  <div className={s.cart__item__controls}>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                </div>
                <button className={s.remove__item}>×</button>
              </div>
            ))}
        </div>
        <textarea placeholder="Комментарий" className={s.comment}></textarea>
        <button className={s.checkoutButton}>Оформить</button>
      </div>
    </div>
  );
};

export default CartPage;
