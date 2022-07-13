document.querySelector('.day-photo').addEventListener('click', getFetch);

function getFetch() {
  const defaultURL = 'https://api.nasa.gov/planetary/apod?api_key=IWQZdLLiNAXbXxaGckrhdK2b98Itw0e4OsyRlK1Q';

  fetch(defaultURL)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}
