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
        const theDoodleData = data.image;

        const doodleImgDIV = document.createElement("div");
        
        const doodleIMG = document.createElement('img');
        doodleIMG.setAttribute("class", "thumbnail-img");
        doodleIMG.setAttribute("src", decodeURIComponent(theDoodleData));
        
        doodleIMG.addEventListener("click", event =>{
            // THIS SHIT IS BROKEN NEED TO FIX
            event.preventDefault();
            const popupDiv = document.createElement("div");
            const popupSpan = document.createElement("span");
            const popupIMG = document.createElement("img");
            
            popupIMG.setAttribute("src", decodeURIComponent(event.target.src));

            popupDiv.append(popupIMG);
            popupDiv.setAttribute("class", "popup-window");
            popupDiv.style.display ="block";

            event.target.append(popupDiv);
            
            


            
        })
        
        
        

        // const doodleImgDIV = document.createElement("div");
        // doodleImgDIV.innerHTML=`
        //     <div id="myModal" class="modal">
        //         <span class="close">&times;</span>
        //         <img class="modal-content" id="img01">
                
        //     </div>
        // `

        //.innerHTML = `<img src=${decodeURIComponent(theDoodleData)}>`
        document.querySelector('#user-doodle-list').appendChild(doodleIMG);

        
    }



}