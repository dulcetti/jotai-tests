import './styles.css';
import { IButton } from './interface';

export default function Button({ className = '', label, method, type = 'button' }: IButton) {
  return (
    <button className={`${className} button`} onClick={method} type={type}>
      {label}
    </button>
  );
}
