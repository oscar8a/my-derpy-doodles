class DrawDoodle{
    constructor(){
        // setting up the canvas element
        this.doodleCanvas = document.createElement("canvas");
        this.doodleCanvas.setAttribute("width", 600);
        this.doodleCanvas.setAttribute("height", 400);
        this.doodleCanvas.setAttribute("id", "doodle-canvas-element");
        this.doodleCanvas.setAttribute("style", "border:5px solid #d3d3d3; background-color:white");

        // mouse event listeners
        this.context = this.doodleCanvas.getContext("2d");
        this.doodleCanvas.addEventListener("mousedown", this.mouseIsDown.bind(this));
        this.doodleCanvas.addEventListener("mousemove", this.mouseIsMoving.bind(this));
        this.doodleCanvas.addEventListener("mouseup", this.mouseIsUp.bind(this));
        this.doodleCanvas.addEventListener("mouseleave", this.mouseIsLeaving.bind(this));


        this.canvasDIV = document.getElementById("draw-image");
        this.canvasDIV.setAttribute("class", "derpy-div");
        this.canvasDIV.append(this.doodleCanvas);
        
        // mouse defaults events
        this.mousePressed = false;
        this.mouseY;
        this.mouseX;

        // drawing variables
        this.lineThickness = 10;
        this.lineColor  = "red";

        // COLOR SELECTOR
        this.colorMenuDiv = document.querySelector(".grid-colorpicker-container");
        this.currentColorSpan = document.querySelector(".current-color");
        this.redButton=document.getElementById("redbutton");
        this.blueButton= document.getElementById("bluebutton");
        this.greenButton=document.getElementById("greenbutton");
        this.addColorEvents();
        
    }

    mouseIsDown(event){
        this.mousePressed = true;
        this.draw(event.pageX - this.doodleCanvas.offsetLeft, event.pageY - this.doodleCanvas.offsetTop, this.doodleCanvas.getContext("2d"), false);

    }

    mouseIsMoving(event){
        if(this.mousePressed ){
            this.draw(event.pageX - this.doodleCanvas.offsetLeft, event.pageY - this.doodleCanvas.offsetTop, this.doodleCanvas.getContext("2d"), true);
        }
    }

    mouseIsUp(event){
        this.mousePressed = false;
    }

    mouseIsLeaving(event){
        this.mousePressed = false;
    }



    draw(xLoc, yLoc, doodleCanvas, isDown){

        if(isDown){
            this.lineThickness = document.getElementById("doodle-controller").dataset.weight;
            this.lineColor=document.querySelector(".current-color").dataset.id;

            doodleCanvas.beginPath();
            doodleCanvas.strokeStyle = this.lineColor; // can set color
            doodleCanvas.lineWidth = this.lineThickness; // can set width
            doodleCanvas.lineJoin = "round";
            doodleCanvas.moveTo(this.mouseX, this.mouseY);
            doodleCanvas.lineTo(xLoc, yLoc);
            doodleCanvas.closePath();
            doodleCanvas.stroke();
        }

        this.mouseX = xLoc;
        this.mouseY = yLoc;
    }

    addColorEvents(){
        
        this.redButton.style="color:red;"
        this.blueButton.style="color:blue;"
        this.greenButton.style="color:green;"
        
        this.redButton.addEventListener("click", this.updateColor.bind(this));
        this.blueButton.addEventListener("click", this.updateColor.bind(this));
        this.greenButton.addEventListener("click", this.updateColor.bind(this));
    }
    
    updateColor(event){
        this.currentColorSpan.style = `color:${event.target.dataset.id}`;
        this.currentColorSpan.setAttribute("data-id", `${event.target.dataset.id}`);
    }
    


}


