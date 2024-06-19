// import React, { useState } from 'react';
// import { Button } from '../ui/Button';
// import { RowInCart } from '../ui/RowInCart/RowInCart';
// import x from '../../assets/images/icons/light/X.svg';

// import dish1 from '../../assets/images/plates/Plate.png';
// import dish2 from '../../assets/images/plates/Plate2.png';

// import s from './styles.module.scss';

// const CartPage = ({ onClose }) => {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, dishImg: dish1, dishName: 'Тарелка 1', price: '1000 P' },
//     { id: 2, dishImg: dish2, dishName: 'Тарелка 2', price: '1100 P' },
//   ]);

//   const amountCount = ['2 100 р'];

//   const removeRow = id => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };

//   return (
//     <div className={s.modalOverlay}>
//       <div className={s.modal__content}>
//         <div className={s.cart__header}>
//           <button className={s.closeButton} onClick={onClose}>
//             <img className={s.closeButton__img} src={x} alt={'Закрыть'} />
//           </button>
//           <div className={s.cart__header__title}>Корзина</div>
//           <div className={s.cart__header__text}>
//             <div className={s.cart__header__text_total}>Сумма товаров</div>
//             <div className={s.cart__header__text_totalAmount}>
//               {amountCount}
//             </div>
//           </div>
//         </div>
//         <div className={s.cart__items}>
//           {cartItems.map(item => (
//             <RowInCart
//               key={item.id}
//               id={item.id}
//               dishImg={
//                 <img
//                   className={s.item__img}
//                   src={item.dishImg}
//                   alt={item.dishName}
//                 />
//               }
//               dishName={item.dishName}
//               price={item.price}
//               onRemove={removeRow}
//             />
//           ))}
//         </div>
//         <div className={s.cart__comments}>
//           <textarea placeholder="Комментарий" className={s.cart__comment} />
//           <Button title={'Оформить'} colorScheme={1} size={1} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;


import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { RowInCart } from '../ui/RowInCart/RowInCart';
import axios from 'axios';
import x from '../../assets/images/icons/light/X.svg';

import s from './styles.module.scss';

const CartPage = ({ onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchCart = async () => {
    const token = localStorage.getItem('access');
    try {
      const response = await axios.get('https://grikoandrey.pythonanywhere.com/cart/', {
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
    fetchCart();
  }, []);

  const removeRow = async (id) => {
    const token = localStorage.getItem('access');
    try {
      await axios.delete(`https://grikoandrey.pythonanywhere.com/cart_item/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      // Удаляем элемент из состояния cartItems
      setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== id));

      // Пересчитываем totalPrice на основе нового списка cartItems
      const updatedTotalPrice = cartItems.reduce((total, item) => total + item.total_price, 0);
      setTotalPrice(updatedTotalPrice);
      
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const updateQuantity = async (id, newQuantity) => {
    const token = localStorage.getItem('access');
    try {
      const response = await axios.patch(
        `https://grikoandrey.pythonanywhere.com/cart_item/${id}/`,
        { quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      const updatedItem = response.data;
  
      // Обновляем состояние cartItems
      setCartItems(prevCartItems => {
        // Создаем новый массив с обновленным элементом
        const updatedCartItems = prevCartItems.map(item =>
          item.id === id ? { ...item, quantity: updatedItem.quantity, total_price: updatedItem.total_price } : item
        );
  
        // Вычисляем общую стоимость корзины
        const updatedTotalPrice = updatedCartItems.reduce((total, item) => total + item.total_price, 0);
  
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
            cartItems.map((item) => (
              <RowInCart
                key={item.id}
                id={item.id}
                dishImg={
                  <img
                    className={s.item__img}
                    src={item.product.image}
                    alt={item.product.image}
                  />
                }
                dishName={item.product.title}
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
