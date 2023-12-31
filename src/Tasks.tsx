import React from "react";
import { DataType } from "./App";

type PropsType = {
  data: DataType;
};



export function Tasks(props: PropsType) {
  return (
    <div>
      <h1>{props.data.title}</h1>
     <ul>
        {props.data.tasks.map(task=>{
            return(
                <li>
                    <span>{task.title}</span>
                    <span>{task.taskId}</span>
                    <span>{task.isDone}</span>
                    </li>
            )
        })}
     </ul>
     <ul>
        {props.data.students.map(st=>{
            return(
                <li>{st}</li>
            )
        })}
     </ul>
    </div>
  );
}


//     return (
//         <div>
//             <h1>{props.data.title}</h1>
//             <ul>
//                 {props.data.tasks.map(el => {
//                     return (
//                         <li>
//                             <span>{el.taskId}</span>
//                             <span>{el.title}</span>
//                             <span>{el.isDone}</span>
//                         </li>
//                     )
//                 })}
//             </ul>
//
//             <ul>
//                 {props.data.students.map(el => {
//                     return (
//                         <li>{el}</li>
//                     )
//                 })}
//             </ul>
//         </div>
//     );

