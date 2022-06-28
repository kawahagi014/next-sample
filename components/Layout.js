import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../components/layout.module.css";
import utilstyles from "../styles/utils.module.css";

const name = "sample code";
export const siteTitle = "Next.js sample";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon" />
      </Head>
      <header className={styles.header}>
        <img
          src="/images/logo-blue.png"
          alt=""
          className={
            home
              ? `${`${utilstyles.borderCircle} ${styles.headerHomeImage}`}`
              : `${utilstyles.borderCircle}`
          }
        />
        <h1 className={utilstyles.heading2X1}>{name}</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← ホームに戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
