import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import styles from "../styles/Home.module.css";
import utilstyles from "../styles/utils.module.css";
import { getPostsData } from "../lib/post";

//SSGの場合
export async function getStaticProps() {
  //一回だけ渡したい
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

// //SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       //コンポーネントに渡すためのprops
//     },
//   };
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilstyles.headingMd}>
        <p>Next.jsのサンプルです</p>
      </section>

      <section className={`${utilstyles.headingMd} ${utilstyles.padding1px}`}>
        <h2>コンテンツ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={thumbnail} alt="" className={styles.thumbnailImage} />
              </Link>
              <Link href="/">
                <a className={utilstyles.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilstyles.lightText}>{date}</small>
            </article>
          ))}
          ;
        </div>
      </section>
    </Layout>
  );
}
