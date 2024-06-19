import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";
import Image from "next/image";
export default function Landing() {
  return (
    <div className={styles.main}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.logo}>
            JustiPAAI
            {/* <Image src="/public/logo.png" alt="Logo" width={50} height={25}/> */}
        </div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/features">Features</Link>
          <Link href="/signup">Sign Up</Link>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Effortless Legal Case Management Right At Your Fingertips</h1>
        <p>AI-Powered</p>
        <p>Stay updated, as we bring to you your AI powered legal companion to make your legal practice a breeze!</p>
        <div className={styles.heroButtons}>
          <Link href="/more"><button>Know More</button></Link>
          <Link href="/signup"><button>Sign Up</button></Link>
        </div>
        <button className={styles.scrollButton}>Scroll</button>
      </section>
      
      {/* Vision Section */}
      <section className={styles.vision}>
        <h2>We at JustiPAAI envision empowering lawyers with seamless and efficient legal case management solutions.</h2>
      </section>
      
      {/* Case Management Section */}
      <div className={styles.adWrapper}>
      <section className={styles.caseManagement}>
        <h2>Manage All Your Legal Cases In One Place</h2>
        <div className={styles.caseItem}>
          {/* <h3>Case Name</h3>
          <p>Client Name</p>
          <p>Status</p>
          <p>Date Started</p> */}
        </div>
        {/* Repeat the case item for each case */}
        <div className={styles.caseItem}>
          {/* <h3>Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal</h3>
          <p>Rajat Payghan</p>
          <p>Active</p>
          <p>23 Dec 2023</p> */}
        </div>
        {/* Add more cases as needed */}
      </section>
      
      {/* AI-Powered Database Section */}
      <section className={styles.aiDatabase}>
        <h2>AI-Powered Case Database and Precedence Notes</h2>
        <div className={styles.caseNote}>
          {/* <h3>Haryana Dairy Dev. Coop. Fed. Ltd vs Jagdish Lal</h3>
          <p>Sections 133, 145 - 23 Dec 2023 - Mumbai High Court</p>
          <p>India's judicial system is facing a crisis of excessive petty litigation...</p> */}
        </div>
        {/* Add more case notes as needed */}
      </section>
      
      {/* Notice Templates Section */}
      <section className={styles.noticeTemplates}>
        <h2>Manage and Send Legal Notices Right In Our App</h2>
        <div className={styles.noticeItem}>
          {/* <h3>Cheque Bounce</h3>
          <p>Notify Client Via Whatsapp: 9833344555</p>
          <p>Notify Client Via Mail: rajat.payghan@gmail.com</p>
          <p>Date: __/__/2019</p>
          <p>To: Name of the party/parties</p>
          <p>Address</p>
          <p>Contact info</p>
          <p>Sub: Legal notice under section 138 of Negotiable Instrument Act for dishonour of cheque.</p>
          <p>Dear Sir/Madam,</p>
          <p>Under instructions and authority from my client M/s. ______ we serve upon you the following legal notice...</p> */}
        </div>
        {/* Add more notice templates as needed */}
      </section>
      
      {/* Invoice Section */}
      <section className={styles.invoices}>
        <h2>Generate Client Invoices</h2>
        <div className={styles.invoiceItem}>
          {/* <h3>Invoice Name</h3>
          <p>Invoice Num: 334256 - 23 Jan 2024</p>
          <p>Item name: 3 Hours @ 3000 Rs/hr - Amount: 9000 Rs</p>
          <p>Net Payable: 45,000 Rs</p>
          <p>Due Date: 04 Jan 2024</p>
          <p>Status: Paid</p>
          <button>Delete Invoice</button>
          <button>Download As PDF</button> */}
        </div>
      </section>
      
      {/* Calendar Section */}
      <section className={styles.calendar}>
        <h2>Schedule Courtroom and Client Events</h2>
        <div className={styles.calendarItem}>
          {/* <h3>October 2020</h3>
          <p>Mo Tu We Th Fr Sa Su</p>
          <p>1 2 3 4</p>
          <p>5 6 7 8 9 10 11</p>
          <p>12 13 14 15 16 17 18</p>
          <p>19 20 21 22 23 24 25</p>
          <p>26 27 28 29 30 31</p> */}
        </div>
        {/* Add events as needed */}
        {/* <div className={styles.eventItem}>
          <p>24 Dec 2023</p>
          <p>Event Name</p>
        </div> */}
        {/* Add more events as needed */}
      </section>
      
      {/* Contact Section */}
      <section className={styles.contact}>
        <h2>Share Your VCard With Your Clients</h2>
        <div className={styles.contactItem}>
          {/* <h3>Name: Rajat Payghan</h3>
          <p>Email: rajat.payghan@gmail.com</p>
          <p>Phone: 9833344555</p>
          <p>Cases Completed: 36</p>
          <p>Highest Qualification: Bachelor of Laws</p>
          <p>About: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p> */}
        </div>
      </section>
      </div>
      
      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>JustiPAAI</div>
          <div>Contact Us At: hello@justipaai.com</div>
          <div>Legal | Privacy Policy | Terms & Conditions</div>
          <div>LinkedIn | PAAI Technologies</div>
        </div>
        <div className={styles.footerBottom}>
          <p>JustiPAAI | PAAI Technologies Ltd. 2024</p>
        </div>
      </footer>
    </div>
  );
}
