import React from "react";
import {
  AboutSection,
  // ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Evan Oyster" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="About Me" />
        <ProjectsSection sectionId="features" heading="Projects" />
        <InterestsSection sectionId="details" heading="Skills & Technologies" />
        <ContactSection sectionId="github" heading="Let's Link Up!" />
      </Page>
    </>
  );
}
