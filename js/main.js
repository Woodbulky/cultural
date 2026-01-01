/* =====================================================
   INDIAN CULTURAL HERITAGE - MAIN JAVASCRIPT
   Core functionality for the website
   ===================================================== */

(function ($) {
    'use strict';

    // ==================== NAVBAR SCROLL EFFECT ====================
    function initNavbarScroll() {
        const navbar = $('.navbar');

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 50) {
                navbar.addClass('scrolled');
            } else {
                navbar.removeClass('scrolled');
            }
        });

        // Trigger on page load
        if ($(window).scrollTop() > 50) {
            navbar.addClass('scrolled');
        }
    }

    // ==================== SMOOTH SCROLLING ====================
    function initSmoothScroll() {
        $('a[href^="#"]').on('click', function (e) {
            const target = $(this.getAttribute('href'));

            if (target.length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 800, 'swing');
            }
        });
    }

    // ==================== MOBILE MENU ====================
    function initMobileMenu() {
        const navbarToggler = $('.navbar-toggler');
        const navbarCollapse = $('.navbar-collapse');

        // Close menu when clicking outside
        $(document).on('click', function (e) {
            if (!navbarCollapse.has(e.target).length &&
                !navbarToggler.has(e.target).length &&
                !navbarToggler.is(e.target) &&
                navbarCollapse.hasClass('show')) {
                navbarToggler.trigger('click');
            }
        });

        // Close menu when clicking a nav link
        $('.navbar-nav .nav-link').on('click', function () {
            if (navbarCollapse.hasClass('show')) {
                navbarToggler.trigger('click');
            }
        });
    }

    // ==================== SCROLL ANIMATIONS ====================
    function initScrollAnimations() {
        const animatedElements = $('.animate-on-scroll');

        function checkVisibility() {
            const windowHeight = $(window).height();
            const scrollTop = $(window).scrollTop();

            animatedElements.each(function () {
                const element = $(this);
                const elementTop = element.offset().top;
                const triggerPoint = scrollTop + windowHeight - 100;

                if (elementTop < triggerPoint && !element.hasClass('animated')) {
                    element.addClass('animated');
                }
            });
        }

        $(window).on('scroll', checkVisibility);
        checkVisibility(); // Check on page load
    }

    // ==================== STATISTICS COUNTER ====================
    function initStatsCounter() {
        const stats = $('.stat-number');
        let animated = false;

        function animateStats() {
            if (animated) return;

            const statsSection = $('.stats-section');
            if (!statsSection.length) return;

            const sectionTop = statsSection.offset().top;
            const scrollTop = $(window).scrollTop();
            const windowHeight = $(window).height();

            if (scrollTop + windowHeight > sectionTop + 100) {
                animated = true;

                stats.each(function () {
                    const element = $(this);
                    const target = parseInt(element.data('count')) || parseInt(element.text());
                    const suffix = element.data('suffix') || '';

                    $({ count: 0 }).animate({ count: target }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            element.text(Math.floor(this.count) + suffix);
                        },
                        complete: function () {
                            element.text(target + suffix);
                        }
                    });
                });
            }
        }

        $(window).on('scroll', animateStats);
        animateStats(); // Check on page load
    }

    // ==================== BOOTSTRAP MODAL LIGHTBOX ====================
    function initLightbox() {
        const galleryModal = new bootstrap.Modal(document.getElementById('galleryModal'));
        const modalTitle = $('#galleryModalLabel');
        const modalImage = $('#galleryModalImage');

        // Open modal on gallery item click
        $(document).on('click', '.gallery-item', function () {
            const img = $(this).find('img');
            const src = img.attr('src');
            const alt = img.attr('alt') || '';
            const caption = $(this).find('.gallery-item-info h5').text() || alt;

            modalImage.attr('src', src);
            modalImage.attr('alt', alt);
            modalTitle.text(caption);

            galleryModal.show();
        });
    }

    // ==================== GALLERY FILTER ====================
    function initGalleryFilter() {
        const filterBtns = $('.filter-btn');
        const galleryItems = $('.gallery-item');

        filterBtns.on('click', function () {
            const filter = $(this).data('filter');

            // Update active button
            filterBtns.removeClass('active');
            $(this).addClass('active');

            // Filter gallery items
            if (filter === 'all') {
                galleryItems.fadeIn(300);
            } else {
                galleryItems.each(function () {
                    const category = $(this).data('category');
                    if (category === filter) {
                        $(this).fadeIn(300);
                    } else {
                        $(this).fadeOut(300);
                    }
                });
            }
        });
    }

    // ==================== FORM VALIDATION ====================
    function initFormValidation() {
        const contactForm = $('#contactForm');

        if (!contactForm.length) return;

        contactForm.on('submit', function (e) {
            e.preventDefault();

            let isValid = true;
            const name = $('#name');
            const email = $('#email');
            const subject = $('#subject');
            const message = $('#message');

            // Reset previous errors
            $('.form-control').removeClass('is-invalid');
            $('.invalid-feedback').remove();

            // Validate name
            if (name.val().trim().length < 2) {
                showError(name, 'Please enter a valid name (at least 2 characters)');
                isValid = false;
            }

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.val().trim())) {
                showError(email, 'Please enter a valid email address');
                isValid = false;
            }

            // Validate subject
            if (subject.val().trim().length < 3) {
                showError(subject, 'Please enter a subject (at least 3 characters)');
                isValid = false;
            }

            // Validate message
            if (message.val().trim().length < 10) {
                showError(message, 'Please enter a message (at least 10 characters)');
                isValid = false;
            }

            if (isValid) {
                // Success - show message
                const successAlert = $(`
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <i class="bi bi-check-circle me-2"></i>
                        Thank you for your message! We will get back to you soon.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `);

                contactForm.before(successAlert);
                contactForm[0].reset();

                // Auto dismiss after 5 seconds
                setTimeout(function () {
                    successAlert.fadeOut(function () {
                        $(this).remove();
                    });
                }, 5000);
            }
        });

        function showError(element, message) {
            element.addClass('is-invalid');
            element.after(`<div class="invalid-feedback">${message}</div>`);
        }
    }

    // ==================== ACTIVE NAV LINK ====================
    function initActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        $('.navbar-nav .nav-link').each(function () {
            const href = $(this).attr('href');
            if (href === currentPage) {
                $(this).addClass('active');
            }
        });
    }

    // ==================== BACK TO TOP BUTTON ====================
    function initBackToTop() {
        // Create button if it doesn't exist
        if (!$('#backToTop').length) {
            const btnHTML = `
                <button id="backToTop" class="btn-primary-custom" 
                        style="position: fixed; bottom: 30px; right: 30px; width: 50px; height: 50px; 
                               padding: 0; border-radius: 50%; display: none; z-index: 999;
                               align-items: center; justify-content: center;"
                        aria-label="Back to top">
                    <i class="bi bi-arrow-up"></i>
                </button>
            `;
            $('body').append(btnHTML);
        }

        const btn = $('#backToTop');

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 500) {
                btn.css('display', 'flex');
            } else {
                btn.hide();
            }
        });

        btn.on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 600);
        });
    }

    // ==================== INITIALIZE ALL ====================
    $(document).ready(function () {
        initNavbarScroll();
        initSmoothScroll();
        initMobileMenu();
        initScrollAnimations();
        initStatsCounter();
        initLightbox();
        initGalleryFilter();
        initFormValidation();
        initActiveNavLink();
        initBackToTop();

        // Add loaded class for animations
        $('body').addClass('loaded');
    });

})(jQuery);
