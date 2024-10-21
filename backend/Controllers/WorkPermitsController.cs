// WorkPermitsController
using Microsoft.AspNetCore.Mvc;
using WorkPermitAPI.Data;
using WorkPermitAPI.Models;
using System.Collections.Generic;
using System.Linq;

namespace WorkPermitAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkPermitsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public WorkPermitsController(AppDbContext context)
        {
            _context = context;
        }

[HttpGet]
public ActionResult<IEnumerable<WorkPermit>> GetWorkPermits()
{
    var workPermits = _context.WorkPermits.ToList();
    if (!workPermits.Any())
    {
        return NotFound("No work permits found.");
    }
    return Ok(workPermits);
}


[HttpPost]
public ActionResult<WorkPermit> CreateWorkPermit(WorkPermit workPermit)
{
    if (workPermit == null || string.IsNullOrWhiteSpace(workPermit.WorkType))
    {
        return BadRequest("Invalid work permit data.");
    }

    _context.WorkPermits.Add(workPermit);
    _context.SaveChanges();
    return CreatedAtAction(nameof(GetWorkPermits), new { id = workPermit.Id }, workPermit);
}

    }
}
