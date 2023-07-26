// Auto typing text
var typed = new Typed(".auto-type", {
  strings: ["I'm Sumaiya Wazed", "A Web Designer and Developer", " Skilled in WordPress Development"],
  typeSpeed: 100,
  backSpeed: 80,
  loop: true
});

// Particles on face screen
document.addEventListener('mousemove', function (e) {
  let imgArea = document.querySelector('.img-area');
  let particles = document.createElement('span');
  let x = e.clientX - imgArea.getBoundingClientRect().left;
  let y = e.clientY - imgArea.getBoundingClientRect().top;

  if (x >= 0 && x <= imgArea.offsetWidth && y >= 0 && y <= imgArea.offsetHeight) {
    particles.style.left = x + 'px';
    particles.style.top = y + 'px';

    let size = Math.random() * 8;
    particles.style.width = 2 + size + 'px';
    particles.style.height = 2 + size + 'px';

    let transformValue = Math.random() * 360;
    particles.style.transform = 'rotate(' + transformValue + 'deg)';
    imgArea.appendChild(particles);
    setTimeout(function () {
      particles.remove()
    }, 2000)
  }
})


// --- book page flip ---

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const cover = document.querySelector("#p1");
const paper1 = document.querySelector("#p2");
const paper2 = document.querySelector("#p3");
const paper3 = document.querySelector("#p4");
const paper4 = document.querySelector("#p5");
const paper5 = document.querySelector("#p6");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// logic
let currentLocation = 1;
let numOfPapers = 6;
let maxLocation = numOfPapers + 1;

function openBook() {
  book.style.transform = "translateX(50%)";
  prevBtn.style.transform = "translateX(-280px)";
  nextBtn.style.transform = "translateX(280px)";
  prevBtn.style.opacity = "1";
  nextBtn.style.opacity = "1";
  if (window.innerWidth <= 1024){
    prevBtn.style.transform = "translateX(-192px)";
    nextBtn.style.transform = "translateX(192px)";
  }
}

function closeBook(isAtBeginning) {
  if (isAtBeginning) {
    book.style.transform = "translateX(0%) rotateY(10deg) skew(-5deg)";
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
    prevBtn.style.opacity = "0";
    nextBtn.style.opacity = "1";
  } else {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-280px)";
    nextBtn.style.transform = "translateX(280px)";
    prevBtn.style.opacity = "1";
    nextBtn.style.opacity = "0";
    if (window.innerWidth <= 1024){
      prevBtn.style.transform = "translateX(-192px)";
      nextBtn.style.transform = "translateX(192px)";
    }
  }
}

function goNextPage() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        cover.classList.add("flipped");
        cover.style.zIndex = maxLocation;
        setTimeout(function () {
          paper1.classList.add("flipped");
          paper1.style.zIndex = maxLocation + 1;
          paper1.style.transition = "transform 3s";
        }, 700);
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = maxLocation + 2;
        break;
      case 3:
        paper3.classList.add("flipped");
        paper3.style.zIndex = maxLocation + 3;
        break;
      case 4:
        paper4.classList.add("flipped");
        paper4.style.zIndex = maxLocation + 4;
        closeBook(false);
        break;
      default:
        throw new Error("unknown state");
    }
    currentLocation++;
  }
}

function goPrevPage() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        closeBook(true);
        cover.classList.remove("flipped");
        cover.style.zIndex = maxLocation;
        paper1.classList.remove("flipped");
        setTimeout(function () {
          paper1.style.zIndex = maxLocation - 1;
          paper1.style.transition = "transform 3s";
        }, 500);
        break;
      case 3:
        paper2.classList.remove("flipped");
        setTimeout(function () {
          paper2.style.zIndex = maxLocation - 2;
        }, 500);
        break;
      case 4:
        paper3.classList.remove("flipped");
        setTimeout(function () {
          paper3.style.zIndex = maxLocation - 3;
        }, 500);
        break;
      case 5:
        paper4.classList.remove("flipped");
        setTimeout(function () {
          paper4.style.zIndex = maxLocation - 4;
          openBook();
        }, 500);
        break;
      default:
        throw new Error("unknown state");
    }
    currentLocation--;
  }
}

// ---skill and Education content function in about page ---

let titlelinks = document.getElementsByClassName("titles-link");
let titlecontents = document.getElementsByClassName("title-contents");

function opencontent(titlename) {
  for (titlelink of titlelinks) {
    titlelink.classList.remove("active-link");
  }
  for (titlecontent of titlecontents) {
    titlecontent.classList.remove("active-contents");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(titlename).classList.add("active-contents");
}

// ---skill and Education content function in about page for responsive display---

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(titlename) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-titles");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-titles");
  document.getElementById(titlename).classList.add("active-tab");
}

 // ---add hover effect on services list2 and list3 together ---

 function handleHover(classNames) {
  for (let i = 0; i < classNames.length; i++) {
    const elements = document.getElementsByClassName(classNames[i]);
    for (let j = 0; j < elements.length; j++) {
      elements[j].classList.toggle('hovered');
    }
  }
}

 // ---add hover effect on work together ---
const work2 = document.querySelector('.work2');
const work3 = document.querySelector('.work3');
const img2 = work2.querySelector('img');
const img3 = work3.querySelector('img');


work2.addEventListener('mouseover', function() {
    work2.classList.add('hovering');
    work3.classList.add('hovering');
    img2.style.transform = 'scale(1.1)';
    img3.style.transform = 'scale(1.1)';
});

work2.addEventListener('mouseout', function() {
    work2.classList.remove('hovering');
    work3.classList.remove('hovering');
    img2.style.transform = 'scale(1)';
    img3.style.transform = 'scale(1)';
});

work3.addEventListener('mouseover', function() {
    work2.classList.add('hovering');
    work3.classList.add('hovering');
    img2.style.transform = 'scale(1.1)';
    img3.style.transform = 'scale(1.1)';
});

work3.addEventListener('mouseout', function() {
    work2.classList.remove('hovering');
    work3.classList.remove('hovering');
    img2.style.transform = 'scale(1)';
    img3.style.transform = 'scale(1)';
});


// ---- popUp all work list ----
let popUp = document.getElementById("popUp");

function openPopup(){
  popUp.classList.add("open-popup");
}
function closePopup(){
  popUp.classList.remove("open-popup");
}

// ---- bottom menu bar ----
let menu = document.querySelector('.menu');
menu.onclick = function(){
  list = document.querySelector('.list');
  down = document.querySelector('.down');
  list.classList.toggle ("openmenu");
  down.classList.toggle ("openmenu");

}
