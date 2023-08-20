'use client'

import { DateRange, Range, RangeKeyDict } from "react-date-range";
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

interface CalendarProps {
    onChange: (value: RangeKeyDict) => void;
    value: Range;
    disabledDates?: Date[]
}

const Calendar = ({ value, disabledDates, onChange }: CalendarProps) => {
  return (
    <DateRange
        rangeColors={["#262626"]}
        ranges={[value]}
        date={new Date()}
        onChange={onChange}
        direction="vertical"
        showDateDisplay={false}
        minDate={new Date()}
        disabledDates={disabledDates}
    />
  )
}

export default Calendar