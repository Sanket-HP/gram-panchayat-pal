// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all the navigation links
    var navLinks = document.querySelectorAll('nav a');

    // Add a click event listener to each navigation link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default behavior of the link
            event.preventDefault();

            // Log the clicked link text to the console
            console.log('Clicked link:', link.textContent);
            
            // You can add more functionality here, such as navigating to the clicked link
            // For example, window.location.href = link.href;
        });
    });
});
