import React from 'react';

import Question from './Question';

class QuestionList extends React.Component {
    render(){
        return(
            <div>
                Question List
                <Question />
            </div>
        )
    }
}

export default QuestionList;