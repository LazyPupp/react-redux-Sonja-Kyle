export const NEW_GAME = "NEW_GAME";
export const MAKE_GUESS = "MAKE GUESS";

export const newGame = () => ({
    type:NEW_GAME,
});

export const makeGuess = (guess, feedback) => ({
    type:MAKE_GUESS,
    feedback,
    guess,
});