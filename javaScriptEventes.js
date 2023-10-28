//create the calendar
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
    });
    calendar.render();
});


//////////////////////API//////////////////////
//GET
document.addEventListener("DOMContentLoaded", getEvent())
function getEvent() {
    axios.get("https://eventsapi.onrender.com/api/Events").then((res) => {
        var calendarEl = document.getElementById("calendar");
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: "dayGridMonth",
            events: res.data,
        });
        calendar.render();
        alert(res.data);
    });
}
//"https://localhost:7259/api/Event"

//POST
function addEvent(){
    let date = prompt("enter date");
    let title = prompt("enter title");
    console.log(date)
    console.log(title)
    axios.post("https://eventsapi.onrender.com/api/Events", {
      "title": title,
      "start": date
    }).then((res) => {
      var calendarEl = document.getElementById('calendar');
      var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: res.data,
      });
      calendar.render();

    });
    getEvent();
}


//PUT
function updateEvent(){
    getEvent();
    let id = prompt("enter id");
    let date = prompt("enter date");
    let title = prompt("enter title");
    axios.put(`https://eventsapi.onrender.com/api/Events/${id}`, {
      "title": title,
      "start": date
    }).then((res) => {
      var calendarEl = document.getElementById('calendar');
      var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: res.data,
      });
      calendar.render();
    });
    getEvent();
}


//DELETE
function deleteEvent(){
    getEvent();
    let id = prompt("enter id");
    axios.delete(`https://eventsapi.onrender.com/api/Events/${id}`).then((res) => {
      var calendarEl = document.getElementById('calendar');
      var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: res.data,
      });
      calendar.render();

    });
}