document.querySelector('.day-photo').addEventListener('click', getFetch);

function getFetch() {
  const defaultURL = 'https://api.nasa.gov/planetary/apod?api_key=IWQZdLLiNAXbXxaGckrhdK2b98Itw0e4OsyRlK1Q';

  fetch(defaultURL)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      document.querySelector('.results').style.position = 'absolute';
      document.querySelector('.reveal').src = data.hdurl;
      document.querySelector('p').innerHTML = data.explanation;
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}
