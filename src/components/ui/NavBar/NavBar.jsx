import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import UserPage from '../../modalWindows/UserPage/UserPage';
import CartPage from '../../modalWindows/CartPage';
import { Authorization } from '../../Auth/Authorization';
import { Registration } from '../../Auth/Registration';
import { OnBoarding } from '../../Auth/OnBoarding/OnBoarding';
import s from './styles.module.scss';
import { loginSuccess, logoutSuccess } from '../../../core/store/authSlice';

export const NavBar = () => {
  const isAuthorize = useSelector(state => state.auth.isAuthorize);
  const dispatch = useDispatch();
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [showOnBoarding, setShowOnBoarding] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('access');
    if (token) {
      dispatch(loginSuccess(token)); // передача токена
    } else {
      dispatch(logoutSuccess());
    }
  }, [dispatch]);

  const handleOpenUserModal = () => {
    document.body.classList.add('modal-open');
    setIsUserModalOpen(true);
    setIsCartModalOpen(false);
  };

  const handleCloseUserModal = () => {
    document.body.classList.remove('modal-open');
    setIsUserModalOpen(false);
    setIsCartModalOpen(false);
  };

  const handleOpenCartModal = () => {
    document.body.classList.add('modal-open');
    setIsUserModalOpen(false);
    setIsCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    document.body.classList.remove('modal-open');
    setIsUserModalOpen(false);
    setIsCartModalOpen(false);
  };

  const handleOpenAuthModal = () => {
    document.body.classList.add('modal-open');
    setIsAuthModalOpen(true);
    setIsUserModalOpen(false);
    setIsCartModalOpen(false);
  };

  const handleCloseAuthModal = () => {
    document.body.classList.remove('modal-open');
    setIsAuthModalOpen(false);
    setIsUserModalOpen(false);
    setIsCartModalOpen(false);
  };

  const handleOpenRegistration = () => {
    setIsRegistrationOpen(true);
    setIsAuthModalOpen(false);
  };

  const handleCloseRegistration = () => {
    setIsRegistrationOpen(false);
  };

  const handleShowOnBoarding = () => {
    setShowOnBoarding(true);
    handleCloseRegistration();
  };

  const handleCloseOnBoarding = () => {
    setShowOnBoarding(false);
  };

  return (
    <div className={s.container}>
      <div className={s.navBar__links}>
        <NavLink
          end
          to="/"
          className={({ isActive }) =>
            isActive ? `${s.activeLink} ${s.link}` : s.link
          }
        >
          Главная
        </NavLink>
        <NavLink
          to="/book"
          className={({ isActive }) =>
            isActive ? `${s.activeLink} ${s.link}` : s.link
          }
        >
          Книга
        </NavLink>
        <NavLink
          to="/constructor"
          className={({ isActive }) =>
            isActive ? `${s.activeLink} ${s.link}` : s.link
          }
        >
          Конструктор
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive ? `${s.activeLink} ${s.link}` : s.link
          }
        >
          Каталог
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? `${s.activeLink} ${s.link}` : s.link
          }
        >
          Статьи
        </NavLink>
        {isAuthorize ? (
          <>
            <span onClick={handleOpenUserModal} className={s.link}>
              Профиль
            </span>
            <span onClick={handleOpenCartModal} className={s.link}>
              Корзина
            </span>
          </>
        ) : (
          <span onClick={handleOpenAuthModal} className={s.link}>
            Войти
          </span>
        )}
      </div>
      {isUserModalOpen && (
        <UserPage onClose={handleCloseUserModal} userInfo={userInfo} />
      )}
      {isCartModalOpen && <CartPage onClose={handleCloseCartModal} />}
      {isAuthModalOpen && (
        <Authorization
          onClose={handleCloseAuthModal}
          setIsAuthenticated={value =>
            dispatch(value ? loginSuccess() : logoutSuccess())
          }
          setShowRegistration={handleOpenRegistration}
        />
      )}
      {isRegistrationOpen && (
        <Registration
          onClose={handleCloseRegistration}
          setIsAuthenticated={value =>
            dispatch(value ? loginSuccess() : logoutSuccess())
          }
          setShowOnBoarding={handleShowOnBoarding}
        />
      )}
      {showOnBoarding && <OnBoarding onClose={handleCloseOnBoarding} />}
    </div>
  );
};

export default NavBar;
