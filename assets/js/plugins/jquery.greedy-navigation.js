/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav > .greedy-nav__toggle');
var $vlinks = $('#site-nav .visible-links');
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

// When even the persistent items (site name + language/theme toggles) do not fit,
// the toggles move to the end of the dropdown menu and come back once there is room.
var tailInMenu = false;
var tailWidth = 0;

function spaceLeft() {
  return $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
}

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if ($vlinks.width() > availableSpace) {

    while ($vlinks.width() > availableSpace && $vlinks.children("*:not(.persist)").length > 0) {
      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
      $vlinks.children("*:not(.persist)").last().prependTo($hlinks);

      availableSpace = $btn.hasClass("hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;

      // Show the dropdown btn
      $btn.removeClass("hidden");
    }

    // Only persistent items are left and they still overflow: move the toggles to the menu
    if (!tailInMenu && $vlinks_persist_tail.length > 0 && $vlinks.width() > spaceLeft()) {
      tailWidth = $vlinks_persist_tail.outerWidth(true);
      $vlinks_persist_tail.addClass('in-menu').appendTo($hlinks);
      tailInMenu = true;
      $btn.removeClass("hidden");
    }

    // The visible list is not overflowing
  } else {

    // The toggles come back first, once they fit next to the site name
    if (tailInMenu && $vlinks.width() + tailWidth <= availableSpace) {
      $vlinks_persist_tail.removeClass('in-menu').appendTo($vlinks);
      tailInMenu = false;
    }

    // There is space for another item in the nav
    while (!tailInMenu && breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
      // Move the item to the visible list
      if ($vlinks_persist_tail.children().length > 0) {
        $hlinks.children().first().insertBefore($vlinks_persist_tail);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if (breaks.length < 1 && !tailInMenu) {
      $btn.addClass('hidden');
      $btn.removeClass('close');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // update masthead height and the body/sidebar top padding
  var mastheadHeight = $('.masthead').height();
  $('body').css('padding-top', mastheadHeight + 'px');
  if ($(".author__urls-wrapper button").is(":visible")) {
    $(".sidebar").css("padding-top", "");
  } else {
    $(".sidebar").css("padding-top", mastheadHeight + "px");
  }

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
screen.orientation.addEventListener("change", function () {
  updateNav();
});

$btn.on('click', function () {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();