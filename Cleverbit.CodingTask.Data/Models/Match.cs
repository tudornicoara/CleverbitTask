using System;
using System.Collections.Generic;

namespace Cleverbit.CodingTask.Data.Models
{
    public class Match
    {
        public int Id { get; set; }
        public List<Score> Scores { get; set; }
        public DateTime ExpiryDate { get; set; } = DateTime.Now.AddMinutes(1);
    }
}