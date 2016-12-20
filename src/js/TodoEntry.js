import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import styles from '../stylesheets/TodoEntry.css';
import FontAwesome from 'react-fontawesome';

class TodoEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className='col-lg-11'>
        <div className={styles.todo}>
          <div className={styles.contentDiv}>
            <div className={styles.todoText}>
              <p className={cx(styles.promptLight)}>
                {this.props.content}
              </p>
            </div>
            <div className={styles.actionDiv}>
              <p className={cx(styles.prompt, styles.actionText, styles.noselect)}
                >
                  MARK AS DONE
              </p>
              <p className={cx(styles.prompt, styles.actionText, styles.noselect)}
                onClick={() => this.props.sendContentToSidebar(this.props.content)}>
                  START TASK
              </p>
              <p className={cx(styles.prompt, styles.actionText, styles.noselect)}
                onClick={() => this.props.deleteTodo(this.props.content)}>
                  DELETE
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TodoEntry.propTypes = {
  content: React.PropTypes.string.isRequired,
  sendContentToSidebar: React.PropTypes.func.isRequired,
  deleteTodo: React.PropTypes.func.isRequired
};

export default TodoEntry;
