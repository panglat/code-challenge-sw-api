import React from 'react';
import cn from 'classnames';
import { ClassValue } from 'classnames/types';

import './styles.scss';

interface SelectorProps {
  className?: ClassValue;
  items: any;
  label: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  value: string | number;
}

const Selector: React.FC<SelectorProps> = ({
  className,
  items,
  label,
  onChange = () => {},
  value,
}) => (
  <label className={cn('selector__label', className)}>
    <span className="selector__text">{label}</span>
    <select className="selector__select" onChange={onChange} value={value}>
      {Object.keys(items).map((key) => (
        <option className="selector__option" key={key} value={key}>
          {items[key]}
        </option>
      ))}
    </select>
  </label>
);

export default Selector;
