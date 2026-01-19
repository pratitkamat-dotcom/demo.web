function toggleMenu() {
  const nav = document.getElementById("nav-links");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill all fields");
    return false;
  }

  alert("Message sent successfully!");
  return false;
}
