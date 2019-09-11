class DoodleController {
    constructor() {
            this.doodleDIV = document.getElementById("draw-image");
            this.doodleControllerDIV = document.createElement("div");
            this.doodleForm = document.getElementById("form-image")
            this.thickLineButton = document.createElement("a");
            this.thinLineButton = document.createElement("a");
            this.saveButton = document.getElementById("doodle-save");
            this.lineThickness = 10;
            this.imageURL = "http://localhost:3000/doodleimages/";

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
            this.saveButton.addEventListener("click", this.saveImage.bind(this));

            // add instructions and buttons to div
            this.makeMyLines = document.createElement("span");
            this.makeMyLines.innerHTML = `
        <strong> Make my lines: </strong>
        `;

            this.doodleControllerDIV.append(this.makeMyLines);
            this.doodleControllerDIV.append(this.thickLineButton);
            this.doodleControllerDIV.append(this.thinLineButton);
            // tracker for line thickness held in dataset
            this.doodleControllerDIV.setAttribute("data-weight", 10);
            this.doodleControllerDIV.setAttribute("id", "doodle-controller");
      
        // TOGGLE DISPLAYING DOODLE CREATION TOOLS
        //this.doodleDisplayDIV = document.getElementsByClassName("item3");
        //this.doodleDisplayDIV.style = "visibility: visible"; // or "visible/hidden"


            // add to DOM
            this.doodleDIV.append(this.doodleControllerDIV);
    }  // END CONSTRUCTOR

    makeLineThick(event) {
        event.preventDefault();
        console.log("made CHONKY!")
        this.doodleControllerDIV.dataset.weight = 25;
    }

    makeLineThin(event) {
        event.preventDefault();
        console.log("made Wee-Little");
        this.doodleControllerDIV.dataset.weight = 10;
    }

    saveImage(event) {
        event.preventDefault();
        const saveImageTitle = document.getElementById("doodle-title").value;
        const saveImageComment = document.getElementById("doodle-comment").value;
        
        // GET USER ID
        const userID = document.getElementById("username-header").dataset.userid;
        
        // CREATE IMAGE FILE OF DOODLE
        const currentCanvas = document.getElementById("doodle-canvas-element");
        const saveimageinfo = currentCanvas.toDataURL();

        console.log("sending fetch request to save");
        
        
        fetch(this.imageURL,{
            method: "POST",
            headers:{
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                doodleuser_id: userID,
                title: saveImageTitle,
                message: saveImageComment,
                image: saveimageinfo
            })
        })
        .then(response => response.json())
        .then(this.imageSubmitted);

        // this.testImage = document.createElement("img");
        // this.testImage.setAttribute("src", decodeURIComponent(saveImageInfo));
        
    }

    imageSubmitted(imageData){
        // CLEAR CANVAS
        const doodleCanvas = document.getElementById("doodle-canvas-element").getContext("2d");
        doodleCanvas.setTransform(1, 0, 0, 1, 0, 0);
        doodleCanvas.clearRect(0, 0, 600, 400);

        // CLEAR FORM
        document.getElementById("form-image").reset();
        
        
    }
    



}