/******************************************************************************
 *                 JS Extension for the W3C Spec Style Sheet                  *
 *                                                                            *
 * This code handles:                                                         *
 * - some fixup to improve the table of contents                              *
 * - the obsolete warning on outdated specs                                   *
 ******************************************************************************/
(function() {
  "use strict";
  var collapseSidebarText = '<span aria-hidden="true">←</span> '
                          + '<span>Collapse Sidebar</span>';
  var expandSidebarText   = '<span aria-hidden="true">→</span> '
                          + '<span>Pop Out Sidebar</span>';
  var tocJumpText         = '<span aria-hidden="true">↑</span> '
                          + '<span>Jump to Table of Contents</span>';

  var sidebarMedia = window.matchMedia('screen and (min-width: 78em)');
  var autoToggle   = function(e){ toggleSidebar(e.matches) };
  if(sidebarMedia.addListener) {
    sidebarMedia.addListener(autoToggle);
  }

  function toggleSidebar(on, skipScroll) {
    if (on == undefined) {
      on = !document.body.classList.contains('toc-sidebar');
    }

    if (!skipScroll) {
      /* Don't scroll to compensate for the ToC if we're above it already. */
      var headY = 0;
      var head = document.querySelector('.head');
      if (head) {
        // terrible approx of "top of ToC"
        headY += head.offsetTop + head.offsetHeight;
      }
      skipScroll = window.scrollY < headY;
    }

    var toggle = document.getElementById('toc-toggle');
    var tocNav = document.getElementById('toc');
    if (on) {
      var tocHeight = tocNav.offsetHeight;
      document.body.classList.add('toc-sidebar');
      document.body.classList.remove('toc-inline');
      toggle.innerHTML = collapseSidebarText;
      if (!skipScroll) {
        window.scrollBy(0, 0 - tocHeight);
      }
      tocNav.focus();
      sidebarMedia.addListener(autoToggle); // auto-collapse when out of room
    }
    else {
      document.body.classList.add('toc-inline');
      document.body.classList.remove('toc-sidebar');
      toggle.innerHTML = expandSidebarText;
      if (!skipScroll) {
        window.scrollBy(0, tocNav.offsetHeight);
      }
      if (toggle.matches(':hover')) {
        /* Unfocus button when not using keyboard navigation,
           because I don't know where else to send the focus. */
        toggle.blur();
      }
    }
  }

  function createSidebarToggle() {
    /* Create the sidebar toggle in JS; it shouldn't exist when JS is off. */
    var toggle = document.createElement('a');
      /* This should probably be a button, but appearance isn't standards-track.*/
    toggle.id = 'toc-toggle';
    toggle.class = 'toc-toggle';
    toggle.href = '#toc';
    toggle.innerHTML = collapseSidebarText;

    sidebarMedia.addListener(autoToggle);
    var toggler = function(e) {
      e.preventDefault();
      sidebarMedia.removeListener(autoToggle); // persist explicit off states
      toggleSidebar();
      return false;
    }
    toggle.addEventListener('click', toggler, false);


    /* Get <nav id=toc-nav>, or make it if we don't have one. */
    var tocNav = document.getElementById('toc-nav');
    if (!tocNav) {
      tocNav = document.createElement('p');
      tocNav.id = 'toc-nav';
      /* Prepend for better keyboard navigation */
      document.body.insertBefore(tocNav, document.body.firstChild);
    }
    /* While we're at it, make sure we have a Jump to Toc link. */
    var tocJump = document.getElementById('toc-jump');
    if (!tocJump) {
      tocJump = document.createElement('a');
      tocJump.id = 'toc-jump';
      tocJump.href = '#toc';
      tocJump.innerHTML = tocJumpText;
      tocNav.appendChild(tocJump);
    }

    tocNav.appendChild(toggle);
  }

  var toc = document.getElementById('toc');
  if (toc) {
    if (!document.getElementById('toc-toggle')) {
      createSidebarToggle();
    }
    toggleSidebar(sidebarMedia.matches, true);

    /* If the sidebar has been manually opened and is currently overlaying the text
       (window too small for the MQ to add the margin to body),
       then auto-close the sidebar once you click on something in there. */
    toc.addEventListener('click', function(e) {
      if(e.target.tagName.toLowerCase() == "a" && document.body.classList.contains('toc-sidebar') && !sidebarMedia.matches) {
        toggleSidebar(false);
      }
    }, false);
  }
  else {
    console.warn("Can't find Table of Contents. Please use <nav id='toc'> around the ToC.");
  }

  /* Wrap tables in case they overflow */
  var tables = document.querySelectorAll(':not(.overlarge) > table.data, :not(.overlarge) > table.index');
  var numTables = tables.length;
  for (var i = 0; i < numTables; i++) {
    var table = tables[i];
    if (!table.matches('.example *, .note *, .advisement *, .def *, .issue *')) {
      /* Overflowing colored boxes looks terrible, and also
         the kinds of tables inside these boxes
         are less likely to need extra space. */
      var wrapper = document.createElement('div');
      wrapper.className = 'overlarge';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }
  }

  /* Deprecation warning */
  var request = new XMLHttpRequest();
  request.open('GET', '//www.w3.org/TR/tr-outdated-spec.json', true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var outdatedSpecs = JSON.parse(request.responseText);
      const pathname = window.location.pathname;
      var spec = Object.keys(outdatedSpecs).filter(function(k) {return pathname.indexOf(k) === 0;}).shift();
      if (spec) {
        var css = 'a#deprecationnote:hover{ background-color: transparent }'
        ,   style = document.createElement('style');
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);
        var nodes = document.querySelectorAll("body, h1, h2, h3");
        for (var i = 0; i < nodes.length; i++) {
          nodes[i].setAttribute("style", "background-color: rgba(0,0,0,0.5);");
        }
        var node = document.createElement("p");
        node.className = "outdatedwarning";
        var outdatedValue = "bottom:50%; left:0; right:0; margin:0 auto 0 auto; width:50%; background:maroon; color:white; border-radius:1em; box-shadow:0 0 1em red; padding:2em; text-align:center; z-index:2;";
        node.style.cssText = "position:fixed; " + outdatedValue;

        var warning = '<strong>This version is outdated!</strong><div>For the latest version, please look at the <a id="deprecationnote" style="color:white" href="' + outdatedSpecs[spec] + '"> ' + outdatedSpecs[spec] + '</a>.</div><input onclick="collapseWarning(false)" style="margin:0; border:0; padding:0.25em 0.5em; background:transparent; color:black; position:absolute; top:0em; right:0; font:1.25em sans-serif; text-align:center;" type="button" value="&#9662; collapse">';
        node.innerHTML = warning;

        document.querySelector("body").appendChild(node);

        /* Apply a slightly different style for print media */
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function(mql) {
          if (mql.matches) {
            node.style.cssText = "position:absolute; border-style:solid; border-color:red; " + outdatedValue;
            node.innerHTML = '<strong>This version is outdated!</strong><div>For the latest version, please look at the <a id="deprecationnote" style="color:white" href="' + outdatedSpecs[spec] + '"> ' + outdatedSpecs[spec] + '</a>.</div>';
          } else {
            node.style.cssText = "position:fixed; " + outdatedValue;
            node.innerHTML = warning;
          }
        });
      }
    } else {
      console.error("Error downloading https://www.w3.org/TR/tr-outdated-spec.json");
    }
  };

  request.onerror = function() {
    console.error("Error downloading https://www.w3.org/TR/tr-outdated-spec.json");
  };

  request.send();
})();

function collapseWarning(details) {
  var node = document.querySelector(".outdatedwarning")
  ,   button = document.querySelector(".outdatedwarning input")
  ,   opacity;
  if (details) {
    node.style.cssText = "position:fixed; bottom:50%; left:0; right:0; margin:0 auto 0 auto; width:50%; background:maroon; color:white; border-radius:1em; box-shadow:0 0 1em red; padding:2em; text-align:center; z-index:2;";
    button.value = '\u25BE collapse';
    button.onclick = function() {collapseWarning(false)};
    opacity = "0.5";
  } else {
    node.style.cssText = "z-index:2; bottom:0; left:0; right:0; border-radius:0; position:fixed; margin:0 auto; background:maroon; color:white; text-align:center;";
    button.value = '\u25B4 expand';
    button.onclick = function() {collapseWarning(true)};
    opacity = "0";
  }
  var nodes = document.querySelectorAll("body, h1, h2, h3");
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].setAttribute("style", "background-color:rgba(0,0,0," + opacity + ");");
  }
}
