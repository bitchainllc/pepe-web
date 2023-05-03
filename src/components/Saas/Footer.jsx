import Link from "next/link";
import footerData from "@data/Saas/footer.json";

const scrollToId = (id) => {
  const section = document.querySelector(id);
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

const FooterSaas = () => {
  return (
    <footer id="footer" className="style-5 border-top brd-gray">
      <div className="container">
        <div className="row gx-0 justify-content-between">
          <div className="col-lg-3">
            <div className="items">
              <div className="title">PepeChain</div>

              <small className="text">
                PepeChain is the result of a collaboration between blockchain
                experts and Pepe meme enthusiasts.
              </small>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="items">
              <div className="title">Apps</div>
              <ul>
                <li>
                  <Link href="#">
                    <a>PepeChain Portfolio Tracker</a>
                  </Link>
                </li>{" "}
                <li>
                  <Link href="#">
                    <a>PepeDEX</a>
                  </Link>
                </li>{" "}
                <li>
                  <Link href="#">
                    <a>PepExplorer (beta)</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>{" "}
          <div className="col-lg-2">
            <div className="items">
              <div className="title">Socials</div>
              <ul>
                <li>
                  <Link href="https://twitter.com/PepeChain_bsc">
                    <a>Twitter</a>
                  </Link>
                </li>{" "}
                <li></li>{" "}
                <li>
                  <Link href="https://t.me/pepechain_bsc">
                    <a>Telegram Com.</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>{" "}
          <div className="col-lg-2">
            <div className="items">
              <div className="title"> Contact</div>
              <ul>
                <li>
                  {" "}
                  <p> Email</p>
                  <Link href="mailto:info@pepe-chain.io">
                    <a>
                      {" "}
                      <h6>info@pepe-chain.io</h6>{" "}
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="socail-icons">
                <a
                  href="https://twitter.com/PepeChain_bsc"
                  rel="noreferrer"
                  className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://t.me/pepechain_bsc"
                  rel="noreferrer"
                  className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
                  target="_blank"
                >
                  <i className="fab fa-telegram"></i>
                </a>
                <a
                  href="https://t.me/pepechain_bsc"
                  rel="noreferrer"
                  className="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray"
                  target="_blank"
                >
                  <i className="fab fa-telegram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <small className="small">
                © 2023 Copyrights by{" "}
                <a href="#" className="fw-bold text-decoration-underline">
                  Pepe Lab.
                </a>{" "}
                All Rights Reserved.
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSaas;
