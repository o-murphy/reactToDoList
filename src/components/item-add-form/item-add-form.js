import React, {Component} from "react";
import './item-add-form.css'


export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({ label: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.label) {
            this.props.addItem(this.state.label)
            this.setState({ label: '' })
        } else {
            alert('Empty task will not be added')
        }
    }

    render() {
        return (
            <form className='item-add-form d-flex'
                  onSubmit={this.onSubmit}>
                <input type='text' className='form-control'
                       onChange={this.onLabelChange}
                       placeholder="What's need to do?"
                       value={this.state.label} />
                <button className='btn btn-outline-secondary'>
                    Add
                </button>
            </form>
        )
    }
}
