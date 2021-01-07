

$(document).ready(function(){
  // BODY
  $("body").css("font-family","sans-serif");

  // HEADER
  var div_header = $("<div id='div_header'></div>");
  var softDev = $("<h1></h1>").text("Software Developer");
  var name = $("<h3></h3>").text("Patrick Daly");
  var email = $("<h6></h6>").text("pgldaly@gmail.com");
  $("body").append(div_header);
  $("#div_header").append(softDev,name,email);
  $(":header").css("margin","0");
  $("#div_header").css("background-color","green");
  $("#div_header").css("color","white");
  
  // SLIDESHOW
  var slideshow = $("<div id='slideshow'></div>");
  var slide_0 = $("<div id='slide_0' class='slides'></div>");
  var img_0 = $("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'>");
  var slide_1 = $("<div id='slide_0' class='slides'></div>");
  var img_1 = $("<img src='https://wallpaperaccess.com/full/36296.jpg'>");
  $("body").append(slideshow);
  $("#slideshow").append(slide_0);
  $("#slideshow").append(slide_1);
  $("#slide_0").append(img_0);
  $("#slide_0").append(img_1);
  //$("#slideshow").css("")
  $("#slideshow > div:gt(0)").hide();

  setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
  },  3000);


  // INTRO
  var p = $("<p></p>").text("This webpage uses _____")
  $("body").append(p);
  $("p").css("background-color","green");
  $("p").css("color","white");

/*
  // SHOWCASE
  var img = $("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'>");
  $("body").append(img);
  */
});
