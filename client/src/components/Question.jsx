import React from 'react';

import {QuestionHeader} from './QuestionHeader';

class Question extends React.Component {
    render() {
        return (
            <div>

                {this.props.questions.map(question => (
                    <div>
                        <QuestionHeader title={question.title} />
                        <h1>{question.title}</h1>
                    </div>

                ))}
                Question {this.props.name}
            </div>
        )
    }
}

export default Question;