//Exercise description
/*
Here is how it is going to work:
The user can write some text indicating the gif he is looking for,
click a button and then a gif will be found (using the searched word)
and the gif will be displayed to the user.
Try break this problem into smaller problems and write down how
you are going to solve the problem BEFORE you start coding
 */
//Pseudocode
//Fetch the correct data
let userInput = "";
const inputElement = document.querySelector("input");

//eventlistener that saves the new user input in a userInput variable
inputElement.addEventListener("input", function() {
    userInput = inputElement.value;
    console.log(userInput);
})
//create function that renders the gifs to the html

const button = document.querySelector(".search-button");
button.addEventListener("click", function (){

    //console.log(userInput);
    //fetches gif data determined by user input
    fetch(`https://api.giphy.com/v1/gifs/search/?api_key=LGWEJK2qiTc7IAOSadGjJuq8P3cEvsdk&q=${userInput}`)
        .then(response => response.json())
        .then(gifData => {
            //console.log(gifData.data[0].images.original.url);
            renderGif(gifData);
        });
})


function renderGif(gifData){

    const ul = document.querySelector('ul');
    ul.innerHTML = "";
    let index = -1;

    gifData.data.forEach(function (gif){
        const li = document.createElement('li');
        const image = document.createElement("img");
        ul.appendChild(li);
        li.appendChild(image);
        index = index + 1;
        image.src = gifData.data[index].images.original.url;
    })
}