const inPages = location.pathname.includes("/pages/");
const base = inPages ? "../" : "";
const page = name => `${base}pages/${name}`;
const home = `${base}index.html`;
const logo = `${base}kenamelogo.jpg`;
const header = `
<header class="site-header" id="header">
<a class="brand" href="${home}" aria-label="KENAME Sport home"><span class="brand-word">KENAME</span><img class="brand-logo" src="${logo}" alt="KENAME logo"></a>
<nav class="nav" id="mainNav" aria-label="Main navigation">
<a class="nav-link" href="${home}">Home</a>
<div class="nav-group"><button class="nav-dropdown-toggle" type="button" aria-expanded="false">Who We Are <span class="chevron" aria-hidden="true"></span></button><div class="dropdown-menu"><a href="${page("who-we-are.html")}#vision">Our Vision</a><a href="${page("who-we-are.html")}#name">Behind the Name</a><a href="${page("who-we-are.html")}#team">Meet the Team</a><a href="${page("who-we-are.html")}#leadership">Leadership</a><a href="${page("who-we-are.html")}#founder">Meet the Founder</a></div></div>
<div class="nav-group"><button class="nav-dropdown-toggle" type="button" aria-expanded="false">Our Ecosystem <span class="chevron" aria-hidden="true"></span></button><div class="dropdown-menu"><a href="${page("matchday.html")}">Matchday</a><a href="${page("travel.html")}">Travel</a><a href="${page("media.html")}">Media</a><a href="${page("consulting.html")}">Consulting</a></div></div>
<div class="nav-group"><button class="nav-dropdown-toggle" type="button" aria-expanded="false">Shop <span class="chevron" aria-hidden="true"></span></button><div class="dropdown-menu"><a href="${page("kename-fc.html")}">KENAME FC</a></div></div>
<a class="nav-contact-mobile" href="${page("contact.html")}">Contact</a>
</nav>
<a class="nav-contact" href="${page("contact.html")}">Contact</a>
<button class="menu-toggle" id="menuToggle" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span><span></span></button>
</header>`;
const footer = `
<footer class="site-footer"><div class="footer-main">
<div class="footer-brand"><a class="brand" href="${home}" aria-label="KENAME Sport home"><span class="brand-word">KENAME</span><img class="footer-brand-logo" src="${logo}" alt="KENAME logo"></a><p>Creating ways to experience women's football through travel, matchday, media and meaningful connections.</p><div class="social-row" aria-label="KENAME Sport social media">
<a href="https://www.instagram.com/kenamesport" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg></a>
<a href="https://www.tiktok.com/@kenamesport" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19.6 7.1a6.3 6.3 0 0 1-4.1-1.5v8.1a5.8 5.8 0 1 1-5-5.7v3.2a2.7 2.7 0 1 0 1.8 2.5V2.5h3.2c.2 2 1.7 3.6 4.1 3.8z"/></svg></a>
<a href="https://www.facebook.com/kenamesport" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5v1.8H7v3.1h2.9v8z"/></svg></a>
<a href="https://www.linkedin.com/company/kenamesport" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.2 8.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6M3.7 10h3v10h-3zm5 0h2.9v1.4h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.6V20h-3v-5c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6V20h-3z"/></svg></a>
<a href="https://www.youtube.com/@kenamesport" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23 7.1a3 3 0 0 0-2.1-2.2C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.9a3 3 0 0 0 2.1 2.2c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.2 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9M9.8 15.5v-7l6 3.5z"/></svg></a>
</div></div>
<div class="footer-col"><h4>WHO WE ARE</h4><a href="${page("who-we-are.html")}#vision">Our Vision</a><a href="${page("who-we-are.html")}#name">Behind the Name</a></div>
<div class="footer-col"><h4>OUR ECOSYSTEM</h4><a href="${page("matchday.html")}">Matchday</a><a href="${page("travel.html")}">Travel</a><a href="${page("media.html")}">Media</a><a href="${page("consulting.html")}">Consulting</a></div>
<div class="footer-col"><h4>SHOP</h4><a href="${page("kename-fc.html")}">KENAME FC</a></div>
<div class="footer-col"><h4>WORK WITH US</h4><a class="footer-contact-button" href="${page("contact.html")}">Contact</a></div>
</div><div class="footer-bottom"><span>© 2026 KENAME Sport LTD Liability Co.</span><span><a href="${page("privacy.html")}">Privacy Policy</a><a href="${page("terms.html")}">Terms</a></span></div></footer>`;
document.getElementById("site-header")?.insertAdjacentHTML("afterbegin", header);
document.getElementById("site-footer")?.insertAdjacentHTML("afterbegin", footer);
const headerEl = document.getElementById("header");
addEventListener("scroll", () => headerEl?.classList.toggle("scrolled", scrollY > 35), { passive: true });
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
toggle?.addEventListener("click", () => { const open = nav.classList.toggle("open"); toggle.setAttribute("aria-expanded", String(open)); toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation"); });
document.querySelectorAll(".nav-dropdown-toggle").forEach(button => button.addEventListener("click", () => { const group = button.closest(".nav-group"); const open = group.classList.toggle("dropdown-open"); button.setAttribute("aria-expanded", String(open)); document.querySelectorAll(".nav-group").forEach(other => { if (other !== group) { other.classList.remove("dropdown-open"); other.querySelector(".nav-dropdown-toggle")?.setAttribute("aria-expanded", "false"); } }); }));
document.addEventListener("click", event => { if (!event.target.closest(".nav-group")) document.querySelectorAll(".nav-group").forEach(group => { group.classList.remove("dropdown-open"); group.querySelector(".nav-dropdown-toggle")?.setAttribute("aria-expanded", "false"); }); });
document.addEventListener("keydown", event => { if (event.key === "Escape") { nav?.classList.remove("open"); toggle?.setAttribute("aria-expanded", "false"); document.querySelectorAll(".nav-group").forEach(group => { group.classList.remove("dropdown-open"); group.querySelector(".nav-dropdown-toggle")?.setAttribute("aria-expanded", "false"); }); } });
document.querySelectorAll('a[href="#"]').forEach(a => a.addEventListener("click", event => event.preventDefault()));