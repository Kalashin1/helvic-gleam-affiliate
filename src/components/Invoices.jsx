const InvoiceTable = () => {
  return (
    <div class="row">
    <div class="col-md-6 col-lg-12 col-xl-6">
      <div class="card">
        <div class="card-header">
          <h4>Support Ticket</h4>
          <form class="card-header-form">
            <input type="text" name="search" class="form-control" placeholder="Search" />
          </form>
        </div>
        <div class="card-body">
          <div class="support-ticket media pb-1 mb-3">
            <img src="assets/img/users/user-1.png" class="user-img mr-2" alt="" />
            <div class="media-body ml-3">
              <div class="badge badge-pill badge-success mb-1 float-right">Feature</div>
              <span class="font-weight-bold">#89754</span>
              <a href="javascript:void(0)">Please add advance table</a>
              <p class="my-1">Hi, can you please add new table for advan...</p>
              <small class="text-muted">Created by <span class="font-weight-bold font-13">John
                  Deo</span>
                &nbsp;&nbsp; - 1 day ago</small>
            </div>
          </div>
          <div class="support-ticket media pb-1 mb-3">
            <img src="assets/img/users/user-2.png" class="user-img mr-2" alt="" />
            <div class="media-body ml-3">
              <div class="badge badge-pill badge-warning mb-1 float-right">Bug</div>
              <span class="font-weight-bold">#57854</span>
              <a href="javascript:void(0)">Select item not working</a>
              <p class="my-1">please check select item in advance form not work...</p>
              <small class="text-muted">Created by <span class="font-weight-bold font-13">Sarah
                  Smith</span>
                &nbsp;&nbsp; - 2 day ago</small>
            </div>
          </div>
          <div class="support-ticket media pb-1 mb-3">
            <img src="assets/img/users/user-3.png" class="user-img mr-2" alt="" />
            <div class="media-body ml-3">
              <div class="badge badge-pill badge-primary mb-1 float-right">Query</div>
              <span class="font-weight-bold">#85784</span>
              <a href="javascript:void(0)">Are you provide template in Angular?</a>
              <p class="my-1">can you provide template in latest angular 8.</p>
              <small class="text-muted">Created by <span class="font-weight-bold font-13">Ashton Cox</span>
                &nbsp;&nbsp; -2 day ago</small>
            </div>
          </div>
          <div class="support-ticket media pb-1 mb-3">
            <img src="assets/img/users/user-6.png" class="user-img mr-2" alt="" />
            <div class="media-body ml-3">
              <div class="badge badge-pill badge-info mb-1 float-right">Enhancement</div>
              <span class="font-weight-bold">#25874</span>
              <a href="javascript:void(0)">About template page load speed</a>
              <p class="my-1">Hi, John, can you work on increase page speed of template...</p>
              <small class="text-muted">Created by <span class="font-weight-bold font-13">Hasan
                  Basri</span>
                &nbsp;&nbsp; -3 day ago</small>
            </div>
          </div>
        </div>
        <a href="javascript:void(0)" class="card-footer card-link text-center small ">View
          All</a>
      </div>
    </div>
  </div>
  );
}
 
export default InvoiceTable;