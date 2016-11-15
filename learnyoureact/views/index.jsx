import React from 'react';

export default class TodoBox extends React.Component {
  render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data = {this.props.data} />
        <TodoForm />
      </div>
    );
  }
}

class TodoList extends React.Component {
    render() {
        var todo = this.props.data.map(function(obj) { return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>});
        return (
            <div className="todoList">
                <table style={style.table}>
                    <tbody>
                    {todo}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {checked: false}
  }

  render() {
      var rowContent = this.state.checked ? style.checkedTodo : style.notCheckedTodo;
      return (
        <tr style={rowContent}>
          <td style={style.tableContent}>
            <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
          </td>
          <td style={style.tableContent}>{this.props.title}</td>
          <td style={style.tableContent}>{this.props.children}</td>
        </tr>
      );
  }

  handleChange(e) {
    this.setState(
      {checked: e.target.checked},
      function () {
        console.log(this.state.checked);
      }
    );
  }
}

Todo.propTypes = {
    title: React.PropTypes.string.isRequired
};

class TodoForm extends React.Component {
  render() {
      return (
          <div className="todoForm">
              I am a TodoForm.
          </div>
      );
  }
}

let style = {
    table: {
        border: '2px solid black'
    },
    checkedTodo: {
        textDecoration: "line-through"
    },
    notCheckedTodo: {
        textDecoration: "none"
    },
    tableContent: {
        border: '1px solid black'
    }
};
