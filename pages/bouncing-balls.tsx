import Head from "next/head";
import { BouncingBalls } from "../components/bouncing-balls";

export default function App() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BouncingBalls></BouncingBalls>
      </main>
    </>
  );
}
