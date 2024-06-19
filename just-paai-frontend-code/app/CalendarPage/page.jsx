// pages/calendar.js
"use client"
import Head from 'next/head';
import MyCalendar from '../../components/Calendar';

const CalendarPage = () => {
    return (
      <>
        <Head>
          <title>Calendar Page</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          />
        </Head>
        <div style={{ padding: '20px' }}>
          <h1>My Calendar</h1>
          <MyCalendar />
        </div>
      </>
    );
  };

export default CalendarPage;
