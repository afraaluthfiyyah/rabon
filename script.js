document.getElementById("searchInput").addEventListener("input", function() {
  const value = this.value.toLowerCase();
  const cakeContainer = document.getElementById("cake-container");
  if (value.includes("kue") || value.includes("cake") || value.includes("ulang tahun")) {
    cakeContainer.style.display = "block";
  } else {
    cakeContainer.style.display = "none";
  }
});
