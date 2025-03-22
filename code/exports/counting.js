export class Count 
{
    constructor(box1, box2, box3) 
    {
        this.hoursElement = box1
        this.minutesElement = box2
        this.secondsElement = box3

        this.hours = 0
        this.minutes = 0
        this.seconds = 0
    }

    showDisplay() 
    {

        setInterval(() => 
        {
            this.hours++
            this.updateDisplay()
        }, 3600 * 1000)

        setInterval(() => 
        {
            this.minutes++
            this.updateDisplay() 
        }, 60 * 1000)

        setInterval(() => 
        {
            this.seconds++
            this.updateDisplay()
        }, 1000); 
    }

    updateDisplay() 
    {
       
        this.hoursElement.innerHTML = String(this.hours).padStart(2, '0')
        this.minutesElement.innerHTML = String(this.minutes).padStart(2, '0')
        this.secondsElement.innerHTML = String(this.seconds).padStart(2, '0')

        
        console.log(`Horas: ${String(this.hours).padStart(2, '0')}`)
        console.log(`Minutos: ${String(this.minutes).padStart(2, '0')}`)
        console.log(`Segundos: ${String(this.seconds).padStart(2, '0')}`)
    }

    stopButton()
    {



    }

    resetButton()
    {

        

    }
}
