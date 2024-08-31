let boxes  = document.querySelectorAll('.box');
let msg  = document.querySelector('.msg');
let turn0 = true;
let Resetbtn = document.getElementById('Reset');
let newbtn = document.getElementById('new-btn');
let msgCon = document.querySelector('.message-container');

const WinningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const resetgame = () => {
    turn0 = true;
    enablebtn();
    msgCon.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const enablebtn = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    
}

const disbaledbtn = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (win) => {
   msg.innerText = `Congratulations Winner is ${win}`;
   msgCon.classList.remove("hide")
   disbaledbtn();
}

const checkWinner = () => {
    for (let pattern of WinningPattern){
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;

        if(pos1value != "" && pos2value != "" && pos3value != ""){
            if(pos1value === pos2value && pos2value === pos3value) {
                showWinner(pos1value);
            }
        }
    }
}

Resetbtn.addEventListener('click', resetgame);
newbtn.addEventListener('click', resetgame);
