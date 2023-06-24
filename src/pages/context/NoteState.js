import {useState, useEffect} from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {


const [loginData, setLoginData] = useState(null);

    useEffect(() => { 
        setLoginData(JSON.parse(localStorage.getItem('loginAuth')));
    //console.log(localStorage.getItem('loginAuth'));
     },[]);
     


    return (
        <NoteContext.Provider  value={loginData}>
         {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;