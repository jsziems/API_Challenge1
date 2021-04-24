
const apiUrl = 'https://ghibliapi.herokuapp.com/locations';

const getAndDisplayLocations = async () => {
    // Get data from the 'locations' endpoint.
    let response = await fetch(apiUrl);
    let resultsData = await response.json();

    displayLocations(resultsData)
}

getAndDisplayLocations()


const displayLocations = (locations) => {
    const wrapper = document.getElementById("results")

    // Only create this element once
    let carouselInner = document.createElement("div")
    let itemTitle
    let itemText
    let firstSlide = true;

    for (let location of locations) {
        // Create new elements for the carousel componenets.
        carouselItem = document.createElement("div")
        itemTitle = document.createElement("h5")
        itemText = document.createElement("p")

        // Assign a class name to these elements.
        carouselInner.className = "carousel-inner"
        // For the first slide, add the active class.  Omit from the rest of the slides.
        if (firstSlide)
            carouselItem.className = "carousel-item active"
        else
            carouselItem.className = "carousel-item"
        itemTitle.className = "item-title"
        itemText.className = "item-text"

        // Assign values (retrieved from the endpoint and passed into this function) to the title and text elements.
        itemTitle.innerText = location.name
        itemText.innerHTML = 'Terrain is: ' + location.terrain + ' and climate is: ' + location.climate

        // Link up the parts of this slide.
        carouselItem.appendChild(itemTitle)
        carouselItem.appendChild(itemText)
        carouselInner.appendChild(carouselItem)
        wrapper.appendChild(carouselInner)

        firstSlide = false;
    }

}


