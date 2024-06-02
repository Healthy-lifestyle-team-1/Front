import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from 'classnames';

import { set } from './slice';
import s from './index.module.scss';

const Theme = ({ className }) => {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [ theme ])

  const handleChange = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    dispatch(set(next))
  }

  return (
    <div 
      className={cn(
      className,
      s.root,
      theme === 'dark' ? s.dark : s.light)}
      onClick={handleChange}
    > </div>
  )
}

export default Theme
