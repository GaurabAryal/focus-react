import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import styles from '../stylesheets/Main.css';
import Sidebar from './Sidebar.js';
import Todo from './Todo.js';

class Main extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className={cx('col-sm-5 col-lg-3')}>
            <div>
              <Sidebar/>
            </div>
          </div>
          <div className={cx('col-sm-7 col-lg-8', styles.todo)}>
            <Todo/>
          </div>
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
