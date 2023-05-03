// Todo List 웹페이지 만들기
// 사용자에게 할 일 입력받기
// 그 리스트를 화면에 보여주기
// 받은 데이터 저장할 필요 없음. 새로고침했을 때 사라져도 됨
// <form>, submit event 활용

const button = document.querySelector('button'); // HTML 제출버튼
const elInput = document.querySelector('#input'); // HTML input
const elUl = document.querySelector('#list');  // HTML UL

function handleClick(){
    const currentVal = elInput.value;
    paintTodo(currentVal);
    elInput.value =''; //값 넣고 제출했을때 공백으로 보이게.    
}

elInput.onchange = handleClick;

function paintTodo(text){
    const elLi = document.createElement("li");       
    const span = document.createElement("span");
    span.innerText = text +" "; //버튼하고 마지막글씨 사이때문에 공백넣음
    elLi.appendChild(span);   //li에 글씨  
    elUl.appendChild(elLi);  //ul에 li붙여주기
  }