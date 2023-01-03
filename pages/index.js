import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";

import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home className={utilStyles.container}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[meesa tanvi]</p>
        <p>
          (This website is under construction{" "}
          <a href="https://nextjs.org/learn">oops</a>.)
        </p>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>

        <div className={styles.grid}>
          {allPostsData.map(({ id, date, title }) => (
            <Link href={`/posts/${id}`} className={styles.card} key={id}>
              <h3>{title}</h3>
              <br />
              <small className={utilStyles.dateText}>
                <Date dateString={date} />
              </small>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
