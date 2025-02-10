import { format } from "date-fns"
import { useState } from "react";
import Calendar from "./calendar/Calendar";

const App = () => {
  const [currentDate,setCurrentDate] = useState(new Date());
  //const [listOpen, setListOpen] = useState<boolean>(false);
  //const [addOpen, setAddOpen ] = useState<boolean>(false);
  
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const handleDateChange = (date: Date) => {
    setCurrentDate(date); // change current date
    //setListOpen(true); //open list when a date is selected
  }
  return <div className="mt-4 flex flex-col items-center">
     <h1 className="text-5xl m-20">Selected Date: {weekDays[currentDate.getDay()]}, {format(currentDate, "dd LLLL, yyyy")}</h1>
    {/* list modal
    <Modal open={listOpen} onClose={()=>setListOpen(false)}>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl m-2">Selected Date: {format(currentDate, "dd LLLL yyyy")}</h1>
        <div className="grid grid-cols-2 justify-between">
          <div>
            <h2 className=" text-lg font-bold">Expenses Items</h2>
            <ul>
              <BudgetItem></BudgetItem>
              <BudgetItem></BudgetItem>
              <BudgetItem></BudgetItem>
              <BudgetItem></BudgetItem>

            </ul>
          </div>
          <div>
          <h2 className="text-lg font-bold">Income Items</h2>
            <ul>
            <BudgetItem></BudgetItem>
            <BudgetItem></BudgetItem>
            <BudgetItem></BudgetItem>
            <BudgetItem></BudgetItem>
            <BudgetItem></BudgetItem>
            <BudgetItem></BudgetItem>

            </ul>
          </div>
        </div>
        <div className="flex flex-roe justify-center">
          <button className="border border-neutral-300 rounded-lg py-1.5 px-10 bg-blue-500 hover:bg-blue-600 text-white" 
          onClick={()=>{
            setAddOpen(true);
            setListOpen(false);
            }}>
          
            Add Expense Or Income
          </button>
        </div>
      </div>
    </Modal>
    {/*Add modal */}
    {/* <Modal open={addOpen} onClose={()=>setAddOpen(false)}>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl m-2">Selected Date: {format(currentDate, "dd LLLL yyyy")}</h1>
        <p>tetssghd</p>
      </div>
    </Modal>  */}
    <Calendar value={currentDate} onChange={handleDateChange}/>
  </div>;
}

export default App;