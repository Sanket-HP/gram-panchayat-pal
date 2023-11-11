document.addEventListener("DOMContentLoaded", function() {
    // Get all member images
    var memberImages = document.querySelectorAll('.member img');

    // Add a click event listener to each member image
    memberImages.forEach(function(image) {
        image.addEventListener('click', function() {
            // Get the alt text of the clicked image
            var memberName = image.alt;

            // Log a message with the selected member's name (you can replace this with your desired functionality)
            console.log("You selected the member: " + memberName);

            // You can add further processing or display more information about the selected member here
        });
    });
});
