import React from 'react';
import classNames from 'classnames/bind';

import styles from '../../styles/Card.scss'

const cx = classNames.bind(styles);

const CardBody = ({ children, className, ...props }) => {
  return (
    <div className={cx('CardBody', className)} {...props}>
      {children}
    </div>
  );
};

export default CardBody;