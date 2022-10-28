const users = [
  {
    name: "John Doe",
    mostOrdered: "Hamburger",
    score: "30",
  },
  {
    name: "John Doe",
    mostOrdered: "Hamburger",
    score: "30",
  },
  {
    name: "John Doe",
    mostOrdered: "Hamburger",
    score: "30",
  },
  {
    name: "John Doe",
    mostOrdered: "Hamburger",
    score: "30",
  },
  {
    name: "John Doe",
    mostOrdered: "Hamburger",
    score: "30",
  },
  {
    name: "John Doe",
    mostOrdered: "Hamburger",
    score: "30",
  },
  {
    name: "John Doe",
    mostOrdered: "Hamburger",
    score: "30",
  },
  {
    name: "John Doe",
    mostOrdered: "Hamburger",
    score: "30",
  },
];
var topUsers = document.getElementById("top_users_table");
console.log(topUsers);
var usersTr = "";
users.forEach((user) => {
  var tr = `
        <tr>
          <td>${user.name}</td>
          <td>${user.mostOrdered}</td>
          <td>${user.score}</td>
        </tr>
  `;
  usersTr += tr;
});

topUsers.innerHTML = usersTr;
