import React  from 'react'
import Menu from './Menu'
import Data from './Data'
import CountDown from './CountDown';
import OtherSchedule from './OtherSchedule';

function App() {
  const [currentDate, setCurrentDate ]= React.useState(new Date());
  const [selectedMenu, setSelectedMenu] = React.useState(0);

  function changeSelected(id){
    setSelectedMenu(id)
  }

   

  return (
    <div className='p-5 gap-10 flex flex-col justify-center items-center '>
      
      <h1 className='font-bold text-3xl text-center mb-10'>Schedule List</h1>

      <Menu selectedMenu={selectedMenu} data={Data} changeSelected={changeSelected} />  

      <CountDown currentDate={currentDate} data={Data} selectedMenu={selectedMenu}/>

      <OtherSchedule currentDate={currentDate} data={Data}  selectedMenu={selectedMenu}/>

      <p className='text-faintblack'>Built with ❤️ by <a href="https://github.com/nardaiv/" className='underline decoration-mainblue/40'>nardaiv</a></p>
    </div>
  
  )
}

export default App
