import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/tasks.css';
import logo2 from '../images/logo2.png';

const Task = props => (
    <tr>
      <td>{props.task.taskTime}</td>
      <td>{props.task.taskTitle}</td>
      <td>{props.task.taskDescription}</td>
    </tr>
)

export default class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: []} //getting all the tasks in an array
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/taskRouter/')
            .then(response => {
                this.setState({ tasks: response.data })
            })
        .catch((error) => {
            console.log(error);
        })
    }

    taskList() {
        return this.state.tasks.map(currenttask => {
            return <Task task={currenttask} key={currenttask._id}/>;
        })
    }

    render() {

        function reset () {
            const buttons = document.getElementsByClassName("time-btn")
            for (let i = 0; i < buttons.length; i++){
                buttons[i].classList.remove("clicked")
            }
        }

        function five () {
            reset()
            const button = document.getElementById("5min")
            button.classList.add("clicked")
        }

        const randomElement = Task[Math.floor(Math.random() * Task.length)];
        
        function confirmClicked () {
            const clickedBtn = document.getElementsByClassName("clicked")[0]
            if (clickedBtn.id === "5min"){
                document.getElementById("task-title").innerHTML = "test";
                document.getElementById("task-time").classList.remove('hide')
                document.getElementById("task-time").innerHTML = "Time: 5 min"
                document.getElementById("home-box2").innerHTML = "Turning off lights helps save energy. It can help reduce carbon emission since most lights are powered by fossil fuels. Turning off the lights is a super simple way to help reduce your carbon footprint!"
            }
        }

        return (
            <div>
                <thead className="thead-light">
                    <tr>
                    <th>Task Time</th>
                    <th>Task Title</th>
                    <th>Task Description</th>
                    </tr>
                </thead>
                <tbody>
                    { this.taskList()[Math.floor(Math.random() * Task.length)] }
                </tbody>
                <div id='task-title'>
                    {randomElement}
                </div>
                <div id = "beginning-container">
                    <div id = "home-text">Our planet in our hands.</div>
                    <div id = "subtext">Select a time and find out how you can take action to help out planet.</div>
                    <div className = "button-box">
                        <button onClick = {five} id = "5min" className = "time-btn btn">5 min</button>
                    </div>
                    <button id = "confirm-btn" className = "btn" onClick = {confirmClicked}>Confirm</button>
                    <div id = "home-box1" className = "home-box">
                        <img id = "box-logo2" src = {logo2}></img>
                        <div className = "inner-box-text">
                            <div id = "task-title">
                                Generated result will appear here!
                            </div>
                            <div id = "task-time" className = "hide">
                                Time: 45 min
                            </div>
                        </div>

                    </div>
                    <div id = "home-box2" className = "home-box">
                        Cura Earth has hundreds of tasks prepared for you, today you can make an impact!
                    </div>
                </div>
            </div>
        )
    }
}