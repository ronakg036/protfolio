import About from "../components/About"
import Achievements from "../components/Achievements"
import CodingProfiles from "../components/CodingProfiles"
import Contact from "../components/Contact"
import Education from "../components/Education"
import EventsHosted from "../components/EventsHosted"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Leadership from "../components/Leadership"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

function HomePage({ data }) {
  return (
    <>
      <Hero personalInfo={data.personalInfo} contactLinks={data.contact.links} heroContent={data.sectionContent.hero} />
      <About personalInfo={data.personalInfo} section={data.sectionContent.about} />
      <Education education={data.education} section={data.sectionContent.education} />
      <Skills skills={data.skills} section={data.sectionContent.skills} />
      <CodingProfiles codingProfiles={data.codingProfiles} section={data.sectionContent.codingProfiles} />
      <Projects projects={data.projects} section={data.sectionContent.projects} />
      <Achievements achievements={data.achievements} section={data.sectionContent.achievements} />
      <Leadership leadership={data.leadership} section={data.sectionContent.leadership} />
      <EventsHosted eventsHosted={data.eventsHosted} section={data.sectionContent.events} />
      <Contact personalInfo={data.personalInfo} contact={data.contact} section={data.sectionContent.contact} />
      <Footer footer={data.footer} personalInfo={data.personalInfo} />
    </>
  )
}

export default HomePage
