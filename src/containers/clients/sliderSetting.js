const settings = {
  autoplay: true,
  infinite: true,
  dots: true,
  speed: 500,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 100000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

export { settings }
