// var width = $(window).width();
window.addEventListener("scroll", function () {
  let navheader = document.getElementById("navid");

  if (window.pageYOffset > 0) {
    navheader.classList.add("customnavbar");
  } else {
    navheader.classList.remove("customnavbar");
  }
});

//scroll function
AOS.init();
// slider
$(".multiple-items").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 599,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
});

$("#audio-control").click(function () {
  if ($("#myVideo").prop("muted")) {
    $("#myVideo").prop("muted", false);
    // $(this).text("Mute");
    // or toggle class, style it with a volume icon sprite, change background-position
  } else {
    $("#myVideo").prop("muted", true);
    // $(this).text("Unmute");
  }
});
//
// Contact us form submit
// document.querySelector("#contact-form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   e.target.elements.name.value = "";
//   e.target.elements.email.value = "";
//   e.target.elements.message.value = "";
// });
