"use client";

import { Inter } from "next/font/google";
import "./globals.scss";
import { useSidebarStore } from "../store";
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
  const [openDropDown, setOpenDropDown] = useState(true);
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
  const selectedCase = {
    name: "Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal on 13 January, 1947",
    dropdown: ["DashBoard", "Research", "Invoices", "Legal Notices"],
  };
  useEffect(() => {
    setShowSidebar(pathname && pathname !== "/Landing");
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
                <div className="yourspace">
                  <p className="routeHead">Your Spaces</p>
                  <ul className="routes">
                    {routes.map((route, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          // router.push(route.url); have to uncomment after making the pages
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
                </div>
                
                  <p className="caseHead">Selected Case</p>
                  <div className="selectedCase">
                    <div
                      className="casename"
                      onClick={() => setOpenDropDown((state) => !state)}
                    >
                      <p>{selectedCase.name}</p>
                      <Image
                        src="/downcarrat.svg"
                        alt=""
                        height={20}
                        width={20}
                        style={
                          openDropDown
                            ? {
                                transform: "rotate(180deg)",
                                transition: "transform 0.4s ease",
                              }
                            : undefined
                        }
                      ></Image>
                    </div>
                    {openDropDown && (
                      <ul className="dropDown">
                        {selectedCase.dropdown.map((dd, index) => (
                          <li key={index}>{dd}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                
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
