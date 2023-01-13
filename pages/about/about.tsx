import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
const About = () => {
  return (
    <div style={{ backgroundColor: "#FF828A", width: "100vw", height: "100vh" }}>
      <Head>
        <title>About our store</title>
      </Head>
      <div style={{ color: "#17183B", display: "flex", margin: "0px 20px", flexDirection: "column", height: "100%", width: "auto", justifyContent: "space-between" }}>

        <h1>Welcome to SHOPY</h1>
        <h2>Buying books from random sites is usually what an avid reader might do, even if some of those sites don't offer refunds. We want to change that and more.</h2>
        <h2>
          Here at Shopy, we want you to have the best experience when shopping for books. We'll give you a full refund in less than 24 hours for the book you just bought that you didn't like. The refund only works in the first 2 weeks after the purchase of the book.
        </h2>
        <p style={{ fontSize: "1.5rem" }}>
          The variety of books at your disposal will be almost unlimited. There is no limit the amount of books you can buy nor for the stock of some particular book.
        </p>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </div>
    </div>
  );
};
export default About;
