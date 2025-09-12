document.addEventListener("DOMContentLoaded", function () {
    let typeService = document.getElementById("type-service");
    let reservationOptions = document.getElementById("reservation-options");
    let eventOptions = document.getElementById("event-options");
    let orderOptions = document.getElementById("order-options");

    typeService.addEventListener("change", function () {
        switch (this.value) {
        case "reservation":
            reservationOptions.style.display = "block";
            eventOptions.style.display = "none";
            orderOptions.style.display = "none";
            break;
        case "event":
            reservationOptions.style.display = "none";
            eventOptions.style.display = "block";
            orderOptions.style.display = "none";
            break;
        case "order":
            reservationOptions.style.display = "none";
            eventOptions.style.display = "none";
            orderOptions.style.display = "block";
            break;
        default:
            reservationOptions.style.display = "none";
            eventOptions.style.display = "none";
            orderOptions.style.display = "none";
        }
        calculatePrice();
    });

    let priceInputs = [
        "americano-qty",
        "cappuccino-qty",
        "latte-qty",
        "mocha-qty",
        "cake-qty",
        "sandwich-qty",
        "event-decoration",
        "custom-cake",
        "photographer",
        "table-decoration",
        "special-menu",
        "people-event",
        "people-reservation",
    ];

    priceInputs.forEach((inputId) => {
        let input = document.getElementById(inputId);
        if (input) {
        input.addEventListener("input", calculatePrice);
        input.addEventListener("change", calculatePrice);
        }
    });

    let submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", function () {
        alert(
        `¡Encargo realizado con éxito! Total a pagar: $${calculatePrice().toFixed(2)}`
        );
    });
});

function calculatePrice() {
  let totalPrice = 0;

  let americanoQty =
    parseInt(document.getElementById("americano-qty").value) || 0;
  totalPrice += americanoQty * 3.5;

  let cappuccinoQty =
    parseInt(document.getElementById("cappuccino-qty").value) || 0;
  totalPrice += cappuccinoQty * 4.0;

  let latteQty = parseInt(document.getElementById("latte-qty").value) || 0;
  totalPrice += latteQty * 4.25;

  let mochaQty = parseInt(document.getElementById("mocha-qty").value) || 0;
  totalPrice += mochaQty * 4.5;

  let cakeQty = parseInt(document.getElementById("cake-qty").value) || 0;
  totalPrice += cakeQty * 5.0;

  let sandwichQty =
    parseInt(document.getElementById("sandwich-qty").value) || 0;
  totalPrice += sandwichQty * 6.5;

  let decoration = document.getElementById("event-decoration").checked;
  if (decoration) totalPrice += 100;

  let customCake = document.getElementById("custom-cake").checked;
  if (customCake) totalPrice += 80;

  let photographer = document.getElementById("photographer").checked;
  if (photographer) totalPrice += 150;

  let tableDecoration = document.getElementById("table-decoration").checked;
  if (tableDecoration) totalPrice += 15;

  let specialMenuEvent = document.getElementById("special-menu").checked;
  if (specialMenuEvent) {
    let peopleEvent =
      parseInt(document.getElementById("people-event").value) || 0;
    totalPrice += peopleEvent * 10;
  }

  let specialMenuReservation = document.getElementById("special-menu").checked;
  if (specialMenuReservation) {
    let peopleReservation =
      parseInt(document.getElementById("people-reservation").value) || 0;
    totalPrice += peopleReservation * 10;
  }

  document.getElementById("total-price").innerText = `$${totalPrice.toFixed(
    2
  )}`;
  return totalPrice;
}
calculatePrice();
