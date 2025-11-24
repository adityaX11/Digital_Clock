// this following scripting for current local time.
const clock=document.getElementById("clock");

// to display somthing with given interval we use setInterval(callback,interval_time(milisecond)) method.
setInterval(function(){
    let data=new Date();
    clock.innerHTML=data.toLocaleTimeString();
},1000);

// this following method is for date print.
const date=document.getElementById("date");
let curr_date=new Date();
date.innerHTML=curr_date.toLocaleDateString();