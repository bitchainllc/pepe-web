import features from "@data/App/features.json";
import featuresRTL from "@data/App/features-rtl.json";

const scrollToId = (id) => {
  const section = document.querySelector(id);
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const FeaturesApp = ({ rtl }) => {
  const featuresData = rtl ? featuresRTL : features;

  return (
    <section className="features pt-70 pb-70 style-4" data-scroll-index="1">
      <div className="container">
        <div className="row justify-content-center info mb-70 text-center">
          <div className="col-12 col-md-8">
            <h3>
              Join the meme-ntum with Pepe: The ultimate token for meme lovers!
              <br />
            </h3>
          </div>
        </div>
        <div
          className="section-head text-center style-4 mb-5"
          id={"pepechain-ecosystem"}
        >
          <h2>
            PepeChain <span> Ecosystem </span>{" "}
          </h2>{" "}
        </div>
        <div className="content ">
          <div className="row"></div>
        </div>
      </div>
      <img src="assets/img/feat_circle.png" alt="" className="img-circle" />
    </section>
  );
};

export default FeaturesApp;
