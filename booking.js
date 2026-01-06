// Elements
const seatsContainer = document.getElementById("seats");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const bookBtn = document.getElementById("bookBtn");

// Generate 80 seats (10x8)
for (let i = 0; i < 80; i++) {
  const seat = document.createElement("div");
  seat.classList.add("seat");

  // Randomly mark some as occupied
  if (Math.random() < 0.2) {
    seat.classList.add("occupied");
  }

  seat.addEventListener("click", () => {
    if (!seat.classList.contains("occupied")) {
      seat.classList.toggle("selected");
      updateSummary();
    }
  });

  seatsContainer.appendChild(seat);
}

// Update Summary
function updateSummary() {
  const selectedSeats = document.querySelectorAll(".seat.selected");
  const ticketPrice = +movieSelect.value;
  count.innerText = `Seats Selected: ${selectedSeats.length}`;
  total.innerText = `Total Price: ₹${selectedSeats.length * ticketPrice}`;
}

// Change movie price updates total
movieSelect.addEventListener("change", updateSummary);

// Book button
bookBtn.addEventListener("click", () => {
  const selectedSeats = document.querySelectorAll(".seat.selected");
  if (selectedSeats.length === 0) {
    alert("Please select at least one seat!");
    return;
  }
  alert(`✅ Booking Confirmed!\nSeats: ${selectedSeats.length}\n${total.innerText}`);
});
