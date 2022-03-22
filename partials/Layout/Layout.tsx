import Link from "next/link";
import Head from "next/head";
import styles from "./Layout.module.scss"

type LayoutProps = {
  /**
   * Page body content
   */
  children: React.ReactNode;

  /**
   * Page title
   */
  title: string;
};

/**
 * Layout encapsulating the whole page, including Blocks.
 * Sets aswell the page title.
 * @param {LayoutProps} props
 * @returns {JSX.Element}
 */
export function Layout({
  children,
  title = "Jobs",
}: LayoutProps): JSX.Element {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title} | Jobs Page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  );
}
