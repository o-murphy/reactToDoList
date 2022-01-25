import React, {Component} from "react";
import './search-panel.css'


export default class SearchPanel extends Component {

    state = {
        // label: '',  // unused
        term: ''
    }

    /** my own way **/
    // onChange = (e) => {
    //     this.setState({
    //         label: e.target.value
    //     })
    //     this.props.onTextFilter(e.target.value)
    // }

    /** recommended way **/
    onChange = (e) => {
        const term = e.target.value
        this.setState({ term });
        this.props.onSearch(term)
    };

    render() {
        return (
            <input className='search-input' placeholder='Type to search'
                   onChange={this.onChange}
                   // value={this.state.label}
                   value={this.state.term}
            />
        )
    }
}
