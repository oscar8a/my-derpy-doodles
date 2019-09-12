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
        //debugger
        console.log(`In the slapImgtoDOM for ${data.title}`);
      
        const userDoodleList = document.querySelector('#user-doodle-list'),
            deleteBtn = document.createElement('button'),
            shareBtn = document.createElement('button'),
            doodleBtns = document.createElement('div'),
            doodleImgDIV = document.createElement('div');

        deleteBtn.innerText = 'DELETE'
        deleteBtn.setAttribute('class', 'imgButtons')
        shareBtn.innerText = 'SHARE'
        shareBtn.setAttribute('class', 'imgButtons')
        doodleBtns.addEventListener('click', e => {
            console.log(e)
            if (e.target.innerText === "SHARE") {
                this.shareDoodle(e);
            } else if (e.target.innerText === "DELETE") {
                this.deleteDoodle(e);
            } else(console.log("Not Clicking a button"))
        });

        doodleImgDIV.dataset.doodleDivId = `${data.id}`;

        doodleImgDIV.innerHTML += `<h3>${data.title}</h3>`;
      
        const theDoodleData = data.image;

        const doodleIMG = document.createElement('img');
        doodleIMG.setAttribute("class", "thumbnail-img");
        //doodleIMG.setAttribute("data-imageid", `${data.id}`);
        doodleIMG.setAttribute("src", decodeURIComponent(theDoodleData));

        // doodleIMG.addEventListener("click", event => {
        //     // THIS SHIT IS BROKEN NEED TO FIX
        //     event.preventDefault();
        //     const popupDiv = document.createElement("div");
        //     const popupSpan = document.createElement("span");
        //     const popupIMG = document.createElement("img");

        //     popupIMG.setAttribute("src", decodeURIComponent(event.target.src));

        //     popupDiv.append(popupIMG);
        //     popupDiv.setAttribute("class", "popup-window");
        //     popupDiv.style.display = "block";

        //     event.target.append(popupDiv);

        // })

        // const doodleImgDIV = document.createElement("div");
        // doodleImgDIV.innerHTML=`
        //     <div id="myModal" class="modal">
        //         <span class="close">&times;</span>
        //         <img class="modal-content" id="img01">

        //     </div>
        // `

        //.innerHTML = `<img src=${decodeURIComponent(theDoodleData)}>`

        doodleImgDIV.appendChild(doodleIMG)
        doodleBtns.appendChild(deleteBtn)
        doodleBtns.appendChild(shareBtn)
        doodleImgDIV.appendChild(doodleBtns)
        document.querySelector('#user-doodle-list').appendChild(doodleImgDIV);
    }

    shareDoodle(e) {
        console.log("IN shareDoodle()", e)
    }

    deleteDoodle(e) {
        console.log("IN deleteDoodle()")
        const divId = e.target.parentNode.parentNode.dataset.doodleDivId
        console.log(divId)

        const userId = document.querySelector('#username-header').dataset.userid

        fetch(`http://localhost:3000/doodleimages/${divId}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(console.log('%c Delete Fetch of doodle Completed...', 'color:red'))

        //this.showUserImages(userId)
    }



}