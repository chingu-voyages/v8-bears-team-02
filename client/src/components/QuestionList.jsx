import React from 'react';
import { connect } from "react-redux";

import Question from './Question';

class QuestionList extends React.Component {
    state = {questions: []};
    render(){
        return(
            <div>
                Question List
                <Question questions={this.props.questions} name="TEST" />
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state.reducer.questions);
    return {
        questions: state.reducer.questions
    }
}

export const ConnectedQuestionList = connect(mapStateToProps)(QuestionList);