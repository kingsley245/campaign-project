const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you for volunteering! We’ll contact you soon.");
    form.reset(); // Clear the form
  });

