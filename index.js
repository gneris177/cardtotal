const cards  = document.querySelectorAll(".card");
const colors = ['#ff7f50','#ff47f50','#87cefa','#da70d6','#da7111d9','#ca70d6','#32cd32',  '#ff69b4','#ba55d3','#ccc','#ffa500','#40e0d0'];

cards.forEach((elem, i) => {
    elem.style.background = colors[i];
})

const getId = (id) => {
  const name = prompt("Qual o seu nome");

  const cardInfo = {
    name: name,
    cardId: id,
  };

  const dataCurrent = [];

  if (localStorage.cardInfo) dataCurrent.push(localStorage.cardInfo);
  dataCurrent.push(cardInfo);

  localStorage.setItem("cardInfo", JSON.stringify(dataCurrent));
};
