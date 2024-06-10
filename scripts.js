let btnNext = document.querySelector(".next");
let btnBack = document.querySelector(".back");

let container = document.querySelector(".thumb-container");
let list = document.querySelector(".list");
let thumb = document.querySelector(".thumb");

btnNext.onclik = () => moveItemsOnClick("next");
btnBack.onclik = () => moveItemsOnClick("back");

console.log(btnNext);
console.log(btnBack);

function moveItemsOnClick(type) {
    let listItems = document.querySelectorAll(".list-item");
    let thumbItems = document.querySelectorAll(".thumb-item");

    
    if(type === "next") {
        list.appendChild(listItems[0]);
        thumb.appendChild(thumbItems[0]);
        container.classList.add('next')
    } else {
        list.prepend(listItems[listItems.length - 1]);
        thumb.prepend(thumbItems[thumbItems.length - 1]);
        container.classList.add('back')
    }
    
    setTimeout(() => {
        container.classList.remove('back')
        container.classList.remove('next')
    }, 3000)


}