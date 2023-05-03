import { FaTelegram } from "react-icons/fa";
import { SiGitbook } from "react-icons/si";
const DownloadSaas = () => {
  return (
    <section
      className="download section-padding style-5"
      data-scroll-index="6"
      id="pepe-dapps"
    >
      <div className="container  team-sec">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="content text-center">
              <h2>
                Join the meme revolution with{" "}
                <span className="me-2">
                  Pepe blockchain{" "}
                  <img
                    src="assets/img/header/head5_line.png"
                    alt=""
                    className="head-line"
                  />
                </span>
              </h2>
              <div className="butns mt-70">
                <a
                  href="#"
                  rel="noreferrer"
                  className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold mx-1"
                  target="_blank"
                >
                  {" "}
                  <i className="  me-2">
                    <SiGitbook />
                  </i>
                  Whitepaper{" "}
                </a>
                <a
                  href="https://t.me/pepechain_bsc"
                  rel="noreferrer"
                  className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold mx-1"
                  target="_blank"
                >
                  {" "}
                  <i className="  me-2">
                    <FaTelegram />
                  </i>
                  Join Community{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSaas;
