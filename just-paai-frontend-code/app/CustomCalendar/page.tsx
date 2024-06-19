"use client"
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import CustomizedCalendar from "../../components/CustomizedCalendar/CustomizedCalendar"
import "react-big-calendar/lib/css/react-big-calendar.css";
function CustomCalendar() {
  return (
    <main>
    <div style={{ height: "99vh"}} >
      <ChakraProvider>
        <CustomizedCalendar />
      </ChakraProvider>
    </div>
    </main>
  );
}

export default CustomCalendar;