currentItem = 1;
ItemAmount = 8;
DisplayAmount = 3;
function swipeTo(ItemId){
    document.getElementById("scroller").style.left = -266 * (ItemId - 1) + "px";
    currentItem = ItemId;
    console.log(currentItem);
}

function swipeItem(norp){
    if(norp == "next"){
        if(currentItem > (ItemAmount - DisplayAmount)){
            swipeTo(1);
        }else{
            swipeTo(currentItem +1);
        }
    }else if(norp == "prev"){
        if(currentItem == 1){
            swipeTo(ItemAmount - DisplayAmount + 1);
        }else{
            swipeTo(currentItem -1);
        }
    }
}


window.onload = function(){
    setInterval(function(){ swipeItem('next') }, 4000);
}
