// Movies Data
const recommendedMovies = [
  { title: "Vash Level 2", lang: "Hindi", img: "https://via.placeholder.com/200x300" },
  { title: "The Conjuring", lang: "English", img: "https://via.placeholder.com/200x300" },
  { title: "Demon Slayer", lang: "Japanese", img: "https://via.placeholder.com/200x300" },
  { title: "Animal", lang: "Hindi", img: "https://via.placeholder.com/200x300" },
];

const liveEvents = [
  { title: "ICC Women’s CWC 2025", info: "10 Events", img: "https://via.placeholder.com/200x200" },
  { title: "Comedy Shows", info: "8 Events", img: "https://via.placeholder.com/200x200" },
  { title: "Music Shows", info: "6 Events", img: "https://via.placeholder.com/200x200" },
  { title: "Workshops", info: "5 Events", img: "https://via.placeholder.com/200x200" },
];

const premieres = [
  { title: "Holy Ghost", lang: "English", img: "https://via.placeholder.com/200x300" },
  { title: "999: The Forgotten Girls", lang: "English", img: "https://via.placeholder.com/200x300" },
  { title: "Highway 65", lang: "Hebrew", img: "https://via.placeholder.com/200x300" },
  { title: "Alien Genesis", lang: "English", img: "https://via.placeholder.com/200x300" },
];

// Function to render cards
function renderCards(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = data.map(item => `
    <div class="card">
      <img src="${item.img}" alt="${item.title}">
      <div class="card-body">
        <h3>${item.title}</h3>
        <p>${item.lang || item.info}</p>
      </div>
    </div>
  `).join("");
}

function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

function toggleMenu() {
  document.querySelector(".navbar").classList.toggle("active");
}

// Search Function
document.getElementById("searchInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let query = this.value.toLowerCase().trim();

    if (query.includes("movie")) {
      window.location.href = "movie.html";
    } 
    else if (query.includes("event")) {
      window.location.href = "events.html";
    } 
    else if (query.includes("play")) {
      window.location.href = "plays.html";
    } 
    else if (query.includes("sport")) {
      window.location.href = "sports.html";
    } 
    else {
      alert("No results found!");
    }
  }
});