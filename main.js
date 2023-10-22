// *-Tabs Mechanism
const tabsContainer = document.querySelector('#nav-links');
let activeTabId = "bio";

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

// *-menuToggle Mechanism-*
const menuToggle = document.querySelector('.menuToggle')
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('menuOpen');
  tabsContainer.classList.toggle('menuOpen');

})

// * MODAL MECHANISM ***************

const images = document.querySelectorAll('.games img')
const modalImage = document.querySelector('.modalImage')
const modal = document.querySelector('.modal-bg')
const modalHandling = document.querySelector('.handleModal')
let src = new String();

images.forEach(image => {
  image.addEventListener('click', function (e) {
    src = e.target.src;
    console.log(src);
    modalImage.setAttribute('src', src);
    modal.style.visibility = 'visible';
  })
})
//close button
const closeButton = document.querySelector('.clsB')
closeButton.addEventListener('click', (e) => {
  modal.style.visibility = 'hidden'
})
//arrows
const rightArr = document.querySelector('.rightA');
const reg = /(\w+)(\.\w+)+(?!.*(\w+)(\.\w+)+)/

rightArr.addEventListener('click', function (e) {
  let gameName = reg.exec(src)[0],
    newSrc;
  if (gameName.at(-5) < 3) {
    gameName = gameName.replace(/\d/, Number(gameName.at(-5)) + 1);
    console.log(gameName);
    newSrc = src.replace(/\d/, gameName.at(-6) + 1)
    console.log(newSrc);
  }
  modalImage.setAttribute('src', newSrc)
})











































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