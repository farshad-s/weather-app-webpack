let searchbar = document.getElementById("city-search");
let searchButton = document.getElementById("city-search-button");

export const enterKey = () => {
  searchbar.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      searchButton.click();
    }
  });
};
