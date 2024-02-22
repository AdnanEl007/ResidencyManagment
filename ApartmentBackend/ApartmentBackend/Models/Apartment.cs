namespace ApartmentBackend.Models
{
    public class Apartment
    {
        public int ApartmentId { get; set; }
        public string ApartmentNumber { get; set; }
        public string Residency { get; set; }
        public string ApartmentType { get; set; }
        public string ApartmentStatus { get; set; }
        public string Available { get; set; }
        public string OccupiedDate { get; set; }
        public string FreeDate { get; set; }
    }
}
