//Notification
using System;

namespace WorkPermitAPI.Models
{
    public class Notification
    {
        public long Id { get; set; }
        public long UserId { get; set; }
        public long WorkPermitId { get; set; }
        public required string Message { get; set; }
        public DateTime SentAt { get; set; }
    }
}
