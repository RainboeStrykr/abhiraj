import Head from "next/head";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <>
      <article className="w-full px-10 py-10 mb-20 overflow-y-auto max-w-[620px] mx-auto">
        <div className="flex items-start justify-center w-full mb-10 overflow-hidden rounded-lg max-h-[500px] shadow-xl">
          <img
            src="/abhiraj-pfp.jpg"
            alt="Abhiraj"
            title="A profile picture of Abhiraj"
          />
        </div>
        <h2 className="mt-12 mb-6 text-3xl font-black md:text-5xl">
          <span className="text-gray-400">Hi, I'm </span>Abhiraj!
        </h2>
        <div className="post-content">
          <p className="text-lg text-gray-500">
            I'm a <span className="font-medium">full-stack developer</span> and{" "}
            <span className="font-medium">business strategist</span> by
            profession, currently studying CSE with Software Engineering at{" "}
            <a href="https://maps.app.goo.gl/jZNwz6rRt4YiFUeB7">SRM Institute of Science and Technology</a>.
          </p>
          <p className="text-lg text-gray-500">
          I enjoy working at the intersection of tech, communication, and problem-solving, and I’m always excited to collaborate on projects that make a difference.
          </p>
          <p className="text-lg text-gray-500">
            On weekends, I like to party and try new adventures. I love to watch movies and shows. 
            Some weekends go into writing about{" "}
            <Link href="https://idle.abhiraj.dev/" target="_blank">the state of the world</Link>{" "}
            and designing{" "}
            <Link href="https://design.abhiraj.dev/" target="_blank">brand identities</Link>
            .
          </p>
        </div>
        <div className="px-4 py-3 my-5 text-base text-gray-400 bg-gray-100 rounded-xl dark:bg-gray-900 dark:text-gray-500">
          {" "}
          <a
            className="underline"
            target="_blank"
            href="https://www.dropbox.com/scl/fi/pm9544mscu0s8q7ld6mcg/abhiraj_bhowmick_resume.pdf?rlkey=0xoeu9d91zu5ohzrr3xr0mh4k&st=hwfvvivm&dl=0"
          >
          Click here to view my resume
          </a>
          .
        </div>
      </article>
    </>
  );
}
