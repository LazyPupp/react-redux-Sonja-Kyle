import {createStore} from 'redux';
import {combineReducers} from 'redux';

import {showModalReducer}  from './reducers/showModalReducer';
import {gameReducer} from './reducers/gameReducer';


const reducer = combineReducers({
    header: showModalReducer,
    game: gameReducer,
});

export default createStore(reducer);