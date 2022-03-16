import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          pariatur quam minus ab fugit a facere assumenda sequi libero
          necessitatibus. Eos animi ipsum dicta id magnam! Ipsam culpa modi
          architecto!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          pariatur quam minus ab fugit a facere assumenda sequi libero
          necessitatibus. Eos animi ipsum dicta id magnam! Ipsam culpa modi
          architecto!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
