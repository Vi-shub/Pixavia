import React from "react";
import { useEffect } from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";
import { getSortedTeamData } from "@library/team";

import { circleText } from "@common/utilits";

//import HeroSection from "@components/sections/Hero";
import AboutSection from "@components/sections/About";
import ShowcaseSection from "@components/sections/Showcase";
import TeamSection from "@components/sections/Team";
import VideoSection from "@components/sections/Video";
import CallToActionSection from "@components/sections/CallToAction";

const HeroSection = dynamic( () => import("@components/sections/Hero"), { ssr: false } );
const TickerSlider = dynamic( () => import("@components/sliders/Ticker"), { ssr: false } );


const Home1 = (props) => {
  useEffect(() => {
    circleText();
  }, []);

  return (
    <Layouts>
      <>
        <HeroSection />
        <AboutSection />
        <TickerSlider />
        <ShowcaseSection projects={props.projects} />
        <TeamSection team={props.team} />
        <VideoSection />
        <CallToActionSection />
       
      </>
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const allProjects = getSortedProjectsData();
  const allTeam = getSortedTeamData();

  return {
    props: {
      posts: allPosts,
      projects: allProjects,
      team: allTeam
    }
  }
}