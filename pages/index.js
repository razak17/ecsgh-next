import Head from "next/head";
import Intro from '../components/Intro';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Enterprise Capacity Systems - Home</title>
        <meta
          name="description"
          content="Internet Security Consultancy Agency"
        />
      </Head>
      <Intro />
    </div>
  );
}
