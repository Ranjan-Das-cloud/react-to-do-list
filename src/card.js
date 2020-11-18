import React, { Component } from 'react';

class Card extends Component {
    /*state = { }*/

    render() { 

        let todo = this.props.todo;
        console.log(todo);

        return ( 
            <div className="card" style={{width: 400,height: 450}}>
                {
                    //todo.forEach((eachTodo) => <h1>{eachTodo.title}</h1>)
                    //MAP function is used to create an new array as output when any input is provided instead of forEach( who doesn't return any value as output 
                    //todo.map((eachTodo) => <h1>{eachTodo.title}</h1>)
                    todo.map((eachTodo,index) => {
                    <h1 key={index}>{eachTodo.title} {eachTodo.status}</h1>
                })
                }
            </div>
         );
    }
}
 
export default Card;