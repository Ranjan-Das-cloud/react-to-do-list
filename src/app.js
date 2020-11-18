import React, { Component } from 'react';
import ActiveItems from './activeitems';
import CompletedItems from './completeditems';
import Form  from './form';

class APP extends Component {
    state = {
        tasks:[]
    }

    handleCross(e,id){
        let allTasks = this.state.tasks;

        let itemIndex;
        
        allTasks.forEach(function(eachTask,index){
            if(eachTask.id === id){
                itemIndex = index;
            }
        })

        allTasks.splice(itemIndex,1);

        this.setState({tasks:allTasks});
        e.preventDefault();
    }

    handleChecks(id){
        let allTasks = this.state.tasks;

        let itemIndex;
        
        allTasks.forEach(function(eachTask,index){
            if(eachTask.id === id){
                itemIndex = index;
            }
        })

        allTasks[itemIndex].status = 1;

        this.setState({tasks:allTasks});

        console.log(this.state.tasks);
    }

    handleSubmit(e){
        // Add a new task in pending
        // 1. id--> 2. title --> 3. status
        let title = document.querySelector('#task').value;
        document.querySelector('#task').value='';
        let allTasks = this.state.tasks;
        allTasks.push({id:Date.now(), title:title, status: 0});

        this.setState({tasks:allTasks});

        console.log(this.state.tasks);
        e.preventDefault();
    }

    render() { 
        return ( 
            
            <div>
                <nav className="navbar bg-primary">
                    <h4 className="navbar-brand text-white">Todo App</h4>
                </nav>

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12">
                            <Form handleSubmit = {this.handleSubmit.bind(this)}/>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-6">
                            <h3>Active Tasks</h3>
                            <ActiveItems items={this.state.tasks} handleChecks={this.handleChecks.bind(this)}/>
                        </div>
                        <div className="col-6">
                            <h3>Completed Tasks</h3>
                            <CompletedItems items={this.state.tasks} handleCross={this.handleCross.bind(this)}/>
                        </div>
                    </div>
                </div>
            </div>
            
         );
    }
}
 
export default APP;