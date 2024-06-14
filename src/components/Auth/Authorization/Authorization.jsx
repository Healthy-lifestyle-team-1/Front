import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import s from './styles.module.scss';
import Theme from '../../../assets/styles/themes/index';
import { Button, ButtonWithTheme } from '../../ui/Button';
import { loginSuccess } from '../../../core/store/authSlice'; // Импортируйте экшен

import x from '../../../assets/images/icons/light/X.svg';
import { Input } from '../../ui/Input';

export const Authorization = ({ onClose, setIsAuthenticated }) => {
  const [login, setLogin] = useState('');
  const [username, setUsername] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState(1); // 1 - login, 2 - verify
  const [error, setError] = useState('');
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch(); // Инициализируйте dispatch

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
        dispatch(loginSuccess()); // Обновление состояния в Redux
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
    window.location.href = '/'; // Перенаправление на главную страницу
  };

  return (
    <div className={s.modalOverlay}>
      <div className={s.modal__auth__content}>
        <div className={s.modal__auth__name}>Вход в аккаунт</div>
        <div className={s.modal__auth__info}>
          <div className={s.login__info}>
            {step === 1 && (
              <div className={s.login__info__choice}>
                <div className={s.login__info__btn}>
                  <ButtonWithTheme title={'телефон'} colorScheme={3} size={8} />
                  <ButtonWithTheme title={'почта'} colorScheme={3} size={8} />
                </div>
                <div className={s.login__info__block}>
                  <Input
                    hasButton={false}
                    width={'small'}
                    className={s.login__input}
                    placeholder="Имя пользователя"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                  <Input
                    hasButton={false}
                    width={'small'}
                    className={s.login__input}
                    placeholder="Телефон"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                  />
                </div>
              </div>
            )}
            {step === 2 && (
              <div className={s.login__infoBlock}>
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
                <div className={s.profile__name}>
                  Вы успешно вошли в аккаунт!
                </div>
              </div>
            )}
          </div>
          {error && <div className={s.error}>{error}</div>}
          <div className={s.loginButton}>
            {step === 1 && (
              <Button
                title="Получить код"
                onClick={handleLogin}
                colorScheme={1}
                size={1}
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
          </div>
        </div>
        <div className={s.modal__auth__reg}>
          <a className={s.modal__auth__reg_link} href="/">
            Зарегистрируйтесь{' '}
          </a>
          <div className={s.modal__auth__reg_text}>
            для полного доступа к приложению.
          </div>
        </div>
      </div>
    </div>
  );
};
