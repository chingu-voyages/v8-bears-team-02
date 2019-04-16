import React from 'react';

class Question extends React.Component {
    render() {
        return (
            <div>
                {this.props.questions.map(question => (
                    <div key={question.id}>
                        {question.title}
                        {question.content}
                    </div>

                ))}
            </div>
        )
    }
}

export default Question;