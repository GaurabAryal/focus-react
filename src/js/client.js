import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import styles from '../stylesheets/main.css';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1 className={cx('text-center', styles.indigo)}>This is one cool app!</h1>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
