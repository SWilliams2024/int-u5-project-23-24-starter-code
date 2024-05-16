// Declare your arrays here
console.log("check");
let yellow = ["The Lion King","Minions"];
let yellowImages = ["https://lumiere-a.akamaihd.net/v1/images/p_thelionking_19752_1_0b9de87b.jpeg","https://m.media-amazon.com/images/M/MV5BMTUwNjcxNzAwOF5BMl5BanBnXkFtZTgwNzEzMzIzNDE@._V1_.jpg"];
let white = ["101 Dalmatians","Snow White"];
let whiteImages = ["https://m.media-amazon.com/images/I/91FAsQcEoZL._AC_UF894,1000_QL80_.jpg","https://rnkr.tmsimg.com/assets/p15972_v_s4_am.jpg"];
let green = ["Hacksaw Ridge","Jumanji"];
let greenImages = ["https://facts.net/wp-content/uploads/2023/06/46-facts-about-the-movie-hacksaw-ridge-1687620405.jpg","https://m.media-amazon.com/images/I/81Rq7NUAMdL._AC_UF894,1000_QL80_.jpg"];
let movieText = document.querySelector("p");
let movieImage = document.querySelector(".pop-icon");
let colorInput = document.querySelector("input");
let submitButton = document.querySelector("button");
let images = document.querySelector(".images")
submitButton.addEventListener("click", function () {
images.innerHTML = ""
    if (colorInput.value === "yellow" || colorInput.value === "Yellow") {
        movieText.innerHTML = "Since your favorite color is yellow, some movies you might like are: "+yellow.join(", ");
       
        yellowImages.forEach(function(image){
            let img = document.createElement("img");
            img.src = image;
            images.appendChild(img);
        })
    }


    if (colorInput.value === "white" || colorInput.value === "White") {
        movieText.innerHTML = "Since your favorite color is white, some movies you might like are: "+white.join(", ");
       
        whiteImages.forEach(function(image){
            let img = document.createElement("img");
            img.src = image;
            images.appendChild(img);
        })
    }

    if (colorInput.value === "green" || colorInput.value === "Green") {
        movieText.innerHTML = "Since your favorite color is green, some movies you might like are: "+green.join(", ");
      
        greenImages.forEach(function(image){
            let img = document.createElement("img");
            img.src = image;
            images.appendChild(img);
        })

    }
});