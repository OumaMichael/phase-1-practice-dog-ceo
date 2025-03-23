console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    // Challenge 1: Fetch and display dog images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const imageContainer = document.getElementById("dog-image-container");
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const img = document.createElement("img");
          img.src = imageUrl;
          img.alt = "Dog Image";
          imageContainer.appendChild(img);
        });
      })
      .catch(error => console.error("Error fetching images:", error));
  
    // Challenge 2: Fetch and display dog breeds
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedUl = document.getElementById("dog-breeds");
    let allBreeds = []; // We'll store all breeds here for filtering
  
    function renderBreeds(breeds) {
      // Clear existing breeds
      breedUl.innerHTML = "";
      breeds.forEach(breed => {
        const li = document.createElement("li");
        li.innerText = breed;
        // Challenge 3: Add click event to change font color
        li.addEventListener("click", () => {
          li.style.color = "red";
        });
        breedUl.appendChild(li);
      });
    }
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        allBreeds = Object.keys(data.message);
        renderBreeds(allBreeds);
      })
      .catch(error => console.error("Error fetching breeds:", error));
  
    // Challenge 4: Filter breeds based on dropdown selection
    const breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener("change", (event) => {
      const selectedLetter = event.target.value;
      const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
      renderBreeds(filteredBreeds);
    });
  });
  