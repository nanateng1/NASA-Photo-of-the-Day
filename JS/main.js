window.onload = function () {
  document.querySelector('.results').style.display = 'none';
  document.querySelector('.back').style.display = 'none';
};
document.querySelector('.day-photo').addEventListener('click', getFetch);
document.querySelector('.get-old').addEventListener('click', getPrevious);

function getFetch() {
  const defaultURL = 'https://api.nasa.gov/planetary/apod?api_key=IWQZdLLiNAXbXxaGckrhdK2b98Itw0e4OsyRlK1Q';

  fetch(defaultURL)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      document.querySelector('.results').style.position = 'absolute';
      document.querySelector('.results').style.display = 'flex';
      document.querySelector('.back').style.display = 'block';
      if (data.media_type === 'image') {
        document.querySelector('img').src = data.hdurl;
        document.querySelector('iframe').style.display = 'none';
      } else if (data.media_type === 'video') {
        document.querySelector('iframe').src = data.url;
        document.querySelector('img').style.display = 'none';
      }
      document.querySelector('p').innerHTML = data.explanation;
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}

function getPrevious() {
  const date = document.querySelector('input').value.toLowerCase();
  const getOldURL = `https://api.nasa.gov/planetary/apod?api_key=IWQZdLLiNAXbXxaGckrhdK2b98Itw0e4OsyRlK1Q&date=${date}`;

  fetch(getOldURL)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      document.querySelector('.results').style.position = 'absolute';
      document.querySelector('.results').style.display = 'flex';
      document.querySelector('.back').style.display = 'block';

      if (data.media_type === 'image') {
        document.querySelector('img').src = data.hdurl;
        document.querySelector('iframe').style.display = 'none';
      } else if (data.media_type === 'video') {
        document.querySelector('iframe').src = data.url;
        document.querySelector('img').style.display = 'none';
      }
      document.querySelector('p').innerHTML = data.explanation;
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}
