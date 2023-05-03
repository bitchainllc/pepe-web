import { useEffect, useRef, useState } from "react";
import Head from "next/head";
//= Scripts
import navbarScrollEffect from "@common/navbarScrollEffect";
//= Layout
import MainLayout from "@layouts/Main";
//= Components
import TopNav from "@components/Navbars/TopNav";
import Navbar from "@components/Navbars/AppNav";
import HeaderApp from "@components/App/Header";
import ClientsApp from "@components/App/Clients";
import FeaturesApp from "@components/App/Features";
import About from "@components/App/About";
import Screenshots from "@components/App/Screenshots";
import Testimonials from "@components/App/Testimonials";
import Pricing from "@components/App/Pricing";
import FAQ from "@components/App/FAQ";
import Community from "@components/App/Community";
import Footer from "@components/App/Footer";
import HeaderSaas from "@components/Saas/Header";
import CommunitySaas from "@components/Saas/Community";
import PricingSaas from "@components/Saas/Pricing";
import TeamTwo from "@components/App/TeamTwo";
import DownloadSaas from "@components/Saas/Download";
import FooterSaas from "@components/Saas/Footer";
import TeamThree from "@components/App/TeamThree";

const scrollToId = (id) => {
  const section = document.querySelector(id);
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

const HomeAppLanding = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  const [closed, setClosed] = useState(true);
  return (
    <>
      <Head>
        <title> PepeChain | Home</title>
      </Head>

      <MainLayout>
        <TopNav closed={closed} setClosed={setClosed} style="4" />
        <Navbar navbarRef={navbarRef} />
        <HeaderApp
          closed={closed}
          setClosed={setClosed}
          scrollToId={scrollToId}
        />
        <ClientsApp />

        <main>
          {" "}
          <FeaturesApp scrollToId={scrollToId} />
          <About scrollToId={scrollToId} />
          <Screenshots />
          <Testimonials />
          <PricingSaas />
          <DownloadSaas />
        </main>
        <FooterSaas />
      </MainLayout>
    </>
  );
};

export default HomeAppLanding;
