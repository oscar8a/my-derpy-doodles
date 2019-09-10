class UserList {
    //This class handles the users
    constructor() {
        this.createUserList();
    }

    //Create/Populate the User List Div
    createUserList() {
        const userDiv = document.getElementById('users-div');
        userDiv.innerHTML = '';
        this.userUl = document.createElement('ul');

        fetch('http://localhost:3000/doodleusers')
            .then(resp => resp.json())
            .then(usersData => {
                usersData.forEach(user => {
                    const userLi = document.createElement('li')
                    userLi.innerText = `${user.name}`
                    this.userUl.appendChild(userLi)
                });
            })

        console.log('%c Fetch of Users Completed...', 'color:green')
        console.log(userDiv)
        userDiv.append(this.userUl)
    }
}