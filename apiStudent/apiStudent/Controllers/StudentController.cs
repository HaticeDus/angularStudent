using apiStudent.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
//using System.Data.Entity;

namespace apiStudent.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class StudentController : Controller
    {
        private readonly Models.Context _dbContext;

        public StudentController(Models.Context dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("StudentGet")]

        public async Task<ActionResult<IEnumerable<Students>>> GetStudents()
        {
            if (_dbContext.Students == null)
            {
                return NotFound();
            }

            var veriler = _dbContext.Students.Select(x => new Students()
            {

                Id = x.Id,
                Ad = x.Ad,
                cinsiyet = x.cinsiyet,
                Soyad = x.Soyad,
                tel = x.tel,
                Email = x.Email

            }).ToListAsync();

            return await veriler;
        }

        [HttpPost("StudentPost")]

        public async Task<ActionResult<IEnumerable<Students>>> PostStudents(Students students)
        {
            var data = _dbContext.Students.FirstOrDefault(x => x.Email == students.Email);

            if (data != null)
            {
                return BadRequest("Bu mail adresiyle bir kayıt zaten mevcut.");
            }

            _dbContext.Students.Add(new Students
            {
                Ad = students.Ad,
                cinsiyet = students.cinsiyet,
                Soyad = students.Soyad,
                tel = students.tel,
                Email = students.Email
            });

            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetStudents), new { id = students.Id }, students);

        }

        [HttpPut("StudentPut")]// full veri update edilir!


        public async Task<IActionResult> PutStudents(int id, Students students)
        {
            if (id != students.Id)
            {
                return BadRequest("Update Başarısız-Yani id değişmez");
            }

            _dbContext.Entry(students).State = EntityState.Modified;// all properties/columns to be updated 

            try
            {
                await _dbContext.SaveChangesAsync();
            }

            catch (DbUpdateConcurrencyException)
            {
                if (!StudentsAvailable(id)) // eğer true değilse return NotFound
                {
                    return NotFound(id);
                }

                else
                {
                    throw;
                }
            }
            return Ok();
        }

        private bool StudentsAvailable(int id)
        {
            return (_dbContext.Students?.Any(x => x.Id == id)).GetValueOrDefault(); //If you call GetValueOrDefault it checks if HasValue is true or false
        }


        [HttpDelete("StudentDelete")]

        public async Task<IActionResult> DeleteStudent(int id) //id si verilen öğrenci silinir
        {
            if (_dbContext.Students == null)
            {
                return NotFound();
            }

            var students = await _dbContext.Students.FindAsync(id);

            if (students == null)
            {
                return NotFound();
            }
            _dbContext.Students.Remove(students);

            await _dbContext.SaveChangesAsync();

            return Ok();
        }


    }
}
