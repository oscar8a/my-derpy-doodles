class UserLogin {
    //Login Class 
    constructor(args) {
        document.querySelector('#main').style.display = 'block'; // show login
        document.querySelector('#users-div').style.display = 'block'; // show users
        document.querySelector('#user-doodle-list').style.display = 'none'; // hide User Doodle Images Result
        document.querySelector(".item3").style.display = "none" // draw image not showing

        console.log("UserLogin Constructor Called.")

        this.formElement = document.querySelector("#login-form")
        this.formElement.addEventListener("submit", this.onFormSubmit);
        console.log(this.formElement);
        new UserList();
    }

    //this function fixes the piling event listeners from submit
    removeFormEventListener = () => {
        this.formElement.removeEventListener("submit", this.onFormSubmit);
    }

    //Function with fetch to create/post new user
    onFormSubmit = (event) => {
        event.preventDefault();
        console.log("onFormSubmit / FORM SUBMITTED")
            //console.log(event)
        this.removeFormEventListener();
        let usernameValue = event.target.querySelector('input').value
            //console.log(usernameValue)

        fetch('http://localhost:3000/doodleusers', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: usernameValue
                })
            })
            .then(response => response.json())
            .then(function(json) {
                //console.log(JSON.stringify(json));
                console.log(json);
                console.log('%c Database has been Updated with New User', 'color:green')
                    //new UserList(); We can call User List to show after the submit
                new UserImages(json.id);
            })
            .catch(e => {
                debugger
                console.log(e);
            });
    }
}