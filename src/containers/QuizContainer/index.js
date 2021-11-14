import React from 'react';
import cn from 'classnames';
import { Container } from '@material-ui/core';
import { Stepper, Carousel } from 'components';
import ProductsView from 'components/ProductsView/ProductsView';
// styles
import styles from './QuizContainer.module.scss';
import questions from 'common/constant/questions';

class QuizContainer extends React.Component {
    state = { activeStep: 0, answers: [] };

    onCompleteAnswer = (answer) => {
        this.setState((prev) => ({
            activeStep: prev.activeStep + 1,
            answers: [].concat(
                prev.answers,
                [answer]
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

    isQuizCompleted = () => {
        const { activeStep } = this.state;

        if (activeStep >= questions.getQuestionsLength()) {
            return true;
        }
        return false;
    };

    getProducts = () => {
        if (this.isQuizCompleted()) {
            // TODO: questions
            const { answers } = this.state;
            
            console.log(answers);

            const otherConcerns = questions.getProductsForAnswer([
                answers[1],
                answers[3],
                answers[4]
            ]);
            const recommendeds = questions.getProductsForAnswer([
                answers[1],
                answers[3],
                'recommended'
            ]);

            return [otherConcerns, recommendeds];
        }
        return null;
    };

    showProducts = () => {
        const [recommended, others] = this.getProducts();

        console.log(recommended, others);
        return <ProductsView recommended={recommended} otherConcern={others} />;
    };

    render() {
        const { activeStep, answers } = this.state;
        const currentQuestion = questions.getQuestionForStep(activeStep);

        const isQuizCompleted = this.isQuizCompleted();

        return (
            <div
                className={cn(styles.root, {
                    [styles.no_bg]: currentQuestion && currentQuestion.showBg
                })}>
                {!isQuizCompleted && (
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
                )}

                {isQuizCompleted && this.showProducts()}

                {currentQuestion && currentQuestion.showBg && (
                    <img
                        src="https://cdn.jsdelivr.net/gh/Photon-Factory-Development-Design/skin-care-aws-page@1.0.2/src/assets/images/bg-bottom.png"
                        alt="bg-bottom"
                    />
                )}
            </div>
        );
    }
}

export default QuizContainer;
