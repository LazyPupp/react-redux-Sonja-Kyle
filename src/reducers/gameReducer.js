import * as actions from '../actions/gameAction';

const createNewAnswer = () => { 
    return Math.floor(Math.random() * 100) + 1;
}

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: createNewAnswer(),      
}

export const gameReducer = (state=initialState, action) => {
    if(action.type === actions.NEW_GAME){
        return Object.assign({}, state, initialState, {correctAnswer: createNewAnswer()});
    } else if (action.type === actions.MAKE_GUESS){
        return Object.assign({}, state, {feedback:action.feedback, 
                        guesses:[...state.guesses, action.guess]});
    }
    return state;
}