// Enhanced Animations and Interactive Effects
document.addEventListener("DOMContentLoaded", function () {
  // Preloader Animation
  const preloader = document.getElementById("preloader");

  // Enhanced preloader with cyber effects
  setTimeout(() => {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }, 3000);

  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
    offset: 100,
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });

  // Enhanced Navigation Effects
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Navbar scroll effect with cyber glow
  let lastScrollTop = 0;
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Hide/show navbar on scroll
    if (scrollTop > lastScrollTop && scrollTop > 200) {
      navbar.style.transform = "translateY(-100%)";
    } else {
      navbar.style.transform = "translateY(0)";
    }
    lastScrollTop = scrollTop;
  });

  // Mobile menu toggle with enhanced animation
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Add cyber glitch effect to toggle
    navToggle.style.animation = "glitch 0.3s ease";
    setTimeout(() => {
      navToggle.style.animation = "";
    }, 300);
  });

  // Enhanced nav link effects
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Remove active class from all links
      navLinks.forEach((l) => l.classList.remove("active"));
      // Add active class to clicked link
      link.classList.add("active");

      // Close mobile menu
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");

      // Smooth scroll with offset for fixed navbar
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });

    // Add hover effect with cyber scan
    link.addEventListener("mouseenter", () => {
      link.style.boxShadow = "0 0 20px rgba(0, 255, 255, 0.5)";
    });

    link.addEventListener("mouseleave", () => {
      if (!link.classList.contains("active")) {
        link.style.boxShadow = "";
      }
    });
  });

  // Enhanced Hero Section Effects
  const heroTitle = document.querySelector(".hero-title");
  const glitchElement = document.querySelector(".glitch");

  // Random glitch effect for hero title
  if (glitchElement) {
    setInterval(() => {
      if (Math.random() > 0.8) {
        glitchElement.style.animation = "glitch 0.3s ease";
        setTimeout(() => {
          glitchElement.style.animation = "";
        }, 300);
      }
    }, 3000);
  }

  // Floating elements animation enhancement
  const floatingIcons = document.querySelectorAll(".floating-icon");
  floatingIcons.forEach((icon, index) => {
    // Add random movement
    setInterval(() => {
      const randomX = (Math.random() - 0.5) * 20;
      const randomY = (Math.random() - 0.5) * 20;
      icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }, 2000 + index * 500);

    // Add click effect
    icon.addEventListener("click", () => {
      icon.style.animation = "tada 1s ease";
      setTimeout(() => {
        icon.style.animation = "";
      }, 1000);
    });
  });

  // Enhanced Button Effects
  const cyberButtons = document.querySelectorAll(".cyber-btn");
  cyberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Create ripple effect
      const ripple = document.createElement("span");
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

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

      btn.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Schedule Tabs Functionality
  const tabButtons = document.querySelectorAll(".tab-btn");
  const daySchedules = document.querySelectorAll(".day-schedule");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const dayId = btn.getAttribute("data-day");

      // Remove active class from all tabs and schedules
      tabButtons.forEach((b) => b.classList.remove("active"));
      daySchedules.forEach((schedule) => schedule.classList.remove("active"));

      // Add active class to clicked tab and corresponding schedule
      btn.classList.add("active");
      document.getElementById(dayId).classList.add("active");

      // Add cyber effect
      btn.style.boxShadow = "0 0 30px rgba(0, 255, 255, 0.6)";
      setTimeout(() => {
        btn.style.boxShadow = "";
      }, 1000);
    });
  });

  // Enhanced Gallery Effects
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Add lightbox effect (basic implementation)
      const img = item.querySelector("img");
      const lightbox = document.createElement("div");
      lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                backdrop-filter: blur(10px);
                cursor: pointer;
            `;

      const lightboxImg = img.cloneNode();
      lightboxImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                border-radius: 15px;
                box-shadow: 0 0 50px rgba(0, 255, 255, 0.5);
                animation: zoomIn 0.3s ease;
            `;

      lightbox.appendChild(lightboxImg);
      document.body.appendChild(lightbox);

      lightbox.addEventListener("click", () => {
        lightbox.style.animation = "zoomOut 0.3s ease";
        setTimeout(() => {
          lightbox.remove();
        }, 300);
      });
    });
  });

  // Form Enhancement
  const formInputs = document.querySelectorAll(
    ".cyber-form input, .cyber-form textarea"
  );
  formInputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.style.boxShadow = "0 0 20px rgba(0, 255, 255, 0.3)";
    });

    input.addEventListener("blur", () => {
      input.parentElement.style.boxShadow = "";
    });
  });

  // Enhanced Scroll Effects
  const sections = document.querySelectorAll(".section");
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update active nav link
          const sectionId = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // Cyber Mouse Trail Effect
  let mouseTrail = [];
  const maxTrailLength = 10;

  document.addEventListener("mousemove", (e) => {
    mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });

    if (mouseTrail.length > maxTrailLength) {
      mouseTrail.shift();
    }

    // Create trail particles occasionally
    if (Math.random() > 0.95) {
      createTrailParticle(e.clientX, e.clientY);
    }
  });

  function createTrailParticle(x, y) {
    const particle = document.createElement("div");
    particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 4px;
            height: 4px;
            background: #00ffff;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            box-shadow: 0 0 10px #00ffff;
            animation: particle-float 1s ease-out forwards;
        `;

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1000);
  }

  // Enhanced Statistics Counter
  const statNumbers = document.querySelectorAll(".stat-number");
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const finalValue = parseInt(target.textContent.replace(/\D/g, ""));
          const suffix = target.textContent.replace(/\d/g, "");
          let currentValue = 0;
          const increment = Math.ceil(finalValue / 50);

          const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
              currentValue = finalValue;
              clearInterval(counter);
            }
            target.textContent = currentValue + suffix;
          }, 50);

          statsObserver.unobserve(target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((stat) => {
    statsObserver.observe(stat);
  });

  // Cyber Loading States
  function addCyberLoadingEffect(element) {
    element.style.position = "relative";
    element.style.overflow = "hidden";

    const loadingBar = document.createElement("div");
    loadingBar.style.cssText = `
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.3), transparent);
            animation: slideInRight 1s ease infinite;
        `;

    element.appendChild(loadingBar);

    setTimeout(() => {
      loadingBar.remove();
    }, 2000);
  }

  // Enhanced Hover Effects for Cards
  const cards = document.querySelectorAll(".cyber-card, .event-card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.02)";
      card.style.boxShadow = "0 20px 40px rgba(0, 255, 255, 0.3)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.style.boxShadow = "";
    });
  });

  // Dynamic Background Color Shift
  let colorShiftAngle = 0;
  setInterval(() => {
    colorShiftAngle += 1;
    if (colorShiftAngle >= 360) colorShiftAngle = 0;

    const heroSection = document.querySelector(".hero");
    if (heroSection) {
      heroSection.style.background = `
                radial-gradient(ellipse at center, 
                    hsla(${colorShiftAngle}, 100%, 50%, 0.1) 0%, 
                    transparent 70%
                )
            `;
    }
  }, 100);

  // Enhanced Error Handling for Images
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("error", () => {
      img.style.background =
        "linear-gradient(45deg, var(--bg-secondary), var(--bg-tertiary))";
      img.style.display = "flex";
      img.style.alignItems = "center";
      img.style.justifyContent = "center";
      img.innerHTML =
        '<i class="fas fa-image" style="font-size: 48px; color: var(--text-muted);"></i>';
    });
  });

  // Performance optimization
  let ticking = false;
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateAnimations);
      ticking = true;
    }
  }

  function updateAnimations() {
    // Update any continuous animations here
    ticking = false;
  }

  // Initialize on scroll listener for performance
  window.addEventListener("scroll", requestTick);

  console.log("🚀 Expectations 2025 - All systems initialized!");
});
