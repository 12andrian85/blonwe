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
      perPage: 3,
      // autoplay: 'true',
      // focus: 'center',
      arrows: true,
      breakpoints: {
        640: {
          perPage: 1,
        },
        768: {
          perPage: 6,
        },
        1200: {
          perPage: 8,
        },
        2560: {
          perPage: 9,
        },
      }
    }).mount();
  }

if (splideSales) {

    new Splide('#sales', {
      type: 'loop',
      perPage: 3,
      // autoplay: 'true',
      // focus: 'center',
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
  