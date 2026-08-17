const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");
const themeToggle = document.getElementById("themeToggle");
const topBtn = document.getElementById("topBtn");
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

menuToggle.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "☀" : "☾";
});

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 500 ? "block" : "none";

  const sections = document.querySelectorAll("main section");
  let current = "home";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) current = section.id;
  });
  document.querySelectorAll("nav a").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
});

topBtn.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");
  status.textContent = `Thanks ${name}! Your message is ready to be connected to a backend/email service.`;
  form.reset();
});

function projectAlert(e, project) {
  e.preventDefault();
  alert(`${project}\\n\\nAdd your GitHub repository URL to this project's link in index.html.`);
}

function downloadCV(e) {
  e.preventDefault();
  alert("Add your CV PDF as cv.pdf in this folder, then change the Download CV link to href=\"cv.pdf\".");
}

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
