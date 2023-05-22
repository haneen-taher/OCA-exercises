function createCard(text, columnId) {
  const cardContainer = document.getElementById(columnId);
  const card = document.createElement("div");
  card.classList.add("card");

  const cardText = document.createElement("div");
  cardText.textContent = text;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", function () {
    card.remove();
  });

  card.appendChild(cardText);
  card.appendChild(deleteButton);
  cardContainer.appendChild(card);
}

function addCard(columnId) {
  const input = document.getElementById(columnId + "-input");
  const text = input.value.trim();
  if (text !== "") {
    createCard(text, columnId);
    input.value = "";
  }
}
