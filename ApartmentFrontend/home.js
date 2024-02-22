const home = {
  template: `<div>
  
  <h2 class="mb-3">Available Apartments</h2>
  
<table class="table table-striped">
      <thead>

        <tr>
              
              <th>
                  Appartment Number
              </th>
              <th>
                  Residency
              </th>
              <th>
                  Appartment Type
              </th>
              <th>
                  Appartment Status
              </th>
              <th>
                  Availibality
              </th>
              <th>
                  Leaving Date
              </th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="aprt in availableApartments">
              
              <td>{{aprt.apartmentnumber}}</td>
              <td>{{aprt.residency}}</td>
              <td>{{aprt.apartmenttype}}</td>
              <td>{{aprt.apartmentstatus}}</td>
              <td>{{aprt.available}}</td>
              <td>{{aprt.freedate}}</td>
              
          </tr>
      </tbody>
      
  </table>
  
  

  </div>
  `,

  data() {
    return {
      apartments: [],
      availableApartments: [],
    };
  },
  methods: {
    refreshData() {
      axios.get(variables.API_URL + "apartment").then((response) => {
        this.apartments = response.data;
        this.availableApartments = this.apartments.filter((apartment) => {
          return (
            apartment.available.toLowerCase() === "yes" ||
            (apartment.freedate && apartment.freedate !== "")
          );
        });
      });
    },
  },

  mounted: function () {
    this.refreshData();
  },
};
