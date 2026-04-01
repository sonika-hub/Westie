document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.story-step, .photo-frame').forEach(el => observer.observe(el));

    // Subtle Orb Parallax
    window.addEventListener('scroll', () => {
        const s = window.pageYOffset;
        document.querySelector('.orb-1').style.transform = `translate(${s * 0.05}px, ${s * 0.02}px)`;
        document.querySelector('.orb-2').style.transform = `translate(${s * -0.05}px, ${s * -0.05}px)`;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Reveal Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Target all frames
    const frames = document.querySelectorAll('.photo-frame');
    
    if (frames.length > 0) {
        frames.forEach(frame => observer.observe(frame));
    } else {
        console.warn("Gallery frames not found. Check your EJS loop.");
    }
});
// Add to your existing IntersectionObserver logic
const quoteCards = document.querySelectorAll('.quote-card');

const quoteObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

quoteCards.forEach((card, index) => {
    // Initial State: Slightly offset based on position
    card.style.opacity = "0";
    card.style.transform = index % 2 === 0 ? "translateX(-30px)" : "translateX(30px)";
    card.style.transition = "1.5s cubic-bezier(0.16, 1, 0.3, 1)";
    quoteObserver.observe(card);
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Elements on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    const revealItems = document.querySelectorAll('.story-node, .voice-card');
    revealItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(50px)";
        item.style.transition = "1.5s cubic-bezier(0.2, 1, 0.3, 1)";
        observer.observe(item);
    });

    // 2. Parallax Orbs (Floating Background)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const accents = document.querySelectorAll('.node-accent');
        accents.forEach((accent, index) => {
            const speed = (index + 1) * 0.1;
            accent.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});