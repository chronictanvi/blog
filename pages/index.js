import { MDXProvider } from "@mdx-js/react";

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

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

// check if styled components are workin
const StyledLink = styled.a`
  background-color: var(--color-bright-crimson);
  padding: var(--space-16) var(--space-24);
  border-radius: var(--border-radius-base);
  color: black;
  font-weight: 400;
  font-family: var(--font-sans);
  transition: all 300ms ease-in-out;
  :hover {
    background-color: var(--color-medium-sea-blue);
  }
`;

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
            {allPostsData.map(({ id, date, title }) => (
              <Link href={`/posts/${id}`} className={styles.card} key={id}>
                <small className={utilStyles.dateText}>
                  <Date dateString={date} />
                </small>
                <h3>{title}</h3>
              </Link>
            ))}
            <StyledLink href="https://stackoverflow.com/questions/34959038/npm-stuck-giving-the-same-error-eisdir-illegal-operation-on-a-directory-read-a">
              HELLO{" "}
            </StyledLink>
          </div>
        </section>
      </Layout>
    </MDXProvider>
  );
}
