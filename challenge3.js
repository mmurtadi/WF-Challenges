// Widerfunnel challenge 3
// Moe Murtadi
// Feb 27, 2019

var cardDeck = document.createElement("div");
cardDeck.setAttribute('class', 'card-deck');
cardDeck.setAttribute('style', 'display: flex;margin: 60px auto 0;width: 80%;');
cardDeck.setAttribute('id', 'card-deck-id');
document.querySelector("#top-pricing-section > section.xs-pt4.sm-pt4.xs-pb3.sm-pb3.lg-py6").appendChild(cardDeck);

var badges = ["Badge printing", "Legal document signing", "Visitor photos", "Multiple sign-in flows", "Visitor screening", "Delivery notifications"];
var badgeImage = ["Badge printing", "Legal document signing", "Visitor photos", "Multiple sign-in flows", "Visitor screening", "Delivery notifications"];
var i;

//toggle for active card and item select
function toggleColour(){
    this.setAttribute("style", "color: #EF3934")
    //

}

//create cards 
for (i = 0; i < badges.length; i++) {
    var card = document.createElement("div");
    var idName = "card" + i.toString();
    card.setAttribute('style', 'width: 15%;text-align: center;margin:10px auto;box-shadow: 3px 5px #555;border: 1px solid;padding: 10px;');
    card.setAttribute('id', idName);
    card.setAttribute("onclick", "toggleColour();")
    //set Image
    var nestedLogo =  document.createElement("img");
    nestedLogo.setAttribute('src', 'https://pbs.twimg.com/profile_images/1158749853372936193/98lQXwYf_400x400.jpg');
    nestedLogo.setAttribute('id', 'WFLogo');
    nestedLogo.setAttribute('style', 'height: auto;width: 30px; margin:5px auto;display:block;');
    
    document.getElementById('card-deck-id').appendChild(card);
    var cardText = document.createElement("p");
    cardText.innerHTML = badges[i];
    
    document.getElementById(idName).appendChild(nestedLogo);
    document.getElementById(idName).appendChild(cardText); 
}




