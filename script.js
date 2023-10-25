const searchBar = document.getElementById('searchBar');
let foodList = [];

// fetching data from json file

fetch('./foodList.json')
    .then(res => res.json())
    .then(res => {
        
        document.getElementById("foodName").innerHTML = res[5].name;
        document.getElementById("canEat").innerHTML = res[5].description;
    });

// listening for search bar input and attempting to filter

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    const filteredFood = foodList.filter( foodList => {
        return foodList.name.includes(searchString);
    });
    console.log(searchString);
});


// fetching the featured image

    fetch('https://api.thedogapi.com/v1/images/search')
    .then(res => res.json())
    .then(data => {
        featuredImage = data[0].url;
        document.getElementById("featuredImage").src = featuredImage;
        // console.log(data);
        console.log(featuredImage);
    });



    // fetch('./foodList.json')
    // .then(res => res.json())
    // .then(foodList => {
    //     document.getElementById("foodName").innerHTML = foodList[5].name;
    //     document.getElementById("canEat").innerHTML = foodList[5].description;
    // });