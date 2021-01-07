// 1) Select the section with an id of container without using querySelector.
document.getElementById("container");
// 2) Select the section with an id of container using querySelector.
document.querySelector("#container");
// 3) Select all of the list items with a class of "second".
document.getElementsByClassName("second");
// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol .third");
// 5) Give the section with an id of container the text "Hello!".
document.getElementById("container").innerText = "Hello";
// 6) Add the class main to the div with a class of footer.
let addingClass = document.querySelector(".footer");
addingClass.classList.add("main");
// 7) Remove the class main on the div with a class of footer.
addingFunction.classList.remove("main");
// 8) Create a new li element.
let addingElement = document.createElement("li");
// 9) Give the li the text "four".
addingElement.innerText = "four";
// 10) Append the li to the ul element.
let appendingElement = document.querySelector("ul");
appendingElement.appendChild(addingElement);
// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
let listOfLis = document.querySelectorAll("ol li");
for(let i =0;i<listOfLis.length;i++){
    listOfLis[i].style.backgroundColor = "green";
}


// 13) Remove the div with a class of footer.
let footerClass = document.querySelector(".footer");
footerClass.remove();
