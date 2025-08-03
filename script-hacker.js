// Futuristic Hacker Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all effects
    initMatrixRain();
    initTerminalEffects();
    initTypingEffects();
    initGlowEffects();
    initScrollEffects();
    initNavigation();
    initMobileMenu();
});

// Matrix Rain Effect
function initMatrixRain() {
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-bg';
    document.body.appendChild(matrixContainer);

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 20);
    const drops = new Array(columns).fill(0);

    function createMatrixChar() {
        const char = document.createElement('div');
        char.className = 'matrix-char';
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.style.left = Math.random() * window.innerWidth + 'px';
        char.style.animationDuration = (Math.random() * 3 + 2) + 's';
        char.style.opacity = Math.random() * 0.5 + 0.1;
        matrixContainer.appendChild(char);

        setTimeout(() => {
            char.remove();
        }, 5000);
    }

    setInterval(createMatrixChar, 100);
}

// Terminal Effects
function initTerminalEffects() {
    // Add terminal cursor to typing elements
    const typingElements = document.querySelectorAll('.hero-title, .hero-tagline');
    typingElements.forEach(element => {
        const cursor = document.createElement('span');
        cursor.className = 'terminal-cursor';
        element.appendChild(cursor);
    });

    // Add command prompt effect to navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 15px #00ff41, 0 0 30px #00ff41';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });
}

// Typing Effects
function initTypingEffects() {
    const tagline = document.querySelector('.hero-tagline');
    if (tagline) {
        const originalText = tagline.textContent;
        tagline.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                tagline.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }

    // Typewriter effect for project titles
    const projectTitles = document.querySelectorAll('.project-title');
    projectTitles.forEach((title, index) => {
        const originalText = title.textContent;
        title.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typeProject = () => {
                if (i < originalText.length) {
                    title.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeProject, 50);
                }
            };
            typeProject();
        }, 500 * (index + 1));
    });
}

// Glow Effects
function initGlowEffects() {
    // Add glow effect to profile photo
    const profilePhoto = document.querySelector('.profile-photo');
    if (profilePhoto) {
        profilePhoto.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 50px rgba(0, 255, 65, 0.8), inset 0 0 50px rgba(0, 255, 65, 0.2)';
        });
        
        profilePhoto.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 30px rgba(0, 255, 65, 0.5), inset 0 0 30px rgba(0, 255, 65, 0.1)';
        });
    }

    // Add glow effect to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.8)';
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Scroll Effects
function initScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero && heroContent) {
            const rate = scrolled * -0.5;
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    });

    // Active navigation based on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Intersection Observer for animations
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

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.project-card, .about-text, .skill-tag');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Navigation
function initNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 65, 0.2)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Mobile Menu
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }
}

// Terminal Command Simulation
function simulateTerminalCommands() {
    const commands = [
        '> Initializing portfolio system...',
        '> Loading modules...',
        '> Connecting to database...',
        '> System ready.',
        '> Welcome to Abhijeet\'s terminal.'
    ];

    const terminalOutput = document.createElement('div');
    terminalOutput.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(10, 10, 10, 0.9);
        border: 1px solid #00ff41;
        padding: 15px;
        font-family: 'JetBrains Mono', monospace;
        color: #00ff41;
        font-size: 12px;
        max-width: 300px;
        z-index: 1000;
        border-radius: 5px;
        box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
    `;

    document.body.appendChild(terminalOutput);

    let commandIndex = 0;
    const showCommand = () => {
        if (commandIndex < commands.length) {
            terminalOutput.innerHTML += commands[commandIndex] + '<br>';
            commandIndex++;
            setTimeout(showCommand, 800);
        } else {
            setTimeout(() => {
                terminalOutput.style.opacity = '0';
                setTimeout(() => terminalOutput.remove(), 1000);
            }, 2000);
        }
    };

    setTimeout(showCommand, 1000);
}

// Initialize terminal commands
setTimeout(simulateTerminalCommands, 500);

// Add cyberpunk sound effects (visual feedback)
function addCyberpunkEffect(element) {
    element.addEventListener('click', function() {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(0, 255, 65, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (rect.width / 2 - size / 2) + 'px';
        ripple.style.top = (rect.height / 2 - size / 2) + 'px';
        
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
}

// Add ripple effect to buttons
document.querySelectorAll('.btn, .project-link, .social-link').forEach(addCyberpunkEffect);

// Add CSS for ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// System status indicator
function createSystemStatus() {
    const statusBar = document.createElement('div');
    statusBar.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: rgba(10, 10, 10, 0.9);
        border: 1px solid #00ff41;
        padding: 10px 15px;
        font-family: 'JetBrains Mono', monospace;
        color: #00ff41;
        font-size: 12px;
        border-radius: 5px;
        z-index: 1000;
        box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
    `;
    
    const updateStatus = () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const dateString = now.toLocaleDateString();
        statusBar.innerHTML = `SYSTEM: ONLINE | ${dateString} ${timeString}`;
    };
    
    updateStatus();
    setInterval(updateStatus, 1000);
    document.body.appendChild(statusBar);
}

// Initialize system status
setTimeout(createSystemStatus, 2000); 