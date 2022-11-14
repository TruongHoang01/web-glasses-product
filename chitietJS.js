var inputText = document.querySelector(".change-amount-input");
function changeAmount(){ 
    inputText.addEventListener('change', ()=>{
        if(inputText.value == 0) inputText.value = 1;
    })
    inputText.addEventListener('keypress', (e)=>{
        var value = inputText.value + String.fromCharCode(e.keyCode);
        if(isNaN(value)) e.preventDefault();
    })
}
function buttonAmount(){
    var btnIncrease = document.querySelector(".increase");
    btnIncrease.addEventListener('click',()=>{
        inputText.value++;
    }) 
    var btnDecrease = document.querySelector(".decrease");
    btnDecrease.addEventListener('click',()=>{
        if(inputText.value > 1) inputText.value--; 
    }) 
}
function start(){ 
    buttonAmount();
    changeAmount();
}
start();
