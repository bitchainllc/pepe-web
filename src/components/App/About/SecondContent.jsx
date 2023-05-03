const SecondContent = ({ accordions, rtl }) => {
  return (
    <div className="content sec-content">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 order-2 order-lg-0">
            <div className="info">
              <div className="section-head style-4">
                <small className="title_small">PepeChain DApps</small>
                <h2 className="mb-30" id="pepe-swap">
                  Pepe <span>DEX </span>
                </h2>
              </div>
              <p className="text mb-40">
                PepeSwap v1 is a decentralized exchange that trades on
                Pancakeswap liquidities. It can make swaps and create liquidity
                pools through PancakeSwap. PepeSwap v2 will be used (in the
                future) to host the liquidity pools of projects that the
                PepeChain team sees as high potential.
              </p>
              <div className="faq style-3 style-4">
                <div className="accordion" id="accordionExample">
                  {accordions.map((accordion, index) => (
                    <div className="accordion-item" key={index}>
                      <h2
                        className="accordion-header"
                        id={`heading${accordion.id}`}
                      >
                        <button
                          className={`accordion-button ${
                            index !== 0 ? "collapsed" : ""
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${accordion.id}`}
                          aria-expanded="true"
                          aria-controls={`collapse${accordion.id}`}
                        >
                          {accordion.title}
                        </button>
                      </h2>
                      <div
                        id={`collapse${accordion.id}`}
                        className={`accordion-collapse collapse ${
                          index === 0 ? "show" : ""
                        }`}
                        aria-labelledby={`heading${accordion.id}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {accordion.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="#"
                rel="noreferrer"
                className="btn btn-img bg-blue4  mt-40 rounded-pill"
                target="_blank"
              >
                <div className="inf color-gray">
                  <h6>
                    <bigger>PepeSwap</bigger>
                  </h6>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="img mb-30 mb-lg-0">
              <img src="assets/img/dex.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img
        src="assets/img/about/about_s4_bubble2.png"
        alt=""
        className="bubble2"
      />
    </div>
  );
};

export default SecondContent;
