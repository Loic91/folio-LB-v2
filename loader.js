$(document).ready(function(){
    var counter = 0;
    var count = 0;
    var i = setInterval(function(){
      $(".loader .loader-counter h1").html(count + "%");
      $(".loader").css("width",count + "%");
      
      counter++;
      count++;
      if(counter == 101){
        clearInterval(i);
      }
    },20);
    });