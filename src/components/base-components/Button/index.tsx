import React from 'react';
import './styles.scss';
import cn from 'classnames';

export enum ButtonType {
  primary,
  secondary,
}

interface ButtonProps {
  buttonType?: ButtonType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  buttonType = ButtonType.primary,
  children,
  onClick = () => {},
}) => (
  <button
    className={cn('button', {
      [`button--${ButtonType[buttonType]}`]: ButtonType[buttonType],
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
