import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <article className="w-full px-10 py-10 mb-20 overflow-y-auto max-w-[620px] mx-auto">
        <div className="flex items-start justify-center w-full mb-10 overflow-hidden rounded-lg max-h-[500px] shadow-xl">
          <img
            src="https://us-east-1.tixte.net/uploads/abhiraj-is.super-cool.xyz/web-pfp.png"
            alt="Abhiraj"
            title="A profile picture of Abhiraj"
          />
        </div>
        <h2 className="mt-12 mb-6 text-3xl font-black md:text-5xl">
          <span className="text-gray-400">Hi, I'm </span>Abhiraj!
        </h2>
        <div className="post-content">
          <p className="text-lg text-gray-500">
            I'm a <span className="font-medium">web developer</span> and{" "}
            <span className="font-medium">tech blogger</span> by
            profession, currently working on{" "}
            <a href="https://twitter.com/visualwayorg">Visualway</a>.
          </p>
          <p className="text-lg text-gray-500">
            I like building clean and interactive stuff on the web
            and write blogs on making web dev easy for all.
          </p>
          <p className="text-lg text-gray-500">
            On weekends I like to travel and take photos. I like to binge try
            Cafes and Restaurants. Some weekends go into building some side
            projects like{" "}
            <Link href="https://pro-modoro.xyz">
              <a target="_blank">this productivity app</a>
            </Link>{" "}
            and{" "}
            <Link href="https://cleanshot.vercel.app">
              <a>mockup tool</a>
            </Link>
            .
          </p>
        </div>
        <div id="revue-embed">
  <form action="http://newsletter.abhiraj.co/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
  <div class="revue-form-group">
    <label for="member_email">Email address</label>
    <input class="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email">
  </div>
  <div class="revue-form-group">
    <label for="member_first_name">First name <span class="optional">(Optional)</span></label>
    <input class="revue-form-field" placeholder="First name... (Optional)" type="text" name="member[first_name]" id="member_first_name">
  </div>
  <div class="revue-form-group">
    <label for="member_last_name">Last name <span class="optional">(Optional)</span></label>
    <input class="revue-form-field" placeholder="Last name... (Optional)" type="text" name="member[last_name]" id="member_last_name">
  </div>
  <div class="revue-form-actions">
    <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit">
  </div>
  <div class="revue-form-footer">By subscribing, you agree with Revue’s <a target="_blank" href="https://www.getrevue.co/terms">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</div>
  </form>
</div>
        <div className="px-4 py-3 my-5 text-base text-gray-400 bg-gray-100 rounded-xl dark:bg-gray-900 dark:text-gray-500">
          You can find my socials{" "}
          <a
            className="underline"
            target="_blank"
            href="https://ayo.so/abhiraj"
          >
            here
          </a>
          .
        </div>
      </article>
    </>
  );
}
