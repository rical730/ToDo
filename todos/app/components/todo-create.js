/*
实现TodoList的创建功能

TodoCreate组件实质是一个表单，一个表单域和提交按钮。
button的点击事件会触发form的onsubmit事件。
因此需要定义form的事件，同时给表单域提供了一个ref属性，用于react引用表单域对象。
 */

import React from 'react';

class TodoCreate extends React.Component {

	constructor(props){
        super(props)
        this.state = {
            error: null
        }
    }

    renderError(){
        if (this.state.error){
            return <div className="alert alert-error">{this.state.error}</div>
        }
        return null
    }

	handleCreate(event){
		event.preventDefault()
        const task = this.refs.createInput.value

        const error =  this.props.validateTask(task)
        if (error){
            this.setState({error: error})
            return 
        }

		//调用App组件的createTask函数用于操作todo数据
		this.props.createTask(task);
		this.refs.createInput.value = ''
        this.setState({error: null})
	}

	render() {
		return (
			<div className="row">
                <form onSubmit={this.handleCreate.bind(this)}>
                    <div className="col-8">
                        <input type="text" className="form-input" placeholder="请输入你需要做的任务" ref="createInput" />
                        {this.renderError()}
                    </div>
                    <div className="col-4">
                        <button className="btn" style={{margin: '0'}}>创建任务</button>
                    </div>
                </form>
            </div>
		)
	}
}

export default TodoCreate
