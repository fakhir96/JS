const url = "https://dummyjson.com/quotes/random";

const btn = document.querySelector("#generate-btn");
const q = document.querySelector("#quote");
const auth = document.querySelector("#author");
const tweet = document.querySelector("#twitter");

btn.addEventListener("click", generateQuote);
tweet.addEventListener("click", tweetQuote);

async function generateQuote(){
    const response = await fetch(url);
    const result = await response.json();
    q.innerText = `"${result.quote}"`;
    auth.innerHTML = `<span id="line"></span>"${result.author}"`;
}

function tweetQuote() {
  
    const tweet = `"${q.innerText}" ${auth.innerText}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
  
    window.open(tweetUrl, "_blank");
}