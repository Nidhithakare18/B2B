let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    
    if(ul.className == "showData"){
        document.getElementById("bar").className= "material-symbols-outlined";
    }
    else{
        document.getElementById("bar").className= "material-symbols-outlined";
    }
})  


const service_cards = document.querySelector('.service_cards');
firstImg = service_cards.querySelectorAll('.scrd')[0];
arrowIcon = document.querySelectorAll(".service_wrapper span")

let isDragStart = false, prevPageX, prevScrollLeft; 
let firstImgWidth = firstImg.clientWidth;

arrowIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        service_cards.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    })
})

const dragStart = (e) =>{
     isDragStart = true;
     prevPageX = e.pageX;
     prevScrollLeft = service_cards.scrollLeft;
}

const dragging = (e) =>{
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    service_cards.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () =>{
    isDragStart = true;
}

service_cards.addEventListener("mousedown", dragStart);
service_cards.addEventListener("mouseup", dragStop);
service_cards.addEventListener("mousemove", dragging);

//contact 

function connect(){
    let names = document.getElementById("name");
    let num = document.getElementById("number");
    if(name.value == "" && num.value == ""){
        alert("Fill Details")
    }else{
        alert("Thanks For Connecting")
    }

}

