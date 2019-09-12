class UserList {
    //This class handles the users
    constructor() {
        this.createUserList();
    }

    //Create/Populate the User List Div
    createUserList() {
        const userDiv = document.getElementById('users-div');
        userDiv.innerHTML = '';
        this.userUl = document.createElement('div');
        userDiv.append(this.userUl)

        //Fetching Users
        this.fetchUsers();

        //Allows to click user and go to their images
        this.userButtonEventListener();
    }

    callUserImages(event) {
        new UserImages(event);
    }

    userButtonEventListener() {
        this.userUl.addEventListener('click', (e) => {
            console.log(e)
            if (e.target.className === 'user-button') {
                document.querySelector(".menu-item2").setAttribute("data-isloggedin", "true");
                this.callUserImages(e.target.parentNode.dataset.id);
            }
        });
    }

    renderUsers(fetchdata) {
        console.log("RENDER USERS FUNCTION")
        fetchdata.data.forEach(user => {
            const userLi = document.createElement('div')
            userLi.innerHTML = `<button class='user-button'>${user.attributes.name}</button>`
            userLi.setAttribute('data-id', user.id)
            this.userUl.appendChild(userLi)
        });
    }

    fetchUsers() {
        fetch('http://localhost:3000/doodleusers')
            .then(resp => resp.json())
            .then(usersData => {
                this.renderUsers(usersData);
            })
            .catch(e => {
                console.log(e);
            });
        console.log('%c Fetch of Users Completed...', 'color:green')
    }
}