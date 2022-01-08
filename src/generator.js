const form  = document.getElementById('timedTaskForm') // add this ID to the form or containing div (preferably form)

let time; 

// make sure all time buttons have this name
/* document.getElementsByName("time").forEach(radio => {
    if (radio.checked){
        time = radio.value;
    }
}) // parse through each radio button and see if it has the 'checked' attribute; if so, set time equal to its value */
// long-winded way to do it, revert back if shorter way doesn't work 

time = document.querySelector('input[name = "time"]:checked').value

const array5 = ["get informed! read a news article", "sort your trash", "turn off unnecessary lights"]
const array15 = ["urge your local MP to take action", "get cleaning! pick up some neighbourhood trash"]
const array30 = ["try some planet friendly recipes", "research planet friendly alternatives to products you currently use"]
const array60 = ["buy local produce", "engage in local and political climate advocacy"]
const array120 = ["upcycle a piece of clothing or home decor", "shop second-hand"]
const array24 = ["volunteer at a nearby nature reserve", "get composting"]

const generateTask = time => {
    let task;
    const i = Math.floor(Math.random()*2) // generates number between from 0 to 1
    switch(time){
        case "5 min":
            task = array5[i];
            break;
        case "15 min":
            task = array15[i];
            break;
        case "30 min":
            task = array30[i];
            break;
        case "60 min":
            task = array60[i];
            break;
        case "2+ hrs":
            task = array120[i];
            break;
        case "24+ hr":
            task = array24[i];
            break;
        default:
            task = "oops...something went wrong. please try again"; 
            break;
    return task;
    }
}

form.addEventListener('submit', e => {
    e.preventDefault(); // page won't refresh(??) 
    const task = generateTask(time);
})


