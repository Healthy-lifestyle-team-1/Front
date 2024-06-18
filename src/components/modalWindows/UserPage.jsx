import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './styles.module.scss';
import Theme from '../../assets/styles/themes/index';
import { Button } from '../ui/Button';
import axios from 'axios';

import x from '../../assets/images/icons/light/X.svg';
import blueCart from '../../assets/images/icons/light/blue-cart.svg';
import blueLike from '../../assets/images/icons/light/blue-like.svg';
import blueSet from '../../assets/images/icons/light/blue-set.svg';
import blueSup from '../../assets/images/icons/light/blue-sup.svg';
import blueCartDark from '../../assets/images/icons/dark/blue-cart.svg';
import blueLikeDark from '../../assets/images/icons/dark/blue-like.svg';
import blueSetDark from '../../assets/images/icons/dark/blue-set.svg';
import blueSupDark from '../../assets/images/icons/dark/blue-sup.svg';

const UserPage = ({ onClose }) => {
  const theme = useSelector(state => state.theme);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = localStorage.getItem('access');
      if (token) {
        try {
          const response = await axios.get(
            'https://grikoandrey.pythonanywhere.com/user/',
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          if (response.status === 200) {
            setIsAuthenticated(true);
            setUserInfo(response.data); // Сохраняем информацию о пользователе
            setUsername(response.data.user.username);
            setEmail(response.data.user.email);
          }
        } catch (error) {
          console.error('User is not authenticated', error);
          setIsAuthenticated(false);
        }
      }
    };

    checkAuthentication();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        'https://grikoandrey.pythonanywhere.com/logout/',
      );
      if (response.status === 200) {
        localStorage.removeItem('access'); // Удаляем токен из локального хранилища
        onClose();
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
    window.location.reload();
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('access');
      const response = await axios.put(
        'https://grikoandrey.pythonanywhere.com/user/',
        {
          username,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.status === 200) {
        setUserInfo({
          ...userInfo,
          user: { ...userInfo.user, username, email },
        });
        setEditingField(null);
      }
    } catch (error) {
      console.error('Error updating user info:', error);
    }
  };

  const handleFieldClick = field => {
    setEditingField(field);
  };

  const handleBlur = () => {
    handleSave();
    setEditingField(null);
  };

  return (
    <div className={s.modalOverlay}>
      <div className={s.modal__content__user}>
        <div className={s.modal__name}></div>
        <button className={s.closeButton} onClick={onClose}>
          <img src={x} alt={'Закрыть'} />
        </button>
        <div className={s.profile__info}>
          <div className={s.profile__infoBlock}>
            {editingField === 'username' ? (
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className={s.profile__input}
                onBlur={handleBlur}
                autoFocus
              />
            ) : (
              <div
                className={s.profile__name}
                onClick={() => handleFieldClick('username')}
              >
                {userInfo && userInfo.user ? userInfo.user.username : ''}
              </div>
            )}
            {editingField === 'email' ? (
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={s.profile__input}
                onBlur={handleBlur}
                autoFocus
              />
            ) : (
              <div
                className={s.profile__phone}
                onClick={() => handleFieldClick('email')}
              >
                {userInfo && userInfo.user ? userInfo.user.email : ''}
              </div>
            )}
          </div>
          <div className={s.profile__theme}>
            <Theme />
          </div>
        </div>
        <div className={s.profile__menu}>
          <Link to="/inprogress" className={s.profile__menu__item}>
            <img
              src={theme === 'dark' ? blueCartDark : blueCart}
              alt={'Заказы'}
            />
            Заказы
          </Link>
          <Link to="/inprogress" className={s.profile__menu__item}>
            <img
              src={theme === 'dark' ? blueLikeDark : blueLike}
              alt={'Избранное'}
            />
            Избранное
          </Link>
          <Link to="/inprogress" className={s.profile__menu__item}>
            <img
              src={theme === 'dark' ? blueSupDark : blueSup}
              alt={'Поддержка'}
            />
            Поддержка
          </Link>
          <Link to="/inprogress" className={s.profile__menu__item}>
            <img
              src={theme === 'dark' ? blueSetDark : blueSet}
              alt={'Настройки'}
            />
            Настройки
          </Link>
        </div>
        <div className={s.logoutButton}>
          <Button
            title="Выйти"
            onClick={handleLogout}
            colorScheme={1}
            size={1}
          />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
