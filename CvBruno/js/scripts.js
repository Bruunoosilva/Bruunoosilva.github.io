window.addEventListener('DOMContentLoaded', () => {

    const sideNav = document.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    }

    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = Array.from(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.forEach(responsiveNavItem => {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});