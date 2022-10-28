const vacancies = [
  "Delivery Man",
  "Delivery Man",
  "Delivery Man",
  "Delivery Man",
  "Delivery Man",
  "Delivery Man",
  "Delivery Man",
];
var vacanciesWrap = document.getElementById("vacancies__wrap");

var vacanciesContainer = "";
vacancies.forEach((user) => {
  var card = `
  <div class="vacancy__card">
  <h1>Delivery Man</h1>
  <ul>
    <li>Experience in a support service or call center;</li>
    <li>Good knowledge of Tashkent roads</li>
    <li>good communication skills (clearness, logic of statements, attentiveness to the interlocutor);</li>
    <li>partner behavior of a person in conflict situations;</li>
    <li>Having an Android smartphone</li>
  </ul>
  <div class="actions">
    <button>Details</button>
    <button>Apply</button>
  </div>
</div>
    `;
  vacanciesContainer += card;
});

vacanciesWrap.innerHTML = vacanciesContainer;
