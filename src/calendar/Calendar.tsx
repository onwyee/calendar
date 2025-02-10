
import { setDate, add, format, startOfMonth, endOfMonth, differenceInDays, sub } from "date-fns";
import Cell from "./Cell.tsx"
const daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri", "Sat"];

interface Props {
    value?: Date;
    onChange?: (value: Date) => void;
}
const Calendar: React.FC<Props> = ({value = new Date(), onChange}) => {
    const startDate=startOfMonth(value);
    const endDate=endOfMonth(value);
    const numDays = differenceInDays(endDate,startDate)+1;
    const prefixDays = startDate.getDay();
    const suffixDays = 6 - endDate.getDay();
    
    const prevMonth = () => onChange && onChange(sub(value, { months: 1}));
    const nextMonth = () => onChange && onChange(add(value, { months: 1}));
    const prevYear = () => onChange && onChange(sub(value, { years: 1}));
    const nextYear = () => onChange && onChange(add(value, { years: 1}));
    

    const handleClickDate = (index: number) => {
        const date = setDate(value, index);
        onChange && onChange(date);
    }

    
    
    return (
    <div className="w-[70vw]">
        <div className="grid grid-cols-7 items-center justify-center text-center">
            <Cell onClick={prevYear}>{"<<"}</Cell>
            <Cell onClick={prevMonth}>{"<"}</Cell>
            <Cell className="col-span-3 text-3xl">{format(value, 'LLLL yyyy')}</Cell>
            <Cell onClick={nextMonth}>{">"}</Cell>
            <Cell onClick={nextYear}>{">>"}</Cell>

            {daysOfWeek.map((day) => (
                <Cell key={day} className="text-3xl font-bold uppercase">{day}</Cell>
            ))}
            
            {Array.from({length: prefixDays}).map((_, index) => {
                const dec = prefixDays - index
                const date = sub(startDate, { days: dec});
                
                const day = date.getDate();

                return (
                    <Cell className= "bg-gray-300" key={index}>{day}</Cell>
                )
            })}
            {Array.from({length: numDays}).map((_, index) => {
                const date = index +1;
                const isCurrentDate = date === value.getDate();
                return (
                    <Cell isActive= {isCurrentDate}
                    onClick={() => handleClickDate(date)} key={date}>{date}</Cell>
                )
            })}
            {Array.from({length:suffixDays}).map((_,index) => {
                

                return (
                    <Cell className= "bg-gray-300" key={index}>{index+1}</Cell>
                )
            })}
        </div>
        {/* <div className="flex justify-between">
            <div className="text-green-700">Green</div>
            <div className="text-green-300">Difference</div>
            <div className="text-red-700">Red 
        </div> */}
         </div>
    );
}
  
  export default Calendar;