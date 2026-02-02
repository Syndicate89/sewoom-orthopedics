document.addEventListener('DOMContentLoaded', () => {
    console.log('Sewoom Orthopedics website initialized.');

    // Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.close-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const navLinks = document.querySelectorAll('.mobile-nav-list a');

    function toggleMenu() {
        overlay.classList.toggle('active');
        document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : 'auto';
    }

    if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Close menu when clicking outside content
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) toggleMenu();
    });

    // Smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission Simulation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('input[type="text"]').value;
            const tel = contactForm.querySelector('input[type="tel"]').value;

            if (!name || !tel) {
                alert('성함과 연락처를 입력해 주세요.');
                return;
            }

            alert(`${name}님, 상담 예약이 접수되었습니다.\n곧 담당자가 연락드리겠습니다.`);
            contactForm.reset();
        });
    }

    // Floating Widget Interaction
    const quickResBtn = document.getElementById('quick-res');
    if (quickResBtn) {
        quickResBtn.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const headerHeight = document.getElementById('header').offsetHeight;
                window.scrollTo({
                    top: contactSection.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    }
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('[data-reveal]');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
});
