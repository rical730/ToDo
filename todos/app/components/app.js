import React from "react"
import TodoList from "./todo-list"
import TodoCreate from "./todo-create"

const todos = [
	{
		task: '新建第一条ToDo事项',
		isCompleted: true
	},
	{
		task: '查看邮件',
		isCompleted: false
	},
	{
		task: '喝水',
		isCompleted: false
	}
]

class App extends React.Component {
	//定义了一些todos数据，然后把这些数据初始化给App组件。
	//再通过TodoList组件的todo props传递给后者。
	//也就是在TodoList内部，它的this.props.todos则为 App组件的this.state.todos。
	constructor(props){
		super(props)
		this.state = {
			todos: todos
		}
	}

	//增加createTask函数用于接收处理TodoCreate组件创建的task数据
	//--状态提升，为了使得子组件可以相互数据通信
	//将这个函数绑定到TodoCreate组件中
	createTask(task){
		this.state.todos.push({
			task: task,
			isCompleted: false
		}) //增加一列Todo
		this.setState({todos: this.state.todos}) //更新Todo列表
	}

	validateTask(task){
        if (!task){
            return '不能创建空白条目哦~'
        }else if (_.find(this.state.todos, todo => todo.task === task)){
            return '你的任务列表里已经有这一项啦~'
        }else{
            return ''
        }
    }

	saveTask(oldTask, newTask){
        const foundTask = _.find(this.state.todos, todo => todo.task === oldTask)
        foundTask.task = newTask
        this.setState({todos: this.state.todos})
    }

    deleteTask(currentTask){
        _.remove(this.state.todos, todo => todo.task === currentTask)
        this.setState({todos: this.state.todos})
    }

    toggleTask(currentTask){
        const foundTask = _.find(this.state.todos, todo => todo.task === currentTask)
        foundTask.isCompleted = !foundTask.isCompleted
        this.setState({todos: this.state.todos})
    }

	render() {
		return (
			<div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <h1>ToDo列表</h1>
                    <TodoCreate todos={this.state.todos}
                        validateTask={this.validateTask.bind(this)}
                        createTask={this.createTask.bind(this)}/>
                    
                    <TodoList todos={this.state.todos}
                              validateTask={this.validateTask.bind(this)}
                              deleteTask={this.deleteTask.bind(this)}
                              toggleTask={this.toggleTask.bind(this)}
                              saveTask={this.saveTask.bind(this)}/>
                </div>
                <div className="col-3"></div>
            </div>
			/* 将saveTask函数传递给子组件*/
		)
	}
}


export default App

