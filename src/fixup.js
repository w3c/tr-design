/******************************************************************************
 *                 JS Extension for the W3C Spec Style Sheet                  *
 *                                                                            *
 * This code handles some fixup to improve the table of contents.             *
 * It is intended to be a very simple script for 2016.                        *
 ******************************************************************************/

function toggleSidebar(on) {
  if (on == undefined) {
    on = document.body.className != 'toc-sidebar'
  }
  toggle1 = document.getElementById('toc-toggle');
  toggle2 = document.getElementById('toc-toggle-inline');
  if (on) {
    tocHeight = tocNav.offsetHeight;
    document.body.className = 'toc-sidebar';
    toggle1.innerHTML = "←";
    toggle1.title = "Collapse Sidebar";
    toggle2.innerHTML = "→";
    toggle2.title = "Collapse Sidebar";
    window.scrollBy(0, 0 - tocHeight);
  }
  else {
    document.body.className = 'toc-inline';
    toggle1.innerHTML = "→";
    toggle1.title = "Pop Out Sidebar";
    toggle2.innerHTML = "←";
    toggle2.title = "Pop Out Sidebar";
    tocNav = document.getElementById('toc');
    window.scrollBy(0, tocNav.offsetHeight);
  }
  return false;
}

toggle = document.createElement('a');
  /* This should probably be a button, but appearance isn't standards-track.*/
toggle.setAttribute('id', 'toc-toggle-inline');
toggle.setAttribute('class', 'toc-toggle');
toggle.setAttribute('href', '#toc');
toggle.setAttribute('onclick', 'return toggleSidebar()');
toggle.innerHTML = "←";

tocNav = document.getElementById('toc');
tocH = tocNav.getElementsByTagName('h2')[0];
tocH.appendChild(document.createTextNode(' '));
tocH.appendChild(toggle);

toggle = toggle.cloneNode(true);
toggle.setAttribute('id', 'toc-toggle');
b2t = document.getElementById('back-to-top');
if (b2t) {
  b2t.appendChild(toggle);
}
else {
  document.body.appendChild(toggle);
}

if (window.matchMedia) {
  toggleSidebar(window.matchMedia('screen and (min-width: 78em)').matches);
  window.addEventListener('resize', function() {
    toggleSidebar(window.matchMedia('screen and (min-width: 78em)').matches);
  }, true);
}
