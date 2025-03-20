let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')

import { Count } from './code/exports/counting.js'


const count = new Count(box1, box2, box3)

count.countUp()