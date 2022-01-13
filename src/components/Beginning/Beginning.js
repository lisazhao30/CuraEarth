import React, { Component } from 'react';
import "./Beginning.css"
import logo2 from "./images/logo2.png"
import axios from 'axios';

const Task = props => (
    <tr>
        <td>{props.task.taskTime}</td>
        <td>{props.task.taskTitle}</td>
        <td>{props.task.taskDescription}</td>
    </tr>
)

const time = props => (
    <tr>
        <td>{props.task.taskTime}</td>
    </tr>
)

const Title = props => (
    <tr>
      <td>{props.task.taskTitle}</td>
    </tr>
)

const description = props => (
    <tr>
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

    titleTask() {
        return this.state.tasks.map(currenttask => {
            return <Title task={currenttask} key={currenttask._id}/>;
        })
    }

    randomNumber() {
        let number = Math.floor((Math.random() * 3));
        //const work = this.titleTask()[number];
        return number;
    }

    testingFn() {
        document.getElementById("task-title").innerHTML = "Pick up some neighbourhood trash.";
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
    
        function fifteen () {
            reset()
            const button = document.getElementById("15min")
            button.classList.add("clicked")
        }
    
        function thirty () {
            reset()
            const button = document.getElementById("30min")
            button.classList.add("clicked")
        }
    
        function hour () {
            reset()
            const button = document.getElementById("60min")
            button.classList.add("clicked")
        }
    
        function twoHour () {
            reset()
            const button = document.getElementById("2hr")
            button.classList.add("clicked")
        }
    
        function day () {
            reset()
            const button = document.getElementById("24hr")
            button.classList.add("clicked")
        }
        function confirmClicked () {
    
            const clickedBtn = document.getElementsByClassName("clicked")[0]
            if (clickedBtn.id === "5min"){
                document.getElementById("task-title").addEventListener("click", function SwapDivsWithClick(d1,d2)
                {
                   d1 = document.getElementById('task-title');
                   d2 = document.getElementById('whatever');
                   if( d2.style.display == "none" )
                   {
                      d1.style.display = "none";
                      d2.style.display = "block";
                   }
                   else
                   {
                      d1.style.display = "block";
                      d2.style.display = "none";
                   }
                })
                document.getElementById("task-time").classList.remove('hide')
                document.getElementById("task-time").innerHTML = "Time: 5 min"
                document.getElementById("home-box2").innerHTML = "Turning off lights helps save energy. It can help reduce carbon emission since most lights are powered by fossil fuels. Turning off the lights is a super simple way to help reduce your carbon footprint!"
            }
            else if (clickedBtn.id === "15min"){
                document.getElementById("task-title").innerHTML = "Pick up some neighbourhood trash."
                document.getElementById("task-time").classList.remove('hide')
                document.getElementById("task-time").innerHTML = "Time: 15 min"
                document.getElementById("home-box2").innerHTML = "Litter is an eyesore! Pick up some litter to beautify your neighbourhood. PLus, litter can be harmful to the animals in your area that may stumble upon it. If the litter gets into waterways, chances are that it'll harm aquatic ecosystems as well."
            }
            else if (clickedBtn.id === "30min"){
                document.getElementById("task-title").innerHTML = "Try some planet friendly recipes."
                document.getElementById("task-time").classList.remove('hide')
                document.getElementById("task-time").innerHTML = "Time: 30 min"
                document.getElementById("home-box2").innerHTML = "Improve your cooking skills while finding recipes that are more planet friendly. Try to include options that don't produce a large carbon emmission. Try to use local ingredients, in-season produce, and vegetarian options!"
            }
            else if (clickedBtn.id === "60min"){
                document.getElementById("task-title").innerHTML = "Engage in local and political climate advocacy"
                document.getElementById("task-time").classList.remove('hide')
                document.getElementById("task-time").innerHTML = "Time: 60 min"
                document.getElementById("home-box2").innerHTML = "Be aware of the climate situation around you. Send emails to the local government and your MPs to encourage climate advocacy. You can start the change!"
            }
            else if (clickedBtn.id === "2hr"){
                document.getElementById("task-title").innerHTML = "Shop second-hand."
                document.getElementById("task-time").classList.remove('hide')
                document.getElementById("task-time").innerHTML = "Time: 2 hrs"
                document.getElementById("home-box2").innerHTML = "Thrifting can be fun way to get unique one-of-a-kind clothingn while lowering your carbon footprint. North Americans send 10 million tonnes of clothing to the landfill every year. Participate in slow fashion!"
            }
            else if (clickedBtn.id === "24hr"){
                document.getElementById("task-title").innerHTML = "Get composting"
                document.getElementById("task-time").classList.remove('hide')
                document.getElementById("task-time").innerHTML = "Time: 24 hrs"
                document.getElementById("home-box2").innerHTML = "Get familiar with the composting in your neighbourhood. Search how to get a green bin in your community and the compost pickup days. Composting means we can avoid food going to the landfill and our food scraps will be able to decompose."
            }

        }
        return (
            <div id = "beginning-container">
                <div id = "home-text">Our planet in our hands.</div>
                <div id = "subtext">Select a time and find out how you can take action to help out planet.</div>
                <div className = "button-box">
                    <button onClick = {five} id = "5min" className = "time-btn btn">5 min</button>
                    <button onClick = {fifteen} id = "15min" className = "time-btn btn">15 min</button>
                    <button onClick = {thirty}id = "30min" className = "time-btn btn">30 min</button>
                    <button onClick = {hour} id = "60min" className = "time-btn btn">60 min</button>
                    <button onClick = {twoHour} id = "2hr" className = "time-btn btn">2+ hrs</button>
                    <button onClick = {day} id = "24hr" className = "time-btn btn">24+ hr</button>
                </div>
                <button id = "confirm-btn" className = "btn" onClick = {confirmClicked}>Confirm</button>
                <div id = "home-box1" className = "home-box">
                    <img id = "box-logo2" src = {logo2}></img>
                    <div className = "inner-box-text">
                        <div id = "task-title">
                            Generated result will appear here!
                        </div>
                        <div id="whatever">
                            {this.titleTask()[this.randomNumber()]}
                        </div>
                        <div id = "task-time" className = "hide">
                            Time: 45 min
                        </div>
                    </div>
    
                </div>
                <div id = "home-box2" className = "home-box">
                    Cura Earth has hundreds of tasks prepared for you, today you can make an impact!
                </div>
                <div className='text'>
                    { this.taskList()[2] }
                </div>
            </div>
        )
        }
    }


/*
        <input type="radio" value="5 min" name="time" /> 5 min;
        <input type="radio" value="15 min" name="time" /> 15 min;
        <input type="radio" value="30 min" name="time" /> 30 min;
        <input type="radio" value="60 min" name="time" /> 60 min;
        <input type="radio" value="2+ hrs" name="time" /> 2+ hrs;
        <input type="radio" value="24+ hr" name="time" /> 24+ hr;
        <input type = "submit" value = "submit" id = 'submitButt'/> Submit; 
*/