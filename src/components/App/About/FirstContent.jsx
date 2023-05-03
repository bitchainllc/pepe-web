import { FaUserCheck } from "react-icons/fa";
import { SiAzurefunctions } from "react-icons/si";
import { BsShieldFillCheck } from "react-icons/bs";
const FirstContent = ({ features, rtl }) => {
  return (
    <div className="content frs-content" id="about" data-scroll-index="2">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="img mb-30 mb-lg-0">
              <img src="assets/img/wallet.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head style-4">
                <small className="title_small mb-1">PepeChain DApps</small>
                <h2 className="mb-30" id="pepe-wallet">
                  Pepe <span>Wallet </span>{" "}
                </h2>
              </div>
              <p className="text mb-40">
                {rtl &&
                  "حافظ على تركيزك وإنتاجيتك مع مساحة  خالية من الفوضى. الطرق المرنة لتنظيم ملاحظاتك: علامات التجزئة ، دفاتر الملاحظات المتداخلة ، تثبيت الملاحظات في أعلى قائمة الملاحظات ، إلخ."}
                {!rtl && (
                  <>
                    <bigger> Pepe Wallet</bigger> is a non-custodial wallet in
                    web3 by removing the private key vulnerability, making it
                    the simplest yet most secure wallet to invest in
                    cryptocurrency.
                  </>
                )}
              </p>
              <ul>
                <li className="d-flex align-items-center mb-3">
                  <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                    <FaUserCheck />
                  </small>
                  <h6 className="fw-bold">User-Friendly</h6>
                </li>{" "}
                <li className="d-flex align-items-center mb-3">
                  <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                    <SiAzurefunctions />
                  </small>
                  <h6 className="fw-bold">Functional</h6>
                </li>{" "}
                <li className="d-flex align-items-center mb-3">
                  <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                    <BsShieldFillCheck />
                  </small>
                  <h6 className="fw-bold">Data Security</h6>
                </li>
              </ul>
              <a
                href="#"
                className="btn rounded-pill bg-blue4 fw-bold text-white mt-20"
              >
                <small> Add Extension to Chrome</small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src="assets/img/about/about_s4_lines.png" alt="" className="lines" />
      <img
        src="assets/img/about/about_s4_bubble.png"
        alt=""
        className="bubble"
      />
    </div>
  );
};

export default FirstContent;
