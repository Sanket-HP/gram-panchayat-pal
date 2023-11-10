// You can add JavaScript functionality here if needed
// For example, dynamic content updates or interactions
document.addEventListener('DOMContentLoaded', function () {
    // Sample: Add a click event listener to the services list items
    const servicesList = document.querySelectorAll('ul li');

    servicesList.forEach(function (service) {
        service.addEventListener('click', function () {
            alert(`You selected: ${service.textContent}`);
            // You can add more functionality here, such as displaying details of the selected service.
        });
    });
});

