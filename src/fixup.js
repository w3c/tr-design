/******************************************************************************
 *                 JS Extension for the W3C Spec Style Sheet                  *
 *                                                                            *
 * This code handles some fixup to improve the table of contents.             *
 * It is intended to be a very simple script for 2016.                        *
 ******************************************************************************/
/*globals respecEvents*/
(function() {
  "use strict";
  function toggleSidebar(on) {
    // Don't scroll to compensate for the ToC if we're above it already.
    var headY = 0;
    var head = document.querySelector(".head");
    if (head) {
      // terrible approx of "top of ToC"
      headY += head.offsetTop + head.offsetHeight;
    }
    var skipScroll = window.scrollY < headY;
    var toggle = document.getElementById("toc-toggle");
    var toggleAbbr = toggle.querySelector("abbr");
    var tocNav = document.getElementById("toc");
    if (on) {
      var tocHeight = tocNav.offsetHeight;
      document.body.classList.add("toc-sidebar");
      document.body.classList.remove("toc-inline");
      toggleAbbr.textContent = "←";
      toggleAbbr.title = "Collapse Sidebar";
      if (!skipScroll) {
        window.scrollBy(0, 0 - tocHeight);
      }
      tocNav.focus();
      return;
    }
    document.body.classList.add("toc-inline");
    document.body.classList.remove("toc-sidebar");
    toggleAbbr.textContent = "→";
    toggleAbbr.title = "Pop Out Sidebar";
    if (!skipScroll) {
      window.scrollBy(0, tocNav.offsetHeight);
    }
    if (toggle.matches(":hover")) {
      // Unfocus button when not using keyboard navigation,
      // because I don't know where else to send the focus.
      toggle.blur();
    }
  }

  // Create the sidebar toggle in JS; it shouldn't exist when JS is off.
  function createSidebarToggle() {
    // This should probably be a button, but appearance isn't standards-track.
    var toggle = document.createElement("a");
    toggle.id = "toc-toggle";
    toggle.class = "toc-toggle";
    toggle.href = "#toc";
    toggle.addEventListener("click", function(e) {
      e.preventDefault();
      var hasSideBar = document.body.classList.contains("toc-sidebar");
      toggleSidebar(!hasSideBar);
    });
    toggle.innerHTML = "<abbr title='Collapse Sidebar'>←</abbr>";

    // Get <nav id=toc-nav>, or make it if we don't have one.
    var tocNav = document.getElementById("toc-nav");
    if (!tocNav) {
      tocNav = document.createElement("nav");
      tocNav.id = "toc-nav";
      // Prepend for better keyboard navigation
      document.body.insertBefore(tocNav, document.body.firstChild);
    }
    // While we're at it, make sure we have a Jump to Toc link.
    var tocJump = document.getElementById("toc-jump");
    if (!tocJump) {
      tocJump = document.createElement("a");
      tocJump.id = "toc-jump";
      tocJump.href = "#toc";
      tocJump.innerHTML = "<abbr title='Jump to Table of Contents'>↑</abbr>";
      tocNav.appendChild(tocJump);
    }
    tocNav.appendChild(toggle);
  }

  function matchToggle(e) {
    toggleSidebar(e.matches);
  }

  function run(){
    // If the sidebar has been manually opened and is currently overlaying the
    // text (window too small for the MQ to add the margin to body),
    // then auto-close the sidebar once you click on something in there.
    var sidebarMedia = window.matchMedia("screen and (min-width: 78em)");
    var toc = document.getElementById("toc");
    sidebarMedia.addListener(matchToggle);
    createSidebarToggle();
    toggleSidebar(sidebarMedia.matches);
    toc.addEventListener("click", function(e) {
      var hasSideBar = document.body.classList.contains("toc-sidebar");
      if (e.target.localName === "a" && hasSideBar && !sidebarMedia.matches) {
        toggleSidebar(hasSideBar);
      }
    });

    // Wrap tables in case they overflow.
    var query = ":not(.overlarge) > table.data, :not(.overlarge) > table.index";
    var nodeList = document.querySelectorAll(query);
    // Convert to array, cause NodeLists suck.
    var tables = Array.prototype.slice.call(nodeList);
    tables.forEach(function(table) {
      var wrapper = document.createElement("div");
      wrapper.className = "overlarge";
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  }
  // Wait for ReSpec to become ready.
  if(respecEvents && "respecDone" in document && !document.respecDone){
    respecEvents.sub("end-all", run);
    return;
  }
  run();
}());
