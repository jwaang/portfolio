import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { groq } from 'next-sanity'
import { sanityClient } from '@/sanity'

const cacheOptions = { next: { revalidate: 10 } };

export const fetchExperiences = async () => {
  const experiences: Experience[] = await sanityClient.fetch(groq`*[_type == 'experience'] { ..., technologies[]-> }`);
  return experiences;
};

export const fetchPageInfo = async () => {
  const pageInfo: PageInfo = await sanityClient.fetch(groq`*[_type == 'pageInfo'][0]`);
  return pageInfo;
};

export const fetchProjects = async () => {
  const projects: Project[] = await sanityClient.fetch(groq`*[_type == 'project'] { ..., technologies[]-> }`);
  return projects;
};

export const fetchSkills = async () => {
  const skills: Skill[] = await sanityClient.fetch(groq`*[_type == 'skill']`);
  return skills;
};

export const fetchSocials = async () => {
  const socials: Social[] = await sanityClient.fetch(groq`*[_type == 'social']`);
  return socials;
};
