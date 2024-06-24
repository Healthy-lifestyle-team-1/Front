import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { RowInCart } from '../ui/RowInCart/RowInCart';
import axios from 'axios';
import x from '../../assets/images/icons/light/X.svg';
import { BASE_URL } from '../../core/url';

import s from './styles.module.scss';

const CartPage = ({ onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchCart = async () => {
    const token = localStorage.getItem('access');
    try {
      const response = await axios.get(`${BASE_URL}/cart/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { items, total_price } = response.data[0]; // Предполагая, что ответ массива
      setCartItems(items);
      setTotalPrice(total_price);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  useEffect(() => {
    // Добавляем класс, который блокирует прокрутку
    document.body.classList.add('no-scroll');
    document.documentElement.style.overflow = 'hidden';

    // Удаляем класс при размонтировании компонента
    return () => {
      document.body.classList.remove('no-scroll');
      document.documentElement.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    fetchCart();
  }, []);

  const removeRow = async id => {
    const token = localStorage.getItem('access');
    try {
      await axios.delete(`${BASE_URL}/cart_item/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Удаляем элемент из состояния cartItems
      setCartItems(prevCartItems => {
        const updatedCartItems = prevCartItems.filter(item => item.id !== id);

        // Пересчитываем totalPrice на основе нового списка cartItems
        const updatedTotalPrice = updatedCartItems.reduce(
          (total, item) => total + item.total_price,
          0,
        );
        setTotalPrice(updatedTotalPrice);

        return updatedCartItems;
      });
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const updateQuantity = async (id, newQuantity) => {
    const token = localStorage.getItem('access');
    try {
      const response = await axios.patch(
        `${BASE_URL}/cart_item/${id}/`,
        { quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const updatedItem = response.data;

      // Обновляем состояние cartItems
      setCartItems(prevCartItems => {
        // Создаем новый массив с обновленным элементом
        const updatedCartItems = prevCartItems.map(item =>
          item.id === id
            ? {
                ...item,
                quantity: updatedItem.quantity,
                total_price: updatedItem.total_price,
              }
            : item,
        );

        // Вычисляем общую стоимость корзины
        const updatedTotalPrice = updatedCartItems.reduce(
          (total, item) => total + item.total_price,
          0,
        );

        // Обновляем состояния одновременно
        setTotalPrice(updatedTotalPrice);
        return updatedCartItems;
      });
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  return (
    <div className={s.modalOverlay}>
      <div className={s.modal__content}>
        <div className={s.cart__header}>
          <button className={s.closeButton} onClick={onClose}>
            <img className={s.closeButton__img} src={x} alt={'Закрыть'} />
          </button>
          <div className={s.cart__header__title}>Корзина</div>
          <div className={s.cart__header__text}>
            <div className={s.cart__header__text_total}>Сумма товаров</div>
            <div className={s.cart__header__text_totalAmount}>
              {totalPrice} р
            </div>
          </div>
        </div>
        <div className={s.cart__items}>
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <RowInCart
                key={item.id}
                id={item.id}
                dishImg={
                  <img
                    className={s.item__img}
                    src={`${BASE_URL}${item.product_image}`}
                    alt={item.product_title}
                  />
                }
                dishName={item.product_title}
                price={`${item.total_price} P`}
                quantity={item.quantity} // Передача количества в компонент RowInCart
                onRemove={removeRow}
                onUpdateQuantity={updateQuantity} // Передача метода обновления количества
              />
            ))
          ) : (
            <div>Корзина пуста</div>
          )}
        </div>
        <div className={s.cart__comments}>
          <textarea placeholder="Комментарий" className={s.cart__comment} />
          <Button title={'Оформить'} colorScheme={1} size={12} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
