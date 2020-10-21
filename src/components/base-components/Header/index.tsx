import React from 'react';
import cn from 'classnames';
import { ClassValue } from 'classnames/types';

import './styles.scss';

interface headerProps {
  className?: ClassValue;
}

const Header: React.FC<headerProps> = ({ children, className }) => (
  <header className={cn('header', className)}>{children}</header>
);

export default Header;
