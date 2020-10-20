/**
 * @file Render a simple modal element.
 * @module base-components/SimpleModal
 */
import React from 'react';
import Button from '../Button';

import './styles.scss';

interface SimpleModalProps {
  onCloseModal: () => void;
}

const SimpleModal: React.FC<SimpleModalProps> = ({
  children,
  onCloseModal,
}) => (
  <div className="simple-modal">
    <section className="simple-modal__main">
      {children}
      <div className="simple-modal__actions">
        <Button onClick={onCloseModal}>Close</Button>
      </div>
    </section>
  </div>
);

export default SimpleModal;
