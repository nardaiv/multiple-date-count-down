import React from "react";

export default function Menu(props){
   const SNBPStyle = `${props.selected == 'SNBP' ? 'text-white bg-mainblue font-bold' : ' text-faintblack '} rounded-lg w-6/12 text-center text-[24px] ` 
   const SNBTStyle = `${props.selected == 'SNBT' ? 'text-white bg-mainblue font-bold' : ' text-faintblack '} rounded-lg w-6/12 text-center text-[24px] ` 

    return (
       <div className="w-100  bg-grey rounded-lg w-12/12 border-2 border-darkgrey flex flex-row p-3 justify-between">
        
        <div className={SNBPStyle} onClick={()=>props.changeSelected('SNBP')}>SNBP</div>

        <div className={SNBTStyle} onClick={()=>props.changeSelected('SNBT')}>SNBT</div>
       </div> 
    )
}