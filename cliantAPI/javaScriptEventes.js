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
    axios.get("https://localhost:7259/api/Event").then((res) => {
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
//https://localhost:7259/api/Event
//https://eventsapi.onrender.com/api/Events
//POST
function addEvent(){
    let date = prompt("enter date");
    let title = prompt("enter title");
    console.log(date)
    console.log(title)
    axios.post("https://localhost:7259/api/Event", {
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
    axios.put(`https://localhost:7259/api/Event/${id}`, {
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
    axios.delete(`https://localhost:7259/api/Event/${id}`).then((res) => {
      var calendarEl = document.getElementById('calendar');
      var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: res.data,
      });
      calendar.render();

    });
}