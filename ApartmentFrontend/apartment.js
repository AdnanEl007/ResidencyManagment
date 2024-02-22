const apartment = {
  template: `<div>
  
    <button type="button" class="btn btn-primary m-2 fload-end" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="addClick()">
      Add Apartment
    </button>
  
    <table class="table table-striped">
          <thead>
    <tr>
          <th>
          <div class="d-flex flex-row">
          <input class="form-control m-2"
              v-model="apartmentIdFilter"
              v-on:keyup="FilterFn()"
              placeholder="Filter">
          </div>
        </th>
        <th>
        <div class="d-flex flex-row">
          <input class="form-control m-2"
              v-model="apartmentNumberFilter"
              v-on:keyup="FilterFn()"
              placeholder="Filter">
          </div>
        </th>
        <th>
        <div class="d-flex flex-row">
          <input class="form-control m-2"
              v-model="residencyFilter"
              v-on:keyup="FilterFn()"
              placeholder="Filter">
          </div>
        </th>
        <th>
        <div class="d-flex flex-row">
          <input class="form-control m-2"
              v-model="apartmentTypeFilter"
              v-on:keyup="FilterFn()"
              placeholder="Filter">
          </div>
        </th>
        <th>
        </th>
        <th>
        <div class="d-flex flex-row">
          <input class="form-control m-2"
              v-model="availableFilter"
              v-on:keyup="FilterFn()"
              placeholder="Filter">
          </div>
        </th>
        <th></th>
        <th>         
        </th>
    </tr>
    <tr>
                  <th>
                      Appartment Id
                  </th>
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
                      Date of Occupation
                  </th>
                  <th>
                      Leaving Date
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="aprt in apartments">
                  <td>{{aprt.apartmentid}}</td>
                  <td>{{aprt.apartmentnumber}}</td>
                  <td>{{aprt.residency}}</td>
                  <td>{{aprt.apartmenttype}}</td>
                  <td>{{aprt.apartmentstatus}}</td>
                  <td>{{aprt.available}}</td>
                  <td>{{aprt.occupieddate}}</td>
                  <td>{{aprt.freedate}}</td>
                  <td>
                      <button type="button" class="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editClick(aprt)">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                          </svg>
                      </button>
                      <button type="button" @click="deleteClick(aprt.apartmentid)" class="btn btn-light mr-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                          </svg>
                      </button>
                  </td>
              </tr>
          </tbody>
          
      </table>
      
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <div class="d-flex flex-row bd-hightlight mb-3">
                  <div class="p-2 w-50 bd-hightlight">
                      <div class="input-group mb-3">
                          <span class="input-group-text">Apartment Number</span>
                          <input type="text" class="form-control" v-model="apartmentnumber">
                      </div>
                      <div class="input-group mb-3">
                          <span class="input-group-text">Residency</span>
                            <select class="form-select" v-model="residency">
                                <option v-for="resd in residencies">
                                    {{resd.residencyname}}
                                </option>
                            </select>
                      </div>
                      <div class="input-group mb-3">
                          <span class="input-group-text">Appartment Type</span>
                          <input type="text" class="form-control" v-model="apartmenttype">
                      </div>
                      <div class="input-group mb-3">
                          <span class="input-group-text">Appartment Status</span>
                          <input type="text" class="form-control" v-model="apartmentstatus">
                      </div>
                      <div class="input-group mb-3">
                          <span class="input-group-text">Availibality</span>
                          <input type="text" class="form-control" v-model="available">
                      </div>
                      <div class="input-group mb-3">
                          <span class="input-group-text">Date of Occupation</span>
                          <input type="date" class="form-control" v-model="occupieddate">
                      </div>
                      <div class="input-group mb-3">
                          <span class="input-group-text">Leaving Date</span>
                          <input type="date" class="form-control" v-model="freedate">
                      </div>
                      </div>
                      </div>
  
                      <button type="button" @click="createClick()" v-if="apartmentid === 0 " class="btn btn-primary">
                          Create
                      </button>
                      <button type="button" @click="updateClick()" v-if="apartmentid !== 0 " class="btn btn-primary">
                          Update
                      </button>
 
                  </div>
  
              </div>
          </div>
      </div>
  
      </div>
      `,

  data() {
    return {
      apartments: [],
      residencies: [],
      modalTitle: "",
      apartmentid: 0,
      apartmentnumber: "",
      residency: "",
      apartmenttype: "",
      apartmentstatus: "",
      available: "",
      occupieddate: "",
      freedate: "",
      apartmentIdFilter: "",
      apartmentNumberFilter: "",
      residencyFilter: "",
      apartmentTypeFilter: "",
      availableFilter: "",
      apartmentsWithoutFilter: [],
    };
  },
  methods: {
    refreshData() {
      axios.get(variables.API_URL + "apartment").then((response) => {
        this.apartments = response.data;
        this.apartmentsWithoutFilter = response.data;
      });

      axios.get(variables.API_URL + "residency").then((response) => {
        this.residencies = response.data;
        console.log("huh: ", this.residencies);
      });
    },
    addClick() {
      this.modalTitle = "Add Apartment";
      this.apartmentid = 0;
      this.apartmentnumber = "";
      this.residency = "";
      this.apartmenttype = "";
      this.apartmentstatus = "";
      this.available = "";
      this.occupieddate = "";
      this.freedate = "";
    },
    editClick(aprt) {
      this.modalTitle = "Edit Apartment";
      this.apartmentid = aprt.apartmentid;
      this.apartmentnumber = aprt.apartmentnumber;
      this.residency = aprt.residency;
      this.apartmenttype = aprt.apartmenttype;
      this.apartmentstatus = aprt.apartmentstatus;
      this.available = aprt.available;
      this.occupieddate = aprt.occupieddate;
      this.freedate = aprt.freedate;
    },
    createClick() {
      axios
        .post(variables.API_URL + "apartment", {
          apartmentid: this.apartmentid,
          apartmentnumber: this.apartmentnumber,
          residency: this.residency,
          apartmenttype: this.apartmenttype,
          apartmentstatus: this.apartmentstatus,
          available: this.available,
          occupieddate: this.occupieddate,
          freedate: this.freedate,
        })
        .then((response) => {
          this.refreshData();
          alert(response.data);
        });
    },
    updateClick() {
      axios
        .put(variables.API_URL + "apartment", {
          apartmentid: this.apartmentid,
          apartmentnumber: this.apartmentnumber,
          residency: this.residency,
          apartmenttype: this.apartmenttype,
          apartmentstatus: this.apartmentstatus,
          available: this.available,
          occupieddate: this.occupieddate,
          freedate: this.freedate,
        })
        .then((response) => {
          this.refreshData();
          alert(response.data);
        });
    },
    deleteClick(id) {
      if (!confirm("Are you sure you want to delete  Apartment?")) {
        return;
      }
      axios.delete(variables.API_URL + "apartment/" + id).then((response) => {
        this.refreshData();
        alert(response.data);
      });
    },

    FilterFn() {
      var apartmentIdFilter = this.apartmentIdFilter;
      var apartmentNumberFilter = this.apartmentNumberFilter;
      var residencyFilter = this.residencyFilter;
      var apartmentTypeFilter = this.apartmentTypeFilter;
      var availableFilter = this.availableFilter;

      this.apartments = this.apartmentsWithoutFilter.filter(function (el) {
        return (
          el.apartmentid
            .toString()
            .toLowerCase()
            .includes(apartmentIdFilter.toString().trim().toLowerCase()) &&
          el.apartmentnumber
            .toString()
            .toLowerCase()
            .includes(apartmentNumberFilter.toString().trim().toLowerCase()) &&
          el.residency
            .toString()
            .toLowerCase()
            .includes(residencyFilter.toString().trim().toLowerCase()) &&
          el.apartmenttype
            .toString()
            .toLowerCase()
            .includes(apartmentTypeFilter.toString().trim().toLowerCase()) &&
          el.available
            .toString()
            .toLowerCase()
            .includes(availableFilter.toString().trim().toLowerCase())
        );
      });
    },
  },

  mounted: function () {
    this.refreshData();
  },
};
