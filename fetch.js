const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? {'Content-Type': 'application/json'} : {}
    })

    // Checks if status code is undesirable and then throws an error to the system to write.
    .then(response => {
        if (response.status >= 400) { //response.ok
            return response.json().then(errResData => {
                const error = new Error('Something went wrong!');
            error.data = errResData;
            throw error;
            });
        }

        // Logs the console in JSON formatted code.
        console.log(response);
        return response.json();
    });
}

const getData = () => {

    // .then response used to apply the already self built-in promise system in fetch.
    sendHttpRequest('GET', 'https://reqres.in/api/users')

    // Promise section associated with "using" said JSON data obtained.
    .then(responseData => {
        console.log(responseData);
    });
};

const sendData = () => {
    sendHttpRequest('POST', 'https://reqres.in/api/register', {
        email: 'eve.holt@reqres.in',
        // password: 'pistol'
    }).then(responseData => {
        console.log(responseData);
    })

    // Writes error of an undesirable result from the post.
    .catch(err => {
        console.log(err, err.data);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
