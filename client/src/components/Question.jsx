import React from 'react';

import {QuestionHeader} from './QuestionHeader';

class Question extends React.Component {
    render() {
        return (
            <div>
                <QuestionHeader/>
                {this.props.questions.map(question => (
                    <h1>{question.title}</h1>
                ))}
                Question {this.props.name}
            </div>
        )
    }
}

export default Question;