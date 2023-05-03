import aboutData from "@data/App/about.json";
import aboutDataRTL from "@data/App/about-rtl.json";
import FirstContent from "./FirstContent";
import SecondContent from "./SecondContent";
import ThirdContent from "./ThirdContent";
import Integration from "./Integration";
import HeaderSaas from "@components/Saas/Header";
const About = ({ noFirstContent, noIntegration, noWave, rtl }) => {
  const data = rtl ? aboutDataRTL : aboutData;
  const scrollToId = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={`about ${noWave ? "" : "section-padding"} style-4`}>
      {" "}
      <HeaderSaas id="pepe-dapps" />{" "}
      <SecondContent accordions={data.accordions} rtl={rtl} />
      {!noFirstContent && <FirstContent features={data.features} rtl={rtl} />}
      <ThirdContent features={data.thirdFeatures} rtl={rtl} />
      {/*{!noIntegration && (
        <Integration integrations={data.integrations} rtl={rtl} />
     )}*/}
    </section>
  );
};

export default About;
