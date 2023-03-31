canvas = document.getElementById("myCanvas");

ctx=canvas.getcontext("2d");

greencar_width=75;
greencar_height=100;

greencar_x=5;
greencar_y=225;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	background_image=new Image();
	background_imgTag.onlode=parkinglot.jpg;
    background_imgtag.src=background_image;

	greencar_imgTag=new Image();
	greencar_imgTag.onlode=uploadgreencar;
	greencar_imgTag.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}

function greencar() {
	ctx.drawimage(green_imgTag.greencar_x,greencar_y,greencar_width,greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y>=500){
		greencar_y-=10;
		console.log("when up arrow is pressed = "+greencar_x+"-"+greencar_y);
		uplodeparkinglot.jpg();
		uploadcar2.png();
	}
}

function down()
{
	if(greencar_y<=500){
		greencar_y-=10;
		console.log("when down arrow is pressed = "+greencar_x+"-"+greencar_y);
		uplodeparkinglot.jpg();
		uploadcar2.png();
	}
}

function left()
{
	if(greencar_y>=0){
		greencar_y-=10;
		console.log("when left arrow is pressed = "+greencar_x+"-"+greencar_y);
		uplodeparkinglot.jpg();
		uploadcar2.png();
	}
}

function right()
{
	if(greencar_y<=700){
		greencar_y-=10;
		console.log("when right arrow is pressed = "+greencar_x+"-"+greencar_y);
		uplodeparkinglot.jpg();
		uploadcar2.png();
	}
}
