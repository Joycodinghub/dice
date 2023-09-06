var load = document.querySelector(".button");
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

var folderPath = "images";
var imageNames = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

function loadRandomImages(){
    var shuffledImages = shuffleArray(imageNames);

    image1.src= folderPath+"/" + shuffledImages[0];
    image2.src= folderPath+"/" + shuffledImages[1];
}

function shuffleArray(imageNames){
    for(let i=imageNames.length-1;i>0;i--){
        var j = Math.floor(Math.random()*(i+1));

        [imageNames[i],imageNames[j]]=[imageNames[j],imageNames[i]];
    }
    return imageNames;
}

load.addEventListener("click",loadRandomImages);

