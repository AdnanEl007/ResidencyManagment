using ApartmentBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Data;

namespace ApartmentBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApartmentController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ApartmentController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                SELECT * FROM Apartment";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ApartmAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection myCon = new MySqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Apartment aprt)
        {
            string query = @"
                insert into Apartment (ApartmentNumber, 
                    Residency, 
                    ApartmentType, 
                    ApartmentStatus, 
                    Available, 
                    OccupiedDate, 
                    FreeDate) 
                values (@ApartmentNumber, @Residency, @ApartmentType, @ApartmentStatus, @Available, @OccupiedDate, @FreeDate)";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ApartmAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection myCon = new MySqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ApartmentNumber", aprt.ApartmentNumber);
                    myCommand.Parameters.AddWithValue("@Residency", aprt.Residency);
                    myCommand.Parameters.AddWithValue("@ApartmentType", aprt.ApartmentType);
                    myCommand.Parameters.AddWithValue("@ApartmentStatus", aprt.ApartmentStatus);
                    myCommand.Parameters.AddWithValue("@Available", aprt.Available);
                    myCommand.Parameters.AddWithValue("@OccupiedDate", aprt.OccupiedDate);
                    myCommand.Parameters.AddWithValue("@FreeDate", aprt.FreeDate);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Apartment Added");
        }

        [HttpPut]
        public JsonResult Put(Apartment aprt)
        {
            string query = @"
                update Apartment 
                set ApartmentNumber = @ApartmentNumber, 
                    Residency = @Residency, 
                    ApartmentType = @ApartmentType, 
                    ApartmentStatus = @ApartmentStatus, 
                    Available = @Available, 
                    OccupiedDate = @OccupiedDate, 
                    FreeDate = @FreeDate
                where ApartmentId = @ApartmentId";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ApartmAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection myCon = new MySqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ApartmentId", aprt.ApartmentId);
                    myCommand.Parameters.AddWithValue("@ApartmentNumber", aprt.ApartmentNumber);
                    myCommand.Parameters.AddWithValue("@Residency", aprt.Residency);
                    myCommand.Parameters.AddWithValue("@ApartmentType", aprt.ApartmentType);
                    myCommand.Parameters.AddWithValue("@ApartmentStatus", aprt.ApartmentStatus);
                    myCommand.Parameters.AddWithValue("@Available", aprt.Available);
                    myCommand.Parameters.AddWithValue("@OccupiedDate", aprt.OccupiedDate);
                    myCommand.Parameters.AddWithValue("@FreeDate", aprt.FreeDate);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Apartment Updated");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                delete from Apartment 
                where ApartmentId = @ApartmentId";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ApartmAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection myCon = new MySqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ApartmentId", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Apartment Deleted");
        }
    }
}
