const cards = document.querySelectorAll(".card__inner");

cards.forEach(function (card) {
  card.addEventListener("click", function (e) {
    card.classList.toggle("is-flipped");
  });
});
