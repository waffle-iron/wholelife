import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskRef } from '../firebase';

import '../static/addTask.css';

class AddTask extends Component{
    constructor(props) {
        super(props);
        this.state={
            taskname:'',
            assigned:'',
            assigned_reliever:'',
            start_date:'',
            due_date:'',
            priority:''
        }
    }
    addTask(e){
        const taskname = this.state.taskname;
        const assigned = this.state.assigned;
        const assigned_reliever = this.state.assigned_reliever;
        const start_date = this.state.due_date;
        const due_date = this.state.due_date;
        const priority = this.state.priority;        
        taskRef.push({taskname,assigned,assigned_reliever,start_date,due_date,priority});
        e.stopPropagation()     
    }
    render(){
        return(
            <div id="AddTask" className="modal fade">
                <form className="modal-content" onSubmit={(e) => this.addTask()}>
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Add New Task</h4>
                    </div>
                    <div className="modal-body">
                    <div className="row">    
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="taskname">Taskname</label>
                                <input className="form-control" type="text" id="taskname" required
                                    onChange={event => this.setState({taskname:event.target.value})} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="assigned">Assigned</label>
                                <input className="form-control" type="text" id="assigned" required
                                    onChange={event => this.setState({assigned:event.target.value})} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="reliever">Assisted By</label>
                                <input className="form-control" type="text" id="reliever" required
                                    onChange={event => this.setState({assigned_reliever:event.target.value})}/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="start_date">Start Date</label>
                                <input className="form-control" type="date" name= "starDate" id="start_date" required
                                    onChange={event => this.setState({start_date:event.target.value})} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="due_date">Due Date</label>
                                <input className="form-control" type="date" name= "dueDate" id="due_date" required
                                    onChange={event => this.setState({due_date:event.target.value})} />
                            </div>
                            <div className="form-group priority">
                                <label>Priority</label>
                                <div>
                                    <label className="form-control-static">
                                        <input type="radio" value ="High" required
                                            onChange={event => this.setState({priority:event.target.value})}/>
                                            &nbsp;High
                                    </label>
                                    <label className="form-control-static">
                                        <input type="radio" value ="Medium" required
                                            onChange={event => this.setState({priority:event.target.value})}/>
                                            &nbsp;Medium
                                    </label>
                                    <label className="form-control-static">
                                        <input type="radio" value ="Low" required
                                            onChange={event => this.setState({priority:event.target.value})}/>
                                            &nbsp;Low
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="pull-left btn btn-success"> AddTask </button>
                        <button  type="button" className="pull-right btn btn-default" data-dismiss="modal">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>        
        );
    }
}
function mapStateToProps(state){
    const { user }= state;
    return{
        user
    }
}
export default connect(mapStateToProps,null)(AddTask);
