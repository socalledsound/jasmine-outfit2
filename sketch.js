const myCanvas = { width: 600, height: 600};
const backgroundColor = [22, 53, 204];
const numOutfits = 12
let logo;
let jasmine;
let outfits

let currentOutfit = 0
let clothingChosen = false

let leftButtonImg, rightButtonImg
let leftButton = {x: 75, y: 475, w: 200, h : 100}
let rightButton = {x: 325, y: 475, w: 200, h : 100}

function preload() {
    logo = loadImage('assets/cluelesslogo.png');
    jasmine = loadImage('assets/jasmine.png');
    outfits = Array.from({ length: numOutfits}, (el, idx) => {
        return loadImage(`assets/outfit${idx}.png`)
    })

    console.log(outfits)
    // leftButtonImg = loadImage('assets/leftButtonImg.png)

  }


function setup(){
    createCanvas(myCanvas.width, myCanvas.height);
    background(backgroundColor);
}


  function draw(){
    background(backgroundColor);
    image(logo, myCanvas.width/4, -50, myCanvas.height/2, 200)
    if(clothingChosen){
        image(outfits[currentOutfit], 100, 100, 400, 400)
    }else {
        image(jasmine, 100, 100, 400, 400)
    }


    fill(220,0,0)
    rect(leftButton.x, leftButton.y, leftButton.w, leftButton.h)
    rect(rightButton.x, rightButton.y, rightButton.w, rightButton.h)
    

  }

function mousePressed(){
    console.log(mouseX, mouseY)

    if(checkClick(mouseX, mouseY, leftButton)){
        decrementOutfit()
    }
    if(checkClick(mouseX, mouseY, rightButton)){
        
    }
}


  function keyPressed(){
      if(keyCode === LEFT_ARROW){
        decrementOutfit()
      }
      if(keyCode === RIGHT_ARROW){
        console.log('right arrow was pressed')
        currentOutfit++
    }
  }


const decrementOutfit = () => {
    console.log('left arrow was pressed')
    if(!clothingChosen){
        clothingChosen = true
    }else{
        if(currentOutfit > 0){
          currentOutfit--
        } else {
            currentOutfit = outfits.length - 1
        }      
    }
}


function checkClick(mx, my, button){
    if( mx > button.x &&
        mx < button.x + button.w && 
        my > button.y &&
        my < button.y + button.h){
            // the button was clicked
            return true
        } else {
            return false
        }
}

// document.onkeydown = function (e) {
//     console.log(e.key)
//     switch (e.key) {
//         case 'ArrowLeft':
//             // left arrow
//             break;
//         case 'ArrowRight':
//             // right arrow
//     }
// };
