import React from "react";
import {Header} from '../components/Header-home/header'
import { dataAuthors, dataIconsSection } from "./data";
import { WideBannerDisplay, IconsSection, CategoryDisplay, FeaturedProductDisplay } from "../New D-Components/Home";

export const Home = () => {
  return (
    <>
    <Header />
    <CategoryDisplay data={dataAuthors} title={'Famous  Authors '} />
    <WideBannerDisplay/>

    <FeaturedProductDisplay title={'Featured Books'}/>
    <IconsSection data={dataIconsSection}  title={'About Us'}/>
    </>
  );
};
