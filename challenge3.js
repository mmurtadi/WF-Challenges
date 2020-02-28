// Widerfunnel challenge 3
// Moe Murtadi
// Feb 27, 2019

var cardDeck = document.createElement("section");
cardDeck.setAttribute('class', 'card-deck');
cardDeck.setAttribute('id', 'card-deck-id');
document.getElementById('top-pricing-section').appendChild(cardDeck);
document.querySelector("#top-pricing-section > section.xs-pt4.sm-pt4.xs-pb3.sm-pb3.lg-py6")

var badges = ["Badge printing", "Legal document signing", "Visitor photos", "Multiple sign-in flows", "Visitor screening", "Delivery notifications"];
var badgeImage = ["Badge printing", "Legal document signing", "Visitor photos", "Multiple sign-in flows", "Visitor screening", "Delivery notifications"];
var i;
for (i = 0; i < badges.length; i++) {
    var card = document.createElement("div");
    var idName = "card" + i.toString();
    card.setAttribute('class', 'card');
    card.setAttribute('id', idName);
    document.getElementById('card-deck-id').appendChild(card);
    var cardText = document.createElement("p");
    cardText.innerHTML = badges[i];
    document.getElementById(idName).appendChild(cardText); 
}


