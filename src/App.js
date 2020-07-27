import React, {Component} from 'react';
import List from "./List";


export default class App extends Component {
    state = {
        columns: [
            {id: 1, title: 'To Do', todos: [
                {id: 1, complited: false, title: 'Купить хлеб'},
                {id: 2, complited: true, title: 'Сделать уборку'}]},
            {id: 2, title: 'In Progress', todos: [
                    {id: 1, complited: false, title: 'Учить английский язык'},
                ]
            },
            {id: 3, title: 'Done', todos: [
                    {id: 1, complited: false, title: 'Поспать'},
                    {id: 2, complited: false, title: 'Покормить кошку'}]
            }
        ]
    }
    render() {
        return (
            <div className="container">
                <h1>Tasks</h1>
                <List columns={this.state.columns}/>
            </div>
        );
    }
}
