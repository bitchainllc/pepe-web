import Link from "next/link";
import CommunitySaas from "./Community";

const scrollToId = (id) => {
  const section = document.querySelector(id);
  console.log(section);
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

const HeaderSaas = ({}) => {
  return (
    <>
      <header className="style-5" data-scroll-index="0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="info">
                <h3>
                  Revolutionizing meme culture on the blockchain with Pepe:
                  Where memes meet finance!
                  <br />
                </h3>
                <h5 className="pt-30  ">
                  This is the hot meme crypto projects that are expected to
                  explode in 2023.
                </h5>{" "}
                <div className="row justify-content-center mt-100">
                  {" "}
                  <div
                    className="section-head text-center style-4"
                    id="pepe-scan"
                  >
                    <h2>
                      Pep<span>Explorer </span>
                    </h2>{" "}
                    <small className="title_small  mb-70">
                      PepExplorer is a Block Explorer and Analytics Platform for
                      PepeChain.
                    </small>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-12 ">
                    <div className="row">
                      <div className="col-12">
                        {" "}
                        <img src="assets/img/pepexplorer.png" alt="" />
                      </div>
                      <div className="col-12 ">
                        {" "}
                        <img
                          src="assets/img/header/header5_linechart.png"
                          alt=""
                          className="linechart-img-a"
                        />{" "}
                        <img
                          src="assets/img/pepexplorer-mobile.png"
                          alt=""
                          className="linechart-img-b"
                        />
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            {" "}
            <div
              className="mt-70 section-head text-center style-4"
              id="pepe-dapps"
            >
              <h2>
                PepeChain <span> DApps </span>{" "}
              </h2>{" "}
            </div>
            <CommunitySaas scrollToId={scrollToId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSaas;
