import Link from "next/link";
import { FaFingerprint } from "react-icons/fa";
import { GiTearTracks } from "react-icons/gi";
const ThirdContent = ({ features, rtl }) => {
  return (
    <div className="content trd-content">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {" "}
          <div className="col-lg-6 order-md-2">
            <div className="img mb-30 mb-lg-0">
              <img src="assets/img/portfolio.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5 order-md-1">
            <div className="info">
              <div className="section-head style-4">
                <small className="title_small">PepeChain DApps</small>
                <h2 className="mb-30" id="portfolio-tracker">
                  Pepe <span> Portfolio Tracker</span>{" "}
                </h2>
              </div>
              <p className="text mb-40">
                <bigger> Pepe Portfolio Tracker</bigger> allows you to track the
                transactions and token balances of the wallet you want as a
                multichain without the need for a wallet connection.
              </p>
              <ul>
                {features.map((feature, index) => (
                  <li
                    className={`d-flex align-items-center ${
                      feature.active ? "" : "op-4"
                    }`}
                    key={index}
                  >
                    <i className="bi bi-dot fs-2 me-2 lh-1 color-blue4"></i>
                    <h6 className="fw-bold">{feature.title}</h6>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                rel="noreferrer"
                className="btn btn-img bg-blue4  mt-40 rounded-pill"
                target="_blank"
              >
                <div className="inf color-darkBlue">
                  <h6>
                    <bigger>Portfolio Tracker</bigger>
                  </h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="assets/img/about/about_s4_bubble.png"
        alt=""
        className="bubble"
      />
    </div>
  );
};

export default ThirdContent;
