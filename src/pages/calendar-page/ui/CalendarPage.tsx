import { Header, Sidebar, TrainingCalendar } from "@widgets/index";

import './CalendarPage.scss';

export function CalendarPage() {

    return (
        <div className="calendarPage">
            <Sidebar />
            <div className="headerAndMain">
                <Header />
                <main>
                    <TrainingCalendar />
                </main>
            </div>
        </div>
    )
}