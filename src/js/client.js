import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import styles from '../stylesheets/Main.css';
import Sidebar from './Sidebar.js';
import Todo from './Todo.js';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTask: null
    };
  }

  sendContentToSidebar(task) {
    console.log('setting current task to: ', task);
    this.setState({currentTask: task});
    console.log('current task state is: ', this.state.currentTask)
  }

  render() {
    console.log('current task state is: ', this.state.currentTask)
    return (
      <div className={cx('container-fluid', styles.fullPage)}>
        <div className='row'>
          <div className={cx('col-sm-4 col-lg-3')}>
            <div>
              <Sidebar currentTask={this.state.currentTask}/>
            </div>
          </div>
          <div className={cx('col-sm-8 col-lg-9', styles.todo)}>
            <Todo sendContentToSidebar={this.sendContentToSidebar.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
