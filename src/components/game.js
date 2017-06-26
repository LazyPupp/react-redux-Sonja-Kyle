import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

import {newGame, makeGuess} from '../actions/gameAction';
import {connect} from 'react-redux';

export class Game extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         guesses: [],
    //         feedback: 'Make your guess!',
    //         correctAnswer: Math.floor(Math.random() * 100) + 1,
    //     };
    // }

    newGame() {
        this.props.dispatch(newGame());
        // this.setState({
        //     guesses: [],
        //     feedback: 'Make your guess!',
        //     correctAnswer: Math.floor(Math.random() * 100) + 1,
        // });
    }

    guess(guess) {
        guess = parseInt(guess, 10);
        if (isNaN(guess)) {
            this.setState({
                feedback: 'Please enter a valid number'
            });
            return;
        }

        const difference = Math.abs(guess - this.props.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }


        this.props.dispatch(makeGuess(guess, feedback));
        // this.setState({
        //     feedback,
        //     guesses: [...this.state.guesses, guess]
        // });
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Header onNewGame={() => this.newGame()}/>
                <GuessSection feedback={this.props.feedback}
                    onGuess={(guess) => this.guess(guess)} />
                <GuessCount count={this.props.guesses.length} />
                <GuessList guesses={this.props.guesses} />
            </div>
        );
    }
};

const mapStateToProps = (state,props)=>({
    guesses:state.game.guesses,
    feedback:state.game.feedback,
    correctAnswer:state.game.correctAnswer
});

export default connect(mapStateToProps)(Game);

