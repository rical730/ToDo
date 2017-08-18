/*

 */

import React from 'react'

class TodoListItem extends React.Component {

	constructor(props) {
		super(props)
		// 借助 isEditing state用于存储修改todo的状态
		this.state = {
			isEditing: false,
            error: null
		}
	}

    onSave(event){
    	event.preventDefault()
    	const oldTask = this.props.task
    	const newTask = this.refs.editInput.value
    	const error = this.props.validateTask(newTask)

    	if (error) this.setState({error: error})

    	//调用父组件的方法
    	this.props.saveTask(oldTask, newTask)
    	this.setState({
    		isEditing: false
    	})
    }

    onToggle(){
        const currentTask = this.props.task
        this.props.toggleTask(currentTask)
    }

    onDelete(){
        const currentTask = this.props.task
        this.props.deleteTask(currentTask)
    }

	onEditing(){
        this.setState({ isEditing: true })

    }

    onCancel(){
        this.setState({ isEditing: false })
    }

    renderError(){
        if (this.state.error){
            return <div className="alert alert-error">{this.state.error}</div>
        }
        return null
    }

	renderActionSection(){
		//编辑状态
		if(this.state.isEditing){
			return (
				//////////////////////?为什么要bind
				<td style={{textAlign: 'center'}}>
                    <button className="btn btn-small" onClick={this.onSave.bind(this)}>保存</button>
                    <button className="btn btn-small" onClick={this.onCancel.bind(this)}>取消</button>
                </td>
			)
		}
		//非编辑状态
		return (
			<td style={{textAlign: 'center'}}>
                <button className="btn btn-small" onClick={this.onEditing.bind(this)}>编辑</button>
                <button className="btn btn-small" onClick={this.onDelete.bind(this)}>删除</button>
            </td>
		)
	}

	renderTaskSection(){
		//编辑状态
        if (this.state.isEditing){
            return (
                <td>
                    <form onSubmit={this.onSave.bind(this)}>
                        <input className="form-input" type="text" defaultValue={this.props.task} ref="editInput"/>
                        {this.renderError()}
                    </form>
                </td>
            )
        }
        //非编辑状态
        
	    const taskStyle = {
		  	color: this.props.isCompleted ? 'green' : 'red',
		  	cursor: 'pointer'
		}
        
        // 增加 taskStyle 和 完成状态的删除线
        if(!this.props.isCompleted){
        	return <td onClick={this.onToggle.bind(this)} style={taskStyle}>{this.props.task}</td>
        }
        return <td onClick={this.onToggle.bind(this)} style={taskStyle}><strike>{this.props.task}</strike></td> 
    }

	render() {
		return (
			/*
			<tr key={this.props.index}>
				<td>{this.props.task}</td><td>{this.props.isCompleted ? 'done' : 'undo'}</td>
			</tr>
			*/
			<tr key={this.props.index}>
                {this.renderTaskSection()}
                {this.renderActionSection()}
            </tr>
		)
	}
}

export default TodoListItem
