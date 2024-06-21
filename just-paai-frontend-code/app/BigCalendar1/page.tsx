"use client"
import {ScheduleComponent, ViewsDirective, ViewDirective, Inject, Day, Week, Month} from "@syncfusion/ej2-react-schedule";
import {registerLicense} from "@syncfusion/ej2-base"
import styles from "./page.module.css"
export default function Page(){

    const data: object [] = [
        {
          Id: 1,
          Subject: 'Meeting - 1',
          StartTime: new Date(2025, 6, 7, 10, 0),
          EndTime: new Date(2025, 6, 7, 12, 30),
          IsAllDay: false
        },
      ];
    return (
        <main className={styles.main}>
            <ScheduleComponent
            width={1200}
            height={600}
            eventSettings={{
                dataSource: data,
            }}>
                <ViewsDirective>
                    <ViewDirective option = "Day" />
                    <ViewDirective option = "Week" />
                    <ViewDirective option = "Month" />
                </ViewsDirective>

                <Inject services={[Day, Week, Month]} />
            </ScheduleComponent>
        </main>
    )
}