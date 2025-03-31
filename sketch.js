let navbar1;
let adbanner2;
let product3;
let gnb4;
let aiicon5;
let green6;
let textbox7;

let state = 0;

function preload(){
  navbar1 = loadImage('1NAVBAR.png');
  adbanner2 = loadImage('2ADBANNER.png');
  product3 = loadImage('3PRODUCT.png');
  gnb4 = loadImage('4GNB.png');
  aiicon5 = loadImage('5AIICON.png');
  green6 = loadImage('6GREEN.png');
  textbox7 = loadImage('7TEXTBOX.png');
  
}

function setup(){
  createCanvas(393,852); // ipone16 size
}

function draw(){
  background(255);
  if(state ==0){ //메인 화면
    image(navbar1, 0, 0, 393, 128);
    image(adbanner2, 0, 128, 393, 284);
    image(product3, 0, 412, 393, 440);
    image(gnb4, 0, 764, 393, 88);
    image(aiicon5, 320, 688, 60, 60);
  }else if(state==1){ // AI 대화모드
    image(navbar1, 0, 0, 393, 128);
    image(adbanner2, 0, 128, 393, 284);
    image(product3, 0, 412, 393, 440);
    image(gnb4, 0, 764, 393, 88);
    image(aiicon5, 320, 688, 60, 60);
    image(green6, 0, 612, 393, 152);
  }
    
}


function mouseClicked(){
  if(mouseX >= 320 && mouseX <=380){
    if(mouseY >=688 && mouseY <=748){
      if(state==0){
        state = 1;
      }else if(state==1){
        state = 0;
      }
    }
  }
}