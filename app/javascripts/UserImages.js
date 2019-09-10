class UserImages {
    constructor(args) {
        console.log("created UserImages Object...")
        const main = document.getElementById('main').innerHTML = '',
            userDiv = document.getElementById('users-div').innerHTML = '';
        document.getElementById('drawImage').innerHTML = '';
        this.showUserImages(args);
    }

    showUserImages(id) {
        console.log("Fetching Images...")
        console.log(id)




        // fetch('http://localhost:3000/doodleimages')
        //     .then(resp => resp.json())
        //     .then(imageData => {
        //         imageData.forEach(image => {
        //             console.log(image)
        //         });
        //         console.log('Images have been fetched...')
        //     })
    }
}