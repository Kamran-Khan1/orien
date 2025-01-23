const quantity1 = document.getElementById("Quantity-patali");
const quantity2 = document.getElementById("Quantity-jhola");
const displayTotal = document.getElementById("total");
const city = document.getElementById("City");
const data = [
  { id: 1, city: "সিটির ভেতরে", tk: 60 },
  { id: 2, city: "ঢাকার ভেতরে", tk: 110 },
  { id: 3, city: "সিটির আশেপাশে", tk: 80 },
  { id: 4, city: "সিটির বাইরে", tk: 130 },
];

// Initialize the total value
let baseTotal1 = 0;
let cityCharge = 0;
let baseTotal2 = 0;
//handle quantity2 changes
quantity2.addEventListener("change", () => {
  const selectedQuantity = quantity2.value;
  baseTotal2 = selectedQuantity * 490;
  updateTotal();
});

// Handle quantity1 changes
quantity1.addEventListener("change", () => {
  const selectedQuantity = quantity1.value;
  baseTotal1 = selectedQuantity * 450;

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
  displayTotal.value = baseTotal1 + cityCharge + baseTotal2;
}
