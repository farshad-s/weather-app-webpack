let dropdown = document.getElementById("dropdown");
let dropdownBox = document.getElementById("dropdown-box");

export const toggleDropdown = () => {
  dropdown.addEventListener("click", function () {
    dropdownBox.style.display !== "block"
      ? (dropdownBox.style.display = "block")
      : (dropdownBox.style.display = "none");
  });
};
