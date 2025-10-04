// Theme toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

if (localStorage.getItem('mode') === 'dark' || (!('mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

themeToggleBtn.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('mode', 'light');
    } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('mode', 'dark');
    }
    lucide.createIcons(); // Re-render icons after theme change
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileMenuOverlay.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.remove('opacity-0', 'pointer-events-none');
    } else {
        backToTopButton.classList.add('opacity-0', 'pointer-events-none');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Typewriter effect (assuming this is part of main.js)
const typewriterTextElement = document.getElementById('typewriter-text');
const typewriterTexts = ["Desenvolvedora & Estrategista de Marketing Digital", "Criadora de Soluções Web Inovadoras", "Especialista em Automação e Otimização"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = typewriterTexts[textIndex];
    if (isDeleting) {
        typewriterTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typewriterTexts.length;
    }

    const typeSpeed = isDeleting ? 50 : 100;
    setTimeout(typeWriter, typeSpeed);
}

// Initialize typewriter effect after a delay
setTimeout(typeWriter, 1000);

// Initialize Lucide icons (already in index.html, but good to have here if main.js loads later)
lucide.createIcons();

// Initialize animations on scroll (already in index.html, but good to have here if main.js loads later)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all elements with data-animate
document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
});