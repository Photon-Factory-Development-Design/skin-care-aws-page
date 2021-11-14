import React from 'react';
import cn from 'classnames';
// styles
import styles from './Button.module.scss';

const Button = ({ active = false, ...props }) => {
    return (
        <button
            {...props}
            className={cn(styles.root, {
                [styles.active]: active
            })}
        />
    );
};

export default Button;
