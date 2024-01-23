"use client";

import Image from "next/image";
import styles from "./page.module.css";
import logo from "../public/assets/logo.svg";
import Link from "next/link";
// import { GoogleLogin } from "react-google-login";
import { useEffect } from "react";
// import { gapi } from "gapi-script";
import { useRouter } from "next/navigation";

export default function Home() {
  // const router = useRouter();
  // const onSuccess = (res) => {
  //   console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
  //   router.push("/onboarding");
  // };
  // const onFailure = (res) => {
  //   console.log("LOGIN Failed! res: ", res);
  // };
  // const ClientID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: { ClientID },
  //       scope: "",
  //     });
  //   }
  //   gapi.load("client:auth2", start);
  // });
  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.loginContainer}>
          <div className={styles.logoContainer}>
            <Image src={logo} alt="logo" />
          </div>
          <div className={styles.heading}>
            <h1>Start Your Journey With Lawdiary</h1>
            <h2>Description line</h2>
          </div>
          <div className={styles.formContainer}>
            <form>
              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Enter Your Phone Number"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="Enter Your Password"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Your Password"
                  required
                />
              </div>
              <button type="submit" className={styles.signUpBtn}>
                Sign Up
              </button>
            </form>
            <div className={styles.authButtons}>
              <button>
                {/* <GoogleLogin
                clientId={ClientID}
                buttonText="Login With Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              /> */}
                Login With Google
              </button>
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
