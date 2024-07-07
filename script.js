let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGamebtn = document.querySelector("#newGame-btn");
let menuBtn = document.querySelector("#menu-btn");
let winContainer = document.querySelector(".wincontainer");
let iniContainer = document.querySelector(".inicontainer");
let msg = document.querySelector("#winmsg");
let iniNewBtn = document.querySelector("#iniNewGame-btn");
let hidden = document.querySelector(".hidden");


let turnO = true;


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
iniNewBtn.addEventListener("click", () =>{
    hidden.classList.remove("hidden");
    iniContainer.classList.add("hide");

})
menuBtn.addEventListener("click" , () => {
    hidden.classList.add("hidden");
    iniContainer.classList.remove("hide");
    winContainer.classList.add("hide");
    resetGame();
})
let btnCount = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        btnCount++;
        checkWinner();
        draw();
    }
    );
});
const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";

    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner} `;
    winContainer.classList.remove("hide");
    disabledBoxes();
};
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;

        if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
            if (pos1Value === pos2Value && pos2Value === pos3Value) {
                showWinner(pos1Value);
                reset.classList.add("hide");
                btnCount = 0;
            }
        
        }
    }
};

const draw = () => {
    if (btnCount === 9) {
        msg.innerText = `Match Draw`;
        winContainer.classList.remove("hide");
        disabledBoxes();
        reset.classList.add("hide");

    }
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    winContainer.classList.add("hide");
    reset.classList.remove("hide");
    btnCount = 0;


}

newGamebtn.addEventListener("click" , resetGame);
reset.addEventListener("click" , resetGame);
