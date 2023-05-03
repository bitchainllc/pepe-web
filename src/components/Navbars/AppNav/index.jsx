import { AiOutlineSwap } from "react-icons/ai";

const scrollToId = (id) => {
  const section = document.querySelector(id);
  console.log(section);
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar = ({ navbarRef }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark style-4 "
      ref={navbarRef}
    >
      <div className="container">
        <a
          style={{ cursor: "pointer" }}
          className="navbar-brand"
          onClick={() => {
            scrollToId("#home");
          }}
        >
          <img src="assets/img/logo.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="navbar-toggler-icon"></div>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => {
                  scrollToId("#home");
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => {
                  scrollToId("#pepechain-ecosystem");
                }}
              >
                Ecosystem
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => {
                  scrollToId("#pepe-swap");
                }}
              >
                PepeChain DApps
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => {
                  scrollToId("#tokenomics");
                }}
              >
                Tokenomics
              </a>
            </li>{" "}
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => {
                  scrollToId("#roadmap");
                }}
              >
                Roadmap
              </a>
            </li>
          </ul>
          <div className="nav-side">
            <div className="d-flex align-items-center">
              <a
                href="#"
                rel="noreferrer"
                className=" btn-md px-2 py-1 rounded-pill  bg-blue4 fw-bold text-white me-4"
                target="_blank"
              >
                <small>
                  {" "}
                  <i className="fab  me-2 pe-2 border-end">
                    <AiOutlineSwap />
                  </i>
                  Buy $PCHAIN Token
                </small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
