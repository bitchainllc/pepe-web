import community from "@data/Saas/community.json";
import communityRTL from "@data/Saas/community-rtl.json";

const CommunitySaas = ({ rtl, scrollToId }) => {
  const communityData = rtl ? communityRTL : community;

  return (
    <section className="community pt-40 pb-50 style-5 top-reasons">
      <div className="content rounded-pill">
        {communityData.map((item, index) => (
          <div
            className="commun-card"
            style={{ cursor: "pointer" }}
            key={index}
            onClick={() => {
              scrollToId(item.id);
            }}
          >
            <div className="icon">
              <img src={item.img} alt="" />
            </div>
            <div className="inf">
              <h5>{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunitySaas;
