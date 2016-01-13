/******************************************************************************
 *                 JS Extension for the W3C Spec Style Sheet                  *
 *                                                                            *
 * This code handles some fixup to improve the table of contents.             *
 * It is intended to be a very simple script for 2016.                        *
 ******************************************************************************/
(function(){
  function toggleSidebar(on, skipScroll) {
    if (on == undefined) {
      on = !document.body.classList.contains('toc-sidebar');
    }

    var toggle = document.getElementById('toc-toggle');
    var tocNav = document.getElementById('toc');
    if (on) {
      var tocHeight = tocNav.offsetHeight;
      document.body.classList.add('toc-sidebar');
      document.body.classList.remove('toc-inline');
      toggle.textContent = "←";
      toggle.title = "Collapse Sidebar";
      if (!skipScroll) {
        window.scrollBy(0, 0 - tocHeight);
      }
    }
    else {
      document.body.classList.add('toc-inline');
      document.body.classList.remove('toc-sidebar');
      toggle.textContent = "→";
      toggle.title = "Pop Out Sidebar";
      if (!skipScroll) {
        window.scrollBy(0, tocNav.offsetHeight);
      }
    }
  }

  function createSidebarToggle() {
    var toggle = document.createElement('a');
      /* This should probably be a button, but appearance isn't standards-track.*/
    toggle.setAttribute('id', 'toc-toggle');
    toggle.setAttribute('class', 'toc-toggle');
    toggle.setAttribute('href', '#toc');
    toggle.addEventListener('click', function(e){ e.preventDefault(); toggleSidebar(); return false;}, false);
    toggle.textContent = "←";

    var b2t = document.getElementById('back-to-top');
    if (b2t) {
      b2t.appendChild(toggle);
    }
    else {
      document.body.appendChild(toggle);
    }
  }

  createSidebarToggle();
  var sidebarMedia = window.matchMedia('screen and (min-width: 78em)');
  sidebarMedia.addEventListener('change', function(e){toggleSidebar(e.matches, true);}, false);
  toggleSidebar(sidebarMedia.matches, true);

  /* If the sidebar has been manually opened and is currently overlaying the text
     (window too small for the MQ to add the margin to body),
     then auto-close the sidebar once you click on something in there. */
  document.getElementById('toc').addEventListener('click', function(e) {
    if(e.target.tagName.toLowerCase() == "a" && document.body.classList.contains('toc-sidebar') && !sidebarMedia.matches) {
      toggleSidebar();
    }
  }, false);
})();
