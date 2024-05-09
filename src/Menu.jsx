import React from "react";

export default function Menu(props){
   //styling the selected and unselected menus
   const selectedMenu = `text-white bg-mainblue font-bold  rounded-lg w-6/12 text-center text-[24px] ` 
   const unSelectedMenu = `text-faintblack rounded-lg w-6/12 text-center text-[24px] ` 

   const menuElements = props.data.schedules.map((val, i) => {
      return <div className={props.selectedMenu == i ? selectedMenu : unSelectedMenu} onClick={()=>props.changeSelected(i)} key={i}>{val.groupName}</div>
   })

    return (
       <div className="  bg-grey rounded-lg w-full md:w-6/12 lg:w-3/12 border-2 border-darkgrey flex flex-row p-3 justify-between">
         {menuElements}
       </div> 
    )
}