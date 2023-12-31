import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfo, fetchExperiences, fetchProjects, fetchSkills, fetchSocials } from "@/utils/fetchData";
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";

export default async function Home() {
  const socials: Social[] = await fetchSocials();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const experiences: Experience[] = await fetchExperiences();
  const pageInfo: PageInfo = await fetchPageInfo();

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-accent-80">
      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section> */}

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <ArrowSmallUpIcon className="h-5 w-5 md:h-8 md:w-8 rounded-full text-gray-500 hover:text-accent-50 transition-all ease-in-out cursor-pointer" />
          </div>
        </footer>
      </Link>
    </div>
  );
}
