// javascript header sticky
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if(window.pageYOffset > sticky) {
        header.classList.add("sticky");
    }else {
        header.classList.remove("sticky");
    }
}



// javascript show/hideModal
const BuyBtns = document.querySelectorAll(".js-buy-btns")
const modal = document.querySelector(".js-modal")
const modal_close = modal.querySelectorAll(".js-modal-close");


function showModal () {
    modal.classList.add("active");
}

function hideModal () {
    modal.classList.remove("active");
}

for (const BuyBtn of BuyBtns) {
    BuyBtn.addEventListener("click", showModal);
}

for(const closeModal of modal_close) {
    closeModal.addEventListener("click", hideModal);
}




// javascript types-tickes
var type1 = document.querySelector(".js-type1");
var type2 = document.querySelector(".js-type2");
var return_date = document.querySelector(".js-input-date");


type1.addEventListener("click",function() {
    type1.classList.add("bg-booktype");
    type2.classList.remove("bg-booktype");
    return_date.removeAttribute("disabled");
})
type2.addEventListener("click",function() {
    type2.classList.add("bg-booktype");
    type1.classList.remove("bg-booktype");
    return_date.setAttribute("disabled", "");
})


// javascript step-modal
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");

var next1 = document.getElementById("next1");
var back1 = document.getElementById("back1");

var progress = document.getElementById("progress");

next1.onclick = function() {
    form1.style.left = "-990px";
    form2.style.left = "1px";
    progress.style.width = "900px";
}
back1.onclick = function() {
    form1.style.left = "1px";
    form2.style.left = "990px";
    progress.style.width = "450px";
}

