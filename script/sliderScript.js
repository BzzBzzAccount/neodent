function dropFunc(){
    document.getElementById('myDrop').classList.toggle('showMenu');
}
window.onclick = function(event){
    if(!event.target.matches(openCloseSlide)){
        let dropDown = document.getElementsByClassName('drop-menu')
        for(let i = 0; i < dropDown.length; i++){
            let showDrop = dropDown[i]
            if(showDrop.classList.contains('showMenu')){
                showDrop.classList.remove('showMenu')
            }
        }
    }
}