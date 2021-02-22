var lastIndex = 0;
        
function randomImage() {
  var theImage = document.getElementById('myimage');
  var imgDir = 'images/';
  var imgArray = new Array('allstarSuperman.jpg','batGirl.jpg','batmanBeyond.jpg','batmanBW.jpg','batmanGrey.jpg', 'batmanJump.jpg','batmanPurple.jpg','batmanVsuperman.jpg', 'catwoman.jpg','compositeSuperman.jpg',
  'dailyPlanet.jpg', 'damienWayne.jpg','deathstroke.jpg','deathstrokeTwo.jpg','flash.jpg','goldsuitWW.jpg', 'jokerCard.jpg','raven.jpg','redHood.jpg', 'redhoodTwo.jpg','supermanBW.jpg');
  var imgIndex = 0;
  
  if(imgArray.length > 1) {
    while(imgIndex == lastIndex) {
      imgIndex = Math.floor(Math.random() * imgArray.length);
    }
    lastIndex = imgIndex;
  
    var imgPath = imgDir + imgArray[imgIndex];
    
    theImage.src = imgPath;
    theImage.alt = imgArray[imgIndex];
  }
  else {
    return false;
  }
}