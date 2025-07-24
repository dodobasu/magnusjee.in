$(function() {
  // Smooth scroll for nav links (if any)
  $('a.nav-link[href^="#"]').on('click', function(e) {
    var target = $(this.getAttribute('href'));
    if(target.length) {
      e.preventDefault();
      $('html, body').stop().animate({scrollTop: target.offset().top - 70}, 600);
      // Collapse navbar on mobile after click
      if($('.navbar-collapse').hasClass('show')) {
        $('.navbar-toggler').trigger('click');
      }
    }
  });

  // Highlight active nav link on scroll
  var sectionIds = ['#about','#courses','#success','#videos','#gallery','#contact','#important-links'];
  $(window).on('scroll', function() {
    var scrollPos = $(document).scrollTop() + 80;
    sectionIds.forEach(function(id) {
      var section = $(id);
      if(section.length) {
        var top = section.offset().top;
        var bottom = top + section.outerHeight();
        var navLink = $('.main-nav-menu .nav-link[href="'+id+'"]');
        if(scrollPos >= top && scrollPos < bottom) {
          navLink.addClass('active');
        } else {
          navLink.removeClass('active');
        }
      }
    });
  });

  // Show/hide back-to-top button
  $(window).scroll(function() {
    if($(this).scrollTop() > 200) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
  $('#toTop').click(function() {
    $('html, body').animate({scrollTop: 0}, 500);
    return false;
  });

  // Contact form demo handler
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();
    swal({
      title: 'Thank you!',
      text: 'Your message has been sent. We will contact you soon.',
      icon: 'success',
      button: 'OK',
    });
    this.reset();
  });
}); 