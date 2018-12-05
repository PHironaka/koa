


/*!
 * modernizr.min.js
 */
// =require vendor/modernizr.min.js
// =require vendor/jquery-3.3.1.min.js



// Attempts to preserve comments that likely contain licensing information,
// even if the comment does not have directives such as `@license` or `/*!`.
//
// Implemented via the [`uglify-save-license`](https://github.com/shinnn/uglify-save-license)
// module, this option preserves a comment if one of the following is true:
//
// 1. The comment is in the *first* line of a file
// 2. A regular expression matches the string of the comment.
//    For example: `MIT`, `@license`, or `Copyright`.
// 3. There is a comment at the *previous* line, and it matches 1, 2, or 3.


window.slate = window.slate || {};
window.theme = window.theme || {};

/*================ Slate ================*/
// =require slate/a11y.js
// =require slate/cart.js
// =require slate/utils.js
// =require slate/rte.js
// =require slate/sections.js
// =require slate/currency.js
// =require slate/images.js

// =require slate/variants.js

/*================ Sections ================*/
// =require sections/product.js

/*================ Templates ================*/
// =require templates/customers-addresses.js
// =require templates/customers-login.js



$(document).ready(function() {
  var sections = new slate.Sections();
  sections.register('product', theme.Product);

  // Common a11y fixes
  slate.a11y.pageLinkFocus($(window.location.hash));

  $('.in-page-link').on('click', function(evt) {
    slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
  });

  // Target tables to make them scrollable
  var tableSelectors = '.rte table';

  slate.rte.wrapTable({
    $tables: $(tableSelectors),
    tableWrapperClass: 'rte__table-wrapper',
  });

  // Target iframes to make them responsive
  var iframeSelectors =
    '.rte iframe[src*="youtube.com/embed"],' +
    '.rte iframe[src*="player.vimeo"]';

  slate.rte.wrapIframe({
    $iframes: $(iframeSelectors),
    iframeWrapperClass: 'rte__video-wrapper'
  });

  // Apply a specific class to the html element for browser support of cookies.
  if (slate.cart.cookiesEnabled()) {
    document.documentElement.className = document.documentElement.className.replace('supports-no-cookies', 'supports-cookies');
  }
});





  


$(window).load( function() {

  $(".mobile-nav--button, .close").click( function() {
    $(".modal-box, .active").toggleClass("active");
    /* Check panel overlay */

  }); 

  $(".view-ingredients").click( function() {
    $(".all-ingredients").toggleClass("active");

  }); 
  
});
 
$(".dropdown-menu a").click(function() {
  $('.dropdown-item').toggle(200);

})  

$(window).load(function(){
     $('#loading').animate({
       opacity: .2,
     }).hide();
});

  


//Check the scroll position
$(window).scroll(function(){
  if ($(this).scrollTop() > 500) {
    event.preventDefault();
    $(".scrollToTop").css({'transform': 'translate(0px, 0px)'});
  } else {
    $(".scrollToTop").css({'transform': 'translate(200px, 0px)'});
  }
});

$("a[href^='#']").on('click', function (e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 600, 'linear');
});


// //Click and scrolls top effect
// $('.scrollToTop').click(function(){
//   $('html, body').animate({scrollTop : 0},800);
//   return false;
//   });


// jQuery('.cart').val('Sold Out').addClass('sold-out').attr('disabled', 'disabled');

    
 
     jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    }); 





    



