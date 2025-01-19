let boxes =    document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let turn = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.style.pointerEvents = "none";
    });
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn) {
            box.innerText = "X";
            box.style.color = "red";
            turn = false;
        } else {
            box.innerText = "O";
            box.style.color = "green";
            turn = true;
        }
        box.style.pointerEvents = "none"; 
        checkWinner();
    });
});

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = ""; 
        box.style.pointerEvents = "auto";
        box.style.color = ""; 
    });
    turn = true; 
});    

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                alert(`Player ${pos1} wins`);
                disableBoxes();
                return;
            }
        }
    }

    let isDraw = Array.from(boxes).every((box) => box.innerText !== "");
    if (isDraw) {
        disableBoxes();
        alert("It's a draw!");
    }
};

