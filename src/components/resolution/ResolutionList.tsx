import React from "react";
import {useSelector} from "react-redux";
import {RootState} from '../../redux/store'
import ResolutionItem from "./ResolutionItem";
import { v4 as uuidv4 } from 'uuid';

export default function ResolutionList(){
    const list=useSelector((state:RootState)=>state.resolution.resolutionList)
    const resolutionId= uuidv4()
    return (
        <div>
          <h1>Resolution List</h1>
            {list.map((item)=>{
               return <ResolutionItem key={resolutionId} item={item} itemId={resolutionId}/>
            })}
        </div>
    )
}
