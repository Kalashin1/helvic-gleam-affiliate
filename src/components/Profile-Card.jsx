const ProfileCard = () => {
  return (
    <div className="col-12 col-md-12 col-lg-4">
      <div className="card author-box">
        <div className="card-body">
          <div className="author-box-center">
            <img alt="src" src="assets/img/users/user-1.png" className="rounded-circle author-box-picture" />
              <div className="clearfix"></div>
              <div className="author-box-name">
                <a href="!!#">Sarah Smith</a>
              </div>
              <div className="author-box-job">Web Developer</div>
          </div>
          <div className="text-center">
            <div className="author-box-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatum alias molestias
                minus quod dignissimos.
              </p>
            </div>
            <div className="mb-2 mt-3">
              <div className="text-small font-weight-bold">Follow Hasan On</div>
            </div>
            <a href="!#" className="btn btn-social-icon mr-1 btn-facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="!#" className="btn btn-social-icon mr-1 btn-twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="!#" className="btn btn-social-icon mr-1 btn-github">
              <i className="fab fa-github"></i>
            </a>
            <a href="!#" className="btn btn-social-icon mr-1 btn-instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <div className="w-100 d-sm-none"></div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h4>Personal Details</h4>
        </div>
        <div className="card-body">
          <div className="py-4">
            <p className="clearfix">
              <span className="float-left">
                Birthday
              </span>
              <span className="float-right text-muted">
                30-05-1998
              </span>
            </p>
            <p className="clearfix">
              <span className="float-left">
                Phone
              </span>
              <span className="float-right text-muted">
                (0123)123456789
              </span>
            </p>
            <p className="clearfix">
              <span className="float-left">
                Mail
              </span>
              <span className="float-right text-muted">
                test@example.com
              </span>
            </p>
            <p className="clearfix">
              <span className="float-left">
                Facebook
              </span>
              <span className="float-right text-muted">
                <a href="!#">John Deo</a>
              </span>
            </p>
            <p className="clearfix">
              <span className="float-left">
                Twitter
              </span>
              <span className="float-right text-muted">
                <a href="!#">@johndeo</a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h4>Skills</h4>
        </div>
        <div className="card-body">
          <ul className="list-unstyled user-progress list-unstyled-border list-unstyled-noborder">
            <li className="media">
              <div className="media-body">
                <div className="media-title">Java</div>
              </div>
              <div className="media-progressbar p-t-10">
                <div className="progress" data-height="6">
                  <div className="progress-bar bg-primary" data-width="70%"></div>
                </div>
              </div>
            </li>
            <li className="media">
              <div className="media-body">
                <div className="media-title">Web Design</div>
              </div>
              <div className="media-progressbar p-t-10">
                <div className="progress" data-height="6">
                  <div className="progress-bar bg-warning" data-width="80%"></div>
                </div>
              </div>
            </li>
            <li className="media">
              <div className="media-body">
                <div className="media-title">Photoshop</div>
              </div>
              <div className="media-progressbar p-t-10">
                <div className="progress" data-height="6">
                  <div className="progress-bar bg-green" data-width="48%"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;