/* Charlese Saballe — shared site behaviour */
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

   // Open a <details> when its id is the URL hash (deep-links from teasers)
  function openFromHash() {
    var id = (location.hash || '').slice(1);
    if (!id) return;
    var el = document.getElementById(id);
    if (!el || el.tagName.toLowerCase() !== 'details') return;
    el.open = true;
    var top = el.getBoundingClientRect().top + window.pageYOffset - 84;
    window.scrollTo(0, top);
  }
  window.addEventListener('hashchange', openFromHash);
  openFromHash();
})();
