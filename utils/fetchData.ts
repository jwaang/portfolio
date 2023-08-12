import { Experience, PageInfo, Project, Skill, Social } from '@/typings';

const cacheOptions = { next: { revalidate: 10 } };

export const fetchExperiences = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`, cacheOptions);
  const data = await res.json();
  const experiences: Experience[] = data.experiences;
  return experiences;
};

export const fetchPageInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`, cacheOptions);
  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;
  return pageInfo;
};

export const fetchProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`, cacheOptions);
  const data = await res.json();
  const projects: Project[] = data.projects;
  return projects;
};

export const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`, cacheOptions);
  const data = await res.json();
  const skills: Skill[] = data.skills;
  return skills;
};

export const fetchSocials = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`, cacheOptions);
  const data = await res.json();
  const socials: Social[] = data.socials;
  return socials;
};
