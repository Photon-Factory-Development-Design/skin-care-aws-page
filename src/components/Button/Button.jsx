import React from 'react';
import cn from 'classnames';
// styles
import styles from './Button.module.scss';

const Button = ({ active = false, gray, icon, children, ...props }) => {
    return (
        <button
            {...props}
            className={cn(styles.root, {
                [styles.active]: active,
                [styles.gray]: gray
            })}>
            {icon && icon}
            {children}
        </button>
    );
};

export default Button;
