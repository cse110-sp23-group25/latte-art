function flipCard(cardId) {
    var card = document.getElementById(cardId);
    var backgroundImage = card.style.backgroundImage;
  
    if (backgroundImage.includes("start.png")) {
      // Flip to card_package image
      card.style.backgroundImage = "url(card_package/" + getRandomCard() + ")";
    } else {
      // Flip back to start.png
      card.style.backgroundImage = "url(start.png)";
    }
  }
  
  function getRandomCard() {
    var cardPackage = ["card1.png", "card2.png", "card3.png", "card4.png", "card5.png"];
    var randomIndex = Math.floor(Math.random() * cardPackage.length);
    return cardPackage[randomIndex];
  }
  