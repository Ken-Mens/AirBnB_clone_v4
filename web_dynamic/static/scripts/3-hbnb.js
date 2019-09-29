$(() => {
  const aDict = {};

  $('input').change(() => {
    for (const idx of $('input')) {
      if (idx.checked) aDict[idx.dataset.name] = idx.dataset.id;
      else delete aDict[idx.dataset.name];
    }
    $('.amenities h4').html(Object.keys(aDict).join(', '));
  });
});

$.get('http://0.0.0.0:5001/api/v1/places_search/', function (data, status) {
  console.log(data);
  if (data.status === 'OK') {
    $('div#api_status').addClass('available');
  } else {
    $('div#api_status').removeClass('available');
  }
});

const dObj = {};

$.ajax({
  type: 'POST',
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  contentType: 'application/json',
  data: JSON.stringify(dObj),
  success: function (data) {
    $('.places h1').after('<article>');
    $('article').append('<div class="title">');
    $('.title').append('<h2>').append('<div class="price_by_night">');
    $('.title').after('<div class="information">');
    $('.information').append('<div class="max_guest">');
    $('.max_guest').append('<i class="fa fa-users fa-3x" aria-hidden="true">'); // Has before
    $('.fa.fa-users.fa-3x').after('<br />');
    $('.max_guest').after('<div class="number_rooms">'); // Has before
    $('.number_rooms').append('<i class="fa fa-bed fa-3x" aria-hidden="true">'); // Has before
    $('.fa.fa-bed.fa-3x').after('<br />');
    $('.number_rooms').after('<div class="number_bathrooms">');
    $('.number_bathrooms').append('<i class="fa fa-bath fa-3x" aria-hidden="true">'); // Has before
    $('.fa.fa-bath.fa-3x').after('<br />');
    $('.information').after('<div class="user">');
    $('.user').after('<div class="description">');
  }
});
