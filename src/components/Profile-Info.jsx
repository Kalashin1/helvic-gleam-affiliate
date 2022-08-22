const ProfileInfo = () => {
  return (
    <div className="col-12 col-md-12 col-lg-8">
      <div className="card">
        <div className="padding-20">
          <ul className="nav nav-tabs" id="myTab2" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="home-tab2" data-toggle="tab" href="#about" role="tab"
                aria-selected="true">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="profile-tab2" data-toggle="tab" href="#settings" role="tab"
                aria-selected="false">Setting</a>
            </li>
          </ul>
          <div className="tab-content tab-bordered" id="myTab3Content">
            <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="home-tab2">
              <div className="row">
                <div className="col-md-3 col-6 b-r">
                  <strong>Full Name</strong>
                  <br />
                    <p className="text-muted">Emily Smith</p>
                </div>
                <div className="col-md-3 col-6 b-r">
                  <strong>Mobile</strong>
                  <br />
                    <p className="text-muted">(123) 456 7890</p>
                </div>
                <div className="col-md-3 col-6 b-r">
                  <strong>Email</strong>
                  <br />
                    <p className="text-muted">johndeo@example.com</p>
                </div>
                <div className="col-md-3 col-6">
                  <strong>Location</strong>
                  <br />
                    <p className="text-muted">India</p>
                </div>
              </div>
              <p className="m-t-30">Completed my graduation in Arts from the well known and
                renowned institution
                of India – SARDAR PATEL ARTS COLLEGE, BARODA in 2000-01, which was
                affiliated
                to M.S. University. I ranker in University exams from the same
                university
                from 1996-01.</p>
              <p>Worked as Professor and Head of the department at Sarda Collage, Rajkot,
                Gujarat
                from 2003-2015 </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s,
                when
                an unknown printer took a galley of type and scrambled it to make a
                type
                specimen book. It has survived not only five centuries, but also the
                leap
                into electronic typesetting, remaining essentially unchanged.</p>
              <div className="section-title">Education</div>
              <ul>
                <li>B.A.,Gujarat University, Ahmedabad,India.</li>
                <li>M.A.,Gujarat University, Ahmedabad, India.</li>
                <li>P.H.D., Shaurashtra University, Rajkot</li>
              </ul>
              <div className="section-title">Experience</div>
              <ul>
                <li>One year experience as Jr. Professor from April-2009 to march-2010
                  at B.
                  J. Arts College, Ahmedabad.</li>
                <li>Three year experience as Jr. Professor at V.S. Arts &amp; Commerse
                  Collage
                  from April - 2008 to April - 2011.</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="profile-tab2">
              <form method="post" className="needs-validation">
                <div className="card-header">
                  <h4>Edit Profile</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="form-group col-md-6 col-12">
                      <label>First Name</label>
                      <input type="text" className="form-control" value="John" />
                        <div className="invalid-feedback">
                          Please fill in the first name
                        </div>
                    </div>
                    <div className="form-group col-md-6 col-12">
                      <label>Last Name</label>
                      <input type="text" className="form-control" value="Deo" />
                        <div className="invalid-feedback">
                          Please fill in the last name
                        </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-7 col-12">
                      <label>Email</label>
                      <input type="email" className="form-control" value="test@example.com" />
                        <div className="invalid-feedback">
                          Please fill in the email
                        </div>
                    </div>
                    <div className="form-group col-md-5 col-12">
                      <label>Phone</label>
                      <input type="tel" className="form-control" value="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-12">
                      <label>Bio</label>
                      <textarea
                        className="form-control summernote-simple">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatum alias molestias minus quod dignissimos.</textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group mb-0 col-12">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" name="remember" className="custom-control-input" id="newsletter" />
                          <label className="custom-control-label" for="newsletter">Subscribe to newsletter</label>
                          <div className="text-muted form-text">
                            You will get new information about products, offers and promotions
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-right">
                  <button className="btn btn-primary">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;