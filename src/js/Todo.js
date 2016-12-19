import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import styles from '../stylesheets/Todo.css';
import FontAwesome from 'react-fontawesome';
import TodoEntry from './TodoEntry.js';

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    let newTodo = document.getElementById('newTodo');
    newTodo.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
          this.addNewTodo();
      }
    });
  }

  addNewTodo() {
    let newTodo = document.getElementById('newTodo').value;
    if (newTodo === '') {
      return;
    }
    let tempTodos = this.state.todos;
    tempTodos.push(newTodo);
    this.setState({todos: tempTodos});
    document.getElementById('newTodo').value = '';
  }

  deleteTodo(text) {
    let tempTodos = this.state.todos;
    let index = tempTodos.indexOf(text);
    tempTodos.splice(index, 1);
    this.setState({todos: tempTodos});
  }

  renderTodos() {
    let renderArray = [];
    for (let i = 0; i < this.state.todos.length; i++) {
      let content = this.state.todos[i];
      renderArray.push(this.renderSingleTodo(content));
    }
    return renderArray;
  }

  renderSingleTodo(content) {
    return <TodoEntry content={content}
      sendContentToSidebar={this.props.startTask} deleteTodo={this.deleteTodo.bind(this)}/>;
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-lg-8 col-xl-6'>
            <h2 className={cx(styles.promptLight, styles.title)}>Tasks for Today</h2>
            <input id='newTodo' type='text' placeholder='What needs to be done?' className={styles.textField}/>
          </div>
        </div>
        <div className='row'>
          <div className={styles.containTodo}>
            {this.renderTodos()}
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
