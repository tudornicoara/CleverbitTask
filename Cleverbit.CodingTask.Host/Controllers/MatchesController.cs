using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cleverbit.CodingTask.Data;
using Cleverbit.CodingTask.Data.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Cleverbit.CodingTask.Host.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MatchesController : ControllerBase
    {
        private readonly CodingTaskContext _codingTaskContext;

        public MatchesController(CodingTaskContext codingTaskContext)
        {
            _codingTaskContext = codingTaskContext;
        }
        
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<List<Match>>> GetMatches()
        {
            var matches = await _codingTaskContext.Matches.ToListAsync();

            return matches;
        }

        [HttpGet]
        public async Task<ActionResult<List<Match>>> PlayedMatches()
        {
            var playedMatches = await _codingTaskContext.Matches
                .Where(x => x.ExpiryDate < DateTime.Now).ToListAsync();

            return playedMatches;
        }
    }
}