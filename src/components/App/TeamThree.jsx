import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Parallax, Autoplay, Navigation } from "swiper";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Pagination, Parallax, Autoplay, Navigation]);

const datas = [
  {
    name: "Leonardo",
    position: "Founder",
    image: "team-1",
    text: "A world leading crypto-financial broker and service provider since 2014 with excellent managing skills. He has his hand in a number of companies including a cryptocurrency company, a publishing and management platform that allows anyone to create, manage and sell multimedia NFTs.",
  },
  {
    name: "Trinity",
    position: "Co-Founder",
    image: "team-2",
    text: " Businesswoman, investor, co-founder of various technology companies and virtual reality startup.",
  },
  {
    name: "Edward",
    position: "Chief Marketing Officer",
    image: "team-5",
    text: " Extensive knowledge of marketing strategies and expertise translates into increased project awareness and profitability. ",
  },
  {
    name: "Kellyn",
    position: "IT Manager",
    image: "team-3",
    text: "A highly skilled engineer who leads the technical development of Blockchain products such as: Defi, banking, NFTs, smart contract...etc.",
  },

  {
    name: "0xJSX ",
    position: "NodeJS Developer",
    image: "team-7",
    text: "A web app developer who has developed many DApps on BSC and has given consultancy to many projects on web3 applications.",
  },
];

const TeamThree = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, [load]);
  const paginationRef = React.useRef(null);
  return (
    <>
      <section
        className="testimonials style-4 pt-70"
        data-scroll-index="5"
        id="team"
      >
        <div className="container">
          <div className="content">
            <div className="row justify-content-center">
              {" "}
              <div className="col-12 text-center section-head style-4">
                <h2 className=" text-center text-md-left bold-text">
                  <span> Get To Know The Team</span>
                </h2>{" "}
                <h4 className="mb-30 text-center text-md-left">
                  Experts & Enthusiasts
                </h4>
              </div>
              <div className="row justify-content-center">
                <div className="swiper-container">
                  {load ? (
                    <Swiper
                      parallax={true}
                      speed={1000}
                      spaceBetween={0}
                      loop={true}
                      slidesPerView={5}
                      navigation={true}
                      pagination={{
                        clickable: true,
                        el: paginationRef.current,
                      }}
                      className="swiper-wrapper"
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        640: {
                          slidesPerView: 2,
                          centeredSlides: true,
                        },
                        767: {
                          slidesPerView: 3,
                          centeredSlides: true,
                        },
                        991: {
                          slidesPerView: 3,
                          centeredSlides: true,
                        },
                      }}
                    >
                      {datas.map((e, index) => (
                        <SwiperSlide className="swiper-slide" key={index}>
                          {" "}
                          <div
                            className=" team-sec"
                            style={{ height: "700px" }}
                          >
                            <div className=" ">
                              <div className=" section-head style-4 text-center ">
                                <img
                                  className="img-2"
                                  src={`/assets/img/team/${e.image}.png`}
                                />
                                <h3 className="mt-30">
                                  <span>{e.name}</span>
                                </h3>
                                <h6 className="mb-30 bold-text">
                                  {e.position}
                                </h6>
                              </div>
                              <div className=" section-head style-4 text-left">
                                <p className="mb-30 ">{e.text}</p>
                              </div>{" "}
                            </div>{" "}
                          </div>
                        </SwiperSlide>
                      ))}{" "}
                      <SwiperSlide className="swiper-slide">
                        <div
                          className=" advisor-sec"
                          style={{ height: "700px" }}
                        >
                          <div className=" ">
                            <div className=" section-head style-4 text-center ">
                              <img
                                className="img-2"
                                src={`/assets/img/team/team-4.png`}
                              />
                              <h3 className="mt-30">
                                <span>Harry</span>
                              </h3>
                              <h6 className="mb-30 bold-text">Advisor</h6>
                            </div>
                            <div className=" section-head style-4 text-left">
                              <p className="mb-30 ">
                                A entrepreneur, investor, and software engineer.
                                He is a general partner at some venture capital
                                firms and previously worked at Apple.
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  ) : (
                    ""
                  )}{" "}
                  <div className="swiper-pagination" ref={paginationRef}></div>
                </div>
              </div>{" "}
            </div>
          </div>{" "}
        </div>
      </section>
    </>
  );
};

export default TeamThree;
