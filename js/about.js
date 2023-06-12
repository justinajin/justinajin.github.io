
// 모달
const modalBg = document.getElementsByClassName("modal-background");
const btnOpen = document.getElementsByClassName("btn-open");
const btnClose = document.getElementsByClassName("btn-close");

const modalBg2 = document.getElementsByClassName("modal-background-2");
const btnOpen2 = document.getElementsByClassName("btn-open-2");
const btnClose2 = document.getElementsByClassName("btn-close-2");

function modal(num) {
  btnOpen[num].addEventListener("click", () => {
    modalBg[num].style.display = "flex";
    document.body.style.overflow = "hidden";
  });
  btnClose[num].addEventListener("click", () => {
    modalBg[num].style.display = "none";
    document.body.style.overflow = "unset";
  });
}

for (let i = 0; i < btnOpen.length; i++) {
  modal(i);
}

function modal2(num) {
  btnOpen2[num].addEventListener("click", () => {
    modalBg2[num].style.display = "flex";
    document.body.style.overflow = "hidden";
  });
  btnClose2[num].addEventListener("click", () => {
    modalBg2[num].style.display = "none";
    document.body.style.overflow = "unset";
  });  
}

for (let i = 0; i < btnOpen2.length; i++) {
  modal2(i);
}
