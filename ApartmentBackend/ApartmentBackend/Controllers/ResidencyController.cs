using ApartmentBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Data;

namespace ApartmentBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResidencyController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ResidencyController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                SELECT * FROM Residency";

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
        public JsonResult Post(Residency resi)
        {
            string query = @"
                insert into Residency (ResidencyName, ResidencyType, ResidencyAddress, City) values
                (@ResidencyName, @ResidencyType, @ResidencyAddress, @City)";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ApartmAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection myCon = new MySqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ResidencyName", resi.ResidencyName);
                    myCommand.Parameters.AddWithValue("@ResidencyType", resi.ResidencyType);
                    myCommand.Parameters.AddWithValue("@ResidencyAddress", resi.ResidencyAddress);
                    myCommand.Parameters.AddWithValue("@City", resi.City);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added");
        }

        [HttpPut]
        public JsonResult Put(Residency resi)
        {
            string query = @"
                update Residency 
                set ResidencyName = @ResidencyName, 
                    ResidencyType = @ResidencyType, 
                    ResidencyAddress = @ResidencyAddress, 
                    City = @City
                where ResidencyId = @ResidencyId";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ApartmAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection myCon = new MySqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ResidencyId", resi.ResidencyId);
                    myCommand.Parameters.AddWithValue("@ResidencyName", resi.ResidencyName);
                    myCommand.Parameters.AddWithValue("@ResidencyType", resi.ResidencyType);
                    myCommand.Parameters.AddWithValue("@ResidencyAddress", resi.ResidencyAddress);
                    myCommand.Parameters.AddWithValue("@City", resi.City);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                delete from Residency 
                where ResidencyId = @ResidencyId";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ApartmAppCon");
            MySqlDataReader myReader;
            using (MySqlConnection myCon = new MySqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ResidencyId", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted");
        }
    }
}
