import React, {useState} from "react";
import Resolution from "../../types/type";
import {Button} from "@mui/material";

type Prop={
item:Resolution,
    itemId: string
}
export default function ResolutionItem({item,itemId}:Prop){

    /*const handleClick = () => {
        setOpen(true);
    };*/
    return (
        <div>
            <div>Title: {item.title}</div>
            <div>Date: {item.date?.toDate().toLocaleDateString()}</div>
            {/*//as the date type is unknown to react we had to convert is to toString function*/}
            <Button variant="outlined">Delete</Button>
            <Button variant="outlined">Favourite</Button>

        </div>
    )
}
