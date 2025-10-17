// Main JavaScript File for Expectations 2025
// Enhanced Interactive Features and Functionality

// Mobile menu functions
function showMenu() {
  const navLinks = document.getElementById("navLinks");
  if (navLinks) {
    navLinks.classList.add("showMenu");
  }
}

function hideMenu() {
  const navLinks = document.getElementById("navLinks");
  if (navLinks) {
    navLinks.classList.remove("showMenu");
  }
}

class ExpectationsWebsite {
  constructor() {
    this.isLoaded = false;
    this.currentSection = "home";
    this.scrollPosition = 0;
    this.isScrolling = false;

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initializeComponents();
    this.startPerformanceMonitoring();
  }

  setupEventListeners() {
    // Window events
    window.addEventListener("load", () => this.handleWindowLoad());
    window.addEventListener("scroll", () => this.handleScroll());
    window.addEventListener("resize", () => this.handleResize());

    // Keyboard navigation
    document.addEventListener("keydown", (e) => this.handleKeyNavigation(e));

    // Touch events for mobile
    document.addEventListener("touchstart", (e) => this.handleTouchStart(e));
    document.addEventListener("touchmove", (e) => this.handleTouchMove(e));
  }

  initializeComponents() {
    this.initCyberCursor();
    this.initParallaxEffects();
    this.initTypewriterEffect();
    this.initDataVisualization();
    this.initSoundEffects();
    this.initEasterEggs();
    this.initLampInteraction();
  }

  handleWindowLoad() {
    this.isLoaded = true;
    this.playLoadingSequence();
  }

  playLoadingSequence() {
    const sequence = [
      {
        delay: 500,
        action: () => this.typeText(".cyber-text", "E[X]PECTATIONS"),
      },
      { delay: 1000, action: () => this.typeText(".cyber-year", "2025") },
      { delay: 1500, action: () => this.showLoadingProgress() },
      { delay: 3000, action: () => this.hidePreloader() },
    ];

    sequence.forEach(({ delay, action }) => {
      setTimeout(action, delay);
    });
  }

  typeText(selector, text) {
    const element = document.querySelector(selector);
    if (!element) return;

    element.textContent = "";
    let i = 0;

    const typeInterval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;

        // Add glitch effect occasionally
        if (Math.random() > 0.9) {
          element.style.animation = "glitch 0.1s ease";
          setTimeout(() => {
            element.style.animation = "";
          }, 100);
        }
      } else {
        clearInterval(typeInterval);
      }
    }, 100);
  }

  showLoadingProgress() {
    const loadingText = document.querySelector(".loading-text");
    if (!loadingText) return;

    const messages = [
      "INITIALIZING SYSTEMS...",
      "LOADING NEURAL NETWORKS...",
      "CONNECTING TO MATRIX...",
      "CALIBRATING HOLOGRAMS...",
      "SYSTEM READY!",
    ];

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      if (messageIndex < messages.length) {
        loadingText.textContent = messages[messageIndex];
        messageIndex++;
      } else {
        clearInterval(messageInterval);
      }
    }, 400);
  }

  hidePreloader() {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.classList.add("fade-out");
      setTimeout(() => {
        preloader.style.display = "none";
        this.startMainAnimations();
      }, 500);
    }
  }

  startMainAnimations() {
    // Trigger hero animations
    this.animateHeroElements();
    this.startMatrixRain();
    this.initFloatingParticles();
  }

  animateHeroElements() {
    const heroTitle = document.querySelector(".hero-title");
    const heroSubtitle = document.querySelector(".hero-subtitle");
    const heroDescription = document.querySelector(".hero-description");
    const heroButtons = document.querySelector(".hero-buttons");

    const elements = [heroTitle, heroSubtitle, heroDescription, heroButtons];

    elements.forEach((element, index) => {
      if (element) {
        setTimeout(() => {
          element.style.animation = `fadeInUp 1s ease forwards`;
          element.style.animationDelay = `${index * 0.2}s`;
        }, index * 200);
      }
    });
  }

  startMatrixRain() {
    const matrixContainer = document.querySelector(".matrix-rain");
    if (!matrixContainer) return;

    const characters =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const columns = Math.floor(window.innerWidth / 20);

    for (let i = 0; i < columns; i++) {
      this.createMatrixColumn(matrixContainer, characters, i);
    }
  }

  createMatrixColumn(container, characters, columnIndex) {
    const column = document.createElement("div");
    column.style.cssText = `
            position: absolute;
            left: ${columnIndex * 20}px;
            top: -100vh;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            color: #00ff00;
            opacity: 0.8;
            animation: matrix-fall ${10 + Math.random() * 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;

    // Add random characters
    for (let i = 0; i < 20; i++) {
      const char = document.createElement("div");
      char.textContent = characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      char.style.marginBottom = "5px";
      column.appendChild(char);
    }

    container.appendChild(column);

    // Remove and recreate column after animation
    setTimeout(() => {
      column.remove();
      this.createMatrixColumn(container, characters, columnIndex);
    }, (10 + Math.random() * 10) * 1000);
  }

  initFloatingParticles() {
    const particleCount = 50;
    const container = document.body;

    for (let i = 0; i < particleCount; i++) {
      this.createFloatingParticle(container);
    }
  }

  createFloatingParticle(container) {
    const particle = document.createElement("div");
    const size = Math.random() * 4 + 1;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const duration = Math.random() * 20 + 10;

    particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, #00ffff, transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            animation: particle-float ${duration}s linear infinite;
        `;

    container.appendChild(particle);

    setTimeout(() => {
      particle.remove();
      this.createFloatingParticle(container);
    }, duration * 1000);
  }

  initCyberCursor() {
    const cursor = document.createElement("div");
    cursor.className = "cyber-cursor";
    cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid #00ffff;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.1s ease;
        `;

    document.body.appendChild(cursor);

    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Smooth cursor following
    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      cursor.style.left = `${cursorX - 10}px`;
      cursor.style.top = `${cursorY - 10}px`;

      requestAnimationFrame(updateCursor);
    };

    updateCursor();

    // Cursor interactions
    const interactiveElements = document.querySelectorAll(
      "a, button, .event-card, .gallery-item"
    );
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(2)";
        cursor.style.borderColor = "#ff0080";
      });

      element.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
        cursor.style.borderColor = "#00ffff";
      });
    });
  }

  initParallaxEffects() {
    const parallaxElements = document.querySelectorAll(
      ".hero-visual, .cyber-grid, .floating-elements"
    );

    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;

      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + index * 0.1;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  initTypewriterEffect() {
    const typewriterElements = document.querySelectorAll(".typewriter");

    typewriterElements.forEach((element) => {
      const text = element.textContent;
      element.textContent = "";
      element.style.borderRight = "2px solid #00ffff";

      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typeInterval);
          // Blinking cursor effect
          setInterval(() => {
            element.style.borderRightColor =
              element.style.borderRightColor === "transparent"
                ? "#00ffff"
                : "transparent";
          }, 500);
        }
      }, 100);
    });
  }

  initDataVisualization() {
    // Create dynamic data visualization in about section
    const displayScreen = document.querySelector(".display-screen");
    if (!displayScreen) return;

    const createDataPoint = () => {
      const dataPoint = document.createElement("div");
      dataPoint.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #00ff00;
                border-radius: 50%;
                animation: data-flow 2s ease-in-out infinite;
            `;

      dataPoint.style.left = `${Math.random() * 100}%`;
      dataPoint.style.top = `${Math.random() * 100}%`;

      displayScreen.appendChild(dataPoint);

      setTimeout(() => {
        dataPoint.remove();
      }, 2000);
    };

    setInterval(createDataPoint, 200);
  }

  initSoundEffects() {
    // Web Audio API for cyber sound effects
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();

    const createCyberSound = (frequency, duration) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      oscillator.type = "square";

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + duration
      );

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    };

    // Add sound effects to interactions
    document.querySelectorAll(".cyber-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        createCyberSound(800, 0.1);
      });
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("mouseenter", () => {
        createCyberSound(400, 0.05);
      });
    });
    // --- end initSoundEffects ---
  }

  initEasterEggs() {
    // Konami code easter egg
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "KeyB",
      "KeyA",
    ];
    let konamiIndex = 0;

    document.addEventListener("keydown", (e) => {
      if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          this.activateEasterEgg();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    });

    // Double-click logo easter egg
    const logo = document.querySelector(".nav-logo");
    if (logo) {
      let clickCount = 0;
      logo.addEventListener("click", () => {
        clickCount++;
        if (clickCount === 3) {
          this.activateMatrixMode();
          clickCount = 0;
        }
        setTimeout(() => {
          clickCount = 0;
        }, 1000);
      });
    }
  }

  activateEasterEgg() {
    // Create spectacular light show
    const colors = ["#00ffff", "#ff0080", "#ffff00", "#9d00ff", "#00ff41"];
    const originalBg = document.body.style.background;

    let colorIndex = 0;
    const lightShow = setInterval(() => {
      document.body.style.background = colors[colorIndex % colors.length];
      colorIndex++;
    }, 100);

    // Show special message
    const message = document.createElement("div");
    message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.9);
            color: #00ffff;
            padding: 30px;
            border-radius: 15px;
            font-family: 'Orbitron', monospace;
            font-size: 24px;
            text-align: center;
            z-index: 10000;
            box-shadow: 0 0 50px #00ffff;
            animation: zoomIn 0.5s ease;
        `;
    message.innerHTML = "🎉 YOU FOUND THE SECRET! 🎉<br>Welcome to the Matrix!";

    document.body.appendChild(message);

    setTimeout(() => {
      clearInterval(lightShow);
      document.body.style.background = originalBg;
      message.remove();
    }, 5000);
  }

  activateMatrixMode() {
    document.body.style.filter = "hue-rotate(120deg) contrast(1.5)";

    setTimeout(() => {
      document.body.style.filter = "";
    }, 3000);
  }

  handleScroll() {
    if (this.isScrolling) return;

    this.isScrolling = true;
    requestAnimationFrame(() => {
      this.updateScrollEffects();
      this.isScrolling = false;
    });
  }

  updateScrollEffects() {
    const scrollY = window.pageYOffset;
    this.scrollPosition = scrollY;

    // Update progress indicator
    this.updateScrollProgress();

    // Parallax effects
    this.updateParallax();

    // Reveal animations
    this.checkElementsInView();
  }

  updateScrollProgress() {
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset;
    const trackLength = docHeight - winHeight;
    const pctScrolled = Math.floor((scrollTop / trackLength) * 100);

    // Create or update progress bar
    let progressBar = document.querySelector(".scroll-progress");
    if (!progressBar) {
      progressBar = document.createElement("div");
      progressBar.className = "scroll-progress";
      progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 3px;
                background: linear-gradient(90deg, #00ffff, #ff0080);
                z-index: 10001;
                transition: width 0.1s ease;
            `;
      document.body.appendChild(progressBar);
    }

    progressBar.style.width = `${pctScrolled}%`;
  }

  updateParallax() {
    const scrolled = this.scrollPosition;
    const parallaxElements = document.querySelectorAll("[data-parallax]");

    parallaxElements.forEach((element) => {
      const speed = element.dataset.parallax || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  }

  checkElementsInView() {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const windowHeight = window.innerHeight;

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        element.classList.add("visible");
      }
    });
  }

  handleResize() {
    // Update particle system
    this.updateParticleSystem();

    // Recalculate parallax
    this.updateParallax();
  }

  updateParticleSystem() {
    // Reinitialize particles for new screen size
    const existingParticles = document.querySelectorAll(".floating-particle");
    existingParticles.forEach((particle) => particle.remove());

    this.initFloatingParticles();
  }

  handleKeyNavigation(e) {
    const sections = [
      "home",
      "about",
      "events",
      "schedule",
      "gallery",
      "contact",
    ];
    const currentIndex = sections.indexOf(this.currentSection);

    switch (e.key) {
      case "ArrowDown":
      case "PageDown":
        e.preventDefault();
        if (currentIndex < sections.length - 1) {
          this.navigateToSection(sections[currentIndex + 1]);
        }
        break;

      case "ArrowUp":
      case "PageUp":
        e.preventDefault();
        if (currentIndex > 0) {
          this.navigateToSection(sections[currentIndex - 1]);
        }
        break;

      case "Home":
        e.preventDefault();
        this.navigateToSection("home");
        break;

      case "End":
        e.preventDefault();
        this.navigateToSection("contact");
        break;
    }
  }

  navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      this.currentSection = sectionId;
    }
  }

  handleTouchStart(e) {
    this.touchStartY = e.touches[0].clientY;
  }

  handleTouchMove(e) {
    if (!this.touchStartY) return;

    const touchEndY = e.touches[0].clientY;
    const diff = this.touchStartY - touchEndY;

    // Add swipe gestures for mobile navigation
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe up - next section
        this.handleKeyNavigation({
          key: "ArrowDown",
          preventDefault: () => {},
        });
      } else {
        // Swipe down - previous section
        this.handleKeyNavigation({ key: "ArrowUp", preventDefault: () => {} });
      }
      this.touchStartY = null;
    }
  }

  startPerformanceMonitoring() {
    // Monitor frame rate and optimize accordingly
    let frames = 0;
    let lastTime = performance.now();

    const checkFrameRate = () => {
      frames++;
      const currentTime = performance.now();

      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frames * 1000) / (currentTime - lastTime));

        if (fps < 30) {
          this.reduceAnimations();
        } else if (fps > 50) {
          this.enhanceAnimations();
        }

        frames = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(checkFrameRate);
    };

    checkFrameRate();
  }

  reduceAnimations() {
    // Reduce particle count and animation complexity for better performance
    const particles = document.querySelectorAll(".floating-particle");
    for (let i = particles.length - 1; i >= particles.length / 2; i--) {
      particles[i]?.remove();
    }
  }

  enhanceAnimations() {
    // Add more effects when performance allows
    this.initFloatingParticles();
  }

  initLampInteraction() {
    const lampIcon = document.querySelector(".lamp-icon");
    const titleYearReveal = document.querySelector(".title-year-reveal");
    const lightBeam = document.querySelector(".light-beam");

    if (lampIcon) {
      // Add click event to restart the lighting animation
      lampIcon.addEventListener("click", () => {
        // Reset animations
        titleYearReveal.style.animation = "none";
        lightBeam.style.animation = "none";

        // Trigger reflow
        titleYearReveal.offsetHeight;
        lightBeam.offsetHeight;

        // Restart animations
        titleYearReveal.style.animation =
          "light-reveal 2s ease-in-out forwards";
        lightBeam.style.animation = "light-sweep 2s ease-in-out forwards";

        // Add sparkle effect
        this.createSparkleEffect(lampIcon);

        // Play sound effect
        this.playLightSound();
      });

      // Add hover effect
      lampIcon.addEventListener("mouseenter", () => {
        lampIcon.style.filter =
          "drop-shadow(0 0 25px #ffff00) drop-shadow(0 0 35px #ffaa00)";
      });

      lampIcon.addEventListener("mouseleave", () => {
        lampIcon.style.filter = "";
      });
    }
  }

  createSparkleEffect(element) {
    const sparkleCount = 8;
    const rect = element.getBoundingClientRect();

    for (let i = 0; i < sparkleCount; i++) {
      const sparkle = document.createElement("div");
      sparkle.style.cssText = `
        position: fixed;
        left: ${rect.left + rect.width / 2}px;
        top: ${rect.top + rect.height / 2}px;
        width: 4px;
        height: 4px;
        background: #ffff00;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        animation: sparkle-burst 0.8s ease-out forwards;
        transform: rotate(${i * 45}deg) translateX(30px);
      `;

      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 800);
    }
  }

  playLightSound() {
    // Create a brief light bulb "ting" sound
    if (this.audioContext) {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(
        1200,
        this.audioContext.currentTime + 0.1
      );
      oscillator.type = "sine";

      gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        this.audioContext.currentTime + 0.3
      );

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + 0.3);
    }
  }
}

// Utility Functions
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}

function createRippleEffect(event) {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  const ripple = document.createElement("span");
  ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(0, 255, 255, 0.6), transparent);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;

  button.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Initialize the website
const expectationsWebsite = new ExpectationsWebsite();

// Global functions for HTML onclick events
window.scrollToSection = scrollToSection;
window.createRippleEffect = createRippleEffect;

console.log("🎮 Expectations 2025 - Ready to blow minds!");

// Intro video behavior (runs after initialization)
(function () {
  const introVideo = document.getElementById("intro-video");
  const introOverlay = document.getElementById("intro-video-overlay");
  const introTitle = document.getElementById("intro-title");

  if (!introVideo) return;

  // attempt autoplay (muted) and reveal title when playing
  introVideo.muted = true;
  introVideo.playsInline = true;
  const tryPlay = async () => {
    try {
      await introVideo.play();
    } catch (e) {
      // autoplay blocked; user interaction will be required
      console.warn("Intro video autoplay blocked:", e);
      // reveal Play button so user can start the intro manually
      const playBtn = document.getElementById("play-intro");
      if (playBtn) playBtn.hidden = false;
    }
  };
  tryPlay();

  introVideo.addEventListener("playing", () => {
    if (introTitle) introTitle.classList.add("visible");
  });

  const hideOverlay = () => {
    if (introOverlay) {
      // Instead of fading out, do a card-flip animation
      introOverlay.style.animation = 'card-flip-out 1s ease-out forwards';
      
      setTimeout(() => {
        introOverlay.classList.add('hidden');
        introOverlay.setAttribute("aria-hidden", "true");
      }, 1000);
      
      try {
        introVideo.pause();
        introVideo.currentTime = 0;
      } catch (e) {}
      
      // mark the intro as finished so site elements can remain visible
      document.body.classList.add("intro-finished");
      
      // Start card dealing animation for main content
      dealCardsAnimation();
      
      // refresh AOS in case some elements were waiting for scroll/visibility
      if (window.AOS && typeof window.AOS.refresh === "function") {
        window.AOS.refresh();
      }
    }
  };

  // Card dealing animation after intro
  function dealCardsAnimation() {
    const cards = document.querySelectorAll('.magic-card, .event-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.animation = `card-deal 0.8s ease-out ${index * 0.1}s forwards`;
    });
  }

  introVideo.addEventListener("ended", hideOverlay);
  if (introOverlay) introOverlay.addEventListener("click", hideOverlay);

  // Skip button handler
  const skipBtn = document.getElementById("skip-intro");
  if (skipBtn) {
    skipBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      hideOverlay();
    });
  }

  // If video errors or can't be loaded, hide overlay after a short timeout
  let started = false;
  const startHandler = () => { started = true; };
  introVideo.addEventListener("playing", startHandler);
  introVideo.addEventListener("play", startHandler);

  introVideo.addEventListener("error", (e) => {
    console.warn("Intro video error:", e);
    // wait a short moment for any fallback then hide
    setTimeout(hideOverlay, 800);
  });

  // Fallback: if not started within 5s, hide overlay so the site is usable
  setTimeout(() => {
    if (!started) {
      console.warn("Intro video didn't start within timeout, hiding overlay.");
      hideOverlay();
    }
  }, 5000);

  // Play button click handler
  const playBtn = document.getElementById("play-intro");
  if (playBtn) {
    playBtn.addEventListener("click", async (e) => {
      e.stopPropagation();
      try {
        await introVideo.play();
        // hide play button
        playBtn.hidden = true;
      } catch (err) {
        console.warn("User-initiated play failed:", err);
      }
      // when playback starts, hide overlay after a short delay so title is visible
      introVideo.addEventListener("playing", () => {
        setTimeout(hideOverlay, 1000);
      }, { once: true });
    });
  }
})();
