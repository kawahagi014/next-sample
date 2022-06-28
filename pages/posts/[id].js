import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import utilstyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const postData = await getPostData(params.id);
  console.log(postData);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilstyles.headingX1}>{postData.title}</h1>
        <div className={utilstyles.lightText}>{postData.data}</div>
        <div
          dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }}
        ></div>
      </article>
    </Layout>
  );
}
