import React from 'react';

import './styles.scss';

interface SelectorProps {
  items: any;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  value: string | number;
}

const Selector: React.FC<SelectorProps> = ({
  items,
  onChange = () => {},
  value,
}) => (
  <select className="selector" onChange={onChange} value={value}>
    {Object.keys(items).map((key) => (
      <option className="selector__option" key={key} value={key}>
        {items[key]}
      </option>
    ))}
  </select>
);

export default Selector;
