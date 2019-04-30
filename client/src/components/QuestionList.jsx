import React from 'react';
import { connect } from "react-redux";
import Header from './layout/Header';
import Question from './Question';
import withStyles from "@material-ui/core/styles/withStyles";
import { List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';

const styles = theme => ({
   root: {
       maxWidth: 600,
       backgroundColor: theme.palette.background.paper,
   },
   inline: {
       display: 'inline',
   },
});

export const QuestionList = ({createNewQuestion, questions, classes}) => (


        <div>
            <Header title={"All Questions"} />
            {/*<Question questions={questions} name="TEST" />*/}

            <button onClick={() => createNewQuestion()}>Add new question</button>

            <List className={classes.root}>
                {questions.map(question => (
                    <Paper>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary={
                                    <h3>
                                    {question.title}
                                    </h3>
                                }
                                secondary={
                                    <Typography component="span" className={classes.inline} color="textPrimary">
                                        {question.content}
                                    </Typography>
                                } />
                        </ListItem>
                    </Paper>

                ))}



            </List>
        </div>




);

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

export const ConnectedQuestionList =
    connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(QuestionList));