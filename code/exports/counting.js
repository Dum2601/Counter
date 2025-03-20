let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')

// Fará a contagem e substituirá visualmente os itens
export class Count
{

    //Receberá getElements dos ids dos botões
    contructor(box1, box2, box3)
    {

        this.hours = box1
        this.minutes = box2
        this.seconds = box3

    }

    countUp()
    {

        let plusHours = setInterval(() => {

            this.hours++

        }, 3600000)

        let plusMinutes = setInterval(() => {

            this.minutes++

        }, 60000)

        let plusSeconds = setInterval(() => {

            this.seconds++

        }, 1000)

    }

    updateDisplay() 
    {
        let hoursElement = this.hoursElement.textContent
        let minutesElement = this.minutesElement.textContent
        let secondsElement = this.secondsElement.textContent

        hoursElement = this.hours.toString().padStart(2, '0');  
        minutesElement = this.minutes.toString().padStart(2, '0');  
        secondsElement = this.seconds.toString().padStart(2, '0');  

        //Mostrará no console o relógio
        console.log(`Horas: ${this.hours.toString().padStart(2, '0')}, Minutos: ${this.minutes.toString().padStart(2, '0')}, Segundos: ${this.seconds.toString().padStart(2, '0')}`);
    }

}



