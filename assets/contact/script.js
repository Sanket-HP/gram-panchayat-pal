document.addEventListener("DOMContentLoaded", function() {
    // Get the contact form element
    var contactForm = document.querySelector('form');

    // Add a submit event listener to the form
    contactForm.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the values from the form fields
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Log the form data to the console (you can replace this with your desired functionality)
        console.log("Form submitted with the following data:");
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Message: " + message);

        // You can add further processing or send the form data to a server here
    });
});


