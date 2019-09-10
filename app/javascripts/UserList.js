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

        fetch('http://localhost:3000/doodleusers')
            .then(resp => resp.json())
            .then(usersData => {
                console.log(usersData.data)
                usersData.data.forEach(user => {
                    const userLi = document.createElement('div')
                    userLi.innerHTML = `<button class='user-button'>${user.attributes.name}</button>`
                    userLi.setAttribute('data-id', user.id)
                        //userLi.setAttribute('class', 'user-button')
                    this.userUl.appendChild(userLi)
                });

                function getFetchData() {
                    return usersData.data
                }
            })

        console.log('%c Fetch of Users Completed...', 'color:green')
        console.log(userDiv)
        userDiv.append(this.userUl)

        this.userUl.addEventListener('click', (e) => {
            console.log(e)
            if (e.target.className === 'user-button') {
                new UserImages(e.target.parentNode.dataset.id);
            }
        });
    }
}