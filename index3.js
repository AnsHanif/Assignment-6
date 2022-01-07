// document.getElementById("Data").innerHTML= new Date();

document.getElementById("btn-1").onclick = function () {
let Din = new Date().getDay();
if(Din===0){
   alert("it's Sunday")
}else if (Din===1){
   alert("Monday")
}else if (Din===2){
   alert("it's Tuesday")
}else if (Din===5){
   alert("it's Friday")
}else{
   alert("it's Some Other Day")
}
}

document.getElementById("btn-2").onclick = function () {
   let Din = new Date().getDay();
   Din = 3;
   switch(Din){
      case 0:
         document.getElementById("Text").innerHTML ="it's Sunday";      
         break;
      case 1:
         document.getElementById("Text").innerHTML ="it's Monday";
         break;
      case 2:
         document.getElementById("Text").innerHTML ="it's Tuesday";
         break;
      case 5:
         document.getElementById("Text").innerHTML ="it's Friday";
         break;
      default:
         document.getElementById("Text").innerHTML ="it's Some Other Day";
         break;
   }
}
document.getElementById("btn-3").onclick = function () {
   do{
      var name = prompt("Enter Your Name?")
      document.getElementById("Text").innerHTML = name;   
   }while(name ===
       null);
}

