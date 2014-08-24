var main = function () {
  $.localScroll.defaults.axis = 'y';
  
  $.localScroll({
    target: 'body', // could be a selector or a jQuery object too.
    queue: true,
    offset: -50,
    duration: 750,
    hash: true,
    onBefore: function (e, anchor, $target) {
      // The 'this' is the settings object, can be modified
    },
    onAfter: function (anchor, settings) {
      // The 'this' contains the scrolled element (body)
    }
  });
  
  $('.navbar a').on('click', function (event) {
    if ($('.navbar-toggle').css('display') !== 'none') {
      $('.navbar-toggle').trigger('click');
    }
  });
};

$(document).ready(main);