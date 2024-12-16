// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submitBtn");
  const productBoxes = document.querySelectorAll(".product-box");
  const radioButtons = document.querySelectorAll('input[name="product"]');

  // Function to show/hide dropdowns based on selected product
  function updateDropdowns() {
    productBoxes.forEach((box) => {
      const radio = box.querySelector('input[name="product"]');
      const dropdowns = box.querySelector(".dropdowns");
      if (radio.checked) {
        dropdowns.style.display = "flex";
      } else {
        dropdowns.style.display = "none";
      }
    });
  }

  // Add change event listener to radio buttons
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", updateDropdowns);
  });

  // Initial call to set the correct dropdown visibility
  updateDropdowns();

  // Add click event listener to the add to cartt button
  addToCart.addEventListener("click", function () {
    const selectedProduct = document.querySelector(
      'input[name="product"]:checked'
    );

    if (selectedProduct) {
      let price;
      let details = "";
      switch (selectedProduct.value) {
        case "1unit":
          price = 20.0;
          details = `Color: ${
            document.querySelector('select[name="color1"]').value
          }, Size: ${document.querySelector('select[name="size1"]').value}`;
          break;
        case "2units":
          price = 35.0;
          details = `Unit 1 - Color: ${
            document.querySelector('select[name="color2_1"]').value
          }, Size: ${
            document.querySelector('select[name="size2_1"]').value
          }; Unit 2 - Color: ${
            document.querySelector('select[name="color2_2"]').value
          }, Size: ${document.querySelector('select[name="size2_2"]').value}`;
          break;
        case "3units":
          price = 50.0;
          details = `Unit 1 - Color: ${
            document.querySelector('select[name="color3_1"]').value
          }, Size: ${
            document.querySelector('select[name="size3_1"]').value
          }; Unit 2 - Color: ${
            document.querySelector('select[name="color3_2"]').value
          }, Size: ${
            document.querySelector('select[name="size3_2"]').value
          }; Unit 3 - Color: ${
            document.querySelector('select[name="color3_3"]').value
          }, Size: ${document.querySelector('select[name="size3_3"]').value}`;
          break;
        default:
          price = 0;
      }
      alert(
        `You have selected: ${selectedProduct.nextSibling.textContent.trim()} with a price of $${price.toFixed(
          2
        )}. Details: ${details}`
      );
    } else {
      alert("Please select a product before submitting.");
    }
  });
});
