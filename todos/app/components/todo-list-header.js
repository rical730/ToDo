/*
一个组件文件，用于表示todo应用的表头
 */
import React from 'react'

class TodoListHeader extends React.Component {

	render() {
		return (
			<thead>
				<tr>
					<th>ToDo任务</th>
					<th>操作</th>
				</tr>
			</thead>
		)
	}
}

export default TodoListHeader
