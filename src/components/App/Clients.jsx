import clients from "@data/App/clients.json";

const ClientsApp = ({ rtl }) => {
  return (
    <section className="clients style-4">
      {" "}
      <div className="col-12 text-center section-head style-4">
        {" "}
        <h2 className="mb-30">
          Partners <span> & Backers</span>
        </h2>
      </div>
      <div className="container">
        <div className="text-center">
          <h5 className="fw-bold mb-60"></h5>
        </div>
        <div className="client-logos pb-70">
          <div className="row align-items-center">
            {clients.map((client, index) => (
              <div className="col-6 col-lg-4" key={index}>
                <a href="#" className="img d-block">
                  <img src={client} alt="" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsApp;
