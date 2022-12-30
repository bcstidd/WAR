const suits = ['d', 'h', 'c', 's']
const faces = ['A', 'K', 'Q', 'J', '10', '09', '08', '07', '06', '05', '04', '03', '02']
const deck = []

function generateDeck() {
    suits.forEach(suit => {
        faces.forEach(face => {
            let score
            // if(face === 'K') {
            //     score = 10
            // }
            // CALCULATE THE SCORE OF THE CARD
            // AND INCLUDE THAT NUMERICAL VALUE ON THE CARD OBJECT
            deck.push({
                'face': suit + face,
                'value': score
            })
        })
    })
}

function renderDeck() {
    deck.forEach(card => {
        const cardEl = document.createElement('div')
        cardEl.className = 'card ' + card.face
        document.querySelector('body').append(cardEl)
    })
}

generateDeck()
renderDeck()