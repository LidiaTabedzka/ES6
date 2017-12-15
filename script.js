class App extends React.Component {
    render() {
        return (
            <div>
                <nav class="controls">
                    <h1>STOPWATCH</h1>
                    <a href="#" id="start" onclick={this.start}>Start</a>
                    <a href="#" id="stop" onclick={this.stop}>Stop</a>
                    <a href="#" id="reset" onclick={this.restart}>Reset</a>
                    <a href="#" id="save" onclick={this.save}>Save</a>
                    <a href="#" id="clear" onclick={this.clear}>Clear board</a>
                </nav>
                <div class="stopwatch"></div>
                <h2>Your times list:</h2>
                <ul class="results"></ul>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);