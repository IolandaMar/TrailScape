document.addEventListener('DOMContentLoaded', function() {
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Spinner
    spinner();

    // Toggle del formulari de cerca al clicar la icona de la lupa
    const searchIcon = document.getElementById('searchIcon');
    const searchForm = document.getElementById('searchForm');
    
    searchIcon.addEventListener('click', function() {
        if (searchForm.style.display === 'none') {
            searchForm.style.display = 'flex';
            document.getElementById('searchInput').focus(); // Fer focus al input de cerca quan s'activa
        } else {
            searchForm.style.display = 'none';
            document.getElementById('searchInput').value = ''; // Esborrar el contingut del input de cerca quan es recol·lapsa
        }
    });
});