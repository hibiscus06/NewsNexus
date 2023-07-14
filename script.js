const API_KEY = "1aaf8dc92f164a898e64b8da937aa98b";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load",() => fetchNews("India"));

async function fetchNews(query) {

     const res = await fetch(`${url}${query}&apikey=${API_KEY}`
    );
    const data = await res.json();
    console.log(data);
    bindData(data.articles);
  }
  
  function bindData(articles) {
    const cardContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");
  
    if (cardContainer) {
        cardContainer.innerHTML = "";
      }

    articles.forEach((article) => {
      if (!article.urlToImage) {
        return;
      }
      const cardClone = newsCardTemplate.content.cloneNode(true);
  
      //fillDataInCard(cardClone, article);
      cardContainer.appendChild(cardClone);
    });
  }

  
