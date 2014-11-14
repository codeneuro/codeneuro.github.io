// var duration = 20; // duration in seconds
// var fadeAmount = 0.3; // fade duration amount relative to the time the image is visible

// $(document).ready(function (){
//   var images = $(".slideshow img");
//   var numImages = images.size();
//   var durationMs = duration * 6000;
//   var imageTime = durationMs / numImages; // time the image is visible 
//   var fadeTime = imageTime * fadeAmount; // time for cross fading
//   var visibleTime = imageTime  - (imageTime * fadeAmount * 2);// time the image is visible with opacity == 1
//   var animDelay = visibleTime * (numImages - 1) + fadeTime * (numImages - 2); // animation delay/offset for a single image 
  
//   images.each( function( index, element ){
//     if(index != 0){
//       $(element).css("opacity","0");
//       setTimeout(function(){
//         doAnimationLoop(element,fadeTime, visibleTime, fadeTime, animDelay);
//       },visibleTime*index + fadeTime*(index-1));
//     }else{
//       setTimeout(function(){
//         $(element).animate({opacity:0},fadeTime, function(){
//           setTimeout(function(){
//             doAnimationLoop(element,fadeTime, visibleTime, fadeTime, animDelay);
//           },animDelay )
//         });
//       },visibleTime);
//     }
//   });
// });

// // creates a animation loop
// function doAnimationLoop(element, fadeInTime, visibleTime, fadeOutTime, pauseTime){
//   fadeInOut(element,fadeInTime, visibleTime, fadeOutTime ,function(){
//     setTimeout(function(){
//       doAnimationLoop(element, fadeInTime, visibleTime, fadeOutTime, pauseTime);
//     },pauseTime);
//   });
// }

// // shorthand for in- and out-fading
// function fadeInOut( element, fadeIn, visible, fadeOut, onComplete){
//   return $(element).animate( {opacity:1}, fadeIn ).delay( visible ).animate( {opacity:0}, fadeOut, onComplete);
// }


var step=0

$("#slide0").fadeIn();

next = document.getElementById("next");
next.onclick = function(){ slideforward();};

prev = document.getElementById("prev");
prev.onclick = function(){ slideback();};

function slideforward(){    
    var oldstep = step
    
    if (step<24)
 	  step++
    else
 	  step=0

    $("#slide" + oldstep).fadeOut(1000,function(){
        $("#slide" + step).fadeIn(1000);
    });
}

function slideback(){
	var oldstep = step

    if (step>0)
      step--
    else
      step=24

    $("#slide" + oldstep).fadeOut(1000,function(){
        $("#slide" + step).fadeIn(1000);
    });
}