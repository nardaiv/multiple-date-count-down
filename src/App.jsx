import React  from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Menu from './Menu'
import Data from './Data'
import CountDown from './CountDown';
import OtherSchedule from './OtherSchedule';

function App() {
  const [currentDate, setCurrentDate ]= React.useState(new Date().getUTCDate());
  const [selectedMenu, setSelectedMenu] = React.useState('SNBP');

  function changeSelected(id){
    setSelectedMenu(id)
  }

   

  return (
    <div className='p-5 gap-10 '>
     <h1 className='font-bold text-3xl text-center mb-10'>JADWAL SNPMB 2024</h1>
     <Menu selectedMenu={selectedMenu} changeSelected={changeSelected} />  
     <CountDown currentDate={currentDate} data={Data} selectedMenu={selectedMenu}/>
     <OtherSchedule currentDate={currentDate} data={Data}  selectedMenu={selectedMenu}/>
    </div>
    
  )
}

export default App
