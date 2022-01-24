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

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => { this.setState(
        ({done}) => {
            return { done: !done }
        })};

    onMarkImportant = () => { this.setState(
        ({important}) => {
            return { important: !important }
        })};

    render() {
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;

        let classNames = 'todo-list-item'
        if (done) {
            classNames += ' done'
        }

        if (important) {
            classNames += ' important'
        }

        return (
            <span className={classNames}>
            <span
                className='todo-list-item-label'
                onClick={ this.onLabelClick }>
                {label}
            </span>
            <button type='button' className='btn btn-outline-success btn-sm float-end'
                    onClick={this.onMarkImportant}>
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
