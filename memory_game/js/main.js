var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');



var createBoard = function() {
	// this creates the loop to make the 4 div elements
	for (var i = 0; i < cards.length; i++) {
		// this creates the code for the div elements
		var cardElement = document.createElement('div');
		// this gives the just created div elements the
		// class name of card
		cardElement.className = 'card';
		// this attaches the four div elements to the
		// parent element of the id game-board
		gameBoard.appendChild(cardElement);
 		// this will set the card's 'data-card' to be the element of the array
 		// data- attributes are meant to store data about an element that is not
 		// tied to a style.
 		// i.e. "king"
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards)
	}
};


var isTwoCards = function() {
  	// add card to array of cardsInPlay
  	// 'this' hasn't been covered in this prework, but
  	// for now, just know it gives you access to the card the user clicked on
  	cardsInPlay.push(this.getAttribute('data-card'));

  	// displays picture of queen or king
  	if (this.getAttribute('data-card') === 'queen') {
  		this.innerHTML = "<img src='http://i.imgur.com/ZaL6Gt7.png'>";
  	} else {
  		this.innerHTML = "<img src='http://i.imgur.com/B6W8ZDX.png'>";
  	}

  	// if you have two cards in play check for a match
  	if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];
	}
};



var isMatch = function(cardChosen) {
	if (cardChosen[0] === cardChosen[1]) {
	window.alert("You found a match!")
 	} else {
 	window.alert("Sorry, try again.")
 	}
 };


createBoard ();















