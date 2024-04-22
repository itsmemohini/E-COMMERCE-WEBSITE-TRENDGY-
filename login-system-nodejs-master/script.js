const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from being submitted to the server

    alert("Thank you for contacting us!"); // Show alert message

    // Replace the HTML of the form section with a thank you message
    var formSection = document.getElementById("form-details");
    formSection.innerHTML =
      "<h3>Thank you for contacting us!<br> We will contact you soon </h3>";
  });
});

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve signup.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;
  console.log("New user signed up:", { username, email, password });
  res.redirect("index.html");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
