import { MDXProvider } from "@mdx-js/react";

import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";

import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/Date";

import { breakpoints } from "../utils/breakpoints";
import IntroParagraph from "../components/mdx/IntroParagraph";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const components = {};

export default function Home({ allPostsData }) {
  return (
    <MDXProvider components={components}>
      <Layout home className={utilStyles.container}>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={`${utilStyles.body} ${styles.center}`}>
          (This website is under construction!{" "}
          <a href="https://tanvi.network">here is some other stuff</a>.)
        </section>

        {/* Add this <section> tag below the existing <section> tag.
      
       below the thing with two classname is a template literal */}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <div className={styles.grid}>
            {/* fix this section  */}
            {allPostsData.map(({ id, date, title }) => (
              <Link href={`/posts/${id}`} className={styles.card} key={id}>
                <small className={utilStyles.dateText}>
                  <Date dateString={date} />
                </small>
                <h3>{title}</h3>
              </Link>
            ))}
          </div>
        </section>
      </Layout>
    </MDXProvider>
  );
}
