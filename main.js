
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
const wintext = document.getElementById('wintext');
const tietext = document.getElementById('tietext');

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

function tieBreak() {
    wintext.innerHTML = ''
    tietext.innerHTML = '<strong><i><u>!--WAR--!</u></i></strong> &nbsp Draw again. Computer wins by default'
    player2Hand.unshift(...player1Hand.splice(0, 8));
    console.log('WarTie')
    console.log(player1Hand, player2Hand)
}

function flipCard() {  
    clearTieText()
    const player1card = player1Hand.pop()
    const player2card = player2Hand.pop()
    playercard.classList[1] ? playercard.classList.replace(playercard.classList[1], player1card.face)  : playercard.classList.add(player1card.face)
    compcard.classList[1] ? compcard.classList.replace(compcard.classList[1], player2card.face)  : compcard.classList.add(player2card.face)
    compareCards(player1card, player2card)
} 

function clearTieText() {
tietext.innerText = ''
}

function compareCards(player1card, player2card) {
    if(player1card.value > player2card.value) {
        player1Hand.unshift(player1card, player2card)
        console.log("Player 1 Wins this draw!")
        let element = document.getElementById('wintext');
        element.innerHTML = 'Player 1 wins this draw!'
    } else if (player2card.value > player1card.value){
        player2Hand.unshift(player1card, player2card)
        let element = document.getElementById('wintext');
        console.log("Computer Wins this draw!")
        element.innerHTML = 'The Computer wins this draw!'   
    } else {
        tieBreak()
    }
  renderScore()
  updateScore()
}

function renderScore() {
    score_p.innerText= `Player card count ${player1Hand.length}`
    score_c.innerText= `CPU card count ${player2Hand.length}`
}

function updateScore() {
    if(playercard.value > compcard.value) {
        player2Hand.push(player1Hand);
        return player2Hand;
    } else if (playercard.value < compcard.value) {
        player1Hand.push(...player2Hand);
        return player1Hand;
    }
    shouldGameEnd()
}

function shouldGameEnd() {
    if (player1Hand.length === 0) {
    let end = document.getElementById('gameover');
    end.innerHTML = "Game over - " + "Computer wins :" + "'" + "("}
    if (player2Hand.length === 0) {
        let end = document.getElementById('gameover');
        console.log(end)
        end.innerHTML = 'Game over! ' + 'Player 1 wins.'
    }
}

function init() {
    compcard.className = 'card'
    playercard.className = 'card'
    tietext.innerText = ''
    wintext.innerText = ''
    gameover.innerText = ''
    generateDeck()
    shuffleDeck(deck)
    dealHand()
    renderScore()
    updateScore()
}
//START!
init()