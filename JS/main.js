let demo = document.getElementById("demo");
console.log(demo);

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        demo.style.backgroundColor = "red";
    } else{
        demo.style.backgroundColor = "brown"
    }

});
