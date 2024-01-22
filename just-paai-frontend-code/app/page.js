import Image from "next/image";
import styles from "./page.module.css";
import logo from "../public/assets/logo.svg"
import Link from "next/link";
export default function Home() {
  return (
    <>
    <div className={styles.pageWrapper}>
      <div className={styles.loginContainer}>
    <div className={styles.logoContainer}>
      <Image src={logo} alt="logo"/>
    </div>
    <div className={styles.heading}>
      <h1>Start Your Journey With Lawdiary</h1>
      <h2>Description line</h2>
    </div>
    <div className={styles.formContainer}>
    <form>
      <div>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" required placeholder="Enter Your Email"/>
              </div>
              <div>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required placeholder="Enter Your Phone Number"/>
              </div>
              <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required placeholder="Enter Your Password"/>
              </div>
              <div>
              <label htmlFor="confirmPassword" >Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Your Password"
                required
              />
</div>
              <button type="submit" className={styles.signUpBtn}>Sign Up</button>
            </form>
    <div className={styles.authButtons}>
      <button>Login With Google</button>
      <button>Login With Google</button>
    </div>
    <div className={styles.loginText}>
    Already A Member? <a href="#">LOGIN</a>
    </div>
    </div>
      </div>
    </div>
    </>
  );
}
