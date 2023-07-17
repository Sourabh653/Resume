// script.js

// Smooth scrolling to sections when clicking on navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  
  // Form submission handling
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Perform form validation
      if (validateForm()) {
        // Simulate form submission
        const formData = {
          name: nameInput.value,
          email: emailInput.value,
          message: messageInput.value,
        };
  
        console.log(formData);
  
        // Reset form fields
        form.reset();
      }
    });
  
    function validateForm() {
      let isValid = true;
  
      if (nameInput.value.trim() === '') {
        isValid = false;
        // Display an error message for name field
        // Example: document.getElementById('nameError').textContent = 'Please enter your name.';
      }
  
      if (emailInput.value.trim() === '') {
        isValid = false;
        // Display an error message for email field
        // Example: document.getElementById('emailError').textContent = 'Please enter your email.';
      }
  
      if (messageInput.value.trim() === '') {
        isValid = false;
        // Display an error message for message field
        // Example: document.getElementById('messageError').textContent = 'Please enter your message.';
      }
  
      return isValid;
    }
  });
  