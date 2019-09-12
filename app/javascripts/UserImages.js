class UserImages {
    constructor(args) {
        console.log("In UserImages Object...")

        document.querySelector(".item3").style.display = 'block'; //Draw Image shows
        document.querySelector('#main').style.display = 'none'; //User login goes away
        document.querySelector('#users-div').style.display = 'none'; // User list goes away
        document.querySelector('#user-doodle-list').style.display = 'block'; // show user doodle list

        console.log("Calling showUserImages...")
        this.showUserImages(args);
    }

    showUserImages(id) {
        console.log("calling showUserImages using ID:")
        console.log(id)

        console.log("Fetching Images...")
        fetch(`http://localhost:3000/doodleusers/${id}`)
            .then(resp => resp.json())
            .then(doodleUserData => {
                console.log('Data fetched below...')
                console.log(doodleUserData)

                let doodleList = document.querySelector('#user-doodle-list')
                doodleList.innerHTML = `<h2 id="username-header" data-userid=${id}> ${doodleUserData.data.attributes.name} </h2>`

                const doodleArr = doodleUserData.data.attributes.doodleimages;
                console.log(doodleArr)

                doodleArr.forEach(doodle => {
                    console.log(doodle)
                    this.slapImgToDOM(doodle)
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    slapImgToDOM(data) {
        console.log(`In the slapImgtoDOM for ${data.title}`);
        document.querySelector('#user-doodle-list').innerHTML += `<h3>${data.title}</h3>`;
        console.log(data.image)
        const theDoodleData = data.image;

        const doodleDiv = document.createElement('img')
        doodleDiv.setAttribute("src", decodeURIComponent(theDoodleData));

        //.innerHTML = `<img src=${decodeURIComponent(theDoodleData)}>`
        document.querySelector('#user-doodle-list').appendChild(doodleDiv);
    }
}