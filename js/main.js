// // Import the Bootstrap bundle
// //
// // Includes Popper and all of Bootstrap's JS plugins.
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
const splideCategories = document.querySelector('#categories')
const splideSales = document.querySelector('#sales')
const splideSeafood = document.querySelector('#seafood')


if (splideCategories) {

  new Splide('#categories', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    // autoplay: 'true',
    focus: 'center',
    arrows: true,
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 3,
      },
      1200: {
        perPage: 4,
      },
      2560: {
        perPage: 5,
      },
    }
  }).mount();
}

if (splideSales) {

  new Splide('#sales', {
    // type: 'loop',
    perPage: 3,
    perMove: 1,
    focus  : 0,
    // omitEnd: true,
    arrows: true,
    breakpoints: {
      640: {
        perPage: 2,
      },
      768: {
        perPage: 3,
      },
      1200: {
        perPage: 6,
      },
      2560: {
        perPage: 6,
      },
    }
  }).mount();
}
// input-number
// $('.quantity-button').off('click').on('click', function () {

//   if ($(this).hasClass('quantity-add')) {
//     var addValue = parseInt($(this).parent().find('input').val()) + 1;
// 		$(this).parent().find('input').val(addValue).trigger('change');
// 	}

// 	if ($(this).hasClass('quantity-remove')) {
//     var removeValue = parseInt($(this).parent().find('input').val()) - 1;
// 		if( removeValue == 0 ) {
//       removeValue = 1;
// 		}
// 		$(this).parent().find('input').val(removeValue).trigger('change');
// 	}

// });




// if (splideSeafood) {

//   new Splide('#seafood', {
//     type: 'loop',
//     perPage: 3,
//     // autoplay: 'true',
//     // focus: 'center',
//     arrows: true,
//     breakpoints: {
//       640: {
//         perPage: 2,
//       },
//       768: {
//         perPage: 3,
//       },
//       1200: {
//         perPage: 6,
//       },
//       2560: {
//         perPage: 6,
//       },
//     }
//   }).mount();
// }


var splide = new Splide('#main-carousel', {
  pagination: false,
  focus: 'center',
});


var thumbnails = document.getElementsByClassName('thumbnail');
var current;


for (var i = 0; i < thumbnails.length; i++) {
  initThumbnail(thumbnails[i], i);
}


function initThumbnail(thumbnail, index) {
  thumbnail.addEventListener('click', function () {
    splide.go(index);
  });
}


splide.on('mounted move', function () {
  var thumbnail = thumbnails[splide.index];


  if (thumbnail) {
    if (current) {
      current.classList.remove('is-active');
    }


    thumbnail.classList.add('is-active');
    current = thumbnail;
  }
});


splide.mount();
