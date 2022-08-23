const Orders = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4>Orders</h4>
              <div className="card-header-form">
                <form>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" />
                      <div className="input-group-btn">
                        <button className="btn btn-primary"><i className="fas fa-search"></i></button>
                      </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-striped">
                  <tr>
                    <th className="text-center">
                      <div className="custom-checkbox custom-checkbox-table custom-control">
                        <input type="checkbox" data-checkboxes="mygroup" data-checkbox-role="dad"
                          className="custom-control-input" id="checkbox-all" />
                          <label for="checkbox-all" className="custom-control-label">&nbsp;</label>
                      </div>
                    </th>
                    <th>Name</th>
                    <th>Lights</th>
                    <th>Order Status</th>
                    <th>Placed At</th>
                    <th>Delivery Date</th>
                    <th>Priority</th>
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td className="p-0 text-center">
                      <div className="custom-checkbox custom-control">
                        <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
                          id="checkbox-1" />
                          <label for="checkbox-1" className="custom-control-label">&nbsp;</label>
                      </div>
                    </td>
                    <td>Create a mobile app</td>
                    <td className="text-truncate">
                      <ul className="list-unstyled order-list m-b-0 m-b-0">
                        <li className="team-member team-member-sm"><img className="rounded-circle"
                          src="assets/img/users/user-8.png" alt="user" data-toggle="tooltip" title=""
                          data-original-title="Wildan Ahdian" /></li>
                        <li className="team-member team-member-sm"><img className="rounded-circle"
                          src="assets/img/users/user-9.png" alt="user" data-toggle="tooltip" title=""
                          data-original-title="John Deo" /></li>
                        <li className="team-member team-member-sm"><img className="rounded-circle"
                          src="assets/img/users/user-10.png" alt="user" data-toggle="tooltip" title=""
                          data-original-title="Sarah Smith" /></li>
                        <li className="avatar avatar-sm"><span className="badge badge-primary">+4</span></li>
                      </ul>
                    </td>
                    <td className="align-middle">
                      <div className="progress-text">50%</div>
                      <div className="progress" data-height="6">
                        <div className="progress-bar bg-success" data-width="50%"></div>
                      </div>
                    </td>
                    <td>2018-01-20</td>
                    <td>2019-05-28</td>
                    <td>
                      <div className="badge badge-success">Low</div>
                    </td>
                    <td><a href="!#" className="btn btn-outline-primary">Detail</a></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;