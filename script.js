let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      
      // Get form input values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      
      // You can perform further actions here, such as sending the data to a server
      
      // Clear form inputs after submission
      contactForm.reset();
    });
  });
  