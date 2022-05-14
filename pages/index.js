import Head from 'next/head'; // this is a coment
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/dist/client/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm Luca Palminteri. Frontend Web Developer with more than 6 months of experience.</p>
        <Link href='/posts/first-post'>
          <a>First Post</a>
        </Link>
        <a href="/api/auth/login">Login</a>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}