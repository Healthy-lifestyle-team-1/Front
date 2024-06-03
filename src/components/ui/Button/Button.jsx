import cn from 'classnames';
import s from './styles.module.scss';

export function Button({ className, width, title, onClick, variant, isTag, ...props }) {
  return (
    <button
      className={cn(s.button, className, {
        [s.buttonGray]: variant === 'gray',
        [s.buttonTag]: isTag,
      })}
      onClick={onClick}
      width={width}
      {...props}>
      {title}
    </button>
  );
}