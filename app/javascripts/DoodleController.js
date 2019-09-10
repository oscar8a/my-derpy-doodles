class DoodleController {
    constructor(){
        this.doodleDIV = document.getElementById("draw-image");
        this.doodleControllerDIV = document.createElement("div");
        this.thickLineButton = document.createElement("a");
        this.thinLineButton = document.createElement("a");
        this.saveButton = document.createElement("a");
        this.lineThickness=10;

        // set button CHONKY
        this.thickLineButton.setAttribute("class", "myButton");
        this.thickLineButton.setAttribute("label", "chonky-button");
        this.thickLineButton.innerText = "CHONKY";
        this.thickLineButton.addEventListener("click", this.makeLineThick.bind(this));

        // set button Wee-Little
        this.thinLineButton.setAttribute("class", "myButton");
        this.thinLineButton.setAttribute("label", "wee-little-button");
        this.thinLineButton.innerText = "wee-little";
        this.thinLineButton.addEventListener("click", this.makeLineThin.bind(this));

        // set SAVE button
        this.saveButton.setAttribute("class", "myButton");
        this.saveButton.setAttribute("label", "save-button");
        this.saveButton.innerText = "SAVE THIS MASTERPIECE";
        this.saveButton.addEventListener("click", this.saveImage.bind(this));

        // add instructions and buttons to div
        this.makeMyLines = document.createElement("span");
        this.makeMyLines.innerText = "Make my lines: ";

        this.doodleControllerDIV.append(this.makeMyLines);
        this.doodleControllerDIV.append(this.thickLineButton);
        this.doodleControllerDIV.append(this.thinLineButton);
        this.doodleControllerDIV.append(this.saveButton);
        // tracker for line thickness held in dataset
        this.doodleControllerDIV.setAttribute("data-weight", 10);
        this.doodleControllerDIV.setAttribute("id", "doodle-controller");


        // add to DOM
        this.doodleDIV.append(this.doodleControllerDIV);

        // TESTING
        this.testDIV = document.createElement("div");
        this.doodleDIV.append(this.testDIV);
        
    }  // END CONSTRUCTOR

    makeLineThick(event){
        event.preventDefault();
        console.log("made CHONKY!")
        this.doodleControllerDIV.dataset.weight = 25;
    }

    makeLineThin(event){
        event.preventDefault();
        console.log("made Wee-Little");
        this.doodleControllerDIV.dataset.weight = 10;
    }

    saveImage(event){
        event.preventDefault();
        const currentCanvas = document.getElementById("doodle-canvas-element");
        const saveImageInfo = currentCanvas.toDataURL();

        console.log("saving", saveImageInfo);

        // fetch request to update
        this.testImage = document.createElement("img");
        this.testImage.setAttribute("src", decodeURIComponent(saveImageInfo));
        this.testDIV.append(this.testImage);
    }



}