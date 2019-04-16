import React from 'react';
import {connect} from "react-redux";

class NewQuestion extends React.Component {
    state = {
        questionTitle: '',
        questionDescription: '',
    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="questionTitleInput">Title</label>
                    <input type="text"
                           className="form-control"
                           id="questionTitleInput"
                           onChange={(event) => this.setState({questionTitle: event.target.value})}
                           placeholder="Question Title"
                           value={this.state.questionTitle}
                           ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="questionDescriptionTextArea">Description</label>
                    <textarea className="form-control"
                              id="questionDescriptionTextArea"
                              onChange={(event) => this.setState({questionDescription: event.target.value})}
                              rows="5"
                              value={this.state.questionDescription}
                              ></textarea>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state){
    console.log(state.reducer.questions);
    return {
        questions: state.reducer.questions
    }
}

export const ConnectedNewQuestion = connect(mapStateToProps)(NewQuestion);