document.addEventListener("DOMContentLoaded", function() {
    // Get the main content area
    var mainContent = document.querySelector('.main-content');

    // Add a click event listener to the main content area
    mainContent.addEventListener('click', function() {
        // Change the background color on click
        mainContent.style.backgroundColor = getRandomColor();
    });

    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});


