// console.clear() //clear board


const suits = ['d', 'h', 'c', 's']
const faces = ['A', 'K', 'Q', 'J', '10', '09', '08', '07', '06', '05', '04', '03', '02']
const deck = []

function generateDeck() {
    suits.forEach(suit => {
        faces.forEach(face => {
            let score 
             if(face === 'A') {'value' === 14}
             if(face === 'K') {'value' === 13};
             if(face === 'Q') {'value' === 12};
             if(face === 'J') {'value' === 11};
             if(face === '10') {'value' === 10};
             if(face === '09') {'value' === 09};
             if(face === '08') {'value' === 08};
             if(face === '07') {'value' === 07};
             if(face === '06') {'value' === 06};
             if(face === '05') {'value' === 05};
             if(face === '04') {'value' === 04};
             if(face === '03') {'value' === 03};
             if(face === '02') {'value' === 02};
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

// function getCard(){
//     const randomIndex = getRandom(cards.length);
//     return cards[randomIndex]
//   }

// function randomCard() {
//     console.log(Math.random() * 51);
// }


// getCard ()
renderDeck()
generateDeck()



// const resetHelp = []
// const instructions = [
//     'Each player submits one card from their hand of 26 cards. Whichever of the cards has higher value wins the round. First player to retain all 52 cards wins the game.']

// function help () {
//     document.getElementById('rules').innerHTML = instructions[0];
// }

// function resetHelp() {
//     instructions.shift('')
// }


// let compSet, mySet = []

// if(mySet.length === 0 || compSet.length === 0) {
//     // game over
//     if( playerDeck.length > 0 ){
//       console.log('Player Won');
//     } else {
//       console.log('CPU Won');
//     }
//     return false;
//   }