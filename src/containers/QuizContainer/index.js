import React from 'react';
import { Container } from '@material-ui/core';
import { BackgroundContainer, Stepper, Carousel } from 'components';
// styles
// import styles from './QuizContainer.module.scss';

class QuizContainer extends React.Component {
    state = { activeStep: 0, answers: [] };

    onCompleteAnswer = (answer) => {
        this.setState((prev) => ({
            activeStep: prev.activeStep + 1,
            answers: [].concat(
                prev.answers,
                Array.isArray(answer) ? answer : [answer]
            )
        }));
    };

    onUpdateIndex = (index) => {
        if (this.state.activeStep >= index)
            this.setState({ activeStep: index });
    };

    onGoBack = () => {
        this.setState((prev) => ({ activeStep: prev.activeStep - 1 }));
    };

    render() {
        const { activeStep, answers } = this.state;

        return (
            <BackgroundContainer color="lightDark" vertical={8}>
                <Container>
                    <Stepper
                        steps={['00', '01', '02', '03', '04', '05']}
                        activeStep={Math.min(5, activeStep)}
                        onUpdateIndex={this.onUpdateIndex}
                        onGoBack={this.onGoBack}
                    />
                    <Carousel
                        activeIndex={activeStep}
                        onCompleteAnswer={this.onCompleteAnswer}
                        currentAnswers={answers}
                    />
                </Container>
            </BackgroundContainer>
        );
    }
}

export default QuizContainer;
