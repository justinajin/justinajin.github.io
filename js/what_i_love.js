// 이미지 슬라이드1
//이미지 슬라이드는 이미지 여러개를 길게 놓고 이미지를 오른쪽, 왼쪽으로 당겨야 한다.

// 뒤로가기버튼, 앞으로가기버튼, 이미지를묶은태그 가져오는 변수선언
const btnPrev1 = document.querySelector(".btn-prev-1");
const btnNext1 = document.querySelector(".btn-next-1");
const slideImgs1 = document.querySelector(".slide-images-1");

//이미지의 순서가 바뀔때마다 이미지의 위치를 변경시킬때 사용할 변수를 선언하고 0으로 초기화
let imgIndex1 = 0;
let position1 = 0;
const IMG_WIDTH_1 = 438;



//뒤로가기(왼쪽) 버튼 클릭시
// Element.removeAttribute(): 메서드는 요소에서 주어진 이름의 특성을 제거

// setAttribute와 removeAttribute
// 제일 처음 보이는 이미지는 뒤로가기가 막혀있고, 그 이상의 이미지일 때만 뒤로가기 버튼이 활성화

let prev1 = function () {
    btnNext1.removeAttribute("disabled"); // 전체 앞으로가기(오른쪽 화살표)버튼을 활성화 시킴
    position1 += IMG_WIDTH_1;   // 뒤로가는것은 이미지를 오른쪽으로 잡아당겨줘야하기 때문에 위치를 이미지의 가로길이만큼 증가시켜줘야한다
    slideImgs1.style.transform = `translateX(${position1}px)`; // 이미지묶음에 x축으로 위치만큼 옮겨줌(창 고정이고 이미지 이동)
    slideImgs1.style.transition = "transform .5s ease-out";  // 이미지 이동 시 0.5초 지연
    imgIndex1 = imgIndex1 - 1; //뒤로가는거니까 인덱스번호를 빼줘야함

    if (imgIndex1 == 0) {// 첫번째(0번째 인덱스) 그림에선 뒤로가기 막힘
    btnPrev1.setAttribute("disabled", "true");
  }
};

//---------------------------------------------------------------------
//앞으로가기(오른쪽) 버튼 클릭시(뒤로가기 버튼과 구조 동일)

//setAttribute와 removeAttribute
//맨마지막 이미지가 나왔을 때만 disabled속성을 활성화시킴으로써 앞으로가기 버튼을 눌러도 앞으로 넘어가지 않음

//position -= IMG_WIDTH
// 앞으로가기 버튼이지만, 길게 붙여져 있는 이미지를 왼쪽으로 잡아당겨줘야하기 때문에 위치를 이미지 가로길이만큼 빼준다.

//transform .5s ease-out
// 끊기지 않고 부드럽게 넘어가는 효과줌
let next1 = function () {
    btnPrev1.removeAttribute("disabled");  // 전체 뒤로 가기(왼쪽 화살표)버튼을 활성화 시킴
    position1 -= IMG_WIDTH_1;
    slideImgs1.style.transform = `translateX(${position1}px)`;
    slideImgs1.style.transition = "transform .5s ease-out";
    imgIndex1 = imgIndex1 + 1;

    if (imgIndex1 == 2) { //사진3장이기때문에 2번인덱스사진이 나오면 앞으로가기버튼 막힘
    btnNext1.setAttribute("disabled", "true");
  }
};


//----------------------------------------------------------------------

// 이미지 슬라이드2
let imgIndex2 = 0;
let position2 = 0;
const IMG_WIDTH_2 = 438;
const btnPrev2 = document.querySelector(".btn-prev-2");
const btnNext2 = document.querySelector(".btn-next-2");
const slideImgs2 = document.querySelector(".slide-images-2");

let prev2 = function () {
    btnNext2.removeAttribute("disabled");
    position2 += IMG_WIDTH_2;
    slideImgs2.style.transform = `translateX(${position2}px)`;
    imgIndex2 = imgIndex2 - 1;

    if (imgIndex2 == 0) {
    btnPrev2.setAttribute("disabled", "true");
  }
};

let next2 = function () {
    btnPrev2.removeAttribute("disabled");
    position2 -= IMG_WIDTH_2;
    slideImgs2.style.transform = `translateX(${position2}px)`;
    slideImgs2.style.transition = "transform .5s ease-out";
    imgIndex2 = imgIndex2 + 1;

    if (imgIndex2 == 2) {
    btnNext2.setAttribute("disabled", "true");
  }
};


//--------------------------
let init = function () {
  btnPrev1.setAttribute("disabled", "true");//첫이미지의 뒤로가기 버튼을 비활성화시켜둬서 왼쪽으로 안넘어감.
  btnPrev1.addEventListener("click", prev1);//버튼들에 클릭이벤트를 적용시켜놓은 상태로 초기화
  btnNext1.addEventListener("click", next1);//버튼들에 클릭이벤트를 적용시켜놓은 상태로 초기화

  btnPrev2.setAttribute("disabled", "true");
  btnPrev2.addEventListener("click", prev2);
  btnNext2.addEventListener("click", next2);  
};

init();
//init 함수를 실행시킴으로써 첫이미지의 뒤로가기 버튼을 비활성화시켜둠
// init함수가 버튼에 이벤트를 적용시켜주고 있기 때문에 init함수를 실행시키지 않으면 아무런 이벤트도 적용되지 않음




// 모달---------------------------------------------------
//modalBg 모달의 모든 내용을 포함하고 있는 부분
//btnOpen과 btnClose 모달을 여는버튼, 닫는버튼에 같은 클래스명줌
const modalBg = document.getElementsByClassName("modal-background");
const btnOpen = document.getElementsByClassName("btn-open");
const btnClose = document.getElementsByClassName("btn-close");


function modal(num) {
  btnOpen[num].addEventListener("click", () => {
    modalBg[num].style.display = "flex"; // 모달을 여는 버튼을 누르면 만들어둔 모달창이 보이게
    document.body.style.overflow = "hidden"; //모달창을 띄울 때, 메인화면 스크롤 비활성화 
  });

  btnClose[num].addEventListener("click", () => {
    modalBg[num].style.display = "none"; // 모달 닫는 버튼을 누르면 모달창이 보이지 않게
    document.body.style.overflow = "unset"; //모달창이 닫힐 때, 스크롤을 다시 활성화
  });
}

// 다중 모달을 띄우려고 함수와 반복문을 사용해서 반복
for (let i = 0; i < btnOpen.length; i++) {
  modal(i);
}