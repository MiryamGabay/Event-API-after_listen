using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BasicAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        public static int cnt = 0;
        private List<Evente> events = new List<Evente> { 
            new Evente {
                Id = ++cnt, 
                Title = "default event"
            } };

        
        // GET: api/<EventsController>
        [HttpGet]
        public List<Evente> Get()
        {
            return events;
        }

        // POST api/<EventsController>
        [HttpPost]
        public void Post([FromBody] Evente newEvent)
        {
            //Evente eve;
            //Evente eve;string , 
            events.Add(new Evente
            {
                Id = ++cnt,
                Title = newEvent.Title,
                Start = newEvent.Start,
                End = newEvent.End
            });

        }

        // PUT api/<EventController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Evente newEvent)
        {
            var eve = events.Find(e => e.Id == id);
            if(eve != null)
            {
                 eve.Title= newEvent.Title;
                 eve.Start= newEvent.Start; 
                 eve.End= newEvent.End; 
            }
             
        }

        // DELETE api/<EventController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var eve = events.Find(e => e.Id == id);
            if(eve != null)
               events.Remove(eve);
        }
    }
}
