import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { IoCopy } from "react-icons/io5";
import { GiCubes } from "react-icons/gi";
import { FaFingerprint } from "react-icons/fa";
import { MdOutlineFactCheck } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
const HeaderApp = ({ rtl, closed, setClosed, scrollToId }) => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <header className="style-4" data-scroll-index="0" id="home">
      <div className="content">
        <div className="container">
          <div className="row gx-0 valign">
            {" "}
            <div className="col-lg-6 order-md-2">
              <div className="img pepe-gif">
                <img src="assets/img/pepe-chain.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 order-md-1">
              <div className="info">
                <small className="title_small">
                  <h5 className="bold-text">Welcome To</h5>
                </small>
                <h1 className="mb-10 text-heading">
                  <span>PepeChain</span>.
                </h1>{" "}
                <div className="mb-20">
                  {" "}
                  <div className="p-2 w-25 text-center d-inline-block ">
                    {" "}
                    <h6 className="rounded-pill bg-gray">
                      {" "}
                      <small className="icon-30  d-inline-flex align-items-center justify-content-center me-0">
                        <i className="fas color-blue4">
                          <AiFillSafetyCertificate />
                        </i>{" "}
                        <gradianttext className="bold-text">
                          {" "}
                          VERIFIED
                        </gradianttext>
                      </small>
                    </h6>{" "}
                  </div>
                  <div className="p-2 w-25 text-center d-inline-block">
                    {" "}
                    <h6 className="rounded-pill bg-gray">
                      {" "}
                      <small className="icon-30  d-inline-flex align-items-center justify-content-center me-0">
                        <i className="fas color-blue4">
                          <MdOutlineFactCheck />
                        </i>{" "}
                        <gradianttext className="bold-text">
                          {" "}
                          AUDITED
                        </gradianttext>
                      </small>
                    </h6>{" "}
                  </div>{" "}
                </div>
                <p className="text">
                  PepeChain was created by a team of blockchain experts and Pepe
                  meme enthusiasts.
                </p>
                <div className="d-flex align-items-center mt-50 mb-10">
                  <a
                    rel="noreferrer"
                    className="btn rounded-pill bg-blue4 fw-bold text-white me-4"
                    target="_blank"
                    onClick={() => {
                      setClosed(1);
                      scrollToId("#top-nav-1");
                    }}
                  >
                    <small>
                      {" "}
                      <i className="fab  me-2 pe-2 border-end">
                        <IoCopy />
                      </i>{" "}
                      Copy Contract
                    </small>
                  </a>
                  <a
                    href="#"
                    rel="noreferrer"
                    className="btn rounded-pill bg-blue4 fw-bold text-white me-4"
                    target="_blank"
                  >
                    <small>
                      {" "}
                      <i className="fab  me-2 pe-2 border-end">
                        <GiCubes />
                      </i>
                      Launch Explorer
                    </small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/img/header/header_4_bubble.png"
          alt=""
          className="bubble"
        />
      </div>
    </header>
  );
};

export default HeaderApp;
