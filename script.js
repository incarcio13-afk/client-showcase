// Step 1: Dynamic Sitemap Updater
function updateSitemap() {
  let sitemap = "Home > About Us";

  if (document.getElementById('chk-services').checked) {
    sitemap += " > Services";
  }
  if (document.getElementById('chk-portfolio').checked) {
    sitemap += " > Portfolio";
  }
  if (document.getElementById('chk-blog').checked) {
    sitemap += " > Blog";
  }
  if (document.getElementById('chk-contact').checked) {
    sitemap += " > Contact";
  }

  document.getElementById('sitemap-output').innerText = "Sitemap: " + sitemap;
}

// Step 2: Live Theme Switcher
function applyTheme(theme) {
  const box = document.getElementById('theme-demo-box');
  box.className = 'demo-box ' + theme;
}

// Step 3: Responsive Viewport Resizer
function setViewport(device) {
  const frame = document.getElementById('viewport-frame');
  const label = document.getElementById('viewport-label');

  frame.className = 'viewport-box ' + device;

  if (device === 'desktop') label.innerText = 'https://yourbusiness.com (1920px Desktop)';
  if (device === 'tablet') label.innerText = 'https://yourbusiness.com (768px Tablet)';
  if (device === 'mobile') label.innerText = 'https://yourbusiness.com (375px Mobile)';
}

// Step 4: Audit Performance Simulator
function runPerformanceAudit() {
  const speed = document.getElementById('score-speed');
  const seo = document.getElementById('score-seo');
  const access = document.getElementById('score-access');
  const best = document.getElementById('score-best');

  speed.innerText = "..";
  seo.innerText = "..";
  access.innerText = "..";
  best.innerText = "..";

  setTimeout(() => {
    speed.innerText = "98%";
    seo.innerText = "100%";
    access.innerText = "95%";
    best.innerText = "99%";
  }, 700);
}

// Interactive Project Cost Estimator
function calculateProjectTotal() {
  let basePrice = 350;

  const design = document.getElementById('opt-design');
  const seo = document.getElementById('opt-seo');
  const cms = document.getElementById('opt-cms');

  if (design && design.checked) basePrice += parseInt(design.value);
  if (seo && seo.checked) basePrice += parseInt(seo.value);
  if (cms && cms.checked) basePrice += parseInt(cms.value);

  document.getElementById('total-price-display').innerText = "$" + basePrice + " USD";
}
