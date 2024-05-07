import React  from 'react'
import Menu from './Menu'
import Data from './Data'
import CountDown from './CountDown';
import OtherSchedule from './OtherSchedule';

function App() {
  const [currentDate, setCurrentDate ]= React.useState(new Date().getUTCDate());
  const [selectedMenu, setSelectedMenu] = React.useState(1);

  function changeSelected(id){
    setSelectedMenu(id)
  }

   

  return (
    <div className='p-5 gap-10 '>
      
      <h1 className='font-bold text-3xl text-center mb-10'>Schedule List</h1>

      <Menu selectedMenu={selectedMenu} changeSelected={changeSelected} />  

      <CountDown currentDate={currentDate} data={Data} selectedMenu={selectedMenu}/>

      {/* <OtherSchedule currentDate={currentDate} data={Data}  selectedMenu={selectedMenu}/>
 */}
    </div>
  
  )
}

export default App
