"use client";

import { Inter } from "next/font/google";
import "./globals.scss";
import { useSidebarStore } from "@/store";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const showSidebar = useSidebarStore(({ showSidebar }) => showSidebar);
  const setShowSidebar = useSidebarStore(
    ({ setShowSidebar }) => setShowSidebar
  );
  const routes = [
    {
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      name: "All Cases",
      url: "/allcases",
    },
    {
      name: "Legal Notices",
      url: "/legalnotices",
    },
  ];

  useEffect(() => {
    setShowSidebar(pathname && pathname !== "/" && pathname !== "/onboarding");
  }, [pathname]);
  return (
    <html lang="en">
      <title>Just-Paai</title>
      <body>
        <div id="main_container">
          <main>
            {showSidebar ? (
              <nav className="sidebar">
                <h1>JUSTPAAI</h1>
                <div className="routeHead"></div>
                <ul className="routes">
                  {routes.map((route, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        router.push(route.url);
                      }}
                      className={
                        pathname === route.url ? "route selected" : "route"
                      }
                    >
                      <Image
                        src={`${route.name}.svg`}
                        alt=""
                        width={24}
                        height={24}
                      />
                      {route.name}
                    </li>
                  ))}
                </ul>
              </nav>
            ) : (
              <></>
            )}

            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
