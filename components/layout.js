import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "tanvi's blog";
export const siteTitle = "tanvi's blog";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="" />
        <meta name="description" content="" />
        <meta
          property="og:image"
          content={`https://live.staticflickr.com/65535/52666256567_72d390bc4d.jpg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {
        <header className={styles.header}>
          {home ? (
            <>
              {/* <Image
                priority
                src="/images/headshot.jpeg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt=""
              /> */}
              <h1 className={utilStyles.headingLg}>{name}</h1>
            </>
          ) : (
            <>
              {/* <Link href="/">
                <Image
                  priority
                  src="/images/headshot.jpeg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt=""
                />
              </Link> */}
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
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
