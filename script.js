const h2 = document.createElement("h2");
h2.id = "tag";
h2.textContent = "Thank you for joining me!";

document.querySelector("body").appendChild(h2);


const image = document.getElementsByTagName("img");


image.addEventListener('click', function(){
    alert("That's me!");
})