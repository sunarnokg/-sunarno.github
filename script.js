document.getElementById("formLink").addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah link melakukan aksi default
  const form = document.getElementById("contactForm");
  form.style.display = form.style.display === "none" ? "block" : "none"; // Toggle tampilan form
});
