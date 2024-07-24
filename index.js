var buttonPlus=Array.from(document.getElementsByClassName("add"))
var total=document.getElementById("total")




for(let i=0;i<buttonPlus.length;i++){
  buttonPlus[i].addEventListener("click",function(){
    buttonPlus[i].nextElementSibling.innerHTML++
    shopping_bag()
  })
}

var buttonMinus=Array.from(document.getElementsByClassName("minus"))

for(let i=0;i<buttonMinus.length;i++){
  buttonMinus[i].addEventListener("click",function(){
    if(buttonMinus[i].previousElementSibling.innerHTML >0){
    buttonMinus[i].previousElementSibling.innerHTML--
    shopping_bag()
    }
  })
}

var trash=Array.from(document.getElementsByClassName("fa-trash-alt"))
for(let i=0;i<trash.length;i++){
  trash[i].addEventListener("click",function(){
    trash[i].parentNode.remove()
    shopping_bag()
  })
  
}

var heart=Array.from(document.getElementsByClassName("fa-heart"))
for(let i=0;i<heart.length;i++){
    heart[i].addEventListener("click", function() {
        heart[i].classList.toggle("red");
      });
}

function shopping_bag(){
  var quantite=Array.from(document.getElementsByClassName("qte"))
  var price=Array.from(document.getElementsByClassName("price"))
  var totalValue=0
  for(let i=0;i<quantite.length;i++){
    totalValue += price[i].innerHTML * quantite[i].innerHTML
  }
  return total.innerHTML = totalValue
}
