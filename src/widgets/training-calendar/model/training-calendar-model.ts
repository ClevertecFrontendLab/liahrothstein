import type { Moment } from "moment";

export function onSelectDay(newDay: Moment, setDay: (newDay: Moment) => void, setSelectedDay: (newDay: Moment) => void) {
    setDay(newDay);
    setSelectedDay(newDay);
};

export function onPanelChangeDay(newDay: Moment, setDay: (newDay: Moment) => void) {
    setDay(newDay);
};