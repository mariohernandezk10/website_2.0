console.log(document.body.children);


function revealMessage() {
    document.getElementById("hiddenMessage").style.display = "block"
    document.getElementById("hiddenMessage").style.backgroundColor = "White"
}

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();


console.log(document.body.children);
