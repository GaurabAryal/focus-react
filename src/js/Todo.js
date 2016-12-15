import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import styles from '../stylesheets/Todo.css';
import FontAwesome from 'react-fontawesome';

class Todo extends React.Component {
  render() {
    return (
      <div>
        <input type='text' placeholder='What needs to be done&#63;' style={{width: '500px'}}/>
      </div>
    );
  }
}

export default Todo;
