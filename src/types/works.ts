export interface ProjectProps {
  index: number;
  title: string;
  setModal: (params: { active: boolean; index: number }) => void;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  services: string;
  color: string;
  year: number;
  image: string;
  slug: string;
}
