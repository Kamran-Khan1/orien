document.getElementById("search-bar").addEventListener("input", function () {
  const query = this.value.toLowerCase(); // Get search query
  const items = document.querySelectorAll(".middle .item"); // Select all items

  items.forEach((item) => {
    const title = item.querySelector(".title h6").textContent.toLowerCase(); // Get product title
    if (title.includes(query)) {
      item.style.display = "block"; // Show item if it matches
    } else {
      item.style.display = "none"; // Hide item if it doesn't match
    }
  });
});
