using Microsoft.EntityFrameworkCore;

namespace apiStudent.Models
{
    public class Context: DbContext
    {
        public Context(DbContextOptions<Context> options): base(options)
        {

        }

        public DbSet<Students> Students { get; set; }
    }
}
