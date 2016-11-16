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
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            titleValue: "",
            detailValue: ""
        };
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDetail = this.changeDetail.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    removeTodo(key) {
      var todos = this.state.data,
          isDeleted = function(todo) {
            return todo.title !== key;
          };

      this.setState(
        {
          data: todos.filter(isDeleted)
        },
        function () {
          console.dir('removeTodo: ' + this.state.data);
        }
      );
    }

    changeTitle(e) {
      this.setState(
        {titleValue: e.target.value},
        function () {
          console.log('changeTitle: ' + this.state.titleValue);
        }
      );
    }

    changeDetail(e) {
      this.setState(
        {detailValue: e.target.value},
        function () {
          console.log('changeDetail: ' + this.state.detailValue);
        }
      );
    }

    addTodo() {
      var todos = this.state.data;
      todos.push({title: this.state.titleValue, detail: this.state.detailValue});

      this.setState(
        {
          titleValue: "",
          detailValue: "",
          data: todos,
        },
        function () {
          console.log('addTodo: ' + this.state.data);
        }
      );
    }

    render() {
        var that = this,
            createTodo = function(obj) {
              console.dir(obj);
              return <Todo onDelete={that.removeTodo} title={obj.title} key={obj.title}>{obj.detail}</Todo>
            },
            todo = this.state.data.map(createTodo, that);

        return (
            <div className="todoList">
              <div>
                Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} />
                Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} />
                <button onClick={this.addTodo}>Add</button>
              </div>
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
    this._onDelete = this._onDelete.bind(this);
    this.state = {checked: false}
  }

  render() {
      var rowContent = this.state.checked ? style.checkedTodo : style.notCheckedTodo;

      return (
        <tr style={rowContent}>
          <td style={style.tableContent}><button onClick={this._onDelete}>X</button></td>
          <td style={style.tableContent}>
            <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
          </td>
          <td style={style.tableContent}>{this.props.title}</td>
          <td style={style.tableContent}>{this.props.children}</td>
        </tr>
      );
  }

  _onDelete() {
    this.props.onDelete(this.props.title);
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
