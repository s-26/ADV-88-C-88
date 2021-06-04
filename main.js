var canvas=new fabric.Canvas("my_canvas");
player_x=10;
player_y=10;
block_width=30;
block_height=30;
var player_object="";
var block_object="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){    
    block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);});
    }
window.addEventListener("keydown",key_down);
function key_down(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true&&keyPressed=="80"){
        console.log("shift and p pressed together");
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(e.shiftKey==true&&keyPressed=="77"){
        console.log("shift and m pressed together");
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(keyPressed=="40"){
        Down()
        console.log("down");
    }
    if(keyPressed=="38"){
        Up()
        console.log("up");
    }
    if(keyPressed=="37"){
        Left()
        console.log("left");
    }
    if(keyPressed=="39"){
        Right()
        console.log("right");
    }
    if(keyPressed=="82"){
        new_image("thor_right_hand.png");
        console.log("r");
    }
    if(keyPressed=="83"){
        new_image("spiderman_body.png");
        console.log("s");
    }
    if(keyPressed=="72"){
        new_image("hulk_body.png");
        console.log("h");
    }
    if(keyPressed=="73"){
        new_image("ironman_face.png");
        console.log("i");
    }
    if(keyPressed=="67"){
        new_image("captain_america_left_hand.png");
        console.log("c");
    }
    }
function Up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        console.log("block_image_height"+block_height);
        console.log("when_up_arrow_key_pressed,X= "+player_x+",y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function Down(){
    if(player_y<=700){
        player_y=player_x+block_height;
        console.log("block_image_height"+block_height);
        console.log("when_down_arrow_key_pressed,X= "+player_x+",y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function Left(){
    if(player_x>0){
        player_x=player_x-block_width;
        console.log("block_image_width"+block_width);
        console.log("when_left_arrow_key_pressed,X= "+player_x+",y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function Right(){
    if(player_x<=850){
        player_x=player_x+block_width;
        console.log("block_image_height"+block_width);
        console.log("when_up_arrow_key_pressed,X= "+player_x+",y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}