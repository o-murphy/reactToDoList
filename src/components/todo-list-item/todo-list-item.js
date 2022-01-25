import React, {Component} from "react";
import './todo-list-item.css'


export default class TodoListItem extends Component {

    /** this.onLabelClick.bind(this) or
     can be defined this way: **/
    // constructor() {
    //     super();
    //     this.onLabelClick = () => {};

    /** using an old way: **/
    //     this.state = {
    //         done: false
    //     }
    // }

    render() {
        const { label, onDeleted,
                onToggleImportant, onToggleDone,
                important, done,
            // hidden  // my own prop, not used
        } = this.props;

        let classNames = 'todo-list-item'
        if (done) {
            classNames += ' done'
        }

        if (important) {
            classNames += ' important'
        }

        return (
            <span className={classNames}
            //      hidden={hidden} // my own way
            >
            <span
                className='todo-list-item-label'
                onClick={ onToggleDone }>
                {label}
            </span>
            <button type='button' className='btn btn-outline-success btn-sm float-end'
                    onClick={ onToggleImportant }>
                <i className="fas fa-exclamation"/>
            </button>
            <button type='button' className='btn btn-outline-danger btn-sm float-end'
                onClick={onDeleted}>
                <i className="fas fa-trash"/>
            </button>
        </span>
        )
    }
}
