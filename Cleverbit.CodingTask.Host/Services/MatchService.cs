using System;
using System.Linq;
using System.Threading.Tasks;
using Cleverbit.CodingTask.Data;
using Cleverbit.CodingTask.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Cleverbit.CodingTask.Host.Services
{
    public class MatchService : IMatchService
    {
        private readonly CodingTaskContext _codingTaskContext;

        public MatchService(CodingTaskContext codingTaskContext)
        {
            _codingTaskContext = codingTaskContext;
        }
        
        public async Task CreateMatch()
        {
            var numOfRunningMatches = await _codingTaskContext.Matches
                .Where(x => x.ExpiryDate > DateTime.Now).CountAsync();

            if (numOfRunningMatches >= 10)
            {
                return;
            }

            _codingTaskContext.Matches.Add(new Match());

            await _codingTaskContext.SaveChangesAsync();
        }
    }
}