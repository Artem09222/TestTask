const divInput1 = document.querySelector('.div-input1')
const divInput2 = document.querySelector('.div-input2')
let inputAddDiv = document.querySelector('.input-add-div')

function getRandomTextFromAPI() {
    const login = divInput1.value;
    const password = divInput2.value;
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        inputAddDiv.textContent = `Random Text: ${data.title}`;
        
        localStorage.setItem('login', login);
        localStorage.setItem('password', password);
        localStorage.setItem('randomText', data.title);
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  const savedLoginLocal = localStorage.getItem('login');
  const savedPasswordLocal = localStorage.getItem('password');
  const savedRandomTextLocal = localStorage.getItem('randomText');

  if (savedLoginLocal && savedPasswordLocal && savedRandomTextLocal) {
    divInput1.value = savedLoginLocal;
    divInput2.value = savedPasswordLocal;
    inputAddDiv.textContent = `Random Text: ${savedRandomTextLocal}`;
  }

const btnAdd = document.querySelector('.btn-add')
const btnDelete = document.querySelector('.btn-delete')
let divContainer = document.querySelector('.div-container')
let currentFetch = 1;

function fetchBtns() {
    return fetch('https://jsonplaceholder.typicode.com/todos/' + currentFetch)
      .then(response => response.json())
      .catch(error => console.error('Error fetching data:', error));
}

function addAPI() {
    fetchBtns().then(data => {
      for (let i = 0; i < 5; i++) {
        const newDiv = document.createElement('div');
        newDiv.textContent = data.title;
        divContainer.appendChild(newDiv);
      }
      currentFetch++;
    }).catch(error => console.error('Error adding API data:', error));
  }
  
function deleteItems() {
    for (let i = 0; i < 5; i++) {
      const lastDiv = divContainer.lastChild;
      if (lastDiv) {
        divContainer.removeChild(lastDiv);
      } else {
        break;
      }
    }
  }

// document.addEventListener('DOMContentLoaded', () => {
//   let ulAPI = document.querySelector('.newsList');

//   if (!ulAPI) {
//       console.error('Element with class "newsList" not found.');
//       return;
//   }

//   function valuesAPI(keys) {
//     const apiKey = 'YOUR_API_KEY';

//     setTimeout(() => {
//       fetch(`https://newsapi.org/v2/everything?q=${keys}&apiKey=${apiKey}`)
//           .then(response => response.json())
//           .then(data => {

//               if (data.articles && Array.isArray(data.articles)) {
//                   valuesInUl(data.articles);
//               } else {
//                   console.error('Invalid response format. Missing or invalid "articles" key.');
//               }
//           })
//           .catch(error => {
//               console.error('Error fetching news articles:', error.message);
//           }, 1000);
//     })
//   }

//   function valuesInUl(articlesKey) {
//       ulAPI.innerHTML = '';

//       articlesKey.forEach(element => {
//           const liAPI = document.createElement('li');
//           liAPI.textContent = element.title;
//           ulAPI.appendChild(liAPI);
//       });
//   }

//   valuesAPI('technology');
// });