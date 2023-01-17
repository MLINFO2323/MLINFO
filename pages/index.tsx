import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import index__style from "./index.module.css";
import MenuLoginHandler from "../components/MenuLoginHandler";
// components
import ShoppingCartButton from "../components/ShoppingCartButton";
import ListView from "../components/ListView";
import Login from "../components/Buttons/ButtonSlide1";
import "../components/Product/ProductViewContainer"
import ProductViewContainer from "../components/Product/ProductViewContainer";
import ScrapeDatasetNames from "./Scraper"
export function Home({datasets}) {
  console.log(datasets)
  return (
    <>
      <Head>
        <title>ML Info</title>
      </Head>
      
      {/* <ul>
        {JSON.parse(datasets).map((ds)=><li>{ds.toString()}</li>)}
      </ul> */}

      <div className={index__style.background}>
        <div className={index__style.navbar}>
          <h1 style={{ fontSize: "40px", alignSelf: "start" }}>ML Info</h1>
          <MenuLoginHandler />
        </div>
        <ProductViewContainer/>
        <div className={index__style.footer}>
          <Link href="/about/">
            <a> About</a>
          </Link>
        </div>
      </div>
    </>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  
  let datasets = JSON.stringify(await ScrapeDatasetNames())
  return {
    props: {
      datasets
    },
  }
}

export default Home;
