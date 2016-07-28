//COLUMNS
var possibleColors = ["#1D00FF", "#951395", "#F6005A", "#FFDF00", "#E80988"];
var possibleShapes = ["block1", "block2", "block3", "block4", "block5"];
var possibleRotations = ["0", "90", "180", "270"];
var $blockplayground = $("#blockplayground");

var p = 0;
var i = 0;

function newBlock() {
  randomShape = possibleShapes[Math.floor(Math.random() * possibleShapes.length)];
  randomX = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
  randomZ = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  newX = randomX * 30;
  randomColor = possibleColors[Math.floor(Math.random() * possibleColors.length)];
  randomRotation = possibleRotations[Math.floor(Math.random() * possibleRotations.length)];
  
  originalBlock = $("." + randomShape, $blockplayground)[0];  
  var clone = originalBlock.cloneNode(true);
  clone.id = "vertLine " + ++i;
  originalBlock.parentNode.appendChild(clone);
  $(clone).find(".blockpixel").css("background", randomColor);
  $(clone)
    .css('left', newX + 'px')
    .css('z-index', randomZ)
    .css('transform', 'rotate(-' + randomRotation + 'deg)')
    .animate({
      top: "120%"
    }, {
      duration: 11000,
      specialEasing: {
        top: "linear",
      }
    });
}

function makeBlocks() {
  var interval = setInterval(function() {
    newBlock();
    p += 1;
    if (p == 100000) clearInterval(interval);
  }, 1000);  
}

makeBlocks();
