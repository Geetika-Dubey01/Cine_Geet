const seats = document.querySelectorAll('.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const selectedSeatsDisplay = document.getElementById('seats');

let selectedSeats = [];
let totalPrice = 0;

seats.forEach(seat => {
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected');
    const seatNumber = seat.getAttribute("data-seat");

    if (seat.classList.contains('selected')) {
      selectedSeats.push(seatNumber);
    } else {
      selectedSeats = selectedSeats.filter(s => s !== seatNumber);
    }

    totalPrice = 0;
    selectedSeats.forEach(seatNo => {
      if (seatNo.startsWith("A") || seatNo.startsWith("B")) totalPrice += 300; // Platinum
      else if (seatNo.startsWith("C") || seatNo.startsWith("D")) totalPrice += 200; // Gold
      else totalPrice += 150; // Silver
    });

    count.textContent = `Seats Selected: ${selectedSeats.length}`;
    selectedSeatsDisplay.textContent = selectedSeats.length > 0 
      ? `Selected Seats: ${selectedSeats.join(", ")}`
      : "Selected Seats: None";
    total.textContent = `Total: ₹${totalPrice}`;
  });
});
