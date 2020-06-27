import * as React from "react";
import { connect } from 'react-redux';
import { addTodo } from '../actions';

interface Todo {
  title: string;
  userId: number;
};
interface TodoProps {
  loading: boolean;
  todos: Array<Todo>;
  onAddTodo: Function;
};
interface TodoState {
  title: string;
  userId: string;
};

class TodoList extends React.Component<TodoProps, TodoState> {
  state={
    title: '',
    userId: '',
  };

  onChangeTitle = ev => {
    const { value } = ev.target;
    this.setState({ title: value });
  }

  onChangeUserId = ev => {
    const { value } = ev.target;
    this.setState({ userId: value });
  }

  addTodo = async () =>  {
    const { title, userId } = this.state;
    await this.props.onAddTodo({ title, userId });
    this.setState({ title: '', userId: ''});
  }

  render() {
    const { todos, loading } = this.props;
    const { title, userId } = this.state;
    return (
      <div>
        <h3 className="heading">Todo list:</h3>
        <div>Title: <input value = {title} onChange={this.onChangeTitle} /></div>
        <div>UserId: <input value = {userId} onChange={this.onChangeUserId} /></div>
        <button onClick={this.addTodo} disabled={loading || !title}>Add</button>
        {loading && <div>Loading...</div>}
        {todos.map((todo: Todo) => (
          <div key={todo.userId}>
              <div>Todo Title: {todo.title}</div>
              <div>Todo UserId: {todo.userId}</div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    todos: state.todoReducer.todos,
    loading: state.todoReducer.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: (todo: { title: string; userId: string; }) => {
      dispatch(addTodo(todo));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);