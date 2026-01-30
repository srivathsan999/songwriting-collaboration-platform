/**
 * Main Application Script
 * Initializes GSAP animations and other UI interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP Animations if library exists
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        initAnimations();
    } else {
        console.warn('GSAP not loaded');
    }
});

function initAnimations() {
    // Fade Up Elements
    const fadeUpElements = document.querySelectorAll('.fade-up');

    fadeUpElements.forEach(el => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%", // Trigger when top of element hits 85% of viewport height
                toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    // Staggered List Items (if any)
    const staggerContainers = document.querySelectorAll('.stagger-container');
    staggerContainers.forEach(container => {
        const children = container.querySelectorAll('.stagger-item');
        gsap.from(children, {
            scrollTrigger: {
                trigger: container,
                start: "top 80%",
            },
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        });
    });
}
