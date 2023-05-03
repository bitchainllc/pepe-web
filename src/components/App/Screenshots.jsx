import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import screenshots from "@data/App/screenshots.json";

import "swiper/css";

const Screenshots = () => {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadSwiper(true);
    }, 0);
  }, []);

  return (
    <section className=" nfts pt-300 pb-100" id="nft-marketplace">
      <div className="row text-center justify-content-center">
        {" "}
        <div className="section-head style-4">
          <h2 className="mb-30">
            PepeChain <span> NFT Marketplace </span>{" "}
          </h2>
        </div>
        <h3 className="text mb-40">
          We regulated <bigger> NFT Marketplace</bigger> and payable in
          Cryptocurrencies and FIAT. You don’t have to be a computer geek to buy
          NFTs.
        </h3>{" "}
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            {" "}
            <img
              className="nft-marketplace"
              src="assets/img/nft-marketplace.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <div className="screenshots style-4" data-scroll-index="4">
        <div className="screenshots-slider style-4">
          {loadSwiper && (
            <Swiper
              className="swiper-container"
              spaceBetween={0}
              slidesPerView={6}
              pagination={false}
              navigation={false}
              mousewheel={false}
              keyboard={false}
              loop={true}
              autoplay={{
                delay: 10,
              }}
              speed={1000}
              centeredSlides={true}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                480: {
                  slidesPerView: 3,
                },
                787: {
                  slidesPerView: 4,
                },
                991: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 6,
                },
              }}
            >
              {screenshots.map((screenshot, index) => (
                <SwiperSlide key={index}>
                  <div className="img">
                    <img src={screenshot} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>{" "}
      </div>{" "}
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 platform">
            <img src="/assets/img/platform.png" alt="" className="" />
          </div>
        </div>
      </div>*/}
    </section>
  );
};

export default Screenshots;
