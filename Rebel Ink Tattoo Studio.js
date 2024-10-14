document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');

    function setActiveSection(id) {
        // Hide all sections and remove active class from all links
        sections.forEach(section => section.style.display = 'none');
        navLinks.forEach(link => link.classList.remove('active'));

        // Show the selected section and add active class to the corresponding link
        document.querySelector(id).style.display = 'block';
        document.querySelector(`nav ul li a[href="${id}"]`).classList.add('active');
    }

    // Attach event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            setActiveSection(this.getAttribute('href'));
        });
    });

    // Display the home section by default
    setActiveSection('#home');
});
