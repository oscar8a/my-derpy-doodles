class UserImages {
    constructor(args) {
        document.querySelector(".item3").style.display = 'block'; //Draw Image shows
        document.querySelector('#main').style.display = 'none'; //User login goes away
        document.querySelector('#users-div').style.display = 'none'; // User list goes away
        document.querySelector('#user-doodle-list').style.display = 'block'; // show user doodle list

        //adding back button
        let backBtn = document.getElementById('back-btn')
        console.log(backBtn)
        backBtn.addEventListener('click', e => {
            console.log("Clicking back button")
            new DoodleApp();
        })

        console.log("created UserImages Object...")
            //document.querySelector('.item2').innerHTML = "";

        console.log("Removing Login Show... Calling showUserImages...")
        this.showUserImages(args);
    }

    showUserImages(id) {
        console.log("Fetching Images...")
        console.log(id)

        fetch(`http://localhost:3000/doodleusers/${id}`)
            .then(resp => resp.json())
            .then(doodleUserData => {
                console.log('Data has been fetched...')
                console.log(doodleUserData)
                document.querySelector('#user-doodle-list').innerHTML = `<h2> ${doodleUserData.data.attributes.name} </h2>`

                const doodleArr = doodleUserData.data.attributes.doodleimages;
                console.log(doodleArr)

                doodleArr.forEach(doodle => {
                    console.log(doodle)
                    this.slapImgToDOM(doodle)
                });
            })
    }

    slapImgToDOM(data) {
        console.log(`In the slapImgtoDOM for ${data.title}`);
        document.querySelector('#user-doodle-list').innerHTML += `<h3>${data.title}</h3>`;
    }
}