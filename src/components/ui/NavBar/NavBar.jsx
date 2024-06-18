import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import UserPage from '../../modalWindows/UserPage/UserPage';
import CartPage from '../../modalWindows/CartPage';
import { Authorization } from '../../Auth/Authorization';
import { Registration } from '../../Auth/Registration';
import s from './styles.module.scss';
import { loginSuccess, logoutSuccess } from '../../../core/store/authSlice';

export const NavBar = () => {
  const isAuthorize = useSelector(state => state.auth.isAuthorize);
  const dispatch = useDispatch();
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access');
    if (token) {
      dispatch(loginSuccess());
    } else {
      dispatch(logoutSuccess());
    }
  }, [dispatch]);

  const handleOpenUserModal = () => {
    setIsUserModalOpen(true);
    setIsCartModalOpen(false);
  };

  const handleCloseUserModal = () => {
    setIsUserModalOpen(false);
    setIsCartModalOpen(false);
  };

  const handleOpenCartModal = () => {
    setIsUserModalOpen(false);
    setIsCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setIsUserModalOpen(false);
    setIsCartModalOpen(false);
  };

  const handleOpenAuthModal = () => {
    setIsAuthModalOpen(true);
    setIsUserModalOpen(false);
    setIsCartModalOpen(false);
  };

  const handleCloseAuthModal = () => {
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
          setShowOnBoarding={() => {}}
        />
      )}
    </div>
  );
};

export default NavBar;
