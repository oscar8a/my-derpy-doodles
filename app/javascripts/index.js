document.addEventListener("DOMContentLoaded", () => {
    //After DOM is loaded, we call the Doodle App and User List
    //Doodle App is only showing the Login Page for now
    new DoodleApp();
    
    const doodleDrawer = new DrawDoodle();
    const doodleControls = new DoodleController();
    new MenuController();

    let backBtn = document.getElementById('back-btn')
    backBtn.addEventListener('click', e => {
        console.log("Clicking back button")
        new UserLogin
    })
})