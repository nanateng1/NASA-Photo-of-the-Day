'Use Strict';

fetch('https://api.nasa.gov/planetary/apod?api_key=IWQZdLLiNAXbXxaGckrhdK2b98Itw0e4OsyRlK1Q')
  .then(res => res.json())
  .then(data => {
    console.log(data.message);
    document.querySelector('.nasa-data').innerHTML = data.message;
  })
  .catch(err => {
    console.log(`error ${err}`);
  });
