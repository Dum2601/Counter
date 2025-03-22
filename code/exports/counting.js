export class Count 
{
    constructor(box1, box2, box3, resetBtn, pauseBtn) 
    {
        this.hoursElement = box1
        this.minutesElement = box2
        this.secondsElement = box3
        this.resetBtn = resetBtn
        this.pauseBtn = pauseBtn

        this.isPaused = true
        this.hours = 0
        this.minutes = 0
        this.seconds = 0
        this.intervals = []
    }

    showDisplay() 
    {
      
        if (this.intervals.length === 0) 
            {
            this.intervals.push(setInterval(() => 
                {
                if (!this.isPaused) 
                    {
                    this.seconds++
                    if (this.seconds >= 60) 
                    { 
                        this.seconds = 0
                        this.minutes++
                    }
                    this.updateDisplay()
                }
            }, 1000))

           
                if (!this.isPaused) 
                {
                    if (this.minutes >= 60) 
                    {
                        this.minutes = 0
                        this.hours++
                    }
                    this.updateDisplay()
                }
           

            
                if (!this.isPaused) 
                {
                    if (this.hours >= 24) 
                    { 
                        this.hours = 0
                    }
                    this.updateDisplay()
                }
           
        }
    }

    updateDisplay()
    {
        this.hoursElement.innerHTML = String(this.hours).padStart(2, '0')
        this.minutesElement.innerHTML = String(this.minutes).padStart(2, '0')
        this.secondsElement.innerHTML = String(this.seconds).padStart(2, '0')
    }

    pauseButton() 
    {
        this.isPaused = !this.isPaused

        if (!this.isPaused) 
        {
            
            this.showDisplay()
        }
    }

    resetButton() 
    {
        
        this.hours = 0
        this.minutes = 0
        this.seconds = 0
        this.updateDisplay()

        if (!this.isPaused) 
        {
            this.hours = 0
            this.minutes = 0
            this.seconds = 0
            this.updateDisplay()
        }
    }
}
