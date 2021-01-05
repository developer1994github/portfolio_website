

$(document).ready(function(){
  // HEADER
  var h1 = $("<h1></h1>").text("Software Developer");
  var h6 = $("<h6></h6>").text("pgldaly@gmail.com");
  $("body").append(h1, h6);
  $(":header").css("background-color","green");
  $(":header").css("color","white");

  // INTRO
  var p = $("<p></p>").text("Hello, my name is Patrick Glen Louis Daly. I am a software developer.")
  $("body").append(p);
  $("p").css("background-color","green");
  $("p").css("color","white");

  // SHOWCASE
  var img = $("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'>");
  $("body").append(img);
});
