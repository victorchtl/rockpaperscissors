let playerChoice = [];
let victorChoice = [];

let playerScore = 0;
let victorScore = 0;

let canPlay = true;

const rock = document.getElementById('choice-rock');
const paper = document.getElementById('choice-paper');
const scissors = document.getElementById('choice-scissors');
rock.addEventListener('click', function () { play(rock.id) });
paper.addEventListener('click', function () { play(paper.id) });
scissors.addEventListener('click', function () { play(scissors.id) });

const game = document.querySelector('.game');
const vvictorChoice = document.querySelector('.victor-choice');
const pplayerChoice = document.querySelector('.player-choice');
const victorScoreDiv = document.querySelector('.victor-score');
const playerScoreDiv = document.querySelector('.player-score');
const resultTextDiv = document.querySelector(".result-text");

victorScoreDiv.innerHTML = victorScore;
playerScoreDiv.innerHTML = playerScore;


function play(choice) {
    if (canPlay === true) {
        canPlay = false;
        let divChoices = ['choice-rock', 'choice-paper', 'choice-scissors'];
        let greyDivChoices = divChoices.filter(divChoice => divChoice !== choice);
        for (let i = 0; i < greyDivChoices.length; i++) {
            const greyDiv = document.getElementById(greyDivChoices[i]);
            greyDiv.style.filter = "grayscale(100%)";
        }
        console.log("player choice :" + choice);
        playerChoice.push(choice);
        const playerPickedChoice = document.createElement('img');
        playerPickedChoice.src = "images/" + choice.substr(7, choice.length) + ".png";
        playerPickedChoice.style.width = "150px";
        playerPickedChoice.style.height = "150px";
        pplayerChoice.appendChild(playerPickedChoice);
        setTimeout(function () {
            pplayerChoice.removeChild(playerPickedChoice);
        }, 3510);
        playAI();
        console.log("victor choice :" + victorChoice);
        switch (victorChoice[0]) {
            case "rock":
                switch (choice) {
                    case "choice-rock":
                        draw();
                        console.log("it's a draw!");
                        break;
                    case "choice-paper":
                        win();
                        console.log("it's a win!");
                        break;
                    case "choice-scissors":
                        lose();
                        console.log("it's a lose!");
                        break;
                }
                break;
            case "paper":
                switch (choice) {
                    case "choice-rock":
                        lose();
                        console.log("it's a lose!");
                        break;
                    case "choice-paper":
                        draw();
                        console.log("it's a draw!");
                        break;
                    case "choice-scissors":
                        win();
                        console.log("it's a win!");
                        break;
                }
                break;
            case "scissors":
                switch (choice) {
                    case "choice-rock":
                        win();
                        console.log("it's a win!");
                        break;
                    case "choice-paper":
                        lose();
                        console.log("it's a lose!");
                        break;
                    case "choice-scissors":
                        draw();
                        console.log("it's a draw!");
                        break;
                }
                break;
        }
        playAnimation();
        setTimeout(function () {
            const finalVictorChoice = document.createElement('img');
            finalVictorChoice.src = "images/" + victorChoice[0] + ".png";
            finalVictorChoice.style.width = "150px";
            finalVictorChoice.style.height = "150px";
            vvictorChoice.appendChild(finalVictorChoice);
            setTimeout(function () {
                vvictorChoice.removeChild(finalVictorChoice);
                for (let i = 0; i < greyDivChoices.length; i++) {
                    const greyDiv = document.getElementById(greyDivChoices[i]);
                    greyDiv.style.filter = "none";
                    canPlay = true;
                }
            }, 2000);
            playerChoice = [];
            victorChoice = [];
        }, 1510);
    }


}

function playAI() {
    const choiceAI = Math.floor(Math.random() * 3);
    switch (choiceAI) {
        case 0:
            victorChoice.push("rock");
            break;
        case 1:
            victorChoice.push("paper");
            break;
        case 2:
            victorChoice.push("scissors");
            break;
    }
}

function playAnimation() {
    let rockAnimation = document.createElement('img');
    rockAnimation.src = 'images/rock.png';
    rockAnimation.style.width = '100px';
    rockAnimation.style.height = '100px';
    let paperAnimation = document.createElement('img');
    paperAnimation.src = 'images/paper.png';
    paperAnimation.style.width = '100px';
    paperAnimation.style.height = '100px';
    let scissorsAnimation = document.createElement('img');
    scissorsAnimation.src = 'images/scissors.png';
    scissorsAnimation.style.width = '100px';
    scissorsAnimation.style.height = '100px';
    vvictorChoice.appendChild(rockAnimation);
    setTimeout(function () {
        vvictorChoice.removeChild(rockAnimation);
        vvictorChoice.appendChild(paperAnimation);
        setTimeout(function () {
            vvictorChoice.removeChild(paperAnimation);
            vvictorChoice.appendChild(scissorsAnimation);
            setTimeout(function () {
                vvictorChoice.removeChild(scissorsAnimation);
            }, 500);
        }, 500);
    }, 500);


}

function win() {
    playerScore++;
    setTimeout(function () {
        victorScoreDiv.innerHTML = victorScore;
        playerScoreDiv.innerHTML = playerScore;
        resultTextDiv.innerHTML = "You Win !"
        setTimeout(function () {
            resultTextDiv.innerHTML = "";
        }, 2000);
    }, 1500)

}

function lose() {
    victorScore++;
    setTimeout(function () {
        victorScoreDiv.innerHTML = victorScore;
        playerScoreDiv.innerHTML = playerScore;
        resultTextDiv.innerHTML = "You Lose !"
        setTimeout(function () {
            resultTextDiv.innerHTML = "";
        }, 2000);
    }, 1500)
}

function draw() {
    setTimeout(function () {
        resultTextDiv.innerHTML = "Draw !"
        setTimeout(function () {
            resultTextDiv.innerHTML = "";
        }, 2000);
    }, 1500)
}