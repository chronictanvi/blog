import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "tanvi's blog";
export const siteTitle = "tanvi's blog";

export default function Layout({ children, home, meta }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="bla bla yuchi gang" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      {
        <header className={styles.header}>
          {home ? (
            <h1 className={utilStyles.headingLg}>{name}</h1>
          ) : (
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          )}
        </header>
      }
      <main>{children}</main>
      {!home && (
        <div className={utilStyles.backToHome}>
          <Link href="/" className={utilStyles.navText}>
            {" "}
            ← Back to home{" "}
          </Link>
        </div>
      )}
    </div>
  );
}
