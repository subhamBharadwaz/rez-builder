import Head from "next/head";
import Link from "next/link";

import { siteConfig } from "@/config/site";

import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Next.js</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-relaxed tracking-tight  sm:text-3xl md:text-5xl lg:text-6xl">
            Craft Your Dream Career
            <br className="hidden sm:inline" />
            Build a Winning Resume with our Powerful Resume Builder.
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Stand Out in the Crowd of Job Applicants: Create a Stunning,
            Customized Resume with Our User-Friendly Resume Builder
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.dashboard}
            className={buttonVariants({ size: "lg" })}
          >
            Build Resume
          </Link>
          <Link
            href={siteConfig.links.auth}
            className={buttonVariants({
              variant: "outline",
              size: "lg",
            })}
          >
            Sign In
            <Icons.chevronDown className=" text-slate-900 transition-all dark:text-slate-400" />
          </Link>
        </div>
      </section>
    </>
  );
}
