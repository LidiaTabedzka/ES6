"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            running: false,
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            },
            results: []
        };
        return _this;
    }
    //Funkcja formatująca czas na minuty, sekundy, minisekundy


    _createClass(App, [{
        key: "format",
        value: function format(times) {
            return pad0(times.minutes) + ":" + pad0(times.seconds) + ":" + pad0(Math.floor(times.miliseconds));
        }
        //Funkcje uruchamiająca stoper

    }, {
        key: "start",
        value: function start() {
            var _this2 = this;

            if (!this.state.running) {
                this.setState({
                    running: true
                });
                this.watch = setInterval(function () {
                    return _this2.step();
                }, 10);
            }
        }
    }, {
        key: "step",
        value: function step() {
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
    }, {
        key: "calculate",
        value: function calculate() {
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

    }, {
        key: "stop",
        value: function stop() {
            this.setState({
                running: false
            });
            clearInterval(this.watch);
        }
        //Funkcja resetująca stoper

    }, {
        key: "reset",
        value: function reset() {
            this.setState({
                times: {
                    minutes: 0,
                    seconds: 0,
                    miliseconds: 0
                }
            });;
        }
        //Funkcja zapisująca czas na tablicy wyników

    }, {
        key: "save",
        value: function save() {
            this.setState({
                results: [].concat(_toConsumableArray(this.state.results), [this.state.times])
            });
        }
        //Funkcja resetująca tablicę wyników

    }, {
        key: "clear",
        value: function clear() {
            this.setState({
                results: []
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "nav",
                    { className: "controls" },
                    React.createElement(
                        "h1",
                        null,
                        "STOPWATCH"
                    ),
                    React.createElement(
                        "a",
                        { href: "#", id: "start", onClick: this.start.bind(this) },
                        "Start"
                    ),
                    React.createElement(
                        "a",
                        { href: "#", id: "stop", onClick: this.stop.bind(this) },
                        "Stop"
                    ),
                    React.createElement(
                        "a",
                        { href: "#", id: "reset", onClick: this.reset.bind(this) },
                        "Reset"
                    ),
                    React.createElement(
                        "a",
                        { href: "#", id: "save", onClick: this.save.bind(this) },
                        "Save"
                    ),
                    React.createElement(
                        "a",
                        { href: "#", id: "clear", onClick: this.clear.bind(this) },
                        "Clear board"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "stopwatch" },
                    this.format(this.state.times)
                ),
                React.createElement(
                    "h2",
                    null,
                    "Your times list:"
                ),
                React.createElement(
                    "ul",
                    { className: "results" },
                    this.state.results.map(function (singleResult) {
                        return React.createElement(
                            "li",
                            { key: randomString() },
                            _this3.format(singleResult)
                        );
                    })
                )
            );
        }
    }]);

    return App;
}(React.Component);

//Funkcja dodająca 0 z przodu w przypadku jednocyfrowych liczb


function pad0(value) {
    var result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}
//Funkcja generująca losowe id
function randomString() {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var str = '';
    for (var i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
