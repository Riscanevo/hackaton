//ApprovalHistory
using System;

namespace WorkPermitAPI.Models
{
    public class ApprovalHistory
    {
        public long Id { get; set; }
        public long WorkPermitId { get; set; }
        public long ApproverId { get; set; }
        public string Action { get; set; }
        public string Comments { get; set; }
        public DateTime ActionDate { get; set; }
    }
}
