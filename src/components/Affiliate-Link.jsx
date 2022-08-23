const AffiliateLink = () => {
  return (
    <div className="row my-4">
      <h3 className="lead mx-4">Your affiliate link</h3>
      <div className="col-12">
        <div className="card mb-0">
          <div className="card-body">
            <p className="lead">https://light-sandbox.web.app/shop/{localStorage.getItem('userId')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AffiliateLink;