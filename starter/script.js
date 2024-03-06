'use strict';
const score0Elm = document.querySelector("#score--0");
const score1Elm = document.querySelector("#score--1");
const btnRoll = document.querySelector(".btn--roll");
const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
const dicePic = document.querySelector(".dice");
let currentScore, score, activePlayer, play;

const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
    activePlayer = activePlayer === 0 ? 1 : 0;
}

const init = function () {
    currentScore = 0;
    score = [0, 0];
    play = true;
    activePlayer = 0;
    document.getElementById(`current--0`).textContent = currentScore;
    document.getElementById(`current--1`).textContent = currentScore;
    document.getElementById(`score--0`).textContent = score[0];
    document.getElementById(`score--1`).textContent = score[1];
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
    document.querySelector(`.player--0`).classList.remove("player--winner");
    document.querySelector(`.player--1`).classList.remove("player--winner");
    dicePic.classList.add("hidden");

}
//score0Elm.textContent = 0;  //it will print the number as string in web bage 
//console.log(typeof score0Elm.textContent);
//score1Elm.textContent = 0;
//dicePic.classList.add("hidden");
init();

btnRoll.addEventListener("click", function () {
    if (play) {
        let dice = Math.trunc((Math.random() * 6)) + 1;

        //console.log(dice);
        dicePic.classList.remove("hidden");
        console.log(dice);
        dicePic.src = `dice-${dice}.png`;


        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
            switchPlayer();
            /*currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            player0.classList.toggle("player--active");
            player1.classList.toggle("player--active");
            activePlayer = activePlayer === 0 ? 1 : 0;*/
            //toggle is used when there is a class it would remove it from that class otherwise it would add it 
        }

    }

})

btnHold.addEventListener("click", function () {

    if (play) {
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    }

    if (score[activePlayer] >= 20) {
        //play = false;
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        dicePic.classList.add("hidden");
        play = false;
        // document.getElementById(`name--${activePlayer}`).classList.add("name");
        /*currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        player0.classList.toggle("player--active");
        player1.classList.toggle("player--active");
        activePlayer = activePlayer === 0 ? 1 : 0;*/
    }
    else {
        switchPlayer();
    }
})
btnNew.addEventListener("click", init);