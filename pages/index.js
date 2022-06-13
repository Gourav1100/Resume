import Head from "next/head";
import Resume from "./components/resume/resume";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Gourav Bidhuri - RESUME</title>
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <main style = {{backgroundColor: "#dfe6e9"}}>
                <Resume />
            </main>
        </div>
    );
}
