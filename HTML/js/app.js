const navbar = document.getElementById("navBar");
const hamIcon = document.getElementById("ham-icon");
const xMark = document.getElementById("x-mark");
xMark.addEventListener("click", myFunction2);
function myFunction2(){
    navbar.classList.remove("show_list");
}
hamIcon.addEventListener("click", hello);
function hello(){
    navbar.classList.add("show_list");
}
