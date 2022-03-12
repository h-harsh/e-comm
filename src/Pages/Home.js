import React from "react";
import {Header} from '../components/Header-home/header'
import {Footer} from '../components/Footer/footer'
import { dataAuthors, dataIconsSection } from "./data";
import { WideBannerDisplay, IconsSection, CategoryDisplay } from "../New D-Components/Home";

export const Home = () => {
  return (
    <>
    <Header />
    <CategoryDisplay data={dataAuthors} title={'Famous  Authors '} />
    <WideBannerDisplay/>
    <IconsSection data={dataIconsSection}  title={'About Us'}/>
    <Footer/>
    </>
  );
};
