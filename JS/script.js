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


// isme hmne perent pr event lagaya hai, pr kyo?

// iska javab hai ek concept kisko kehte hai perent event listener concept.
// isme hm perent element pr event listener lagate hai aur "details.target" ki madad se un elements ko access krenge jinpr event chalega.
// vrna hme total 168 eventlisteners lagane pdenge
// "details.target.innerHTML" se hm uske andr ke text ko access krenge pr vo ek string hoga number nhi
// usko Number() function se number me convert krke execute krna



const play_game = ()=>{
    console.log(document.querySelector(".play_space").addEventListener('click',(details)=>{
        if(Number(details.target.innerHTML)===hittern){
            score += 10;
            document.querySelector(".scr").innerHTML = `${score}`;
            createElem(); // isse elements baar baar refresh honge hr click ke baad
            hitter(); // isse hit box refresh hoga
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
