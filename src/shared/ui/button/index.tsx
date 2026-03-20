import styles from './style.module.css';

interface Props {
  children: string;
  buttonType: 'ok' | 'cancel';
  ariaLabel: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function UIButton({
  children,
  buttonType,
  ariaLabel,
  onClick,
}: Props) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={`${styles.rootButton} ${styles[buttonType]}`}
    >
      {children}
    </button>
  );
}
