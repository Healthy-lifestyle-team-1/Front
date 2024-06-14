import React from 'react';
import cn from 'classnames';
import s from './styles.module.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Advertisement } from '../../components/Advertisement';
import { PlateMethodBookPage } from '../../components/PlateMethodBookPage';


export const BookPage = () => {
	return (
		<div className={s.container}>
			<Header />
			<PlateMethodBookPage />
			<Advertisement />
      <Footer />
			</div>
  );
};
