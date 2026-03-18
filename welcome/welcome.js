// ========================================
// WELCOME PAGE - ULTRA PREMIUM JAVASCRIPT
// Complete with Animations & Interactions
// Version: 2.0.0
// ========================================

document.addEventListener('DOMContentLoaded', function () {

    // ========================================
    // 1. INITIALIZE AOS (Animate on Scroll)
    // ========================================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-in-out'
        });
    }

    // ========================================
    // 2. PREMIUM LOADER - 100% Working
    // ========================================
    const loader = document.querySelector('.premium-loader');

    if (loader) {
        // Force hide after 2 seconds (always works)
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 2000);

        // Backup on window load
        window.addEventListener('load', function () {
            setTimeout(() => {
                loader.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 500);
        });

        // Emergency hide after 3 seconds
        setTimeout(() => {
            if (!loader.classList.contains('hidden')) {
                loader.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        }, 3000);
    }

    // ========================================
    // 3. STATS COUNTER ANIMATION
    // ========================================
    const counters = document.querySelectorAll('.stat-number[data-target]');

    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.dataset.target);
                    let count = 0;
                    const duration = 2000;
                    const step = target / (duration / 16);

                    function updateCounter() {
                        count += step;
                        if (count < target) {
                            counter.innerText = Math.floor(count);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target;
                        }
                    }

                    updateCounter();
                    counterObserver.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    // ========================================
    // 4. FAQ ACCORDION - Smooth
    // ========================================
    const faqQuestions = document.querySelectorAll('.faq-question');

    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const isActive = question.classList.contains('active');

                // Close all
                faqQuestions.forEach(q => {
                    q.classList.remove('active');
                    if (q.nextElementSibling) {
                        q.nextElementSibling.classList.remove('show');
                    }
                });

                // Open current if not active
                if (!isActive && answer) {
                    question.classList.add('active');
                    answer.classList.add('show');
                }
            });
        });
    }

    // ========================================
    // 5. BACK TO TOP BUTTON
    // ========================================
    const backToTop = document.querySelector('.back-to-top');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // 6. UPDATE COPYRIGHT YEAR
    // ========================================
    const yearElement = document.querySelector('.footer-copyright p:first-child');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2025', currentYear);
    }

    // ========================================
    // 7. SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // 8. NAVBAR SCROLL EFFECT (if navbar exists)
    // ========================================
    const navbar = document.querySelector('.creative-nav');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
                navbar.style.background = 'rgba(255,255,255,0.98)';
                navbar.style.boxShadow = '0 10px 30px rgba(139,92,246,0.15)';
            } else {
                navbar.classList.remove('scrolled');
                navbar.style.background = 'rgba(255,255,255,0.8)';
                navbar.style.boxShadow = '0 4px 20px rgba(139,92,246,0.05)';
            }
        });
    }

    // ========================================
    // 9. PARALLAX EFFECT FOR HERO (Optional)
    // ========================================
    const heroSection = document.querySelector('.hero-section');

    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition < window.innerHeight) {
                const speed = 0.5;
                heroSection.style.backgroundPositionY = scrollPosition * speed + 'px';
            }
        });
    }

    // ========================================
    // 10. MOBILE MENU TOGGLE (if exists)
    // ========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('show');

            if (navMenu.classList.contains('show')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu on link click
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('show');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // ========================================
    // 11. PRELOAD IMAGES (for better performance)
    // ========================================
    const images = document.querySelectorAll('.card-image img');

    if (images.length > 0) {
        images.forEach(img => {
            const src = img.getAttribute('src');
            if (src) {
                const newImg = new Image();
                newImg.src = src;
            }
        });
    }

    // ========================================
    // 12. CONSOLE WELCOME - Premium Branding
    // ========================================
    console.log('%c┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓', 'color: #8B5CF6; font-size: 12px;');
    console.log('%c┃      ✦ CREATIVA - PREMIUM TEMPLATE ✦    ┃', 'color: #8B5CF6; font-size: 14px; font-weight: bold;');
    console.log('%c┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛', 'color: #8B5CF6; font-size: 12px;');
    console.log('%c✨ Version: 2.0.0', 'color: #EC4899; font-size: 12px;');
    console.log('%c📦 7+ Pages • SCSS • Bootstrap 5 • Font Awesome', 'color: #F59E0B; font-size: 12px;');
    console.log('%c❤️  Crafted by PriHarsh Design', 'color: #10B981; font-size: 12px;');
    console.log('%c📧 Support: priharshdesign@gmail.com', 'color: #94A3B8; font-size: 11px;');
});