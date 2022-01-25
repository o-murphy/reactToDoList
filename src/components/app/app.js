import React, {Component} from 'react';

import AppHeader from "../app-header";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import './app.css'


export default class App extends Component {

    maxId = 100

    state = {
        todoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('bla bla bla'),
            this.createTodoItem('foo foo foo')
        ],
        term: ''
    };

    createTodoItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++,
            // hidden: false, // my own prop, unused
        }
    }

    findCurrentIndex(todoData, id) {
        return todoData.findIndex((el) => el.id === id);
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = this.findCurrentIndex(todoData, id)
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
            return {todoData: newArray}
        })
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text)
        this.setState(({todoData}) => {
            const newArray = [...todoData, newItem]
            return { todoData: newArray }
        })
    };

    toggleProperty(arr, id, propName) {
        const idx = this.findCurrentIndex(arr, id)
        const oldItem = arr[idx]
        const newItem = { ...oldItem, [propName]: !oldItem[propName] }
        return [
            ...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)
        ]
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, `done`)
            };
        });
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, `important`)
            };
        });
    };

    /** My own way **/
    // onTextFilter = (text) => {
    //     const {todoData} = this.state
    //     const regex = new RegExp(text, 'i')
    //     const newArray = todoData.map(item => {
    //         if (regex.exec(item.label)) {
    //             return {...item, hidden: false}
    //
    //         } else {
    //             return {...item, hidden: true}
    //         }
    //     })
    //     this.setState(({todoData}) => {
    //         return {
    //             todoData: newArray
    //         }
    //     })
    // }

    /** recomended way **/
    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    onSearch = (term) => {
        this.setState({ term })
    }

    render() {
        const {todoData, term} = this.state
        const visibleItems = this.search(todoData, term)

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className='todo-app'>
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className='top-panel d-flex'>
                    <SearchPanel
                    // onTextFilter={this.onTextFilter} // My own way
                    onSearch={this.onSearch}
                    />
                    <ItemStatusFilter/>
                </div>
                {/*<TodoList todos={todoData} // with search input filter disabled*/}
                <TodoList todos={visibleItems}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                />
                <ItemAddForm
                    addItem={this.addItem}/>
            </div>
        );
    }
}
