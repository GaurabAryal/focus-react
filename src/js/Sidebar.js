import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import styles from '../stylesheets/Sidebar.css';
import FontAwesome from 'react-fontawesome';

let currentTaskMinutes = 10;
class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // first timer for pomodoro
      minutes: 25,
      seconds: 0,
      secondsToDisplay: '00', // handles single digits
      intervalId: null,
      intervalIsRunning: false,
      timerIsPaused: false,
      timerTitle: 'pomodoro',
      // second timer for current task
      minutesCurrent: 10,
      secondsCurrent: 0,
      secondsToDisplayCurrent: '00',
      intervalIdCurrent: null,
      intervalIsRunningCurrent: false,
      timerIsPausedCurrent: false
    };
  }

  componentDidMount() {

  }

  startTimer(minutes) {
    let self = this;
    clearInterval(this.state.intervalId);
    this.setState(
      {
        minutes: minutes,
        seconds: 0,
        secondsToDisplay: '00',
        intervalIsRunning: false,
        timerIsPaused: false
      }
    );
    console.log('set timer with length of: ', minutes);
    this.tickSeconds();
    if (minutes === 5) {
      this.setState({timerTitle: 'short break'});
    } else if (minutes === 10) {
      this.setState({timerTitle: 'long break'});
    } else {
      this.setState({timerTitle: 'pomodoro'});
    }
  }

  tickMinutes() {
    this.countdownMinutes();
  }

  tickSeconds() {
    let self = this;
    this.setState(
      {
        intervalId: setInterval(this.countdownSeconds.bind(self), 1000),
        intervalIsRunning: true
      }
    );
  }

  countdownMinutes() {
    console.log('MINUTE:', this.state.minutes);
    let minute = this.state.minutes;
    if (minute > 0) {
      this.setState({minutes: minute - 1});
    }
  }

  countdownSeconds() {
    if (!this.state.timerIsPaused) {
      let self = this;
      let second = this.state.seconds;
      if (second > 0) {
        this.setState({seconds: second - 1});
      } else if (second === 0){
        this.setState(
          {
            seconds: 59,
            secondsToDisplay: 59
          }
        );
        this.countdownMinutes();
      }
      console.log(this.state.seconds);
      // Format seconds (prepend 0 if single digit)
      if (this.state.seconds.toString().length === 2) {
        this.setState({secondsToDisplay: this.state.seconds});
      } else if (this.state.seconds.toString().length === 1) {
        this.setState({secondsToDisplay: '0' + this.state.seconds.toString()});
      }
    }
  }

  handleStartClick() {
    let self = this;
    if (!this.state.intervalIsRunning) {
      this.setState({intervalId: setInterval(this.countdownSeconds.bind(self), 1000)});
    }
    this.setState(
      {
        timerIsPaused: false,
        intervalIsRunning: true
      }
    );
  }

  handlePauseClick() {
    if (this.state.intervalIsRunning) {
      this.setState({timerIsPaused: true});
    }
  }

  handleResetClick() {
    clearInterval(this.state.intervalId);
    if (this.state.timerTitle === 'short break') {
      this.setState(
        {
          minutes: 5,
          seconds: 0,
          secondsToDisplay: '00',
          intervalIsRunning: false,
          timerIsPaused: false
        }
      );
    } else if (this.state.timerTitle === 'long break') {
      this.setState(
        {
          minutes: 10,
          seconds: 0,
          secondsToDisplay: '00',
          intervalIsRunning: false,
          timerIsPaused: false
        }
      );
    } else {
      this.setState(
        {
          minutes: 25,
          seconds: 0,
          secondsToDisplay: '00',
          intervalIsRunning: false,
          timerIsPaused: false
        }
      );
    }
  }

  startTimerCurrent(minutes) {
    let self = this;
    clearInterval(this.state.intervalIdCurrent);
    this.setState(
      {
        minutesCurrent: minutes,
        secondsCurrent: 0,
        secondsToDisplayCurrent: '00',
        intervalIsRunningCurrent: false,
        timerIsPausedCurrent: false
      }
    );
    console.log('set current task timer with length of: ', minutes);
    this.tickSecondsCurrent();
  }

  tickMinutesCurrent() {
    this.countdownMinutesCurrent();
  }

  tickSecondsCurrent() {
    let self = this;
    this.setState(
      {
        intervalIdCurrent: setInterval(this.countdownSecondsCurrent.bind(self), 1000),
        intervalIsRunningCurrent: true
      }
    );
  }

  countdownMinutesCurrent() {
    console.log('MINUTE Current task:', this.state.minutesCurrent);
    let minute = this.state.minutesCurrent;
    if (minute > 0) {
      this.setState({minutesCurrent: minute - 1});
    }
  }

  countdownSecondsCurrent() {
    if (!this.state.timerIsPausedCurrent) {
      let self = this;
      let second = this.state.secondsCurrent;
      if (second > 0) {
        this.setState({secondsCurrent: second - 1});
      } else if (second === 0){
        this.setState(
          {
            secondsCurrent: 59,
            secondsToDisplayCurrent: 59
          }
        );
        this.countdownMinutesCurrent();
      }
      console.log(this.state.secondsCurrent);
      // Format seconds (prepend 0 if single digit)
      if (this.state.secondsCurrent.toString().length === 2) {
        this.setState({secondsToDisplayCurrent: this.state.secondsCurrent});
      } else if (this.state.secondsCurrent.toString().length === 1) {
        this.setState({secondsToDisplayCurrent: '0' + this.state.secondsCurrent.toString()});
      }
    }
  }

  handleStartClickCurrent() {
    let self = this;
    if (!this.state.intervalIsRunningCurrent) {
      this.setState({intervalIdCurrent: setInterval(this.countdownSecondsCurrent.bind(self), 1000)});
    }
    this.setState(
      {
        timerIsPausedCurrent: false,
        intervalIsRunningCurrent: true
      }
    );
  }

  handlePauseClickCurrent() {
    if (this.state.intervalIsRunningCurrent) {
      this.setState({timerIsPausedCurrent: true});
    }
  }

  handleResetClickCurrent() {
    clearInterval(this.state.intervalIdCurrent);
    this.setState(
      {
        minutesCurrent: currentTaskMinutes,
        secondsCurrent: 0,
        secondsToDisplayCurrent: '00',
        intervalIsRunningCurrent: false,
        timerIsPausedCurrent: false
      }
    );
  }

  setCurrentTask(task) {
    this.setState({currentTask: task});
  }

  render() {
    return (
      <div>
        <div className={cx('row', styles.sidebar, 'animated fadeInLeft')}>
          <h2 className={cx(styles.appTitle, styles.promptLight)}>
            Focus
          </h2>
					<div className={cx(styles.pomodoro, 'animated fadeIn')}>
            <h4 className={cx(styles.promptLight, styles.cardTitle1, 'pull-left animated fadeIn')}>
              {this.state.timerTitle}
            </h4>
						<h1 className={cx(styles.prompt, styles.time, 'text-center')}>
              <span id='timer'>
                {this.state.minutes}:{this.state.secondsToDisplay}
              </span>
            </h1>
						<div className={cx(styles.pushDown2)}>
							<div className={cx(styles.btnWidth)} onClick={this.handleStartClick.bind(this)}>
								<h5 className={cx('text-center', styles.btnText, styles.prompt, styles.noselect)}>
                  START
                </h5>
							</div>
							<div className={cx(styles.btnWidth)} onClick={this.handlePauseClick.bind(this)}>
								<h5 className={cx('text-center', styles.btnText, styles.prompt, styles.noselect)}>
                  STOP
                </h5>
							</div>
							<div className={cx(styles.btnWidth)} onClick={this.handleResetClick.bind(this)}>
								<h5 className={cx('text-center', styles.btnText, styles.prompt, styles.noselect)}>
                  RESET
                </h5>
							</div>
						</div>
						<div>
							<div onClick={this.startTimer.bind(this, 25)} className={cx(styles.btnColor1)}>
								<h5 className={cx('text-center', styles.whiteButtonText, styles.prompt, styles.noselect)}>
                  POMODORO
                </h5>
							</div>
							<div onClick={this.startTimer.bind(this, 5)} className={cx(styles.btnColor2)}>
								<h5 className={cx('text-center', styles.whiteButtonText, styles.prompt, styles.noselect)}>
                  SHORT&nbsp;BREAK
                </h5>
							</div>
							<div onClick={this.startTimer.bind(this, 10)} className={cx(styles.btnColor3)}>
								<h5 className={cx('text-center', styles.whiteButtonText, styles.prompt, styles.noselect)}>
                  LONG&nbsp;BREAK
                </h5>
							</div>
						</div>
					</div>
          <div className={cx(styles.currentTask, 'animated fadeIn')}>
            <h4 className={cx(styles.promptLight, styles.cardTitle2, 'pull-left animated fadeIn')}>
              current task
            </h4>
            {(!this.props.currentTask) &&
              <p className={cx(styles.promptLight, styles.currentTodo)}>
                click "start task" in the todo list to change the selected task
              </p>
            }
            {(this.props.currentTask) &&
              <p className={cx(styles.promptLight, styles.currentTodo)}>
                {this.props.currentTask}
              </p>
            }
						<h1 className={cx(styles.prompt, styles.time, 'text-center')}>
              <span id='timer'>
                {this.state.minutesCurrent}:{this.state.secondsToDisplayCurrent}
              </span>
            </h1>
						<div className={cx(styles.pushDown2)}>
							<div className={cx(styles.btnWidth)} onClick={this.handleStartClickCurrent.bind(this)}>
								<h5 className={cx('text-center', styles.btnText, styles.prompt, styles.noselect)}>
                  START
                </h5>
							</div>
							<div className={cx(styles.btnWidth)} onClick={this.handlePauseClickCurrent.bind(this)}>
								<h5 className={cx('text-center', styles.btnText, styles.prompt, styles.noselect)}>
                  STOP
                </h5>
							</div>
							<div className={cx(styles.btnWidth)} onClick={this.handleResetClickCurrent.bind(this)}>
								<h5 className={cx('text-center', styles.btnText, styles.prompt, styles.noselect)}>
                  RESET
                </h5>
							</div>
						</div>
					</div>
				</div>
				<div className={cx(styles.links, 'text-center')}>
					<a className={styles.madeWithLove} target='_blank' href='http://jeremyukim.com'>
            <p style={{fontSize: '0.85em'}} className={cx(styles.prompt, styles.noselect)}>
              made with <FontAwesome name='heart'/> and react.js
            </p>
          </a>
				</div>
      </div>
    );
  }
}

export default Sidebar;
