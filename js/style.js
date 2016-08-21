$(window).resize(matchHeight('.carousel-inner', '.profile-body-container'));
matchHeight('#profile-card', '#summary-card');

function matchHeight(leftID, rightID) {
  if ($(leftID).outerHeight() > $(rightID).outerHeight()) {
    $(rightID).outerHeight($(leftID).outerHeight());
  } else {
    $(leftID).outerHeight($(rightID).outerHeight());
  }
}
