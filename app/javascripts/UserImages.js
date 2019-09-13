class UserImages {
    constructor(args) {
        console.log("In UserImages Object... ARGS:" + `${args}`)

        document.querySelector(".item3").style.display = 'block'; //Draw Image shows
        document.querySelector('#main').style.display = 'none'; //User login goes away
        document.querySelector('#users-div').style.display = 'none'; // User list goes away
        document.querySelector('#user-doodle-list').style.display = 'block'; // show user doodle list

        this.showUserImages(args);
    }

    showUserImages(id) {

        console.log("Fetching Images...")
        fetch(`http://localhost:3000/doodleusers/${id}`)
            .then(resp => resp.json())
            .then(doodleUserData => {

                document.querySelector('#user-doodle-list').innerHTML = `<h2 id="username-header" data-userid=${id}> ${doodleUserData.data.attributes.name} </h2>`;

                const doodleArr = doodleUserData.data.attributes.doodleimages;

                doodleArr.forEach(doodle => {
                    this.slapImgToDOM(doodle)
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    slapImgToDOM(data) {
        console.log(`In the slapImgtoDOM for ${data.title}`);

        const userDoodleList = document.querySelector('#user-doodle-list'),
            doodleImgDIV = document.createElement('div'),
            doodleIMG = document.createElement('img'),
            deleteBtn = document.createElement('button'),
            shareBtn = document.createElement('button'),
            doodleBtns = document.createElement('div'),
            theDoodleData = data.image;

        doodleImgDIV.dataset.doodleDivId = `${data.id}`;
        doodleImgDIV.setAttribute('id', 'doodleImgDiv');
        doodleImgDIV.innerHTML += `<h3>${data.title}</h3>`;

        doodleIMG.setAttribute("class", "thumbnail-img");
        doodleIMG.setAttribute("src", decodeURIComponent(theDoodleData));

        deleteBtn.innerText = 'DELETE'
        deleteBtn.setAttribute('class', 'imgButtons')

        shareBtn.innerText = 'SHARE'
        shareBtn.setAttribute('class', 'imgButtons')

        doodleBtns.appendChild(deleteBtn)
        doodleBtns.appendChild(shareBtn)

        doodleImgDIV.appendChild(doodleIMG)
        doodleImgDIV.appendChild(doodleBtns)

        userDoodleList.appendChild(doodleImgDIV);

        doodleBtns.addEventListener('click', e => {
            console.log(e)
            if (e.target.innerText === "SHARE") {
                this.shareDoodle(e);
            } else if (e.target.innerText === "DELETE") {
                this.deleteDoodle(e);
            } else(console.log("Not Clicking a button"))
        });
    }

    shareDoodle(e) {
        console.log("IN shareDoodle()", e)
    }

    deleteDoodle(e) {
        console.log("IN deleteDoodle()")
        console.log(e)
        const divId = e.target.parentNode.parentNode.dataset.doodleDivId

        const userId = document.querySelector('#username-header').dataset.userid
        
        document.querySelector(`[data-doodle-div-id="${divId}"]`).remove();

        fetch(`http://localhost:3000/doodleimages/${divId}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                console.log('%c Delete Fetch of doodle Completed...', 'color:red')

            })
    }
}