var itemSelect = document.getElementsByClassName("nav-link");


function navborder() {
    this.style.borderBottom = "solid";
    this.style.color = "white";
    // this.innerHTML = "Hello";
    

}

function navborderout() {
    this.style.borderBottom = "none";
    this.style.color = "#F79327";
    // this.innerHTML = "Hello";


}
// function navclick(event) {
//     event.preventDefault();
//     this.style.borderBottom = "solid";
//     this.style.color = "white";


// }

for (var i = 0; i < itemSelect.length; i++) {
    itemSelect[i].addEventListener("mouseover", navborder);
}
for (var i = 0; i < itemSelect.length; i++) {
    itemSelect[i].addEventListener("mouseout", navborderout);
}
// for (var i = 0; i < itemSelect.length; i++) {
//     itemSelect[i].addEventListener("click", navclick);
// }



