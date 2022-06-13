import Editor from "./components/editor/editor";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Editor />
            </main>
        </div>
    );
}
