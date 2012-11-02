yepnope([{
  /* http://jquery.com/ */
  load: 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js',
  complete: function () {
    if (!window.jQuery) {
      yepnope('static/js/vendor/jquery-1.8.2.min.js');
    }
  }
}, {
  /* http://twitter.github.com/bootstrap/javascript.html */
  load: 'static/js/vendor/jquery.bootstrap.min.js',
  complete: function () {
    jQuery(function () {
      //BOOTSTRAP JS
    });
  }

//},{
  // http://flexslider.woothemes.com
  //load: 'static/js/vendor/jquery.flexslider.min.js',
  //complete: function () {
  //  jQuery(function () {
  //    //FLEXSLIDER JS
  //  });
  //}

//}, {
  // http://harvesthq.github.com/chosen
  //load: 'static/js/vendor/jquery.chosen.min.js',
  //complete: function () {
  //  jQuery(function () {
  //    //CHOSEN JS
  //  });
  //}

//}, {
  // http://refreshless.com/nouislider
  //load: 'static/js/vendor/jquery.nouislider.min.js',
  //complete: function () {
  //  jQuery(function () {
  //    //NOUISLIDER JS
  //  });
  //}
  
//}, {
  // http://modernizr.com
  //load: 'static/js/vendor/modernizr-2.6.1-respond-1.1.0.min.js'

}]);