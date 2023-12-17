import Head from "next/head";
import { Inter } from "next/font/google";
import { TodosView } from "@/features/todos/views/todos";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>To-Do App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <TodosView />
      </main>
    </>
  );
}
