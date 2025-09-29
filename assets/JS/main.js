// Add class active to header on scroll

let header = document.querySelector("header")

window.onscroll = function () {
    if (this.scrollY >= 50) {
        header.classList.add("active")
    }
    else {
        header.classList.remove("active")
    }
}

const toggleBtn = document.querySelector('.toggle-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

const focusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
let lastFocusedBeforeOpen = null;
let scrollPosition = 0; // Store scroll position globally

function openMenu() {
    // Store current scroll position before applying no-scroll
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    dropdownMenu.classList.add('open');
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
    
    // Apply the stored scroll position to the body
    document.body.style.top = `-${scrollPosition}px`;
    
    toggleBtn.setAttribute('aria-expanded', 'true');
    lastFocusedBeforeOpen = document.activeElement;
    
    // Focus the menu container instead of a specific link
    dropdownMenu.focus();
}

function closeMenu() {
    dropdownMenu.classList.remove('open');
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
    
    // Remove the top style and restore scroll position
    document.body.style.top = '';
    window.scrollTo(0, scrollPosition);
    
    toggleBtn.setAttribute('aria-expanded', 'false');
    
    // Restore focus to toggle button without causing scroll
    if (lastFocusedBeforeOpen) {
        toggleBtn.focus({ preventScroll: true });
        lastFocusedBeforeOpen = null;
    }
}

toggleBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent any default behavior
    e.stopPropagation(); // Stop event bubbling
    
    const isOpen = dropdownMenu.classList.contains('open');
    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dropdownMenu.classList.contains('open')) {
        closeMenu();
    }
});

// Close when clicking outside the menu panel
document.addEventListener('click', (e) => {
    if (!dropdownMenu.classList.contains('open')) return;
    const isClickInside = dropdownMenu.contains(e.target) || toggleBtn.contains(e.target);
    if (!isClickInside) {
        closeMenu();
    }
});

// Close when a nav link is clicked
dropdownMenu.querySelectorAll('.dropdown-links a').forEach((link) => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// Ensure state on resize (e.g., switching to desktop)
window.addEventListener('resize', () => {
    const desktop = window.innerWidth > 895;
    if (desktop && dropdownMenu.classList.contains('open')) {
        closeMenu();
    }
});

