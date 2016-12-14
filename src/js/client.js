import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import styles from '../stylesheets/Main.css';
import Sidebar from './Sidebar.js';

class Main extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className={cx('col-sm-4 col-lg-3')}>
            <div className={styles.backgroundLeft}>
              <Sidebar/>
            </div>
          </div>
          <div className={cx('col-sm-8 col-lg-8')}>
            TODO HERE
          </div>
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
