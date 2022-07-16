using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Cleverbit.CodingTask.Host.Controllers
{
    [Route("api/[controller]")]
    public class RandomController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<int>> GetRandomNumber()
        {
            Random rnd = new Random();

            return rnd.Next(10);
        }
    }
}