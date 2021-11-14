import React from 'react';
import MuiCarousel from 'react-material-ui-carousel';
// styles
import styles from './Carousel.module.scss';
import StepView from 'components/StepView/StepView';
import questions from 'common/constant/questions';

const Carousel = ({ currentAnswers, activeIndex, onCompleteAnswer }) => {
    const _allQuestions = React.useMemo(() => questions.getAllQuestions(), []);

    return (
        <MuiCarousel
            animation="slide"
            index={activeIndex}
            autoPlay={false}
            indicators={false}
            NextIcon={null}
            className={styles.carousel}
            navButtonsProps={{
                className: '',
                style: {
                    display: 'none'
                }
            }}
            navButtonsWrapperProps={{
                className: '',
                style: {
                    display: 'none'
                }
            }}>
            {_allQuestions.map((question, index) => (
                <StepView
                    key={`step-view-${index}`}
                    {...question}
                    onCompleteAnswer={onCompleteAnswer}
                    currentAnswers={currentAnswers}
                />
            ))}
        </MuiCarousel>
    );
};

export default Carousel;
