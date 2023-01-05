
/*----- constants -----*/
const suits = ['d', 'h', 'c', 's']
const faces = ['A', 'K', 'Q', 'J', '10', '09', '08', '07', '06', '05', '04', '03', '02']
const deck = []
const values = { 
    'A': 14,
    'K': 13,
    'Q': 12,
    'J': 11,
    '10': 10,
    '09': 09,
    '08': 08,
    '07': 07,
    '06': 06,
    '05': 05,
    '04': 04,
    '03': 03,
    '02': 02,
};

// State Variables
let score, player1Hand, player2Hand, player1card, player2card

/*----- cached element references -----*/
const playBtn = document.getElementById('playBtn')
const playercard = document.getElementById('playercard')
const compcard = document.getElementById('compcard')
const score_p = document.getElementById('score_p')
const score_c = document.getElementById('score_c')
const submissions = document.getElementById('submissions')

// /*----- event listeners -----*/

playBtn.addEventListener('click', flipCard)
newBtn.addEventListener('click', init)


/*----- functions -----*/

function generateDeck() {
    suits.forEach(suit => {
        faces.forEach(face => {
            let score = values[face]
         deck.push({
                'face': suit + face,
                'value': score
            })
        })
    })
}

function shuffleDeck(deck) {
    for(let i = deck.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
    }
    return deck;
    }

function dealHand() {
    player1Hand = deck.slice(0, 26)
    player2Hand = deck.slice(26, 52)
}

function flipCard() {  
    // while(player1Hand.value > 0 || player2Hand.value > 0) {
    
    const player1card = player1Hand.pop()
    const player2card = player2Hand.pop()
  
    playercard.classList[1] ? playercard.classList.replace(playercard.classList[1], player1card.face)  : playercard.classList.add(player1card.face)
    compcard.classList[1] ? compcard.classList.replace(compcard.classList[1], player2card.face)  : compcard.classList.add(player2card.face)
    

    compareCards(player1card, player2card)
    } 
// }


function compareCards(player1card, player2card) {
    if(player1card.value > player2card.value) {
        player1Hand.push(player2card)
        console.log("Player 1 Wins this draw!")
        let element = document.getElementById('wintext');
        element.innerHTML = 'Player 1 wins this draw!'
    } else {
        player2Hand.push(player1card)
        console.log("The Computer Wins this draw!")
        let element = document.getElementById('wintext');
        element.innerHTML = 'The Computer wins this draw!'   
    }
  renderScore()
 
//Whoever wins, push both cards to the bottom of their deck (push to the array)
//Computed State -
}


function renderScore() {
    score_p.innerText= `Player card count ${player1Hand.length}`
    score_c.innerText= `CPU card count ${player2Hand.length}`
}


function updateScore() {
    if(playercard.value > compcard.value) {
        console.log(player2Hand.push(player1Hand))
    } else {
        console.log(player1Hand.push(player2Hand))
    }

}
 //showGameEnd() - clear the board
let end = document.getElementById('gameover');
end.innerHTML = 'Game over! ' + '//Winner?'


// function clearGame() {
//     submissions.remove()
// }

// function updateScore() {
//     if(player1card > player2card) {
//         deck.push(player1Hand.score_p)
//     } else {
//         deck.push(player2Hand.score_c)
//     }
// }

function init() {
    //Clear submitted cards with clearGame()
    // clearGame()
    generateDeck()
    shuffleDeck(deck)
    dealHand()
    renderScore()
    
}

//Begin game//
init()










