import React from 'react';
import './styles.scss';
import cn from 'classnames';
import { ClassValue } from 'classnames/types';

export enum ButtonType {
  primary,
  secondary,
}

interface ButtonProps {
  buttonType?: ButtonType;
  className?: ClassValue;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  buttonType = ButtonType.primary,
  className,
  children,
  onClick = () => {},
}) => (
  <button
    className={cn(
      'button',
      {
        [`button--${ButtonType[buttonType]}`]: ButtonType[buttonType],
      },
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
