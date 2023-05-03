import { useState } from "react";
import ModalVideo from "react-modal-video";
import testimonialsData from "@data/App/testimonials.json";
import testimonialsDataRTL from "@data/App/testimonials-rtl.json";
import "react-modal-video/css/modal-video.css";

const Testimonials = ({ rtl }) => {
  const [isOpen, setOpen] = useState(false);
  const data = rtl ? testimonialsDataRTL : testimonialsData;

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <section
      className="testimonials style-4 pt-70"
      data-scroll-index="5"
      id="tokenomics"
    >
      <div className="container">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-12 text-center section-head style-4">
              {" "}
              <h2 className="mb-30 text-center text-md-left">
                The <span>Tokenomics</span>
              </h2>
            </div>
            <div className="col-11 col-md-auto ">
              <div className="mt-30 section-head style-4">
                <h3 className="mb-30 text-center text-md-left">
                  Token <span>information</span>
                </h3>
                <div className="mb-10 text-left">
                  {" "}
                  <h6 className="bg-white-text">
                    <gradianttext className="bold-text">
                      Total Name:
                    </gradianttext>
                  </h6>{" "}
                  <h6 className="tokenomics-info">PepeChain</h6>
                </div>{" "}
                <div className="mb-10 text-left">
                  {" "}
                  <h6 className="bg-white-text">
                    <gradianttext className="bold-text">
                      Total Symbol:
                    </gradianttext>
                  </h6>{" "}
                  <h6 className="tokenomics-info">PCHAIN</h6>
                </div>{" "}
                <div className="mb-10 text-left">
                  {" "}
                  <h6 className="bg-white-text">
                    <gradianttext className="bold-text">
                      Total Supply:
                    </gradianttext>
                  </h6>{" "}
                  <h6 className="tokenomics-info">420,000,000,000</h6>
                </div>{" "}
                <div className="mb-10 text-left">
                  {" "}
                  <h6 className="bg-white-text">
                    <gradianttext className="bold-text">Decimals:</gradianttext>
                  </h6>{" "}
                  <h6 className="tokenomics-info">18</h6>
                </div>
                <div className="mb-10 text-left">
                  {" "}
                  <h6 className="bg-white-text">
                    <gradianttext className="bold-text">Network:</gradianttext>
                  </h6>{" "}
                  <h6 className="tokenomics-info">Binance Smart Chain</h6>
                </div>
              </div>
            </div>{" "}
            <div className="col-12 col-md-auto">
              {" "}
              <div className="mt-30 section-head style-4">
                {" "}
                <h3 className="mb-30 text-center text-md-left">
                  Buy/Sell <span>taxes</span>
                </h3>
              </div>
              <div className="row valign justify-content-center justify-content-md-between mb-10">
                <div className="col-auto">
                  <img
                    src="assets/img/glass-icons/discount.png"
                    width="32px"
                    alt=""
                  />
                </div>
                <div className="col-auto">
                  <h5 className="bold-text">Buy Taxes:</h5>{" "}
                </div>
                <div className="col-auto">
                  {" "}
                  <h4 className="bg-white-text">
                    <gradianttext className="bold-text">5%</gradianttext>
                  </h4>{" "}
                </div>{" "}
              </div>{" "}
              <div className="row valign justify-content-center justify-content-md-between mb-10">
                <div className="col-auto">
                  <img
                    src="assets/img/glass-icons/discount.png"
                    width="32px"
                    alt=""
                  />
                </div>
                <div className="col-auto">
                  <h5 className="bold-text">Sell Taxes: </h5>
                </div>
                <div className="col-auto">
                  <h4 className="bg-white-text">
                    <gradianttext className="bold-text">5%</gradianttext>
                  </h4>{" "}
                </div>{" "}
              </div>{" "}
              <div className="d-flex align-items-center mt-70"></div>
            </div>{" "}
            <div className="row">
              {" "}
              <div className="col-lg-12 mt-70">
                <div className=" section-head style-4 text-center"> </div>
                <div className="testi-cards">
                  {" "}
                  <img
                    src="assets/img/contact_globe.svg"
                    alt=""
                    className="testi-globe"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
