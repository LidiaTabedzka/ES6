class Stopwatch {
    constructor(display) {
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
    }
    //Funkcja resetująca czas
    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }
    //Funkcja wyświetlająca czas na stronie
    print() {
        this.display.innerText = this.format(this.times);
    }
    //Funkcja formatująca czas na minuty, sekundy, minisekundy
    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }
    //Funkcje uruchamiająca stoper
    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }
    step() {
        if (!this.running) return;
        this.calculate();
        this.print();
    }
    calculate() {
        this.times.miliseconds += 1;
        if (this.times.miliseconds >= 100) {
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }
        if (this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }
    //Funkcja zatrzymująca stoper
    stop() {
        this.running = false;
        clearInterval(this.watch);
    }
    //Funkcja zatrzymująca stoper
    restart() {
        this.reset();
        this.print(this.times);
    }
    //Funkcja zapisująca czas na tablicy wyników
    save() {
        const $newTime = $('<li>').text(this.format(this.times));
        $('.results').append($newTime);
    }
    //Funkcja resetująca tablicę wyników
    clear() {
        $('.results').text("");
    }
}

const stopwatch = new Stopwatch(document.querySelector('.stopwatch'));

const startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => stopwatch.restart());

const saveButton = document.getElementById('save');
saveButton.addEventListener('click', () => stopwatch.save());

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => stopwatch.clear());

//Funkcja dodająca 0 z przodu w przypadku jednocyfrowych liczb
function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}