class UserLogin {
    //Login Class 
    constructor(args) {
        console.log("UserLogin Constructor Called.")
        console.log(args)

        this.formElement = document.querySelector("#login-form")

        this.formElement.addEventListener("submit", this.onFormSubmit)
    }

    //Function with fetch to create/post new user
    onFormSubmit = (event) => {
        event.preventDefault();
        console.log("onFormSubmit / FORM SUBMITTED")

        let usernameValue = event.target.querySelector('input').value
        console.log(usernameValue)

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
            })
            .catch(e => {
                console.log(e);
            });
    }
}