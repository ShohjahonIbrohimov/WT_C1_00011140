function toggleMenu() {
  var headerLinks = document.getElementById("header__links");
  console.log(headerLinks);
  if (headerLinks.style.display === "flex") {
    headerLinks.style.display = "none";
  } else {
    headerLinks.style.display = "flex";
  }
}
