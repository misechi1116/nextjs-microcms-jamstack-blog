import Link from "next/link";
import { client } from "../libs/client";
import styles from '../styles/Home.module.scss';

//SSG
export const getStaticProps = async() => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <main className={styles.main}>
      <p className={styles.top}>misechi blog</p>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link legacyBehavior href={`blog/${blog.id}`}>
            <a href="">{ blog.title }</a>
          </Link>
        </li>
      ) )}
    </main>
  );
}
