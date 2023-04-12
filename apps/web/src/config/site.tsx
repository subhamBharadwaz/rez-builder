import { NavItem } from "@/types/nav";

interface SiteConfig {
  name: string;
  description: string;
  mainNav: NavItem[];
  links: {
    twitter: string;
    github: string;
    auth: string;
    dashboard: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Resume Builder",
  description:
    "Make a lasting impression on potential employers with a polished and professional resume created using our intuitive and efficient resume builder. Our platform allows you to customize your resume to highlight your unique strengths and experiences, so you can outshine the competition and land your dream job. Don't settle for a generic resume - start building a personalized, attention-grabbing resume today with our user-friendly resume builder.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/subh4m",
    github: "https://github.com/subhamBharadwaz/",
    auth: "/login",
    dashboard: "/dashboard",
  },
};
