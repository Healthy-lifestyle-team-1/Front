import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../../ui/Button';

import x from '../../../assets/images/icons/light/X.svg';
import s from './styles.module.scss';

export const Authorization = ({
  onClose,
  setIsAuthenticated,
  setShowRegistration,
}) => {
  const [login, setLogin] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState(1); // 1 - login, 2 - verify
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://grikoandrey.pythonanywhere.com/login/',
        {
          login,
        },
      );
      console.log(response.data);
      setStep(2);
      setError('');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError(
          'Такой пользователь не найден. Пожалуйста, зарегистрируйтесь.',
        );
      } else {
        setError(
          'Ошибка при авторизации. Проверьте данные и попробуйте снова.',
        );
      }
      console.error('Error during login:', error);
    }
  };

  const handleVerify = async () => {
    try {
      const response = await axios.post(
        'https://grikoandrey.pythonanywhere.com/verify/',
        { code },
      );
      if (response.status === 200) {
        localStorage.setItem('access', response.data.tokens.access);
        localStorage.setItem('refresh', response.data.tokens.refresh);
        setIsAuthenticated(true);
        setStep(3);
        setError('');
      }
    } catch (error) {
      console.error('Error during verification:', error);
      setError('Неправильный код или истекло время его действия.');
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  const handleShowRegistration = () => {
    onClose();
    setShowRegistration(true);
  };

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const isPhoneNumber = login => {
    const phoneRegex = /^[+]*[0-9]{1,4}[0-9]*$/;
    return phoneRegex.test(login);
  };

  return (
    <div className={s.modalOverlay} onClick={handleOverlayClick}>
      <div className={s.modal__content}>
        <div className={s.modal__name}>ВХОД В АККАУНТ</div>
        <button className={s.closeButton} onClick={onClose}>
          <img src={x} alt={'Закрыть'} />
        </button>
        <div className={s.login__info}>
          {step === 1 && (
            <div className={s.login__infoBlock}>
              <div style={{ width: '300px', height: '48px' }} />
              <input
                type="text"
                className={s.login__input}
                placeholder="Телефон или почта"
                value={login}
                onChange={e => setLogin(e.target.value)}
              />
            </div>
          )}
          {step === 2 && (
            <div className={s.login__infoBlock}>
              <div className={s.login__infoBlock__text}>
                {isPhoneNumber(login)
                  ? 'Введите код из смс, мы отправили его на указанный номер.'
                  : 'Введите код из письма, мы отправили его на указанный email. Если код не пришел, проверьте папку Спам.'}
              </div>
              <input
                type="text"
                className={s.login__input}
                placeholder="Код авторизации"
                value={code}
                onChange={e => setCode(e.target.value)}
              />
            </div>
          )}
          {step === 3 && (
            <div className={s.login__infoBlock}>
              <div className={s.login__name}>
                Вы успешно вошли в аккаунт! Бла-бла-бла что-то рекламное про
                онбординг.
              </div>
            </div>
          )}
        </div>
        <div className={s.error}>{error}</div>
        <div className={s.loginButton}>
          {step === 1 && (
            <Button
              title="Получить код"
              onClick={handleLogin}
              colorScheme={1}
              size={1}
              disabled={!login}
            />
          )}
          {step === 2 && (
            <Button
              title="Войти"
              onClick={handleVerify}
              colorScheme={1}
              size={1}
            />
          )}
          {step === 3 && (
            <>
              <Button
                title="Перейти на сайт"
                onClick={handleReload}
                colorScheme={1}
                size={1}
              />
            </>
          )}
        </div>
        <div className={s.modal__reg}>
          <span className={s.modal__reg__link} onClick={handleShowRegistration}>
            Зарегистрируйтесь
          </span>
          <div className={s.modal__reg__text}>
            для полного доступа к приложению
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
