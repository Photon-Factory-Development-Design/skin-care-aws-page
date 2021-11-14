import React from 'react';
import cn from 'classnames';
// styles
import styles from './StepIcon.module.scss';

const StepIcon = ({ active, completed, label }) => {
    return (
        <div
            className={cn(styles.root, {
                [styles.active]: active,
                [styles.completed]: completed
            })}>
            {label}
        </div>
    );
};

export default StepIcon;
