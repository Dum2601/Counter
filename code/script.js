import { Count } from './exports/counting.js'


const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const resetBtn = document.getElementById('resetBtn')
const pauseBtn = document.getElementById('pauseBtn')


const count = new Count(box1, box2, box3, resetBtn, pauseBtn)
count.showDisplay()

pauseBtn.addEventListener('click', () => 
{

    count.pauseButton()

})

resetBtn.addEventListener('click', () => 
{

    count.resetButton()

})

