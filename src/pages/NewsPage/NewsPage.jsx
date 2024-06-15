import React, { useState } from 'react';
import cn from 'classnames';
import s from './styles.module.scss';
import { Input } from '../../components/ui/Input';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Advertisement } from '../../components/Advertisement';
import { CardNewsMain } from '../../components/ui/Cards/CardNewsMain';



export const NewsPage = () => {

	return (
	  <div className={s.container}>
 <Header />
 <CardNewsMain />
		<Advertisement />
      <Footer />
	  </div>
	)
 }