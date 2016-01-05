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
  toggle = document.getElementById('toc-toggle');
  if (on) {
    document.body.className = 'toc-sidebar';
    toggle.innerHTML = "→";
    toggle.title = "Collapse Sidebar";
  }
  else {
    document.body.className = 'toc-inline';
    toggle.innerHTML = "←";
    toggle.title = "Pop Out Sidebar";
    tocNav = document.getElementById('toc');
    window.scrollBy(0, tocNav.offsetHeight);
  }
  return false;
}

toggle = document.createElement('a');
toggle.setAttribute('id', 'toc-toggle');
toggle.setAttribute('href', '#toc');
toggle.setAttribute('onclick', 'return toggleSidebar()');

tocNav = document.getElementById('toc');
tocH = tocNav.getElementsByTagName('h2')[0];
tocH.appendChild(document.createTextNode(' '));
tocH.appendChild(toggle);

if (window.matchMedia) {
  toggleSidebar(window.matchMedia('screen and (min-width: 78em)').matches);
  window.addEventListener('resize', function() {
    toggleSidebar(window.matchMedia('screen and (min-width: 78em)').matches);
  }, true);
}
