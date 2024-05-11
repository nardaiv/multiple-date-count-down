import React  from 'react'
import Menu from './Menu'
import Data from './Data'
import CountDown from './CountDown';
import OtherSchedule from './OtherSchedule';

function App() {
  const [currentDate, setCurrentDate ]= React.useState(new Date());
  const [selectedMenu, setSelectedMenu] = React.useState(1);

  //add status date to tell which date has already in the past
  const [processedData, setProcessedData]= React.useState(
     Data.schedules.map( (val, i)=> {

      const newData = val.events.map( el => {
        const eventDate = new Date(el.date)

        //check the date by comparing with the currentDate (in ms)
        let eventStatusInPast = eventDate.getTime() < currentDate.getTime() ? true : false;

        return {
          ...el,
          isEventPast : eventStatusInPast 
        }
      }) 

      return {...val, events: newData }
    })
  )
  console.log(processedData)
  const [selectedEventIndex, setSelectedEventIndex] = React.useState(0)

  console.log(selectedEventIndex) 
  React.useEffect(()=>{
    //change the selectedEventIndex so it matches the selectedMenu
    setSelectedEventIndex(()=>{
      let i = null;
      let eventsArr = processedData[selectedMenu].events ;
      for(let j = 0; j<eventsArr.length; j++){
        i = !eventsArr[j].isEventPast ? j : null;
      }
      return i
    })
  }, [selectedMenu])

  function changeSelected(id){
    setSelectedMenu(id)
    if (selectedMenu!= id ) setSelectedEventIndex(0)
  }

  return (
    <div className='p-5 gap-10 flex flex-col justify-center items-center '>
      
      <h1 className='font-bold text-3xl text-center mb-10'>Schedule List</h1>

      <Menu selectedMenu={selectedMenu} data={Data} changeSelected={(a) => changeSelected(a)} />  

      <CountDown currentDate={currentDate} data={processedData} selectedMenu={selectedMenu} selectedEventIndex={selectedEventIndex}/>

      <OtherSchedule currentDate={currentDate} data={processedData}  selectedMenu={selectedMenu} selectedEventIndex={selectedEventIndex}/>

      <p className='text-gray-400'>Built with ❤️ by <a href="https://github.com/nardaiv/" className='underline decoration-mainblue/40 hover:decoration-4'>nardaiv</a></p>
    </div>
  
  )
}

export default App
