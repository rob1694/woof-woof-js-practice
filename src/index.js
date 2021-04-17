const initial_URL =  'http://localhost:3000/pups/';

function getDogs() {
    const url = `${initial_URL}`;
    return fetch(url)
    .then(res => res.json())
}

function createSpan(Dog) {
    span = document.createElement('span');
        span.textContent = Dog.name;
        return span;
}

function showDogBars(dogsArray) {
    const dogBar = document.getElementById('dog-bar')
    dogsArray.forEach(dog => {
      const dogSpan = createSpan(dog);
      dogBar.appendChild(dogSpan);
    });
  }

  getDogs().then(showDogBars);

/* When a user clicks on a pup's span in the dog bar, that pup's info 
(image, name, and isGoodDog status) should show up in the div with the id of "dog-info". 
When you have the pup's information, the dog info div should have the following children: - an img tag with the pup's image url 
- an h2 with the pup's name - a button that says "Good Dog!" or "Bad Dog!" based on whether isGoodDog is true or false. 
Ex: <img src=dog_image_url> <h2>Mr. Bonkers</h2> <button>Good Dog!</button> */