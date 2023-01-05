
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
playBtn.addEventListener('click', tietext.remove())
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
    player1Hand = deck.slice(1, 26)
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
        player1Hand.unshift(player1card, player2card)
        console.log("Player 1 Wins this draw!")
        let element = document.getElementById('wintext');
        element.innerHTML = 'Player 1 wins this draw!'
    } else {
        player2Hand.unshift(player1card, player2card)
        console.log("The Computer Wins this draw!")
        let element = document.getElementById('wintext');
        element.innerHTML = 'The Computer wins this draw!'   
    } if (player1card.value === player2card.value) {
        console.log('WarTie')
        let tie = document.getElementById('tietext');
        tie.innerHTML = 'WAR! Draw again'
        
    }
  renderScore()
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
 
function shouldGameEnd() {
    if (player1Hand.length === 0) {
    let end = document.getElementById('gameover');
    end.innerHTML = 'Game over! ' + 'Player 1 wins'}
    if (player2Hand.length === 0) {
        let end = document.getElementById('gameover');
        end.innerHTML = 'Game over! ' + 'Computer wins :('
    }
    
}


// function clearSub() {
//     card.clear()
//     const card = card()
// }


function init() {
    // clearSub()
    generateDeck()
    shuffleDeck(deck)
    dealHand()
    renderScore()
    updateScore()
    // shouldGameEnd()
}

init()