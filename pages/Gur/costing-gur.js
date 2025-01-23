const quantity = document.getElementById("Quantity");
const displayTotal = document.getElementById("total");
const city = document.getElementById("City");
const data = [
  { id: 1, city: "সিটির ভেতরে", tk: 60 },
  { id: 2, city: "ঢাকার ভেতরে", tk: 110 },
  { id: 3, city: "সিটির আশেপাশে", tk: 80 },
  { id: 4, city: "সিটির বাইরে", tk: 130 },
];

// Initialize the total value
let baseTotal = 0;
let cityCharge = 0;

// Handle quantity changes
quantity.addEventListener("change", () => {
  const selectedQuantity = quantity.value;
  baseTotal = selectedQuantity * 1800;

  // Update total value dynamically
  updateTotal();
});

// Handle city changes
city.addEventListener("change", () => {
  const selectedValue = city.value;

  // Find the matching city and update the city charge
  const selectedCity = data.find((value) => value.city === selectedValue);
  cityCharge = selectedCity ? selectedCity.tk : 0;

  // Update total value dynamically
  updateTotal();
});

// Function to update the total value
function updateTotal() {
  displayTotal.value = baseTotal + cityCharge;
}
