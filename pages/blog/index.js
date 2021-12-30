import {BlogList} from 'components'
import {getAllPosts} from "pages/api/blog"
import {NextSeo} from "next-seo";

export default function Blog({ allPosts }) {
  return (
    <>
      <NextSeo
        title="Blog - Abhiraj"
        description="I'm a web developer and content blogger. I wish to make web development easy for all through my blogs"
        openGraph={{
          site_name: "Blog - Abhiraj",
          title: "Blog - Abhiraj",
          description:
            "I'm a web developer and content blogger. I wish to make web development easy for all through my blogs",
        }}
        twitter={{
          handle: "@rainboestrykr",
          site: "@rainboestrykr",
          cardType: "summary_large_image",
        }}
      />

      <BlogList data={allPosts} />
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
    "external"
  ]);

  return {
    props: { allPosts },
  };
}
