import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { groq } from 'next-sanity'
import { sanityClient } from '@/sanity'

const cacheOptions = { next: { revalidate: 10 } };

export const fetchExperiences = async () => {
  const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-08-06/data/query/production?query=*%5B_type+%3D%3D+%27experience%27%5D+%7B+...%2C+technologies%5B%5D-%3E+%7D`, cacheOptions);
  const data = await res.json();
  const experiences: Experience[] = data.result;
  return experiences;
};

export const fetchPageInfo = async () => {
  const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-08-06/data/query/production?query=*%5B_type+%3D%3D+%27pageInfo%27%5D%5B0%5D`, cacheOptions);
  const data = await res.json();
  const pageInfo: PageInfo = data.result;
  return pageInfo;
};

export const fetchProjects = async () => {
  const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-08-06/data/query/production?query=*%5B_type+%3D%3D+%27project%27%5D+%7B+...%2C+technologies%5B%5D-%3E+%7D`, cacheOptions);
  const data = await res.json();
  const projects: Project[] = data.result;
  return projects;};

export const fetchSkills = async () => {
  const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-08-06/data/query/production?query=*%5B_type+%3D%3D+%27skill%27%5D`, cacheOptions);
  const data = await res.json();
  const skills: Skill[] = data.result;
  return skills;
};

export const fetchSocials = async () => {
  const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-08-06/data/query/production?query=*%5B_type+%3D%3D+%27social%27%5D`, cacheOptions);
  const data = await res.json();
  const socials: Social[] = data.result;
  return socials;
};
