const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

// The getData function of axios which includes the HTTP address and has the library itself do most of the rest.
const getData = () => {
    axios.get('https://reqres.in/api/users').then(response => {
        console.log(response);
    });
};

// The sendData function of axios that we can see posts data at a much more user friendly way for the coder.
const sendData = () => {
    axios.post('https://reqres.in/api/register', {
        email: "eve.holt@reqres.in",
        // password: "pistol"
    }, {
        // headers: {
        //     'Content-Type': 'application/json'
        // }
    })
    .then(response => {
        console.log(response);
    })

    // Seeing that axios will report an error correctly if an error response is present.
    .catch(err => {
        console.log(err, err.response);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
