//loader
paceOptions = {
  ajax: true,
  document: true,
  eventLag: false
};

Pace.on('done', function () {

  $('#preloader').delay(0).animate({ top: '-120%' }, 3800, $.bez([0.19, 1, 0.22, 1]));


});
