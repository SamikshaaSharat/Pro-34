//Create variables here
var  dog_img , happyDog , databse , foodS , foodStock;

function preload()
{
  //load images here
  dog_img  = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");


}

function setup() {
  database = firebase.database();
  createCanvas(800, 700);
  dog =  createSprite(400,400,20,40);
  dog.addImage(dog_img);
  

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);


  
}


function draw() { 
  background(46,139,87); 
  




  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  dog.display();
  drawSprites();
  //add styles here
  text(" Press up arrown to feed drago milk  " , 500,100);
  textSize(35);
fill("255");

}

function readStock(data){
      food=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({

  })
}
















