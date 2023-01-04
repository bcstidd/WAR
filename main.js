// console.clear() //clear board

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
const winner = []

// State Variables
let score, player1Hand, player2Hand 

/*----- cached element references -----*/
const playBtn = document.getElementById('playBtn')
const playercard = document.getElementById('playercard')
const compcard = document.getElementById('compcard')
const score_p = document.getElementById('score_p')
const score_c = document.getElementById('score_c')


// const boardEl = document.getElementById('board')
// const resetBtnEl = document.createElement('button')


// 

// /*----- event listeners -----*/
// boardEl.addEventListener('click', handleBoardClick)
// resetBtnEl.addEventListener('click', handleReset)
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
    const player1card = player1Hand.pop()
    const player2card = player2Hand.pop()
    playercard.classList[1] ? playercard.classList.replace(playercard.classList[1], player1card.face)  : playercard.classList.add(player1card.face)
    compcard.classList[1] ? compcard.classList.replace(compcard.classList[1], player2card.face)  : compcard.classList.add(player2card.face)
    compareCards(player1card, player2card)

    
}

function compareCards(player1card, player2card) {
    if(player1card.value > player2card.value) {
        console.log("Player 1 Wins this draw!")
    } else {
        console.log("The Computer Wins this draw!")
    }
renderScore()
//Whoever wins, push both cards to the bottome of their deck (push to the array)
//Computed State - 

}

function renderScore() {
    score_p.innerText= `playercard count ${player1Hand.length}`
    score_c.innerText= `compcard count ${player2Hand.length}`
}

function init() {
    generateDeck()
    shuffleDeck(deck)
    dealHand()
    renderScore()
    }

init()












