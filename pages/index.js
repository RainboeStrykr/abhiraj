import Head from "next/head";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <>
      <article className="w-full px-10 py-10 mb-20 overflow-y-auto max-w-[620px] mx-auto">
        <div className="flex items-start justify-center w-full mb-10 overflow-hidden rounded-lg max-h-[500px] shadow-xl">
          <img
            src="https://i.ibb.co/SDTy6GV6/newpfp.jpg"
            alt="Abhiraj"
            title="A profile picture of Abhiraj"
          />
        </div>
        <h2 className="mt-12 mb-6 text-3xl font-black md:text-5xl">
          <span className="text-gray-400">Hi, I'm </span>Abhiraj!
        </h2>
        <div className="post-content">
          <p className="text-lg text-gray-500">
            I'm a <span className="font-medium">frontend developer</span> and{" "}
            <span className="font-medium">business strategist</span> by
            profession, currently studying CSE with Software Engineering at{" "}
            <a href="https://maps.app.goo.gl/jZNwz6rRt4YiFUeB7">SRM Institute of Science and Technology</a>.
          </p>
          <p className="text-lg text-gray-500">
          I enjoy working at the intersection of tech, communication, and problem-solving, and I’m always excited to collaborate on projects that make a difference.
          </p>
          <p className="text-lg text-gray-500">
            On weekends, I like to party and try new adventures. I love to watch movies and shows. 
            Some weekends go into building some side
            projects like this{" "}
            <Link href="https://pro-modoro.xyz">
              <a target="_blank">productivity app</a>
            </Link>{" "}
            and this{" "}
            <Link href="https://glyph-pdf.vercel.app">
              <a>PDF tool</a>
            </Link>
            .
          </p>
        </div>
        <div className="px-4 py-3 my-5 text-base text-gray-400 bg-gray-100 rounded-xl dark:bg-gray-900 dark:text-gray-500">
          You can find my resume{" "}
          <a
            className="underline"
            target="_blank"
            href="https://www.dropbox.com/scl/fi/ig9g40ronkihkzzjojvet/abhiraj_general_resume.pdf?rlkey=9b84dfwp6gw99dncwnsr2x3rb&st=grxy23s4&dl=0"
          >
            here
          </a>
          .
        </div>
      </article>
    </>
  );
}
