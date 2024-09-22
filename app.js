const url = 'https://dog.ceo/api/breeds/image/random'; // Correct API endpoint for random dog image
const factpara = document.querySelector('#fact'); // Assuming 'fact' is the id
const btn = document.querySelector('#btn'); // Assuming 'btn' is the id

const getfacts = async () => {
    console.log('Getting data ...');
    try {
        let response = await fetch(url);
        console.log(response.status);
        let data = await response.json();
        factpara.innerText = data.message; // The dog image URL is in 'data.message'
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function getfacts() {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        factpara.innerText = data.message; // Assuming you're working with Dog CEO API
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
btn.addEventListener('click', getfacts);
