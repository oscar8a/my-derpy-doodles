
document.addEventListener("DOMContentLoaded", () =>{

    //After DOM is loaded, we call the Doodle App and User List
    //Doodle App is only showing the Login Page for now
    new DoodleApp();
    new UserList();
    const doodleDrawer = new DrawDoodle();
    const doodleControls = new DoodleController();
    
})