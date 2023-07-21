/* -----click on offer on the top Navbar -> scroll to offer content on the page ------*/
document.getElementById('offerNavbar').addEventListener('click', () => {
    window.scrollTo(0, document.getElementById('offer').offsetTop - 180);
});
/* -----click on contact on the top Navbar -> scroll to contact content on the page ------*/
document.getElementById('contactNavbar').addEventListener('click', () => {
    window.scrollTo(0, document.getElementById('contact').offsetTop - 180);
});

/* -----click on about Me on the top Navbar -> scroll to AboutMe content on the page ------*/
document.getElementById('aboutMeNavbar').addEventListener('click', () => {
    window.scrollTo(0, document.getElementById('AboutMe').offsetTop - 180);
});

/* ----Function - scroll page to the top - position (0,0) ---- */
let aArrowIcon = document.getElementById("aArrowIcon");
aArrowIcon.onclick = function () {
    scrollTo(0, 0)
};

function myFunction() {
    var x = document.getElementById("navBarContainer");
    if (x.className === "navBarContainer") {
        x.className += " responsive";
    } else {
        x.className = "navBarContainer";
    }
}

const scrollPhoto = (counter) => {
    const imgElement = document.getElementById('photoSlideShow');
    const imgNumber = imgElement.getAttribute('src').replace('img/', '').replace('.webp', '');
    console.log(imgElement.getAttribute('src'));
    const minImgNumber = 1;
    const maxImgNumber = 3;
    /*
            const imgNumber = imgElement.getAttribute('src').replace('img/', '').replace('.jpg', '');
    */
    let nextImgNumber = Number(imgNumber) + counter;
    nextImgNumber = nextImgNumber === minImgNumber - 1 ? maxImgNumber : nextImgNumber;
    nextImgNumber = nextImgNumber === maxImgNumber + 1 ? minImgNumber : nextImgNumber;
    /*
            document.getElementById('photoSlideShow').setAttribute('src', `img/${nextImgNumber}.jpg`);
    */
    document.getElementById('photoSlideShow').setAttribute('src', `img/${nextImgNumber}.webp`);

};

var a = document.getElementById("file");
Object.values(a.files).forEach((el) => {
    console.log(el.name);
});

let selFilesContainer = document.getElementById("selectedFiles");
a.addEventListener('change', (selectedFiles) => {
    selectedFiles = "";
    Object.values(a.files).forEach((el) => {
        console.log(el.name);
        let s = document.createElement('span');
        s.innerHTML = el.name;
        s.className = 'fileText';
        let br = document.createElement('br');
        selFilesContainer.appendChild(s);
        selFilesContainer.appendChild(br);
    });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=>
    n.addEventListener("click", ()=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))