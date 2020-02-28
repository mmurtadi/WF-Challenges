// Widerfunnel challenge 4
// Moe Murtadi
// Feb 27, 2019

var hero = document.querySelector("#root > main > div:nth-child(2) > div > div:nth-child(2) > div > section > div > h1");
hero.innerHTML = "Personalized for you.";

document.querySelector("#root > main > div:nth-child(2) > div > div:nth-child(2) > div > section > div > h1").addEventListener("click", function(e){
    if(!isValid){
        hero.innerHTML = "Personalized for you.";
    }
});

