import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import s from './styles.module.scss';
import { Button } from '../../ui/Button';

export const Authorization = ({
  onClose,
  setIsAuthenticated,
  setShowRegistration,
}) => {
  const [login, setLogin] = useState('');
  const [username, setUsername] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState(1); // 1 - login, 2 - verify
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://grikoandrey.pythonanywhere.com/login/',
        {
          username,
          login,
        },
      );
      console.log(response.data);
      setStep(2);
      setError('');
    } catch (error) {
      console.error('Error during login:', error);
      setError('Ошибка при авторизации. Проверьте данные и попробуйте снова.');
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

  return (
    <div className={s.modalOverlay} onClick={handleOverlayClick}>
      <div className={s.modal__content}>
        <div className={s.modal__name}>ВХОД В АККАУНТ</div>
        <div className={s.login__info}>
          {step === 1 && (
            <div className={s.login__infoBlock}>
              <input
                type="text"
                className={s.login__input}
                placeholder="Имя пользователя"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
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
                Введите код из смс, мы отправили его на указанный номер.
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
              disabled={!username || !login}
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
