import cn from 'classnames';
import s from './style.module.scss';

export function Button({ className, width, title, onClick, ...props }) {
  return (
    <button
      className={cn(s.button, className)}
      onClick={onClick}
      width={width}
		title={title}
      {...props}>
    </button>
  );
}