// AppDbContext
using Microsoft.EntityFrameworkCore;
using WorkPermitAPI.Models;

namespace WorkPermitAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<WorkPermit> WorkPermits { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<ApprovalHistory> ApprovalHistories { get; set; }
    }
}
