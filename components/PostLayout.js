// what does this page do? it has a template for the post!

import Layout from "./Layout";
import Head from "next/head";
import Date from "./Date";

import utilStyles from "../styles/utils.module.css";

export default function PostLayout({ postData, children }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        {/* 
      here i want the content to come from the meta tag of layout instead
      right now its in post data?  */}
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.dateText}>
          <Date dateString={postData.date} />
        </div>
        {children}
      </article>
    </Layout>
  );
}
