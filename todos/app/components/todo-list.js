/*
TodoList是用于展示todo列表的组件
 */
import React from "react"
import _ from 'lodash'
import TodoListHeader from "./todo-list-header"
import TodoListItem from "./todo-list-item"


class TodoList extends React.Component {

	renderItem(){
		// return _.map(this.props.todos, (todo,index) => {
		// 	return (
		// 		//由于 react使用了virtrul-dom来实现操作dom的性能。
		// 		//那么针对一些列表元素的dom，都需要给他们一个id，
		// 		//这个id可以使用 key={index} 来指定。
		// 		<TodoListItem todo={todo} key={index} saveTask={this.props.saveTask} />
		// 		// 传递saveTask函数方法
		// 	)
		// })
		// 除去 this.props 中的 todos属性，减少传递
        const props = _.omit(this.props, 'todos');
		// 将 todo 对象直接传递
		// {...todo}写法可以把todo({task: task value, isCompleted: isCompleted value})对象传递给子组建，
		// 相当于给todo对象进行解包,使用 ... 封包和解包的功能是为了减少 props 属性的传递
		return _.map(this.props.todos, (todo, index) => {
            return <TodoListItem key={index} {...todo}{...props} />
            //使用了lodash的omit方法，将todos属性除去，因为map的时候，会针对当前的item传递todo，
            //因此，不需要把props中的todos传递了。通过是用...功能，省去了一大堆props的书写。
            //{...props}取代了saveTask={this.props.saveTask} toggleTask={this.props.toggleTask}
        })
	}

	render() {
		return (
			<table className="table table-striped">
				<TodoListHeader />
				<tbody>
					{this.renderItem()}
				</tbody>
			</table>
		)
	}
}

export default TodoList;