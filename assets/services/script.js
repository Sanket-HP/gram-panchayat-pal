document.addEventListener("DOMContentLoaded", function() {
    // Get all service links
    var serviceLinks = document.querySelectorAll('ul a');

    // Add a click event listener to each service link
    serviceLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Get the text content of the clicked link
            var serviceName = link.textContent;

            // Alert a message with the selected service name (you can replace this with your desired functionality)
            alert("You selected the service: " + serviceName);

            // You can add further processing or redirect the user to the selected service link here
        });
    });
});
