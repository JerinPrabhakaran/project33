class Snow{
    constructor(x, y ,width ,height){
        var options={
            isStatic : true,
            restitution : 0.5,
            friction :0.1,
            density :0.001
        }
        this.width = width;
        this.height = height;
        this.body1 = Bodies.rectangle(10,y-100,this.width ,this.height,options);
        this.body2 = Bodies.rectangle(110,y-500,this.width ,this.height,options);
        this.body3 = Bodies.rectangle(220,y,this.width ,this.height,options);
        this.body4 = Bodies.rectangle(300,y-600,this.width ,this.height,options);
        this.body5 = Bodies.rectangle(400,y-780,this.width ,this.height,options);
        this.body6 = Bodies.rectangle(500,y-240,this.width ,this.height,options);
        this.body7 = Bodies.rectangle(600,y-590,this.width ,this.height,options);
        this.body8 = Bodies.rectangle(700,y-620,this.width ,this.height,options);
        this.body9 = Bodies.rectangle(800,y-300,this.width ,this.height,options);
        this.body10= Bodies.rectangle(900,y-100,this.width ,this.height,options);
        this.image1 = loadImage("snow4.webp");
        this.image2 = loadImage("snow5.webp");
        this.image3 = loadImage("snow4.webp");
        this.image4 = loadImage("snow5.webp");
        this.image5 = loadImage("snow4.webp");
        this.image6 = loadImage("snow5.webp");
        this.image7 = loadImage("snow4.webp");
        this.image8 = loadImage("snow5.webp");
        this.image9 = loadImage("snow4.webp");
        this.image10 = loadImage("snow5.webp");
        World.add(world ,this.body1);
        World.add(world ,this.body2);
        World.add(world ,this.body3);
        World.add(world ,this.body4);
        World.add(world ,this.body5);
        World.add(world ,this.body6);
        World.add(world ,this.body7);
        World.add(world ,this.body8);
        World.add(world ,this.body9);
        World.add(world ,this.body10);
    }
    display(){
        var pos1 = this.body1.position;
        var pos2 = this.body2.position;
        var pos3 = this.body3.position;
        var pos4 = this.body4.position;
        var pos5 = this.body5.position;
        var pos6 = this.body6.position;
        var pos7 = this.body7.position;
        var pos8 = this.body8.position;
        var pos9 = this.body9.position;
        var pos10 = this.body10.position;
       //rect(pos1.x ,pos1.y ,this.width ,this.height);
       image(this.image1 ,pos1.x ,pos1.y ,50 ,50);
       //rect(pos2.x ,pos2.y ,this.width ,this.height);
       image(this.image2 ,pos2.x ,pos2.y ,50 ,50);
       //rect(pos3.x ,pos3.y ,this.width ,this.height);
       image(this.image3 ,pos3.x ,pos3.y ,50 ,50);
       //rect(pos4.x ,pos4.y ,this.width ,this.height);
       image(this.image4 ,pos4.x ,pos4.y ,50 ,50);
       //rect(pos5.x ,pos5.y ,this.width ,this.height);
       image(this.image5 ,pos5.x ,pos5.y ,50 ,50);
       //rect(pos6.x ,pos6.y ,this.width ,this.height);
       image(this.image6 ,pos6.x ,pos6.y ,50 ,50);
       //rect(pos7.x ,pos7.y ,this.width ,this.height);
       image(this.image7 ,pos7.x ,pos7.y ,50 ,50);
       //rect(pos8.x ,pos8.y ,this.width ,this.height);
       image(this.image8 ,pos8.x ,pos8.y ,50 ,50);
       //rect(pos9.x ,pos9.y ,this.width ,this.height);
       image(this.image9 ,pos9.x ,pos9.y ,50 ,50);
       //rect(pos10.x ,pos10.y ,this.width ,this.height);
       image(this.image10 ,pos10.x ,pos10.y ,50 ,50);
        
    }
    fall(){
        Matter.Body.setStatic(this.body1, false);
        Matter.Body.setStatic(this.body2, false);
        Matter.Body.setStatic(this.body3, false);
        Matter.Body.setStatic(this.body4, false);
        Matter.Body.setStatic(this.body5, false);
        Matter.Body.setStatic(this.body6, false);
        Matter.Body.setStatic(this.body7, false);
        Matter.Body.setStatic(this.body8, false);
        Matter.Body.setStatic(this.body9, false);
        Matter.Body.setStatic(this.body10, false);
    }
}