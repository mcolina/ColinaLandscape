let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ColinaLandscapeLogo.png') {
	window.location.href = this.id + 'Homepage.html';
	
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


myButton.onclick = function() {
    window.location.href = this.id + 'Homepage.html';
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}


var fname =  document.getElementById("fname");
var lname =  document.getElementById("lname");
var email =  document.getElementById("email");
var sub =  document.getElementById("subject");
var mes =  document.getElementById("message");
var containerC =  document.getElementById("containerContact");

function submit_click(){

    var l1 = fname.value.length;
    var l2 = lname.value.length;
    var l3 = email.value.length;
    var l4 = mes.value.length;

    if (l1 != 0 && l2 != 0 && l3 != 0 && l4 != 0 ){
        
             var alert_text ='Thank you '  + fname.value + '! Your message has been sent successfully! We will get back to you as soon as we can. Thank you.';
        alert(alert_text);
        
    }else {
        
        containerC.stlye.background = "red";
    }
}


var myIndex = 0;
imageSlides();

function imageSlides() {
  var i;
  var x = document.getElementsByClassName("slideshow");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(imageSlides, 3000);
}
