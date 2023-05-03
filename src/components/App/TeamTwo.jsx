import React from "react";
import Swiper from "swiper";
import { SwiperSlide, paginationRef } from "swiper/react";
const datas = [
  {
    name: "Tyler",
    position: "Founder",
    text: "A world leading crypto-financial broker and service provider since 2014 with excellent managing skills. He has his hand in a number of companies including a cryptocurrency company, a publishing and management platform that allows anyone to create, manage and sell multimedia NFTs.",
  },
  {
    name: "Vincent ",
    position: "Co-Founder",
    text: " Businessman, investor, co-founder of various technology companies and virtual reality startup",
  },
  {
    name: "Brenden",
    position: "Chief Marketing Officer",
    text: " Extensive knowledge of marketing strategies and expertise translates into increased project awareness and profitability. ",
  },
  {
    name: "Kellyn",
    position: "IT Manager",
    text: "A highly skilled engineer who leads the technical development of Blockchain products such as: Defi, banking, NFTs, smart contract...etc.",
  },

  {
    name: "0xJSX ",
    position: "NodeJS Developer",
    text: "A web app developer who has developed many DApps on BSC and has given consultancy to many projects on web3 applications.",
  },
];
const TeamTwo = () => {
  return (
    <section
      className="testimonials style-4 pt-70"
      data-scroll-index="5"
      id="team"
    >
      <div className="container">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-12 text-center section-head style-4">
              <h2 className=" text-center text-md-left bold-text">
                <span> Get To Know The Team</span>
              </h2>{" "}
              <h4 className="mb-30 text-center text-md-left">
                Experts & Enthusiasts
              </h4>
            </div>
            <div className="row justify-content-center">
              {" "}
              {datas.map((e, index) => (
                <div className="col-6  col-md-4 team-sec" key={index}>
                  <div className=" ">
                    <div className=" section-head style-4 text-center ">
                      <img className="img-2" src="/assets/img/tokenomics.png" />
                      <h3 className="mt-30">
                        <span>{e.name}</span>
                      </h3>
                      <h6 className="mb-30 bold-text">{e.position}</h6>
                    </div>
                    <div className=" section-head style-4 text-left">
                      <p className="mb-30 ">{e.text}</p>
                    </div>
                  </div>{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamTwo;
