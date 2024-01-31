import logo from "../public/assets/logo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss"

export default function Landing() {
    return (
        <main className={styles.main}>
            <ellipse className={styles.ellipse1}></ellipse>
            <ellipse className={styles.ellipse2}></ellipse>
            <div className={styles.name}>
                <img src="/Landing/Frame_1000002161.svg"></img>
            </div>
            <div className={styles.mid}>
                <h1 className={styles.mainText}>
                    Effortless <span>Al-Powered</span> Legal Case Management
                    Right At Your Fingertips
                </h1>
                <p className={styles.subText}>
                    Stay updated, as we bring to you your AI powered legal companion.
                    <span> Coming soon</span> to make your legal practice a breeze!
                </p>
                <div className={styles.update}>
                    <form className={styles.update}>
                        <input type="text" placeholder="Your Email ID">

                        </input>
                        <button>
                            Keep Me Updated
                        </button>
                    </form>
                </div>
            </div>
            <div>

            </div>
        </main>

    )
}