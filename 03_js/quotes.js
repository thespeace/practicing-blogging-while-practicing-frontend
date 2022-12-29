const quotes = [
    {
        quote : "JavaScript 세계에서 문제에 직면했을때마다 다른 개발자들도 100% 겪었다고 확신해도 좋다. \n" + "많은 개발자들이 같은 문제를 겪고 또 겪었다면 Javascript 그 자체에 이미 그 작업을 수행하는 Function이 있을 것이다.",
        author : "유튜버 노마드코더"
    },
    {
        quote : "quote2",
        author : "author2"
    },
    {
        quote : "quote3",
        author : "author3"
    },
    {
        quote : "quote4",
        author : "author4"
    },
    {
        quote : "quote5",
        author : "author5"
    },
    {
        quote : "quote6",
        author : "author6"
    },
    {
        quote : "quote7",
        author : "author7"
    },
    {
        quote : "quote8",
        author : "author8"
    },
    {
        quote : "quote9",
        author : "author9"
    },
    {
        quote : "quote10",
        author : "author10"
    },
    {
        quote : "quote11",
        author : "author11"
    }
]

const randomQuote = document.querySelector("#randomQuote");
randomQuote.innerText = quotes[Math.floor(Math.random() * 10)].author;
