const canvas = document.querySelector(".canvas")


const startBtn = document.querySelector('#start')

const restartBtn = document.querySelector('#restart')
const scoreDisplay = document.querySelector('#score')
const startScrn = document.querySelector('.startScreen')
const reappear = document.querySelector('.appear')
const ctx = canvas.getContext("2d")

// ctx.fillRect(50,0,50,50)

let score = 0
const scale = 50;
const rows = canvas.height / scale
const columns = canvas.width / scale
let previousDirection = "Right"
const snake  = new Snake()
const fruit = new Fruit()
// console.log(snake.tail)

// if(snake.tail == null){
//     console.log('Tail is empty')
// }

fruit.firstLocation()
snake.update()
    

startBtn.addEventListener('click', ()=> {
    startScrn.style.display = "none"
    reappear.style.display = "block"
    let timerId = setInterval(myTimer, 100)
    function myTimer(){
        // console.log(snake.tail)
        if(snake.check()){
            clearInterval(timerId)
            window.alert('Game Over')
            console.log("Game Over")
        }
        ctx.clearRect(0,0, canvas.width, canvas.height)
        
        fruit.draw()
        snake.update()
        if(snake.check()){
            clearInterval(timerId)
            window.alert('Game Over')
            console.log("Game Over")
        }
        snake.draw()
        
        if(snake.eat(fruit)){
            score += 10
            scoreDisplay.innerHTML = score
            fruit.pickLocation(snake.tail)
            snake.draw()
        }
    }
})

restartBtn.addEventListener('click', () =>{
    window.location.reload()
})

window.addEventListener('keydown', (e) => {
    
    let direction = e.key.replace('Arrow', '')
    
    let changedDirection = snake.changeDirection(direction, previousDirection)
    previousDirection = changedDirection
    
})