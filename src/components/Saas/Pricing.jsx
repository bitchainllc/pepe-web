import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import plans from "@data/Saas/plans.json";
import plansRTL from "@data/Saas/plans-rtl.json";
import { FaCheck } from "react-icons/fa";
const Pricing = ({ rtl }) => {
  return (
    <section className="roadmap2 mt-100 mb-100" id="roadmap">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center section-head style-4">
            {" "}
            <h2 className="mb-30">
              The <span>Roadmap</span>
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="roadmap">
              <h3 className="roadmap-year">2023</h3>

              <ul className="roadmap-list">
                <li className="roadmap-item d-flex align-items-center">
                  <span className="roadmap-num">Q2</span>

                  <span className="roadmap-content d-block">
                    <span className="d-block roadmap-content-item">
                      {" "}
                      <span className="icon ">
                        <FaCheck />
                      </span>
                      {"  "}Project Brainstorming
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      <span className="icon ">
                        <FaCheck />
                      </span>
                      {"  "}Website Development
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      <span className="icon ">
                        <FaCheck />
                      </span>
                      {"  "}Whitepaper
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      <span className="icon ">
                        <FaCheck />
                      </span>
                      {"  "}Building the Community
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      <span className="icon ">
                        <FaCheck />
                      </span>
                      {"  "}Deploy Contract
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      <span className="icon ">
                        <FaCheck />
                      </span>
                      {"  "}Begin DApps Development
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      <span className="icon ">
                        <FaCheck />
                      </span>
                      {"  "}PepeChain Wallet Prototype
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      <span className="icon "></span>
                      {"  "}PepeDEX v1 Launch
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      <span className="icon "></span>
                      {"  "}Pepe Portfolio Tracker Launch
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      <span className="icon "></span>
                      {"  "}PepExplorer (beta) Launch
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      <span className="icon "></span>
                      {"  "}Contract Audit & KYC
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      <span className="icon ">
                        <FaCheck />
                      </span>
                      {"  "}Prelaunch Marketing
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      <span className="icon ">
                        <FaCheck style={{ opacity: 0 }} />
                      </span>
                      {"  "}Launch on PancakeSwap
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      <span className="icon ">
                        <FaCheck style={{ opacity: 0 }} />
                      </span>
                      {"  "}CMC & CG Listing
                    </span>{" "}
                  </span>
                </li>

                <li className="roadmap-item d-flex align-items-center">
                  <span className="roadmap-num">Q3</span>

                  <span className="roadmap-content d-block">
                    <span className="d-block roadmap-content-item">
                      {" "}
                      {"  "}$PCHAIN Staking
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      {"  "}Tier 2 CEX Listing
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      {"  "}Begin constructing PepeChain Blockchain
                    </span>{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6">
            {" "}
            <div className="roadmap">
              <h3 className="roadmap-year">2023</h3>

              <ul className="roadmap-list">
                <li className="roadmap-item d-flex align-items-center">
                  <span className="roadmap-num">Q4</span>

                  <span className="roadmap-content d-block">
                    <span className="d-block roadmap-content-item">
                      {" "}
                      {"  "}Tier 2 CEX Listing
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      {"  "} Mobile Wallet App Launch
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      {"  "} Researches on PepeChain Launchpad
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      {"  "}PepeChain Launchpad Development
                    </span>{" "}
                  </span>
                </li>
              </ul>
            </div>
            <div className="roadmap ">
              <h3 className="roadmap-year">2024</h3>

              <ul className="roadmap-list">
                <li className="roadmap-item d-flex align-items-center">
                  <span className="roadmap-num">Q1</span>

                  <span className="roadmap-content d-block">
                    <span className="d-block roadmap-content-item">
                      {" "}
                      {"  "}PepeChain Launchpad Launch
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      {"  "}PepeChain Liquidity Locker Launch
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      {"  "}PepeDEX v2 Launch
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      {"  "}Fund Projects on our DEX
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      {"  "}Reach to 1BN Marketcap
                    </span>{" "}
                  </span>
                </li>

                <li className="roadmap-item d-flex align-items-center">
                  <span className="roadmap-num">Q2</span>

                  <span className="roadmap-content d-block">
                    <span className="d-block roadmap-content-item">
                      {" "}
                      {"  "}Develop BSC-PepeChain Bridge
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      {"  "}Get wCoins to PepeChain
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      {"  "}Perpetual Trades on PepeDEX
                    </span>{" "}
                    <span className="d-block roadmap-content-item">
                      {" "}
                      {"  "}PepeChain Roadmap v2 Publish
                    </span>{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
