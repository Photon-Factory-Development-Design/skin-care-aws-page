import React from 'react';
import {
    Stepper as MuiStepper,
    Step,
    StepButton,
    makeStyles,
    StepLabel,
    Button
} from '@material-ui/core';
// core components
import StepIcon from './StepIcon/StepIcon';
// styles
import styles from './Stepper.module.scss';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'transparent'
    },
    iconContainer: {
        transform: 'scale(1)'
    },
    labelContainer: {
        color: '#003D54 !important'
    }
});

Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 2)) {
        s = '0' + s;
    }
    return s;
};

const Stepper = ({
    steps,
    activeStep,
    onUpdateIndex,
    onGoBack: propsOnGoBack
}) => {
    const classes = useStyles();

    const onGoBack = (e) => {
        e.preventDefault();
        e.stopPropagation();

        propsOnGoBack();
    };

    return (
        <MuiStepper
            alternativeLabel
            nonLinear
            activeStep={activeStep}
            classes={{ root: classes.root }}>
            {steps.map((label, index) => {
                const stepProps = {};
                const buttonProps = {};
                return (
                    <Step
                        key={label}
                        classes={{ root: styles.stepRoot }}
                        {...stepProps}>
                        <StepButton
                            onClick={() => onUpdateIndex(index)}
                            {...buttonProps}>
                            <StepLabel
                                classes={{
                                    iconContainer: classes.iconContainer,
                                    labelContainer: classes.labelContainer
                                }}
                                StepIconComponent={StepIcon}
                                StepIconProps={{
                                    label: (index + 1).pad(2),
                                    completed: activeStep >= index
                                }}>
                                {activeStep > 0 && activeStep === index && (
                                    <Button
                                        className={styles.go_back}
                                        variant="text"
                                        onClick={onGoBack}>
                                        Go Back
                                    </Button>
                                )}
                            </StepLabel>
                        </StepButton>
                    </Step>
                );
            })}
        </MuiStepper>
    );
};

export default Stepper;
