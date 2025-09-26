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

function openMenu() {
    dropdownMenu.classList.add('open');
    document.body.classList.add('no-scroll');
    toggleBtn.setAttribute('aria-expanded', 'true');
    lastFocusedBeforeOpen = document.activeElement;
    const firstFocusable = dropdownMenu.querySelector(focusableSelectors);
    if (firstFocusable) firstFocusable.focus();
}

function closeMenu() {
    dropdownMenu.classList.remove('open');
    document.body.classList.remove('no-scroll');
    toggleBtn.setAttribute('aria-expanded', 'false');
    if (lastFocusedBeforeOpen) {
        toggleBtn.focus();
        lastFocusedBeforeOpen = null;
    }
}

toggleBtn.addEventListener('click', () => {
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

