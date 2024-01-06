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
  const [selected, setSelected] = React.useState('SNBP');

  function changeSelected(id){
    setSelected(id)
  }

   

  return (
    <div className='p-5 gap-10 '>
     <h1 className='font-bold text-3xl text-center mb-10'>JADWAL SNPMB 2024</h1>
     <Menu selected={selected} changeSelected={changeSelected} />  
     <CountDown currentDate={currentDate} data={Data}/>
     <OtherSchedule currentDate={currentDate} data={Data} />
    </div>
    
  )
}

export default App
