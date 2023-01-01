import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs, {Dayjs} from "dayjs";
import { useDispatch } from "react-redux";
import Resolution from "../../types/type";
import { resolutionActions } from "../../redux/slice/resolution";
import Snackbar from '@mui/material/Snackbar';
import Alert from "@mui/material/Alert";





export default function ResolutionForm(){
    //we need to get the data of text field and date from date picker as userInput

    // userInput: {}
    const [userInput,setUserInput]= useState<Resolution>({
        title:'' ,
        date:dayjs(Date.now())  /*syntax to generate current date*/
    })

    //get data from the form: use spread operator to update the userInput
    //for text field
    function handleTitleValue (event: React.ChangeEvent<HTMLInputElement>){
setUserInput({...userInput,title: event.target.value})
        /*this spread operator means we are copying user input and only changing title*/
    }
//for date
    function handleDateValue (newValue: Dayjs | null){
        /*we got the newValue from material ui*/
        setUserInput({...userInput,date: newValue })
    }
 //dispatch the addResolution action
    const dispatch= useDispatch()
    function submitResolution(){
         dispatch(resolutionActions.addResolution(userInput))
        handleClick();
        setUserInput({...userInput, title:""});
    }
//add button message
    const [open, setOpen] =useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
        <div>
            <h1>Resolution Form</h1>
            <TextField
                id="standard-basic"
                label="Type a resolution"
                variant="standard"
                onChange={handleTitleValue}
                value={userInput.title}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={userInput.date}
                onChange={handleDateValue}
                /*renderInput={(params) => <TextField {...params} />}*/
                renderInput={(inputProps) => ( <TextField {...inputProps} required/>)}
            />
            </LocalizationProvider>
            <Button variant="outlined" onClick={submitResolution}>Add</Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Resolution successfully added!
                </Alert>
            </Snackbar>
        </div>
    )
}



