import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import styles from '../stylesheets/TodoEntry.css';
import FontAwesome from 'react-fontawesome';

class TodoEntry extends React.Component {

  render() {
    return (
      <div className='col-lg-11 col-xl-8'>
        <div className={styles.todo}>
          <div className={styles.contentDiv}>
            <div className={styles.todoText}>
              <p className={cx(styles.promptLight)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className={styles.actionDiv}>
              <p className={cx(styles.prompt, styles.actionText, styles.blue)}>MARK AS DONE</p>
              <p className={cx(styles.prompt, styles.actionText, styles.purple)}>START TASK</p>
              <p className={cx(styles.prompt, styles.actionText, styles.red)}>DELETE</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TodoEntry.propTypes = {
  content: React.PropTypes.string.isRequired,
  sendContentToSidebar: React.PropTypes.func.isRequired
};

export default TodoEntry;
