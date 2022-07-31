class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {

        this.onStart ? this.onStart(this.timeRemaining) : console.log("onStart not defined");
        this.tick();
        this.interval = setInterval(this.tick, 50);
        //this.interval = setInterval(this.tick, 1000);
        //clearInterval(this.interval);
    }

    pause = () => {
        clearInterval(this.interval);
    }

    tick = () => {
        //console.log("this is a tick");
        //const timeRemaining = this.durationInput.value;
        //this.durationInput.value = this.timeRemaining - 1;

        // if there's any time remaining
        if (this.timeRemaining <= 0) {
            this.onComplete ? this.onComplete() : console.log("onComplete not defined");

            // pause the timer
            this.pause();
        } else {
            // tick down the timer
            this.timeRemaining = this.timeRemaining - .05;
            //this.timeRemaining = this.timeRemaining - 1;
            this.onTick ? this.onTick(this.timeRemaining) : console.log("onTick not defined");
        }
        //console.log(this.timeRemaining, " seconds")
        //console.log(typeof this.timeRemaining)
    }

    get timeRemaining() {
       return +this.durationInput.value;
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }


}
