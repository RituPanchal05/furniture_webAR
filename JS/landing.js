//swiper slider
var swiper = new Swiper(".box_slider", {
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//card swapping
const cards = document.querySelectorAll('.card');

function transition() {
  if (this.classList.contains('active')) {
    this.classList.remove('active')
  } else {
    this.classList.add('active');
  }
}
cards.forEach(card => card.addEventListener('click', transition));

//first_sofa_chair
//calling different models
var modelViewers = document.querySelectorAll('.model .viewer');
var boxModelViewer = document.querySelectorAll(".info .red_sofa_chair");
var bluesofa = document.querySelector("#first .bluesofa");
var redsofa = document.querySelector("#first .redsofa");
var mainblueSofa = document.getElementById("main_blue_sofa_chair");
var mainblackSofa = document.getElementById("main_black_sofa_chair");
var mainredSofa = document.getElementById("main_red_sofa_chair");
var boxblueSofa = document.getElementById("blue_sofa_chair");
var boxredSofa = document.getElementById("red_sofa_chair");
var infoblue = document.querySelector("#ff_second .pdtinfo");
var infored = document.querySelector("#ff_one .pdtinfo");

//bluesofa
bluesofa.addEventListener('click', function () {
  // Hide all model-viewer elements
  modelViewers.forEach(function (viewer) {
    viewer.style.display = 'none';
  });

  boxModelViewer.forEach(function (viewers) {
    viewers.style.display = 'none';
  });

  // Show the clicked model-viewer element
  boxblueSofa.style.display = 'block';
  mainblueSofa.style.display = 'block';
});



//redsofa
redsofa.addEventListener('click', function () {
  // Hide all model-viewer elements
  modelViewers.forEach(function (viewer) {
    viewer.style.display = 'none';
  });

  boxModelViewer.forEach(function (viewers) {
    viewers.style.display = 'none';
  });

  // Show the clicked model-viewer element
  boxredSofa.style.display = 'block';
  mainredSofa.style.display = 'block';
});

//second_sofa_chair
var boxModelViewer1 = document.querySelectorAll(".info .second_sofa_chair");
var pinksofa = document.querySelector("#second .pinksofa");
var yellowsofa = document.querySelector("#second .yellowsofa");
var brownsofa = document.querySelector("#second .brownsofa");
var mainpinkSofa = document.getElementById("main_pink_sofa_chair");
var mainyellowSofa = document.getElementById("main_yellow_sofa_chair");
var mainbrownSofa = document.getElementById("main_brown_sofa_chair");
var boxpinkSofa = document.getElementById("second_pink_sofa_chair");
var boxyellowSofa = document.getElementById("second_yellow_sofa_chair");
var boxbrownSofa = document.getElementById("second_brown_sofa_chair");

//pinksofa
pinksofa.addEventListener('click', function () {
  // Hide all model-viewer elements
  modelViewers.forEach(function (viewer) {
    viewer.style.display = 'none';
    console.log("hii");
  });

  boxModelViewer1.forEach(function (viewers) {
    viewers.style.display = 'none';
  });

  // Show the clicked model-viewer element
  boxpinkSofa.style.display = 'block';
  mainpinkSofa.style.display = 'block';
});
//yellowsofa
yellowsofa.addEventListener('click', function () {
  // Hide all model-viewer elements
  modelViewers.forEach(function (viewer) {
    viewer.style.display = 'none';
  });

  boxModelViewer1.forEach(function (viewers) {
    viewers.style.display = 'none';
  });

  // Show the clicked model-viewer element
  boxyellowSofa.style.display = 'block';
  mainyellowSofa.style.display = 'block';
});
//brownsofa
brownsofa.addEventListener('click', function () {
  // Hide all model-viewer elements
  modelViewers.forEach(function (viewer) {
    viewer.style.display = 'none';
  });

  boxModelViewer1.forEach(function (viewers) {
    viewers.style.display = 'none';
  });

  // Show the clicked model-viewer element
  boxbrownSofa.style.display = 'block';
  mainbrownSofa.style.display = 'block';
});

//third sofa chair
var boxModelViewer2 = document.querySelectorAll(".info .third_sofa_chair");
var lightpinksofa = document.querySelector("#third .lightpinksofa");
var lightbluesofa = document.querySelector("#third .lightbluesofa");
var peacocksofa = document.querySelector("#third .peacocksofa");
var mainlightpinkSofa = document.getElementById("main_lightpink_sofa_chair");
var mainlightblueSofa = document.getElementById("main_lightblue_sofa_chair");
var mainpeacockSofa = document.getElementById("main_peacock_sofa_chair");
var boxlightpinkSofa = document.getElementById("third_lightpink_sofa_chair");
var boxlightblueSofa = document.getElementById("third_lightblue_sofa_chair");
var boxpeacockSofa = document.getElementById("third_peacock_sofa_chair");

//lightpinksofa
lightpinksofa.addEventListener('click', function () {
  // Hide all model-viewer elements
  modelViewers.forEach(function (viewer) {
    viewer.style.display = 'none';
  });

  boxModelViewer2.forEach(function (viewers) {
    viewers.style.display = 'none';
  });

  // Show the clicked model-viewer element
  boxlightpinkSofa.style.display = 'block';
  mainlightpinkSofa.style.display = 'block';
});
//lightbluesofa
lightbluesofa.addEventListener('click', function () {
  // Hide all model-viewer elements
  modelViewers.forEach(function (viewer) {
    viewer.style.display = 'none';
  });

  boxModelViewer2.forEach(function (viewers) {
    viewers.style.display = 'none';
  });

  // Show the clicked model-viewer element
  boxlightblueSofa.style.display = 'block';
  mainlightblueSofa.style.display = 'block';
});
//peacocksofa
peacocksofa.addEventListener('click', function () {
  // Hide all model-viewer elements
  modelViewers.forEach(function (viewer) {
    viewer.style.display = 'none';
  });

  boxModelViewer2.forEach(function (viewers) {
    viewers.style.display = 'none';
  });

  // Show the clicked model-viewer element
  boxpeacockSofa.style.display = 'block';
  mainpeacockSofa.style.display = 'block';
});


//forth sofa chair
var boxModelViewer3 = document.querySelectorAll(".info .forth_sofa_chair");
var darkpinksofa = document.querySelector("#forth .darkpinksofa");
var greysofa = document.querySelector("#forth .grey");
var greensofa = document.querySelector("#forth .green");
var maindarkpinkSofa = document.getElementById("main_darkpink_sofa_chair");
var maingreySofa = document.getElementById("main_grey_sofa_chair");
var maingreenSofa = document.getElementById("main_green_sofa_chair");
var boxdarkpinkSofa = document.getElementById("forth_darkpink_sofa_chair");
var boxgreySofa = document.getElementById("forth_grey_sofa_chair");
var boxgreenSofa = document.getElementById("forth_green_sofa_chair");

//darkpinksofa
darkpinksofa.addEventListener('click', function () {
  // Hide all model-viewer elements
  modelViewers.forEach(function (viewer) {
    viewer.style.display = 'none';
  });

  boxModelViewer3.forEach(function (viewers) {
    viewers.style.display = 'none';
  });

  // Show the clicked model-viewer element
  boxdarkpinkSofa.style.display = 'block';
  maindarkpinkSofa.style.display = 'block';
});
//greysofa
greysofa.addEventListener('click', function () {
  // Hide all model-viewer elements
  modelViewers.forEach(function (viewer) {
    viewer.style.display = 'none';
  });

  boxModelViewer3.forEach(function (viewers) {
    viewers.style.display = 'none';
  });

  // Show the clicked model-viewer element
  boxgreySofa.style.display = 'block';
  maingreySofa.style.display = 'block';
});
//greensofa
greensofa.addEventListener('click', function () {
  // Hide all model-viewer elements
  modelViewers.forEach(function (viewer) {
    viewer.style.display = 'none';
  });

  boxModelViewer3.forEach(function (viewers) {
    viewers.style.display = 'none';
  });

  // Show the clicked model-viewer element
  boxgreenSofa.style.display = 'block';
  maingreenSofa.style.display = 'block';
});


//fifth sofa chair
var boxModelViewer4 = document.querySelectorAll(".info .fifth_sofa_chair");
var black1sofa = document.querySelector("#fifth .black");
var yellow1sofa = document.querySelector("#fifth .yellow");
var mainblack1Sofa = document.getElementById("main_black1_sofa_chair");
var mainyellow1Sofa = document.getElementById("main_yellow1_sofa_chair");
var boxblack1Sofa = document.getElementById("fifth_black_sofa_chair");
var boxyellow1Sofa = document.getElementById("fifth_yello_sofa_chair");

//darkpinksofa
black1sofa.addEventListener('click', function () {
  // Hide all model-viewer elements
  modelViewers.forEach(function (viewer) {
    viewer.style.display = 'none';
  });

  boxModelViewer4.forEach(function (viewers) {
    viewers.style.display = 'none';
  });

  // Show the clicked model-viewer element
  boxblack1Sofa.style.display = 'block';
  mainblack1Sofa.style.display = 'block';
});
//greysofa
yellow1sofa.addEventListener('click', function () {
  // Hide all model-viewer elements
  modelViewers.forEach(function (viewer) {
    viewer.style.display = 'none';
  });

  boxModelViewer4.forEach(function (viewers) {
    viewers.style.display = 'none';
  });

  // Show the clicked model-viewer element
  boxyellow1Sofa.style.display = 'block';
  mainyellow1Sofa.style.display = 'block';
});

















