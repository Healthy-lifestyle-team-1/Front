import React from 'react';
import s from './styles.module.scss';
import Theme from '../../assets/styles/themes/index';
import { Button } from '../ui/Button';

const UserPage = ({ onClose }) => {
  return (
    <div className={s.modalOverlay}>
      <div className={s.modal__content}>
        <div className={s.modal__name}>Профиль</div>
        <button className={s.closeButton} onClick={onClose}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.7546 21.1869L13.431 11.7351L22.8828 2.41145C23.1107 2.18665 23.2399 1.88053 23.2421 1.56044C23.2443 1.24034 23.1192 0.93248 22.8944 0.704591C22.6696 0.476702 22.3635 0.347447 22.0434 0.345262C21.7233 0.343077 21.4155 0.468141 21.1876 0.69294L11.7358 10.0166L2.41208 0.564785C2.18728 0.336896 1.88116 0.207641 1.56106 0.205457C1.24097 0.203271 0.933108 0.328336 0.705219 0.553134C0.589363 0.659054 0.497557 0.788577 0.435989 0.932974C0.37442 1.07737 0.344518 1.23329 0.3483 1.39022C0.352083 1.54715 0.38946 1.70144 0.457912 1.84271C0.526363 1.98397 0.6243 2.10893 0.745123 2.20914L10.0688 11.661L0.565414 21.0355C0.337525 21.2603 0.208268 21.5664 0.206084 21.8865C0.2039 22.2066 0.328964 22.5145 0.553763 22.7424C0.778563 22.9702 1.08468 23.0995 1.40478 23.1017C1.72488 23.1039 2.03274 22.9788 2.26063 22.754L11.7124 13.4303L21.0361 22.8822C21.2609 23.11 21.567 23.2393 21.8871 23.2415C22.2072 23.2437 22.5151 23.1186 22.743 22.8938C22.9709 22.669 23.1001 22.3629 23.1023 22.0428C23.1045 21.7227 22.9794 21.4148 22.7546 21.1869Z"
              fill="#2E3A45"
            />
          </svg>
        </button>
        <div className={s.profile__info}>
          <div className={s.profile__infoBlock}>
            <div className={s.profile__name}>Надежда</div>
            <div className={s.profile__phone}>+ 999 999 - 99 -99</div>
          </div>
          <div className={s.profile__theme}>
            <Theme />
          </div>
        </div>

        <div className={s.profile__menu}>
          <div className={s.profile__menu__item}>
            <svg
              className={s.profile__menu__icon}
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="#AEDADE" />
              <path
                d="M21.7286 28.5234C22.5097 28.5234 23.1429 29.1499 23.1429 29.9227V33.6542C23.1429 34.427 22.5097 35.0535 21.7286 35.0535C20.9475 35.0535 20.3143 34.427 20.3143 33.6542V29.9227C20.3143 29.1499 20.9475 28.5234 21.7286 28.5234Z"
                fill="#F7F4E8"
              />
              <path
                d="M30.6857 29.9227C30.6857 29.1499 30.0525 28.5234 29.2714 28.5234C28.4903 28.5234 27.8571 29.1499 27.8571 29.9227V33.6542C27.8571 34.427 28.4903 35.0535 29.2714 35.0535C30.0525 35.0535 30.6857 34.427 30.6857 33.6542V29.9227Z"
                fill="#F7F4E8"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.0677 10.0992C21.4582 9.42992 21.2264 8.57411 20.55 8.18771C19.8736 7.8013 19.0086 8.03061 18.618 8.69989L14.8466 15.163C14.7901 15.2598 14.7466 15.3606 14.7157 15.4632H14.1857C11.3217 15.4632 9 17.7603 9 20.594C9 22.1969 9.74291 23.6282 10.9066 24.569L12.1643 33.1229L13.0067 37.0282C13.5115 39.3681 15.442 41.1453 17.8371 41.4751C22.9212 42.175 28.0788 42.175 33.1629 41.4751C35.558 41.1453 37.4885 39.3681 37.9933 37.0282L38.8357 33.1229L40.0934 24.569C41.2571 23.6282 42 22.1969 42 20.594C42 17.7603 39.6783 15.4632 36.8143 15.4632H36.2843C36.2534 15.3606 36.2099 15.2598 36.1534 15.163L32.382 8.69989C31.9914 8.03061 31.1264 7.8013 30.45 8.18771C29.7736 8.57411 29.5418 9.42992 29.9323 10.0992L33.0624 15.4632H17.9376L21.0677 10.0992ZM37.066 25.7189C36.9826 25.7228 36.8987 25.7248 36.8143 25.7248H14.1857C14.1013 25.7248 14.0174 25.7228 13.934 25.7189L14.95 32.6289L15.773 36.444C16.0294 37.6327 17.0102 38.5356 18.227 38.7032C23.0524 39.3675 27.9476 39.3675 32.7731 38.7032C33.9898 38.5356 34.9706 37.6327 35.227 36.444L36.05 32.6289L37.066 25.7189ZM11.8286 20.594C11.8286 19.306 12.8839 18.2618 14.1857 18.2618H36.8143C38.1161 18.2618 39.1714 19.306 39.1714 20.594C39.1714 21.882 38.1161 22.9262 36.8143 22.9262H14.1857C12.8839 22.9262 11.8286 21.882 11.8286 20.594Z"
                fill="#F7F4E8"
              />
            </svg>{' '}
            Заказы
          </div>
          <div className={s.profile__menu__item}>
            <svg
              className={s.profile__menu__icon}
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="#AEDADE" />
              <path
                d="M24.9986 42.0451L22.527 39.838C13.7486 32.0296 7.95312 26.8798 7.95312 20.5595C7.95312 15.4096 12.0781 11.3633 17.3281 11.3633C20.294 11.3633 23.1406 12.7176 24.9986 14.8578C26.8565 12.7176 29.7031 11.3633 32.669 11.3633C37.919 11.3633 42.044 15.4096 42.044 20.5595C42.044 26.8798 36.2486 32.0296 27.4702 39.8547L24.9986 42.0451Z"
                fill="#F7F4E8"
              />
            </svg>{' '}
            Избранное
          </div>
          <div className={s.profile__menu__item}>
            <svg
              className={s.profile__menu__icon}
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1665_19323)">
                <circle cx="25" cy="25" r="25" fill="#AEDADE" />
                <path
                  d="M24.9986 7.9541C15.5997 7.9541 7.95312 15.6007 7.95312 24.9996V32.0615C7.95312 33.8069 9.4821 35.2268 11.3622 35.2268H13.0668C13.5188 35.2268 13.9524 35.0472 14.2721 34.7276C14.5917 34.4079 14.7713 33.9744 14.7713 33.5223V24.7558C14.7713 24.3037 14.5917 23.8702 14.2721 23.5505C13.9524 23.2308 13.5188 23.0513 13.0668 23.0513H11.519C12.4668 16.4547 18.1429 11.3632 24.9986 11.3632C31.8543 11.3632 37.5304 16.4547 38.4781 23.0513H36.9304C36.4783 23.0513 36.0448 23.2308 35.7251 23.5505C35.4054 23.8702 35.2259 24.3037 35.2259 24.7558V35.2268C35.2259 37.1069 33.6969 38.6359 31.8168 38.6359H28.4077V36.9314H21.5895V42.045H31.8168C35.577 42.045 38.6349 38.9871 38.6349 35.2268C40.5151 35.2268 42.044 33.8069 42.044 32.0615V24.9996C42.044 15.6007 34.3974 7.9541 24.9986 7.9541Z"
                  fill="#F7F4E8"
                />
              </g>
              <defs>
                <clipPath id="clip0_1665_19323">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>{' '}
            Поддержка
          </div>
          <div className={s.profile__menu__item}>
            <svg
              className={s.profile__menu__icon}
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="#AEDADE" />
              <path
                d="M37.296 26.5671C37.358 26.0649 37.3994 25.5425 37.3994 25.0001C37.3994 24.4577 37.358 23.9354 37.2754 23.4332L40.7676 20.7814C41.0775 20.5403 41.1602 20.0984 40.9742 19.7568L37.668 14.1921C37.4614 13.8305 37.0274 13.71 36.6555 13.8305L32.5434 15.4376C31.6755 14.7948 30.7663 14.2725 29.7538 13.8707L29.1339 9.61175C29.0719 9.20996 28.7206 8.92871 28.3073 8.92871H21.6949C21.2816 8.92871 20.951 9.20996 20.889 9.61175L20.2691 13.8707C19.2566 14.2725 18.3267 14.8149 17.4795 15.4376L13.3674 13.8305C12.9955 13.6899 12.5615 13.8305 12.3549 14.1921L9.0487 19.7568C8.84206 20.1184 8.92472 20.5403 9.25534 20.7814L12.7475 23.4332C12.6649 23.9354 12.6029 24.4778 12.6029 25.0001C12.6029 25.5225 12.6442 26.0649 12.7268 26.5671L9.23467 29.2189C8.92472 29.46 8.84206 29.9019 9.02804 30.2434L12.3342 35.8082C12.5409 36.1698 12.9748 36.2903 13.3468 36.1698L17.4588 34.5626C18.3267 35.2055 19.2359 35.7278 20.2485 36.1296L20.8684 40.3885C20.951 40.7903 21.2816 41.0716 21.6949 41.0716H28.3073C28.7206 41.0716 29.0719 40.7903 29.1132 40.3885L29.7331 36.1296C30.7456 35.7278 31.6755 35.1854 32.5227 34.5626L36.6348 36.1698C37.0068 36.3104 37.4407 36.1698 37.6473 35.8082L40.9535 30.2434C41.1602 29.8818 41.0775 29.46 40.7469 29.2189L37.296 26.5671ZM25.0011 31.0269C21.5916 31.0269 18.802 28.3149 18.802 25.0001C18.802 21.6854 21.5916 18.9734 25.0011 18.9734C28.4106 18.9734 31.2002 21.6854 31.2002 25.0001C31.2002 28.3149 28.4106 31.0269 25.0011 31.0269Z"
                fill="#F7F4E8"
              />
            </svg>{' '}
            Настройки
          </div>
        </div>
        <Button
		  className={s.logoutButton}
          title="Выйти"
          onClick={() => console.log('Button clicked')}
          colorScheme={1} 
          size={1} 
        />
      </div>
    </div>
  );
};

export default UserPage;
