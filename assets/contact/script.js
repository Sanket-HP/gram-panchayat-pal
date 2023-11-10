document.addEventListener('DOMContentLoaded', function () {
    // Get the contact form element
    const contactForm = document.querySelector('form');

    // Add a submit event listener to the form
    contactForm.addEventListener('submit', function (event) {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Validate the form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all required fields.');
        } else {
            // If all fields are filled, you can perform further actions here
            alert('Form submitted successfully!');
            // You may want to send the form data to a server, for example.
        }
    });
});

