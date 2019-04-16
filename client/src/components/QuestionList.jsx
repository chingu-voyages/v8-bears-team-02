import React from 'react';
import { connect } from "react-redux";

import Question from './Question';

export const QuestionList = ({createNewQuestion, questions}) => (


        <div>
            Question List
            <Question questions={questions} name="TEST" />

            <button onClick={() => createNewQuestion()}>Add new question</button>
        </div>


)

function mapStateToProps(state){
    console.log(state.reducer.questions);
    return {
        questions: state.reducer.questions
    }
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        createNewQuestion() {
            console.log("Creating a new question...");
        }
    }
}

export const ConnectedQuestionList = connect(mapStateToProps, mapDispatchToProps)(QuestionList);