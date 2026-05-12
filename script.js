document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    const logoLink = document.getElementById('logo-link');

    // 頁首 Logo 回頂部功能
    logoLink.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 捲動至服務項目
    ctaButton.addEventListener('click', () => {
        document.querySelector('#services').scrollIntoView({
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        } else {
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });
});