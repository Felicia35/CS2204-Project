window.onload = init;
var myMenu = initMenu();
var thisAd = 0;
function init(){
  thisAd++;
  if (thisAd == myMenu.length){
    thisAd = 0;
  }
  document.getElementById("adBanner").src = myMenu[thisAd].imagefile;
  document.getElementById("des").innerHTML = myMenu[thisAd].description;
  document.getElementById("type1").innerHTML = myMenu[thisAd].nutrition[0].type;
  document.getElementById("per1").innerHTML = myMenu[thisAd].nutrition[0].percentage;
  document.getElementById("type2").innerHTML = myMenu[thisAd].nutrition[1].type;
  document.getElementById("per2").innerHTML = myMenu[thisAd].nutrition[1].percentage;
  document.getElementById("type3").innerHTML = myMenu[thisAd].nutrition[2].type;
  document.getElementById("per3").innerHTML = myMenu[thisAd].nutrition[2].percentage;
  document.getElementById("type4").innerHTML = myMenu[thisAd].nutrition[3].type;
  document.getElementById("per4").innerHTML = myMenu[thisAd].nutrition[3].percentage;
  document.getElementById("per5").innerHTML = myMenu[thisAd].nutrition[0].percentage + myMenu[thisAd].nutrition[1].percentage + myMenu[thisAd].nutrition[2].percentage + myMenu[thisAd].nutrition[3].percentage;
  setTimeout("init()",12000);
}
function initMenu() {
  return [
    {"description":"Buccellator",
      "nutrition":[
        {"type":"Carbohydrate", "percentage":20},
        {"type":"Protein", "percentage":7},
        {"type":"Fat", "percentage":25},
        {"type":"Cholesterol", "percentage":0},
      ],
      "imagefile":"Buccellator.jpg",
      "price":128
    },

    {"description":"Strawberry",
      "nutrition":[
        {"type":"Carbohydrate", "percentage":15},
        {"type":"Protein", "percentage":10},
        {"type":"Fat", "percentage":30},
        {"type":"Cholesterol", "percentage":20},
      ],
      "imagefile":"Strawberry.jpg",
      "price":233
    },

    {"description":"French Cruller",
      "nutrition":[
        {"type":"Carbohydrate", "percentage":40},
        {"type":"Protein", "percentage":5},
        {"type":"Fat", "percentage":25},
        {"type":"Cholesterol", "percentage":10},
      ],
      "imagefile":"FrenchCruller.jpg",
      "price":25
    },

    {"description":"Pound Layer",
      "nutrition":[
        {"type":"Carbohydrate", "percentage":25},
        {"type":"Protein", "percentage":10},
        {"type":"Fat", "percentage":30},
        {"type":"Cholesterol", "percentage":5},
      ],
      "imagefile":"PoundLayer.jpg",
      "price":215
    },
  ]
  }
