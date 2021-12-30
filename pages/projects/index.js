import {NextSeo} from "next-seo";
import {WorkList} from "components";
import { getAllPosts } from "pages/api/projects";

export default function Home({allPosts}) {
  return (
    <>
      <NextSeo
        title="Work – Abhiraj"
        description="A list of all my side-projects"
        openGraph={{
          site_name: "Work – Abhiraj",
          title: "Work – Abhiraj",
          description:
            "A list of all my side-projects",
        }}
        twitter={{
          handle: "@rainboestrykr",
          site: "@rainboestrykr",
          cardType: "summary_large_image",
        }}
      />

      <WorkList allPosts={allPosts} />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "content",
    "icon",
  ]);

  return {
    props: { allPosts },
  };
}
