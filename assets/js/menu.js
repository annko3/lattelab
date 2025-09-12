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
    
    });

    let submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", function () {
        alert(`¡Encargo realizado con éxito! Total a pagar: ${calculatePrice()}`);
    });
});

