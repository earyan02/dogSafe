const searchBar = document.getElementById('searchBar');
let foodList = [];
let searchString = ''

// fetching data from json file

    // fetch('./foodList.json')
    // .then(res => res.json())
    // .then(foodList => {
    //     document.getElementById("foodName").innerHTML = foodList[5].name;
    //     document.getElementById("canEat").innerHTML = foodList[5].description;
    // });


    fetch('./foodList.json')
    .then(res => res.json())
    .then(data => {
        foodList = data;
        // console.log(foodList);

        // document.getElementById("foodName").innerHTML = foodList[5].name;
        // document.getElementById("canEat").innerHTML = foodList[5].description;
    });

// listening for search bar input and attempting to filter


searchBar.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const searchString = e.target.value;
        
        // Find the matching items in the foodList
        const matchingFood = foodList.filter(food => food.name.includes(searchString));
        
        if (matchingFood.length > 0) {
            // Display the matching items
            matchingFood.forEach(food => {
                console.log(food.name, food.description);
                document.getElementById("foodName").innerHTML = food.name;
                document.getElementById("canEat").innerHTML = food.canEat;
            });
        } else {
            console.log('no matching food');
            document.getElementById("canEat").innerHTML = "";
            document.getElementById("foodName").innerHTML = "Food not found";
        }
    }
            // Handle the case when no matching items a
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

