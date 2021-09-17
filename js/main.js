let board = document.querySelector("#board")
const SQUARES_NUMBER = 700
let colors = ["#CC0099", "#FFFF00", "#000099", "#00FF66", "#00FFFF", "#FF6600"]

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement("div")
    square.classList.add("square")

    let setColor = (item) => {
        let color = getRandomColor()
        item.style.background = color
        item.style.boxShadow = `0 0 2px ${color}`
        item.style.transform = "scale(1.2)"
    }
    let removeColor = (item) => {
        item.style.background = "#111"
        item.style.boxShadow = "0 0 2px #000"
        item.style.transform = "scale(1)"
    }
    let getRandomColor = () => {
        let index = Math.floor(Math.random() * colors.length)
        return colors[index]
    }

    square.addEventListener("mouseover", () => setColor(square))

    square.addEventListener("mouseleave", () => removeColor(square))

    board.append(square)  // add child in board HTML
}



