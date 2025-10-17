// Event Modal System and Card Animations
// E[X]PECTATIONS 2025

// Event Data
const eventData = {
    'code-crack': {
        icon: 'fas fa-code',
        title: 'Code Crack',
        subtitle: 'Ultimate Coding Competition',
        date: 'November 19, 2025',
        duration: '3 Hours',
        team: '1-2 Members',
        venue: 'Computer Lab, Block A',
        description: 'Code Crack is an intense programming competition where participants solve complex algorithmic challenges under time pressure. Test your coding skills, optimize your solutions, and compete against the best programmers. This event challenges your problem-solving abilities, algorithm knowledge, and coding efficiency.',
        rules: [
            'Individual or team of 2 members allowed',
            'Any programming language can be used (C++, Java, Python, etc.)',
            'No internet access during the competition',
            'Pre-written code templates are not allowed',
            'Plagiarism will lead to immediate disqualification',
            'Judging based on correctness, efficiency, and code quality'
        ],
        prize: '₹50,000',
        contacts: [
            { name: 'Rajesh Kumar', phone: '+91 98765 43210', email: 'rajesh@christuniversity.in' },
            { name: 'Priya Sharma', phone: '+91 98765 43211', email: 'priya@christuniversity.in' }
        ]
    },
    'data-viz': {
        icon: 'fas fa-chart-line',
        title: 'Data Visualization',
        subtitle: 'Transform Data into Visual Stories',
        date: 'November 20, 2025',
        duration: '4 Hours',
        team: '2-3 Members',
        venue: 'Analytics Lab, R&D Block',
        description: 'Data Visualization challenges you to transform complex datasets into compelling visual narratives. Use modern data visualization tools and techniques to uncover insights and present them in an engaging, understandable format. Showcase your ability to communicate data-driven stories effectively.',
        rules: [
            'Teams of 2-3 members required',
            'Dataset will be provided on the day of event',
            'Any visualization tool allowed (Tableau, Power BI, Python, R, D3.js)',
            'Presentation must be completed within time limit',
            'Judging criteria: Insight quality, visual design, and storytelling',
            'Final presentation to judges: 10 minutes'
        ],
        prize: '₹30,000',
        contacts: [
            { name: 'Dr. Ananya Singh', phone: '+91 98765 43212', email: 'ananya@christuniversity.in' }
        ]
    },
    'ai-innovation': {
        icon: 'fas fa-robot',
        title: 'AI Innovation',
        subtitle: 'Showcase Your AI Solutions',
        date: 'November 19-20, 2025',
        duration: '2 Days',
        team: '2-4 Members',
        venue: 'AI Lab, Innovation Center',
        description: 'AI Innovation is a platform for teams to present their artificial intelligence and machine learning projects. Whether it\'s computer vision, NLP, predictive analytics, or any AI application, showcase your innovative solutions that solve real-world problems. Impress judges with your technical implementation and practical impact.',
        rules: [
            'Teams of 2-4 members',
            'Projects must use AI/ML technologies',
            'Live demo or video demonstration required',
            'Source code must be available for review',
            'Presentation time: 15 minutes + 5 minutes Q&A',
            'Judging: Innovation, technical complexity, and real-world applicability'
        ],
        prize: '₹40,000',
        contacts: [
            { name: 'Prof. Vikram Patel', phone: '+91 98765 43213', email: 'vikram@christuniversity.in' },
            { name: 'Sneha Reddy', phone: '+91 98765 43214', email: 'sneha@christuniversity.in' }
        ]
    },
    'gaming': {
        icon: 'fas fa-gamepad',
        title: 'Gaming Arena',
        subtitle: 'Esports Championships',
        date: 'November 19-20, 2025',
        duration: 'All Days',
        team: 'Varies by Game',
        venue: 'Gaming Zone, Campus View',
        description: 'Gaming Arena brings together the most competitive esports tournaments featuring popular titles. Battle it out in intense matches, showcase your gaming skills, and compete for the championship title. Multiple game categories available including FPS, MOBA, racing, and sports games.',
        rules: [
            'Register for specific game tournaments',
            'Team size varies by game (1v1, 2v2, 5v5)',
            'Standard game settings and rules apply',
            'Own peripherals allowed (keyboards, mice, controllers)',
            'Toxicity and unsportsmanlike behavior will not be tolerated',
            'Tournament brackets will be announced on event day'
        ],
        prize: '₹25,000',
        contacts: [
            { name: 'Arjun Mehta', phone: '+91 98765 43215', email: 'arjun@christuniversity.in' }
        ]
    },
    'digital-art': {
        icon: 'fas fa-palette',
        title: 'Digital Art',
        subtitle: 'Creative Digital Expression',
        date: 'November 20, 2025',
        duration: '5 Hours',
        team: '1-2 Members',
        venue: 'Design Studio, Creative Block',
        description: 'Digital Art is a creative competition where artists bring their imagination to life using digital tools. Create stunning artwork, illustrations, or graphic designs based on the given theme. Express your creativity through colors, shapes, and innovative design concepts.',
        rules: [
            'Individual or team of 2 members',
            'Theme will be announced at the start',
            'Any digital art software allowed (Photoshop, Illustrator, Procreate, etc.)',
            'Original artwork only - no stock images or AI generation',
            'Submit high-resolution final files',
            'Judging: Creativity, technical skill, theme interpretation'
        ],
        prize: '₹20,000',
        contacts: [
            { name: 'Maya Krishnan', phone: '+91 98765 43216', email: 'maya@christuniversity.in' }
        ]
    },
    'tech-talks': {
        icon: 'fas fa-microphone',
        title: 'Tech Talks',
        subtitle: 'Industry Experts & Workshops',
        date: 'November 19-20, 2025',
        duration: 'Multiple Sessions',
        team: 'Open to All',
        venue: 'Main Auditorium',
        description: 'Tech Talks brings industry leaders, innovators, and experts to share their knowledge and experiences. Attend inspiring keynotes, interactive workshops, and panel discussions on cutting-edge technologies, career guidance, and future trends in the tech industry. Network with professionals and expand your knowledge.',
        rules: [
            'Open to all registered participants',
            'Pre-registration recommended for workshops',
            'Limited seats - first come, first served',
            'Bring notebooks for taking notes',
            'Q&A sessions after each talk',
            'Certificate of attendance provided'
        ],
        prize: 'Free Entry',
        contacts: [
            { name: 'Dr. Ramesh Iyer', phone: '+91 98765 43217', email: 'ramesh@christuniversity.in' }
        ]
    }
};

// Open Event Modal
function openEventModal(eventId) {
    const modal = document.getElementById('eventModal');
    const event = eventData[eventId];
    
    if (!event) {
        console.error('Event not found:', eventId);
        return;
    }

    // Update modal content
    document.querySelector('#modalIcon i').className = event.icon;
    document.getElementById('modalTitle').textContent = event.title;
    document.getElementById('modalSubtitle').textContent = event.subtitle;
    document.getElementById('modalDate').textContent = event.date;
    document.getElementById('modalDuration').textContent = event.duration;
    document.getElementById('modalTeam').textContent = event.team;
    document.getElementById('modalVenue').textContent = event.venue;
    document.getElementById('modalDescription').textContent = event.description;
    document.getElementById('modalPrize').textContent = event.prize;

    // Update rules
    const rulesList = document.getElementById('modalRules');
    rulesList.innerHTML = '';
    event.rules.forEach(rule => {
        const li = document.createElement('li');
        li.textContent = rule;
        rulesList.appendChild(li);
    });

    // Update contacts
    const contactsDiv = document.getElementById('modalContacts');
    contactsDiv.innerHTML = '';
    event.contacts.forEach(contact => {
        const contactElement = document.createElement('div');
        contactElement.className = 'contact-person';
        contactElement.innerHTML = `
            <i class="fas fa-user-circle"></i>
            <div class="contact-info">
                <div class="contact-name">${contact.name}</div>
                <div class="contact-details">${contact.phone} • ${contact.email}</div>
            </div>
        `;
        contactsDiv.appendChild(contactElement);
    });

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Play sound effect (optional)
    playModalOpenSound();
}

// Close Event Modal
function closeEventModal() {
    const modal = document.getElementById('eventModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.getElementById('eventModal');
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeEventModal();
            }
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeEventModal();
        }
    });
});

// Play modal open sound
function playModalOpenSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(900, audioContext.currentTime + 0.1);
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    } catch (e) {
        // Audio not supported or blocked
    }
}

// Card Animation System
class CardAnimationController {
    constructor() {
        this.cards = document.querySelectorAll('.card-scroll-reveal');
        this.init();
    }

    init() {
        this.setupObserver();
        this.addCardInteractions();
    }

    setupObserver() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Add stagger effect for grouped cards
                    this.addStaggerEffect(entry.target);
                }
            });
        }, observerOptions);

        this.cards.forEach(card => {
            observer.observe(card);
        });
    }

    addStaggerEffect(card) {
        // If card is part of a group, animate siblings with delay
        const parent = card.parentElement;
        if (parent) {
            const siblings = Array.from(parent.querySelectorAll('.card-scroll-reveal'));
            const index = siblings.indexOf(card);
            card.style.transitionDelay = `${index * 0.1}s`;
        }
    }

    addCardInteractions() {
        // Add hover sound effects
        document.querySelectorAll('.magic-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.playCardSound(400);
            });

            // Add click animation
            card.addEventListener('click', (e) => {
                if (!e.target.closest('button')) {
                    this.animateCardClick(card);
                }
            });
        });
    }

    animateCardClick(card) {
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = 'card-shuffle 0.5s ease';
        }, 10);
        
        this.playCardSound(600);
    }

    playCardSound(frequency) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.03, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (e) {
            // Audio not supported
        }
    }
}

// Initialize Card Animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new CardAnimationController();

    // Add continuous floating animation to magic cards
    const magicCards = document.querySelectorAll('.magic-card');
    magicCards.forEach((card, index) => {
        // Randomize floating animation
        const duration = 4 + Math.random() * 2;
        const delay = Math.random() * 2;
        card.style.animation = `floating-card ${duration}s ease-in-out ${delay}s infinite`;
    });

    // Add sparkle effect on card reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.sparkled) {
                createCardSparkles(entry.target);
                entry.target.dataset.sparkled = 'true';
            }
        });
    }, { threshold: 0.5 });

    magicCards.forEach(card => observer.observe(card));
});

// Create sparkle effect when cards appear
function createCardSparkles(card) {
    const rect = card.getBoundingClientRect();
    const sparkleCount = 5;

    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: fixed;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
            width: 6px;
            height: 6px;
            background: linear-gradient(45deg, #00ffff, #ff0080);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: sparkle-burst ${0.8 + Math.random() * 0.4}s ease-out forwards;
            transform: rotate(${i * 72}deg) translateX(0);
        `;

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1200);
    }
}

// Add card dealing animation on page scroll
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add parallax effect to cards
    document.querySelectorAll('.magic-card').forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const scrollSpeed = 0.1 + (index % 3) * 0.05;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const offset = (window.innerHeight - rect.top) * scrollSpeed;
            card.style.transform = `translateY(${-offset}px)`;
        }
    });

    lastScrollTop = st <= 0 ? 0 : st;
}, false);

// Add card flip animation on specific events
function flipCard(cardElement) {
    cardElement.style.animation = 'card-back-flip 0.6s ease';
    setTimeout(() => {
        cardElement.style.animation = '';
    }, 600);
}

// Export functions for global access
window.openEventModal = openEventModal;
window.closeEventModal = closeEventModal;

console.log('🃏 Card Animation System & Event Modals Loaded!');
