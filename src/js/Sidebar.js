import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import styles from '../stylesheets/Sidebar.css';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      minutes: 25,
      seconds: 0,
      secondsToDisplay: '00', // handles single digits
      intervalId: null,
      intervalIsRunning: false,
      timerIsPaused: false,
      timerTitle: 'pomodoro'
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
    this.setState({timerIsPaused: false});
  }

  handlePauseClick() {
    if (this.state.intervalIsRunning) {
      this.setState({timerIsPaused: true});
    }
  }

  render() {
    return (
      <div>
        <div className={cx('row', styles.sidebar)}>
          <div className={styles.appTitle}>
            <h2 className={cx(styles.prompt, styles.pushRight)}>focus</h2>
            <p className={cx(styles.prompt, styles.pushRight)}>your personal productivity space</p>
          </div>
					<div className={styles.pomodoro}>
            <h4 className={cx(styles.prompt, styles.cardTitle, 'pull-left')}>{this.state.timerTitle}</h4>
						<h1 className={cx(styles.prompt, styles.pushDown1, styles.time, 'text-center')}>
              <span id='timer'>{this.state.minutes}:{this.state.secondsToDisplay}</span>
            </h1>
						<div className={cx(styles.pushDown2)}>
							<div className={cx(styles.btnWidth)} onClick={this.handleStartClick.bind(this)}>
								<h5 className={cx('text-center', styles.btnText)}>Start</h5>
							</div>
							<div className={cx(styles.btnWidth)}>
								<h5 className={cx('text-center', styles.btnText)} onClick={this.handlePauseClick.bind(this)}>Stop</h5>
							</div>
							<div className={cx(styles.btnWidth)}>
								<h5 className={cx('text-center', styles.btnText)}>Reset</h5>
							</div>
						</div>
						<div>
							<div onClick={this.startTimer.bind(this, 25)} className={cx(styles.btnColor1)}>
								<h5 className={cx('text-center', styles.whiteButtonText)}>POMODORO</h5>
							</div>
							<div onClick={this.startTimer.bind(this, 5)} className={cx(styles.btnColor2)}>
								<h5 className={cx('text-center', styles.whiteButtonText)}>SHORT&nbsp;BREAK</h5>
							</div>
							<div onClick={this.startTimer.bind(this, 10)} className={cx(styles.btnColor3)}>
								<h5 className={cx('text-center', styles.whiteButtonText)}>LONG&nbsp;BREAK</h5>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.links}>
					<a className={styles.whatIsPomodoro} target='_blank' href='https://www.focusboosterapp.com/the-pomodoro-technique'>
            <p className={styles.prompt}>What is Pomodoro?</p>
          </a>
					<a className={styles.madeWithLove} target='_blank' href='http://jeremyukim.com'>
            <p className='prompt'>Made with React</p>
          </a>
				</div>
      </div>
    );
  }
}

export default Sidebar
