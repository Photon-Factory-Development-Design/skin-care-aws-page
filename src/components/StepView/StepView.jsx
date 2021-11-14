import React from 'react';
import cn from 'classnames';
// core components
import Button from 'components/Button/Button';
// styles
import styles from './StepView.module.scss';

class StepView extends React.Component {
    state = {
        selectedAnswers: {}
    };

    onClickAnswer = (answer) => {
        if (!this.props.isMulti) {
            this.props.onCompleteAnswer &&
                this.props.onCompleteAnswer(answer.id);
        } else {
            this.setState((prev) => ({
                selectedAnswers: {
                    ...prev.selectedAnswers,
                    [answer.id]: !prev.selectedAnswers[answer.id]
                }
            }));
        }
    };

    onGoNext = () => {
        const { selectedAnswers } = this.state;
        const answers = Object.keys(selectedAnswers).filter(
            (key) => selectedAnswers[key]
        );

        if (answers.length > 0) {
            this.props.onCompleteAnswer && this.props.onCompleteAnswer(answers);
        }
    };

    getAnswers = () => {
        if (this.props.fn) {
            return this.props.fn(this.props.answers, this.props.currentAnswers);
        } else {
            return this.props.answers;
        }
    };

    render() {
        const { label, isMulti } = this.props;
        const { selectedAnswers } = this.state;

        const _answers = this.getAnswers();

        return (
            <div className={styles.root}>
                <div className={styles.label}>{label}</div>

                <div
                    className={cn(styles.answers, {
                        [styles.one_column]: _answers.length < 4
                    })}>
                    {_answers.map((answer) => (
                        <div key={answer.id} className={styles.answer_item}>
                            <Button
                                onClick={() => this.onClickAnswer(answer)}
                                active={selectedAnswers[answer.id]}>
                                {answer.label}
                            </Button>
                        </div>
                    ))}
                </div>

                {isMulti && (
                    <div className={styles.go_next}>
                        <Button onClick={() => this.onGoNext()}>Next</Button>
                    </div>
                )}
            </div>
        );
    }
}

export default StepView;
