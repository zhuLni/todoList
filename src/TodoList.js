
import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    constructor (props) {
        super(props);

        //当state或props改变时，render函数重新执行
        this.state = {
            inputValue: '',
            list: []
        };

        //输入框输入内容
        this.handleChange = this.handleChange.bind(this);
        //提交，添加进列表
        this.handleSubmit = this.handleSubmit.bind(this);
        //删除当前点击项
        this.handleDelete = this.handleDelete.bind(this);
    }

    //input输入改变
    handleChange () {
        const value = this.input.value;
        //异步setState，
        this.setState(() => ({
            inputValue: value
        }));
    }

    //提交添加UI列表
    handleSubmit () {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }), () => { //回调函数
            console.log(this.ul.querySelectorAll('li').length);
        });
    }

    //删除当前点击item
    handleDelete (index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {
                list: list
            }
        });
    }

    //添加列表页面
    handleHtml () {
        const list = [...this.state.list];
        return list.map((item, index) => {
            return (
                <TodoItem
                    item={item}
                    key={item}
                    index={index}
                    handleDelete={this.handleDelete}
                />
            )
        })
    }

    //在页面挂载前执行，即render前
    componentWillMount () {
        console.log('componentWillMount');
    }

    //在页面挂载后执行， 即render后
    componentDidMount () {
        console.log('componentDidMount');
    }

    //在更新前调用，如果返回true，往下执行，否则在这儿停止
    shouldComponentUpdate () {
        console.log('shouldComponentUpdate');
        return true;
    }

    /*
    *   组件更新前，shouldComponentUpdate之后，
    *   如果shouldComponentUpdate返回true，则执行
    *   如果shouldComponentUpdate返回false,则不执行
    * */
    componentWillUpdate () {
        console.log('componetWillUpdate');
    }

    //在更新之后执行，render后
    componentDidUpdate () {
        console.log('componentDidUpdate');
    }

    render () {
        console.log('render');
        return (
            <Fragment>
                <div>
                    <label htmlFor="inputValue">输入字符:</label>
                    <input type="text"
                           id="inputValue"
                           onChange={this.handleChange}
                           value={this.state.inputValue}
                           ref={(input) => {this.input = input}}
                    />
                    <button onClick={this.handleSubmit}>提交</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                    {
                        this.handleHtml()
                    }
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;




