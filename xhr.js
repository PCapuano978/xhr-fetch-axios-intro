const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

// Later added section that gives our code a promise affect to be easier to manage. 
const sendHttpRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {

    // Initiates the first XHR.
    const xhr = new XMLHttpRequest();

    // Prepares the first XHR by using the parameters as references.
    xhr.open(method, url);
  
    // Converts the response back from JSON to normal, more legible data for the user.
    xhr.responseType = "json";

    if (data) {
    xhr.setRequestHeader('Content-Type', 'application/json');
    }

    // Checks if an error has actually passed through the status, even if it was successfully sent.
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
     resolve(xhr.response);
      }
    };

    // Start of error handler that rejects the response and writes the following message if detected. 
    xhr.onerror = () => {
      reject('Something went wrong!');
    };
  
    xhr.send(JSON.stringify(data));
  });
  return promise;
};

// Obtains the data from the "sendHttpRequest" function and logs it under the API. 
const getData = () => {
  sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
    console.log(responseData);
  });
};

// Sends a dummy email and password to the following API to append the header.
const sendData = () => {
  sendHttpRequest('POST', 'https://reqres.in/api/register', {
    email: 'eve.holt@reqres.in',
    // password: 'pistol'
  }).then(responseData => {
    console.log(responseData);

  // Catches the following error from above and console.log's it. 
  }).catch(err => {
    console.log(err); 
  });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
