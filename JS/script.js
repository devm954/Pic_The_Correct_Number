var score = 0;
var hittern = 0;


const createElem = ()=>{
    var circles = "";
    for(let i=1 ; i<=168;i++){
        let rn = Math.floor(Math.random()*10);
        circles += `<div class= "circle" >${rn}</div>`

    }
    document.querySelector(".play_space").innerHTML = circles;
        
}

const hitter= ()=>{
    hittern =Math.floor(Math.random()*10);
    document.querySelector(".hit").textContent = hittern
}

var timer = 60;

function runtime(){
    setInterval(()=>{
            if(timer>0){
                timer--;
                document.querySelector(".tim").textContent = `${timer}`;
            }
            else{
                clearInterval(timer);
                document.querySelector(".play_space").innerHTML = "<h1>Game Over</h1>"
            }
    },1000)
}



const play_game = ()=>{
    console.log(document.querySelector(".play_space").addEventListener('click',(details)=>{
        if(Number(details.target.innerHTML)===hittern){
            score += 10;
            document.querySelector(".scr").innerHTML = `${score}`;
            createElem();
            hitter();
        }
        else {
            score -= 10;
            document.querySelector(".scr").innerHTML = `${score}`;
            createElem();
            hitter();
        }
    }))
}

createElem();
runtime();
hitter();
play_game();
