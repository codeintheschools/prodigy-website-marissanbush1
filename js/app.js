//Problem: User when clickingon image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//An image to overlay
$overlay.append($image);

  //a caption
$overlay.append($caption);

//add overlay
$("body").append($overlay);

//Capturethe click event on alink to an image
$(".imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
    //update overlay with the image linked in the link
  $image.attr("src", imageLocation);
    
  //Show the overlay
  $overlay.show();
  
  //Get child's altattribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
  
});
//when overlay is clicked
$overlay.click(function() {
    //hide overlay
  $overlay.hide();
});

$(document).ready(function(){
	$(".social-icon").hover(function(){
		$(".social-icon").animate({left:'250px'})
		$(".social-icon").animate({left:'5px'})
	})
})

/* 1) Hide spoiler*/
$(".spoiler").hide();
/* 2) Add a button*/
$(".spoiler").append("<button>Reveal Navigation!</button>")
/* 3) When button pressed*/
$("button").click(function() {
/*  3.1) Show Spoiler next to the button clicked*/
  $(this).prev().show();
/*  3.2) Get rid of button*/
  $(this).remove();
});

alert("You've come to the right place!");