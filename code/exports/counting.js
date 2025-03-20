export class Count {
    constructor(box1, box2, box3) {
        this.hoursElement = box1
        this.minutesElement = box2
        this.secondsElement = box3

        this.hours = 0
        this.minutes = 0
        this.seconds = 0
    }

    countUp() {
        setInterval(() => {
            this.seconds++
            if (this.seconds === 60) 
            {
                this.seconds = 0
                this.minutes++
            }
            if (this.minutes === 60) 
            {
                this.minutes = 0
                this.hours++;
            }
            this.updateDisplay()
        }, 1000)
    }

    updateDisplay() {

        // Make this method update the hours to print they in page

    }
}
