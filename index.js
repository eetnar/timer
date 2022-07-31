const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;

circle.setAttribute('stroke-dasharray', perimeter)
//circle.setAttribute('stroke-dashoffset', -100)

//let currentOffset = 0;

let duration;
//let currentOffset = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration){
        console.log("timer started");
        duration = totalDuration;
        
    },
    onTick(timeRemaining){
        //circle.setAttribute('stroke-dashoffset', currentOffset)
        circle.setAttribute('stroke-dashoffset', 
        perimeter * timeRemaining / duration - perimeter)
        //currentOffset = currentOffset - 1;
        //currentOffset = currentOffset - (perimeter / duration);
        console.log("tick tock")

    },
    onComplete(){
        console.log("all done")

    }
});

// every tick should be 1 / initialtime * perimeter
