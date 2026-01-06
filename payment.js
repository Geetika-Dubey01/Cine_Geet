// Elements
const methodRadios = document.querySelectorAll("input[name='method']");
const upiSection = document.getElementById("upiSection");
const cardSection = document.getElementById("cardSection");
const netbankingSection = document.getElementById("netbankingSection");
const paymentForm = document.getElementById("paymentForm");

// Toggle sections based on method
methodRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    upiSection.classList.add("hidden");
    cardSection.classList.add("hidden");
    netbankingSection.classList.add("hidden");

    if (radio.value === "upi") {
      upiSection.classList.remove("hidden");
    } else if (radio.value === "card") {
      cardSection.classList.remove("hidden");
    } else if (radio.value === "netbanking") {
      netbankingSection.classList.remove("hidden");
    }
  });
});

// Handle Payment
paymentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  let method = document.querySelector("input[name='method']:checked").value;
  let details = "";

  if (method === "upi") {
    details = `UPI ID: ${document.getElementById("upi").value}`;
  } else if (method === "card") {
    details = `Card: **** **** **** ${document.getElementById("cardNumber").value.slice(-4)}`;
  } else {
    details = `Bank: ${document.getElementById("bank").value}`;
  }

  alert(`✅ Payment Successful!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMethod: ${method.toUpperCase()}\n${details}`);
});
