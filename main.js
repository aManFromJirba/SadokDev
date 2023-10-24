// * _______________ TAB SELECTION (MECH) ____________________\\

const tabsContainer = document.querySelector('#nav-links');
let activeTabId = "home";

tabsContainer.addEventListener("click", (ev) => {
  if (ev.target.nodeName === "LI") {
    document.getElementById(activeTabId).classList.remove("active");
    document.getElementsByClassName(activeTabId)[0].classList.remove("active");
    activeTabId = ev.target.id;
    ev.target.classList.add("active");
    document.getElementsByClassName(activeTabId)[0].classList.add("active");
  }
  if (tabsContainer.classList.contains('menuOpen')) {
    menuToggle.classList.toggle('menuOpen');
    tabsContainer.classList.toggle('menuOpen');
  }
});

// * _______________ MENU TOGGLE (MECH) ____________________\\
const menuToggle = document.querySelector('.menuToggle')
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('menuOpen');
  tabsContainer.classList.toggle('menuOpen');

})

// * _________________ MODAL GALLERY (MECH) _____________________________\\

const images = document.querySelectorAll('.games img')
const modalImage = document.querySelector('.modalImage')
const modalBg = document.querySelector('.modal-bg')
let src = new String();

images.forEach(image => {
  image.addEventListener('click', function (e) {
    src = e.target.src;
    console.log(src);
    modalImage.setAttribute('src', src);
    modalBg.style.visibility = 'visible';
  })
})
//close button
const closeButton = document.querySelector('.clsB')

closeButton.addEventListener('click', (e) => {
  modalBg.style.visibility = 'hidden'
})
//arrows
const rightArr = document.querySelector('.rightA');
const leftArr = document.querySelector('.leftA');

rightArr.addEventListener('click', function (e) {
  if (Number(src.at(-5)) < 3) {
    src = replaceCharacter(src, -5, Number(src.at(-5)) + 1)
  } else {
    src = replaceCharacter(src, -5, 1);

  }
  modalImage.setAttribute('src', src)
})

leftArr.addEventListener('click', function (e) {
  if (Number(src.at(-5)) > 1) {
    src = replaceCharacter(src, -5, Number(src.at(-5)) - 1)
  } else {
    src = replaceCharacter(src, -5, 3);
  }
  modalImage.setAttribute('src', src)
})

// * ___ Utils ___\\
function replaceCharacter(string, index, replacement) {
  return (
    string.slice(0, index) +
    replacement +
    string.substr(index + 1)
  );
}










































//dynamic idea 
/* let tabContainer = document.querySelector("ul");
let activeTabIndex = 0;
tabContainer.addEventListener("click", (ev) => {
  if (ev.target.nodeName === "LI") {
    let indexToActivate = Array.prototype.indexOf.call(
      document.querySelector("ul").childNodes,
      ev.target
    );
    console.log(document.querySelector("ul").children);
    document
      .querySelector("ul")
      .children[activeTabIndex].classList.remove("active");

    document.getElementsByClassName(activeTabIndex)[0].classList.remove("active");
    activeTabId = indexToActivate;
    ev.target.classList.add("active");
    document.getElementsByClassName(activeTabIndex)[0].classList.add("active");
  }
}); */