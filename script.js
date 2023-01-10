const contactBtn = document.querySelector('.contact');
const overlay = document.querySelector('.contact-overlay-1');
const callOverlay = document.querySelector('.contact-overlay-2');
const callBackForm = document.querySelector('.contact-overlay-3');
const emailForm = document.querySelector('.contact-overlay-4')
const phoneBtn = document.querySelector('.query-btn-1');
const emailBtn = document.querySelector('.query-btn-2');
const callBackBtn = document.querySelector('.query-btn-4');
const enquireBtn = document.querySelectorAll('.enquire-btn');
const consultBtn = document.querySelector('.booking');
const menuBtn = document.querySelector('.menu');
const navbar = document.querySelector('nav');
const returnBtn = document.querySelector('.back-arrow');
const exitBtn = document.querySelectorAll('.exit-btn');


function openOverlay() {
  overlay.style.display = 'flex';
}
contactBtn.addEventListener('click', openOverlay); 

function switchToOverlay2() {
  overlay.style.display = 'none'
  callOverlay.style.display = 'flex'
}
phoneBtn.addEventListener('click', switchToOverlay2 );

function switchToOverlay3 () {
  callOverlay.style.display = 'none'
  callBackForm.style.display = 'flex'
}
callBackBtn.addEventListener('click', switchToOverlay3);

function switchToOverlay4() {
  overlay.style.display = 'none';
  emailForm.style.display = 'flex';
}
emailBtn.addEventListener('click', switchToOverlay4);

function openOverlay4() {
  emailForm.style.display = 'flex'
}
enquireBtn.forEach(enquireBtn => {
  enquireBtn.addEventListener('click', openOverlay4);
})

function closeOverlay() {
  overlay.style.display = 'none'
  callOverlay.style.display = 'none'
  callBackForm.style.display = 'none'
  emailForm.style.display = 'none'
}

function outsideClick(e) {
  if (e.target === overlay) {
    closeOverlay();
  }
  if (e.target === callOverlay) {
    closeOverlay();
  }
  if (e.target === callBackForm) {
    closeOverlay();
  }
  if (e.target === emailForm) {
    closeOverlay();
  }
}  
window.addEventListener('click', outsideClick);

function openNav() {
  navbar.style.transform = 'translateX(0%)'
}
menuBtn.addEventListener('click', openNav);

function closeNav() {
  navbar.style.transform = 'translateX(100%)'
}
returnBtn.addEventListener('click', closeNav);

consultBtn.addEventListener('click', openOverlay4);

exitBtn.forEach(exitBtn => {
  exitBtn.addEventListener('click', closeOverlay);
});
