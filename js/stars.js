generate('circle',300) ; 
function generate(classname,number){
    for(let i = 0 ; i<number;i++){
        var element = document.createElement('div') ; 
        element.classList.add(classname) ; 
        
        element.style.left = Random(0,screen.width)+"px";
        element.style.top = Random(0,screen.height)+"px" ; 
        element.style.animationDelay = Math.random()+"s" ; 
        if(i % 2 == 0){
            element.classList.add('escape-top'); 
        }
        else {
            element.classList.add('escape-bottom') ; 
        }
        document.body.appendChild(element) ;
    }
}
function Random(min, max) {
    return Math.random() * (max - min) + min;
}
