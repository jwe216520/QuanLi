document.addEventListener('DOMContentLoaded', () => {

    const ctaButton = document.getElementById('cta-button');
    const logoLink = document.getElementById('logo-link');

    const TRACK_API = "https://falling-lab-33de.jwe216520.workers.dev/";

    // ⭐ 統一 tracking（備用 JS 呼叫）
    function track(eventName) {
        fetch(TRACK_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                event: eventName,
                page: window.location.pathname
            })
        }).catch(err => console.log("track error", err));
    }

    // ⭐ Logo 回頂 + tracking
    logoLink.addEventListener('click', () => {
        track('logo_click');

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ⭐ CTA scroll + tracking
    ctaButton.addEventListener('click', () => {
        track('cta_scroll_to_services');

        document.querySelector('#services').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // ⭐ Scroll navbar shadow（不影響 tracking）
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');

        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        } else {
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });

});