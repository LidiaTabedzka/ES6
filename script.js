class App extends React.Component {
    constructor() {
        super();
        this.state = {
            running: false,
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        };
    }
    //Funkcja formatująca czas na minuty, sekundy, minisekundy
    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }
    //Funkcje uruchamiająca stoper
    start() {
        if (!this.state.running) {
            this.setState({
                running: true
            });
            this.watch = setInterval(() => this.step(), 10);
        } 
    }
    step() {
        if (!this.state.running) return;
        this.calculate();
        this.setState({
            times: {
                minutes: this.state.times.minutes,
                seconds: this.state.times.seconds,
                miliseconds: this.state.times.miliseconds
            }
        });
    }
    calculate() {
        this.state.times.miliseconds += 1;
        if (this.state.times.miliseconds >= 100) {
            this.state.times.seconds += 1;
            this.state.times.miliseconds = 0;
        };
        if (this.state.times.seconds >= 60) {
            this.state.times.minutes += 1;
            this.state.times.seconds = 0;
        };
    }
    //Funkcja zatrzymująca stoper
    stop() {
        this.setState({
            running: false
        });
        clearInterval(this.watch);
    }
    //Funkcja resetująca stoper
    reset() {
        this.setState({
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        });;
    }
    //Funkcja zapisująca czas na tablicy wyników
    save() {
        const $newTime = $('<li>').text(this.format(this.state.times));
        $('.results').append($newTime); 
    }
    //Funkcja resetująca tablicę wyników
    clear() {
        $('.results').text("");
    }

    render() {
        return (
            <div>
                <nav className="controls">
                    <h1>STOPWATCH</h1>
                    <a href="#" id="start" onClick={this.start.bind(this)}>Start</a>
                    <a href="#" id="stop" onClick={this.stop.bind(this)}>Stop</a>
                    <a href="#" id="reset" onClick={this.reset.bind(this)}>Reset</a>
                    <a href="#" id="save" onClick={this.save.bind(this)}>Save</a>
                    <a href="#" id="clear" onClick={this.clear.bind(this)}>Clear board</a>
                </nav>
                <div className="stopwatch">{this.format(this.state.times)}</div>
                <h2>Your times list:</h2>
                <ul className="results"></ul>
            </div>
        );
    }
}

//Funkcja dodająca 0 z przodu w przypadku jednocyfrowych liczb
function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);