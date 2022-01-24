import React, {Component} from "react";
import './todo-list-item.css'


export default class TodoListItem extends Component {

    /** this.onLabelClick.bind(this) or
     can be defined this way: **/
    // constructor() {
    //     super();
    //     this.onLabelClick = () => {};
    // }

    onLabelClick = () => {console.log(`Clicked: ${this.props.label}`)};

    render() {
        const { label, important = false } = this.props;

        const style = {
            color: important ? 'tomato' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        }

        return (
            <span className='todo-list-item'>
            <span
                className='todo-list-item-label'
                style={style}
                onClick={ this.onLabelClick }>
                {label}
            </span>
            <button type='button' className='btn btn-outline-success btn-sm float-end'>
                <i className="fas fa-exclamation"/>
            </button>
            <button type='button' className='btn btn-outline-danger btn-sm float-end'>
                <i className="fas fa-trash"/>
            </button>
        </span>
        )
    }
}
