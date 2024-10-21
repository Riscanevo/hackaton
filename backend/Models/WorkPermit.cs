using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace WorkPermitAPI.Models
{
    [Table("work_permits")] 
public class WorkPermit
{
    public long Id { get; set; }
    public long UserId { get; set; }
    public string WorkType { get; set; }
    public TimeSpan EstimatedDuration { get; set; }
    public string Risks { get; set; }
    public string UrgencyLevel { get; set; }
    public string Status { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; } 
    public string DocumentPath { get; set; }
}

}
