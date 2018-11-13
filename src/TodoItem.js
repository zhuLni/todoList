
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor (props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem () {
        const { handleDelete, index } = this.props;
        handleDelete(index)
    }

    /*
    *   执行条件：
    *   1. 一个组件从父组件接受参数
    *   2. 如果这个组件第一次存在父组件中，不会被执行。
    *   3. 如果这个组件之前就存在父组件中，会被执行
    * */
    componentWillReceiveProps () {
        console.log('child componentWillReceiveProps');
    }

    //这个组件即将被页面移除的时候执行
    componentWillUnmount () {
        console.log('child componentWillUnmount');
    }

    shouldComponentUpdate (nextProps, nextState) {
        if (nextProps.item !== this.props.item) {
            return true;
        } else {
            return false;
        }
    }


    render () {
        const { item, test } = this.props;
        //dangerouslySetInnerHTML： 输入的内容不转义，容易被xss攻击，谨慎使用
        // const _html = {__html: item};
        return (
            <li onClick={this.deleteItem}>
                {test} - {item}
            </li>
        )
    }
}

TodoItem.propTypes = {
    item: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    index: PropTypes.number,
    handleDelete: PropTypes.func,
    test: PropTypes.string.isRequired
};

TodoItem.defaultProps = {
    test: 'Hello World'
};

export default TodoItem;