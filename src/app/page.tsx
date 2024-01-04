import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "1em",
              listStyle: "none",
              cursor: "pointer",
            }}
          >
            <li>
              <Link href={"/About"}>About</Link>
            </li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
