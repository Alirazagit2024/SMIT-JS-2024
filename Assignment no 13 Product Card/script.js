let total = 0;

// Access the total price element by ID
const totalPriceElement = document.getElementById("total-price");

// Add event listeners to each "Add to Cart" button
const addToCartButtons = document.getElementsByClassName("add-to-cart");

for (let button of addToCartButtons) {
  button.addEventListener("click", function () {
    const productPrice = parseFloat(
      this.previousElementSibling.getAttribute("data-price")
    );
    total += productPrice;
    totalPriceElement.textContent = total.toFixed(2);
  });
}

// Clear Cart button functionality
const clearCartButton = document.getElementById("clear-cart");

clearCartButton.addEventListener("click", function () {
  total = 0;
  totalPriceElement.textContent = total.toFixed(2);
});
