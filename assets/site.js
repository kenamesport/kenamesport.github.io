const inPages = location.pathname.includes("/pages/");
const base = inPages ? "../" : "";
const page = name => `${base}pages/${name}`;
const home = `${base}index.html`;
const logo = `${base}kenamelogo.png`;
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
<div class="footer-brand"><a class="brand" href="${home}" aria-label="KENAME Sport home"><span class="brand-word">KENAME</span><img class="footer-brand-logo" src="${logo}" alt="KENAME logo"></a><p>Creating ways to experience women's football through travel, matchday, media and meaningful connections.</p><div class="social-row"><a href="#">IG</a><a href="#">TT</a><a href="#">in</a></div></div>
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