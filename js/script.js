var buttons = document.querySelectorAll(".card-body .btn");
var collections =document.querySelector(".collections");
const imags = ["dress-1.jpg" , "dress-1-1.jpg" , "dress-1-2.jpg" , "dress-1-3.jpg" , "dress-1-4.jpg"]
var categoriesButton = document.querySelectorAll(".collections .control-item a");
var collectionsItems = document.querySelectorAll(".collections .collectionItem");
const dragButton = document.querySelector(".drag");


for (var i = 0; i<buttons.length;i++){
    buttons[i].addEventListener("click" , function(){

        var overlayContainer = document.createElement("div");
        overlayContainer.classList.add("overlay");
        overlayContainer.classList.add("d-flex");
        overlayContainer.classList.add("flex-column")
        overlayContainer.setAttribute("style",`top:${window.scrollY}px; left:0;`)
        cancelButton(overlayContainer)
        var overlayContent = document.createElement("div");
        overlayContent.classList.add("overlayContent");
        overlayContainer.appendChild(overlayContent)
        var card = document.createElement("div");
        card.classList.add("card");
        var cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top");
        cardImg.classList.add("imgFit")
        cardImg.setAttribute("src" ,`images/${this.getAttribute("data-refer-to")}`)
        card.appendChild(cardImg);
        overlayContent.appendChild(card)
        var cardBody = createingCardBody()
        card.appendChild(cardBody)
        document.body.appendChild(overlayContainer);
        document.body.setAttribute("style","overflow:hidden");
        tinyImages(cardBody.children , cardImg)
        
        
    })
    
}

function createingCardBody(){
    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.classList.add("d-flex")
    for(var i = 0 ; i<4 ; i++){
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("src",`images/${imags[i]}`)
        img.setAttribute("data-href",`${imags[i]}`)
        div.appendChild(img)
        cardBody.appendChild(div)
    }
    return cardBody
}

function tinyImages(div ,cardImg){
    for(var i = 0 ; i<div.length;i++){
        div[i].addEventListener("click" , function(){
           var img = this.children[0].getAttribute("data-href");
           cardImg.setAttribute("src" , `images/${img}`)
        })
        
    }
}

function cancelButton(overlay){
var button = document.createElement("button");
button.textContent="X";
button.classList.add("btn");
overlay.appendChild(button)
button.addEventListener("click" , function(){
    overlay.remove()
    document.body.setAttribute("style","overflow:visible")
})
}

function ButtonCategories(items , cards){
    for(var i = 0 ; i <items.length;i++){
        items[i].addEventListener("click" , function(){
            for (var x = 0 ;x<cards.length;x++){
                if (this.getAttribute("data-type")!=cards[x].getAttribute("data-type")){
                    if (cards[x].parentElement.classList.contains("show")){
                        cards[x].parentElement.classList.remove("show");
                    }
                    cards[x].parentElement.classList.add("hide")
                }
                else{
                    cards[x].parentElement.classList.add("show")
                }
                if (this.getAttribute("data-type")=="all"){
                    cards[x].parentElement.classList.add("show")
                }
            }
        })
    }
}

ButtonCategories(categoriesButton , collectionsItems)

dragButton.addEventListener("click" , function(){
    var dragContent = document.querySelector(".contact-info");

    if (dragContent.classList.contains("pull")) {
        dragContent.classList.remove("pull")
    }
    else{
        dragContent.classList.add("pull")
    }
})