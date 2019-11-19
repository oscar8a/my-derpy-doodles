class MenuController{
    constructor(){
        // MAIN MENU BUTTONS
        this.mainMenuButton = document.querySelector(".menu-item1");
        this.newDoodleMenuButton = document.querySelector(".menu-item2");
        this.saveImageButton = document.getElementById("doodle-save");
        
        // SHOW/HIDE ELEMENTS
        this.newUserSignupDIV = document.querySelector("#main");
        this.userListDIV = document.querySelector("#users-div");
        this.imageGallery = document.querySelector("#user-doodle-list");
        this.doodleCreator = document.querySelector(".item3");

        this.mainMenuButton.addEventListener("click", this.goToMainMenu.bind(this));
        this.newDoodleMenuButton.addEventListener("click", this.goToDrawDoodle.bind(this));
        this.saveImageButton.addEventListener("click",this.saveImageAction.bind(this));

    }

    goToMainMenu(event){
        event.preventDefault();
        
        this.newUserSignupDIV.style.display = "block";
        this.userListDIV.style.display = "block";
        this.imageGallery.style.display = "none";
        this.doodleCreator.style.display = "none";

        document.querySelector(".menu-item2").setAttribute("data-isloggedin", "false");
    }

    goToDrawDoodle(event){
        event.preventDefault();

        if(event.target.dataset.isloggedin==="true"){
            this.newUserSignupDIV.style.display = "none";
            this.userListDIV.style.display = "none";
            this.imageGallery.style.display = "block";
            this.doodleCreator.style.display = "block";
        }
            
    }

    saveImageAction(event){
        event.preventDefault();
        // ONLY TRIGGER IF TITLE IS ENTERED
        const saveImageTitle = document.getElementById("doodle-title").value;

        if (saveImageTitle.length > 0) {
             this.newUserSignupDIV.style.display = "none";
            this.userListDIV.style.display = "none";
            this.imageGallery.style.display = "block";
            this.doodleCreator.style.display = "none";
        }
    }


}