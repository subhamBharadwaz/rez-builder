import BannerImage from "../../public/images/resume-home.png";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export default function IndexPage() {
  return (
    <section className="container flex min-h-full flex-col-reverse justify-between gap-12 pb-8 pt-6 md:py-10 lg:flex-row lg:gap-6">
      <div className="flex flex-col gap-16 lg:w-2/3  lg:pt-28">
        <div className="flex max-w-[980px] flex-col items-start gap-5">
          <h3 className="text-md font-bold text-slate-700 dark:text-slate-200">
            Unleash Your Career Potential
          </h3>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-5xl lg:leading-snug">
            Revolutionize Your Job Search
            <br className="hidden sm:inline" />
            with Rez Builder Today!
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Create a professional resume in minutes with Rez Builder - The
            ultimate tool for job seekers. Choose from a wide range of
            customizable templates and showcase your skills, experience, and
            achievements with ease!
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href={siteConfig.links.dashboard}
            className={buttonVariants({
              size: "xl",
            })}
          >
            Build Resume
          </Link>
          <Link
            href={siteConfig.links.auth}
            className={buttonVariants({
              variant: "outline",
              size: "xl",
            })}
          >
            Sign In
            <Icons.chevronDown className=" text-slate-900 transition-all dark:text-slate-400" />
          </Link>
        </div>
      </div>
      <div className="w-full self-center overflow-hidden rounded-lg  shadow-md shadow-slate-200  dark:shadow-none lg:w-5/12 lg:-rotate-3 xl:w-6/12 ">
        <Image src={BannerImage} alt="Banner Image" />
      </div>
    </section>
  );
}
