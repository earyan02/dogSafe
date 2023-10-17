
let foodHeader = document.getElementById("foodName");

fetch('./foodList.json')
    .then(res => res.json())
    .then(foodList => {
        document.getElementById("foodName")
        .innerHTML = JSON.stringify(foodList[5].name);

        document.getElementById("canEat").innerHTML = JSON.stringify(foodList[5].description);
    });

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data => {
        featuredImage = JSON.stringify(data[0].url);
        document.getElementById("featuredImage").src = featuredImage;
        console.log(data);
        console.log(featuredImage);
    });

    
    // .then (data => {
    //     featuredImage = JSON.stringify(data[0].url);
    //     document.getElementById("featuredImage").src=featuredImage.url;
    // });


//     let foodHeader = document.getElementById("foodName");

// fetch('./foodList.json')
//     .then(res => res.json())
//     .then(foodList => {
//         console.log(foodList);
//         foodHeader.innerText = foodList;
//     });


// const data = new Promise((resolve, reject) => {
//     fetch('./foodList.json').then(response=> {resolve(response.json())}).catch(err=>reject(err))
// })

// let foodDisplay = document.getElementById(foodName)
// let food = data.stringify(data[1])

// const data = new Promise((resolve, reject) => {
//     fetch('./foodList.json').then(response=>response.json()).then(data=>console.log(data[1]))
//     updateFoodName(food);
// })

// function updateFoodName (food) {
//     foodDisplay.innerText = food
// }
// let food = JSON.parse(data);


// function updateCount(count) {
//     counter.innerText = count;
// }