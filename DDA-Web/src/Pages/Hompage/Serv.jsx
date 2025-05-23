import React from "react";
import "./Serv.css";
import arrow from "../../assets/image/arrow-right.png";
import CategoryForm from "../../Component/Navbarcomponent.jsx/CategoryForm";

function Serv() {
  return (
    <>
      <div className="ser">
        <div className="servs">
          <div className="ser-head">
            <div className="ser-headcontent">
              <p className="ser-p1">Our Services</p>
              <h1 className="ser-h1">
                What we can offer
                <br />
                today
              </h1>
            </div>
            

            <div className="ser-b1">
              <button>
                View All Services <img src={arrow} alt="Description" />
              </button>
            </div>
          </div>
          <div className="ser-card">
            <a href="/webdevelopment">
              <div className="scard1">
                <div className="scard1-top">
                  <h2>
                    Web <br />
                    Development
                  </h2>
                  <div class="scard1-btn">
                    <button>
                      <img src={arrow} alt="Description" />
                    </button>
                  </div>
                </div>
                <hr />

                <div>
                  <p>
                    Custom, responsive websites that drive performance and visibility
                  </p>
                </div>
                <div class="scard1-image">
                  <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-1.jpg" />
                </div>
              </div>
            </a>
         <a href="/wdprice"><div className="scard1">
              <div className="scard1-top">
                <h2>
                  App <br /> Development
                </h2>
                <div class="scard1-btn">
                  <button>
                    <img src={arrow} alt="Description" />
                  </button>
                </div>
              </div>
              <hr />

              <div>
                <p>
                  Smart, user-friendly mobile applications for Android and iOS platforms.
                </p>
              </div>
              <div class="scard1-image">
                <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-2.jpg" />
              </div>
            </div></a>
         <a href="/app-price"><div className="scard1">
              <div className="scard1-top">
                <h2>
                  Graphic <br /> Design
                </h2>
                <div class="scard1-btn">
                  <button>
                    <img src={arrow} alt="Description" />
                  </button>
                </div>
              </div>
              <hr />

              <div>
                <p>
                  Compelling visuals and marketing materials that reflect your brand identity.
                </p>
              </div>
              <div class="scard1-image">
                <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-3.jpg" />
              </div>
            </div></a>
          <a href="branding-price">  <div className="scard1">
              <div className="scard1-top">
                <h2>
                  UI/UX <br/> Design
                </h2>
                <div class="scard1-btn">
                  <button>
                    <img src={arrow} alt="Description" />
                  </button>
                </div>
              </div>
              <hr />

              <div>
                <p>
                  Seamless and engaging user experiences across web and mobile platforms.
                </p>
              </div>
              <div class="scard1-image">
                <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-4.jpg" />
              </div>
            </div></a>
            <div className="scard1">
              <div className="scard1-top">
                <h2>
                  Branding <br/>Design
                </h2>
                <div class="scard1-btn">
                  <button>
                    <img src={arrow} alt="Description" />
                  </button>
                </div>
              </div>
              <hr />

              <div>
                <p>
                  Strategic brand building from logos to complete identity systems.
                </p>
              </div>
              <div class="scard1-image">
                <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-5.jpg" />
              </div>
            </div>
            <div className="scard1">
              <div className="scard1-top">
                <h2>
                  Customized <br/> Products
                </h2>
                <div class="scard1-btn">
                  <button>
                    <img src={arrow} alt="Description" />
                  </button>
                </div>
              </div>
              <hr />

              <div>
                <p>
                  Bespoke digital and physical solutions to suit your specific business goals.
                </p>
              </div>
              <div class="scard1-image">
                <img src="https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-6.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Serv;
