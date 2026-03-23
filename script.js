const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

const modal = document.getElementById("projectModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");
const modalRole = document.getElementById("modalRole");
const knowMoreButtons = document.querySelectorAll(".know-more-btn");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }

  highlightActiveSection();
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

function highlightActiveSection() {
  const sections = document.querySelectorAll("main section");
  const scrollPosition = window.scrollY + 140;

  sections.forEach((section) => {
    const id = section.getAttribute("id");
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const relatedLink = document.querySelector(`.nav-menu a[href="#${id}"]`);

    if (!relatedLink) return;

    if (scrollPosition >= top && scrollPosition < top + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      relatedLink.classList.add("active");
    }
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", () => {
    if (formMessage) {
      formMessage.textContent = "Sending message...";
    }
  });
}

knowMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modalTitle.textContent = button.dataset.title;
    modalDescription.textContent = button.dataset.description;
    modalTech.textContent = button.dataset.tech;
    modalRole.textContent = button.dataset.role;
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  });
});

if (closeModal) {
  closeModal.addEventListener("click", closeProjectModal);
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    closeProjectModal();
  }
});

function closeProjectModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

highlightActiveSection();