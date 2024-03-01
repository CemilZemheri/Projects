
const button1=document.querySelector(".ft-div-1")
const button2=document.querySelector(".ft-div-2")
const reset =document.querySelector(".ft-div-3")
const Harvey0=document.querySelector(".spn-p-1")
const felix0=document.querySelector(".spn-p-2")
const Score=document.querySelector(".score-input")
const msg= document.querySelector(".mesaj")
Harvey0.textContent=0
felix0.textContent=0
let gameOver = false;


document.getElementById("input").addEventListener("input", function() {
  let inputValue = this.value;
  if (inputValue < 0) {
      alert("You can not enter negative numbers.");
      this.value = ""; 
  }else if(inputValue > 25){
    alert("Sorry. Max score is 25!")
    this.value = ""; 
  }
});

button1.addEventListener("click",()=>{
    if(Score.value !== "" && !gameOver){
        Harvey0.textContent++
    
    if (Harvey0.textContent===Score.value) {
        msg.textContent=`FAN wins✌️`
        gameOver=true
        Harvey0.style.color="green"
        felix0.style.color="red"
        
    } 
}})
button2.addEventListener("click",()=>{
    if(Score.value !== "" && !gameOver){
        felix0.textContent++
    felix0.textContent
    
    if (felix0.textContent==Score.value) {
        msg.textContent=`HARIMOTO wins✌️`
        gameOver=true
        felix0.style.color="green"
        Harvey0.style.color="red"
        
    } 
}})

reset.addEventListener("click",()=>{
    felix0.textContent=0
    Harvey0.textContent=0
    felix0.style.color="black"
    Harvey0.style.color="black"
    Score.value=""
    msg.textContent="SCORES"
    gameOver = false;
})
