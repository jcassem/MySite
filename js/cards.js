var container = $("#main-card-container");

var cards = jQuery.getJSON("cards.json", function(cards) {
  $.each(cards, function(i, card) {
    var cardHTML = '<div class="col-sm-12 col-md-6 col-lg-4 item card-container">';
    cardHTML += '<div class="card main-card" id="card-' + card.ID + '">';
    cardHTML += '<div class="coloured-box" style="background-color:' + card.Colour + '"></div>';
    cardHTML += '<div class="icon-container"><i class="fa fa-' + card.Icon + ' fa-2x" style="color:' + card.Colour + '"></i></div>';
    cardHTML += '<h3>' + card.Title + '</h3>';
    cardHTML += '<p>' + card.Content + '<p>';
    cardHTML += '</div></div>';

    container.append(cardHTML);
  })
});