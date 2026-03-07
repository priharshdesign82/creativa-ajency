// ========================================
// CREATIVA - ESSENTIAL JAVASCRIPT
// Only What's Needed - No Bloat
// Version: 4.0.0
// Author: PriHarsh Design
// ========================================

document.addEventListener('DOMContentLoaded', function () {

    // ========================================
    // 1. INITIALIZE AOS (Animate on Scroll)
    // ========================================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

    // ========================================
    // 2. LOADER
    // ========================================
    const loader = document.querySelector('.creative-loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 1500);
        });
    }

    // ========================================
    // 3. NAVBAR SCROLL EFFECT
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
    // 4. MOBILE MENU TOGGLE
    // ========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('show');
            document.body.style.overflow = navMenu.classList.contains('show') ? 'hidden' : 'auto';
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
    // 5. COUNTER ANIMATION
    // ========================================
    const counters = document.querySelectorAll('.stat-value[data-target]');

    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.dataset.target);
                    const suffix = counter.innerText.includes('+') ? '+' :
                        counter.innerText.includes('%') ? '%' : '';

                    let count = 0;
                    const duration = 2000;
                    const step = target / (duration / 16);

                    function updateCounter() {
                        count += step;
                        if (count < target) {
                            counter.innerText = Math.floor(count) + suffix;
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target + suffix;
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
    // 6. PORTFOLIO FILTER
    // ========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterBtns.length > 0 && portfolioItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                // Remove active class from all
                filterBtns.forEach(b => b.classList.remove('active'));

                // Add active to clicked
                this.classList.add('active');

                // Get filter value
                const filter = this.getAttribute('data-filter');

                // Filter items
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // ========================================
    // 7. FAQ ACCORDION
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
                    q.nextElementSibling.classList.remove('show');
                });

                // Open current if not active
                if (!isActive) {
                    question.classList.add('active');
                    answer.classList.add('show');
                }
            });
        });
    }

    // ========================================
    // 8. SMOOTH SCROLL
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const offset = 100;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('show')) {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('show');
                    document.body.style.overflow = 'auto';
                }
            }
        });
    });

    // ========================================
    // 9. BACK TO TOP BUTTON
    // ========================================
    const backToTop = document.querySelector('.back-to-top');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('show', window.scrollY > 500);
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // 10. CONTACT FORM VALIDATION (Simple)
    // ========================================
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = contactForm.querySelector('input[placeholder*="Name"]');
            const email = contactForm.querySelector('input[type="email"]');
            const message = contactForm.querySelector('textarea');

            if (name?.value.trim() && email?.value.trim() && message?.value.trim()) {
                alert('✓ Message sent successfully!');
                contactForm.reset();
            } else {
                alert('Please fill all fields');
            }
        });
    }

    // ========================================
    // 11. NEWSLETTER FORM (Simple)
    // ========================================
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = newsletterForm.querySelector('input[type="email"]');

            if (email?.value.trim()) {
                alert('✓ Subscribed successfully!');
                newsletterForm.reset();
            } else {
                alert('Please enter your email');
            }
        });
    }

    // ========================================
    // 12. UPDATE COPYRIGHT YEAR
    // ========================================
    const yearElement = document.querySelector('.copyright');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2026', currentYear);
    }

    // ========================================
    // 13. ACTIVE NAVIGATION LINK (Simple)
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    function updateActiveNavLink() {
        let current = '';
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href')?.substring(1);

            // Check for page links
            if (link.getAttribute('href').includes('.html')) {
                if (window.location.pathname.includes(link.getAttribute('href'))) {
                    link.classList.add('active');
                }
            }

            // Check for section links
            if (href === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink();

    // ========================================
    // 14. PLAY BUTTON (Simple Alert)
    // ========================================
    const playButton = document.querySelector('.play-button');

    if (playButton) {
        playButton.addEventListener('click', () => {
            alert('Showreel video would play here!');
        });
    }

    // ========================================
    // 15. CONSOLE WELCOME (Branding)
    // ========================================
    console.log('%c✦ CREATIVA - Premium Agency Template', 'color: #8B5CF6; font-size: 14px; font-weight: bold;');
    console.log('%cCrafted by PriHarsh Design', 'color: #EC4899; font-size: 12px;');


});