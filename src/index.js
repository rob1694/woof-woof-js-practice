const initial_URL =  'http://localhost:3000/pups/';

function getDogs() {
    const url = `${initial_URL}`;
    return fetch(url)
    .then(res => res.json())
}

function getSingleDog(id){
    const singleDogURL = `${initial_URL}${id}`
    return fetch(singleDogURL)
      .then(res => res.json() )
  }

function createSpan(Dog) {
    span = document.createElement('span');
        span.textContent = Dog.name;
        span.dataset.id = Dog.id
        return span;
}

function showDogBars(dogsArray) {
    const dogBar = document.getElementById('dog-bar')
    dogsArray.forEach(dog => {
      const dogSpan = createSpan(dog);
      dogSpan.dataset.id = dog.id
      dogSpan.addEventListener("click", onDogSpanClick)
      dogBar.appendChild(dogSpan);
      });
  }

  getDogs()
    .then(showDogBars)

/* When a user clicks on a pup's span in the dog bar, that pup's info 
(image, name, and isGoodDog status) should show up in the div with the id of "dog-info". 
When you have the pup's information, the dog info div should have the following children: - an img tag with the pup's image url 
- an h2 with the pup's name - a button that says "Good Dog!" or "Bad Dog!" based on whether isGoodDog is true or false. 
Ex: <img src=dog_image_url> <h2>Mr. Bonkers</h2> <button>Good Dog!</button> */

function createInfoTags(Dog) {
    const dogInfo = getElementbyid('dog-info'),
    h2 = createElement('h2'),
    img = createElement('img'),
    button = createElement('button');

    dogInfo.innerHTML = ""

    h2.textContent = Dog.name;
    img.src = Dog.image;
    button.innerText = Dog.isGoodDog ? "Good Dog!" : "Bad Dog!"

    dogInfo.appendChild(h2);
    dogInfo.appendChild(img);
    dogInfo.appendChild(button);

    return dogInfo
}

function onDogSpanClick(e){
    getSingleDog(e.target.dataset.id)
      .then(createInfoTags)
  }

function displayDogInfo() {
    
}
