import React from "react";

function Banner() {
  return (
    <div className="banner">
      <div className="row g-4">
        <div className="col-lg-6 banner-left">
          <div className="row g-4">
            <div className="col-12">
              <div className="card">
                <img
                  class="card-img-top"
                  src="images/01.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay">
                  <span className="badge bg-warning">Technology</span>
                  <h4 className="text-white">
                    <a href="#">
                      Best Pinterest boards for learning about business
                    </a>
                  </h4>
                  <div className="d-flex align-items-center text-white">
                    <span>By Shepy</span>
                    <span>.</span>
                    <span>Aug 18, 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 banner-right">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card card-grid-sm">
                <img
                  class="card-img-top"
                  src="images/02.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay">
                  <span className="badge bg-warning">Technology</span>
                  <h4 className="text-white">
                    <a href="#">
                      Best Pinterest boards for learning about business
                    </a>
                  </h4>
                  <div className="d-flex align-items-center text-white">
                    <span>By Shepy</span>
                    <span>.</span>
                    <span>Aug 18, 2022</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <img
                  class="card-img-top"
                  src="images/03.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay">
                  <span className="badge bg-danger">Videos</span>
                  <h4 className="text-white">
                    <a href="#">
                      Best Pinterest boards for learning about business
                    </a>
                  </h4>
                  <div className="d-flex align-items-center text-white">
                    <span>By Shepy</span>
                    <span>.</span>
                    <span>Aug 18, 2022</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-grid-sm">
                <img
                  class="card-img-top"
                  src="images/04.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay">
                  <span className="badge bg-primary">Music</span>
                  <h4 className="text-white">
                    <a href="#">
                      Best Pinterest boards for learning about business
                    </a>
                  </h4>
                  <div className="d-flex align-items-center text-white">
                    <span>By SWK</span>
                    <span>.</span>
                    <span>Aug 18, 2022</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <img
                  class="card-img-top"
                  src="images/01.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay">
                  <span className="badge bg-success">News</span>
                  <h4 className="text-white">
                    <a href="#">
                      Best Pinterest boards for learning about business
                    </a>
                  </h4>
                  <div className="d-flex align-items-center text-white">
                    <span>By DRS</span>
                    <span>.</span>
                    <span>Aug 18, 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
