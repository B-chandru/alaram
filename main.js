
const anime=document.getElementById("anime");
const character=document.getElementById("character");
const quotes=document.getElementById("quote");

fetch('https://animechan.vercel.app/api/random')
.then(response => response.json())
.then(quote =>{ 
anime.innerText = quote.anime;
character.innerText = quote.character;
quotes.innerText = quote.quote;
})
